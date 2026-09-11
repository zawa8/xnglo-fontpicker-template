// components/hsciifp/MicButton.tsx
'use client';

import { useState, useRef } from 'react';
import { hsciistr } from '@hscii/htrlib';

export default function MicButton() {
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef<any>(null);

  const startVoiceInput = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert('Speech recognition not supported in this browser');
      return;
    }

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;

    recognition.lang = 'hi-IN';
    recognition.continuous = false;      // Auto-stop on silence
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);

    recognition.onresult = async (event: any) => {
      const devanagariText = event.results[0][0].transcript;

      // Devanagari → xi38 using htrlib
      try {
        const converter = new hsciistr();
        converter.set_input(devanagariText);
        converter.set_phrom('u10');
        converter.set_tu('xi38');
        await converter.duztr();
        const xi38Text = converter.output.xi38;

        const textarea = document.getElementById('mic-test-input') as
          | HTMLTextAreaElement
          | null;

        if (textarea) {
          textarea.value += xi38Text;
          textarea.dispatchEvent(new Event('input', { bubbles: true }));
        }
      } catch (error) {
        console.error('Conversion error:', error);
      }
    };

    recognition.onerror = (event: any) => {
      setListening(false);
      // Ignore 'no-speech' error (user was silent)
      if (event.error !== 'no-speech' && event.error !== 'aborted') {
        console.error('Speech error:', event.error);
      }
    };

    recognition.start();
  };

  const stopVoiceInput = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {
        // Already stopped
      }
      recognitionRef.current = null;
    }
    setListening(false);
  };

  const handleClick = () => {
    if (listening) {
      stopVoiceInput();  // Manual stop
    } else {
      startVoiceInput(); // Start (auto-stop on silence)
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`p-2 rounded-md text-white transition-all ${
        listening
          ? 'bg-red-500 animate-pulse'
          : 'bg-blue-500 hover:bg-blue-600'
      }`}
      title={listening ? 'Bol raha hai... (click to stop)' : 'Start listening'}
    >
      {listening ? '⏹ Stop' : '🎤'}
    </button>
  );
}