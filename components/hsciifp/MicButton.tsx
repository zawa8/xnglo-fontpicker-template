// components/hsciifp/MicButton.tsx
'use client';

import { useState } from 'react';
import { hsciistr } from '@hscii/htrlib';

export default function MicButton() {
  const [listening, setListening] = useState(false);

  const startVoiceInput = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert('Speech recognition not supported in this browser');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'hi-IN';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);

    recognition.onresult = async (event: any) => {
      const devanagariText = event.results[0][0].transcript;

      // Devanagari → xi38 conversion using htrlib
      const converter = new hsciistr();
      converter.set_input(devanagariText);
      converter.set_phrom('u10');
      converter.set_tu('xi38');
      await converter.duztr();
      const xi38Text = converter.output.xi38;

      // Target textarea by ID
      const textarea = document.getElementById('mic-test-input') as
        | HTMLTextAreaElement
        | null;

      if (textarea) {
        textarea.value += xi38Text;
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
      } else {
        navigator.clipboard.writeText(xi38Text);
        alert('Copied: ' + xi38Text);
      }
    };

    recognition.onerror = (event: any) => {
      setListening(false);
      alert('Error: ' + event.error);
    };

    recognition.start();
  };

  return (
    <button
      onClick={startVoiceInput}
      className={`p-2 rounded-md text-white ${
        listening ? 'bg-red-500' : 'bg-blue-500'
      }`}
      title="spiic tu xi38"
    >
      🎤
    </button>
  );
}