import { CHAPTERS as kilas9Kompyutr } from './chapters/kilas9/kompyutr';
import { CHAPTERS as kilasYPyThon } from './chapters/kilasY/pyThon';
import { CHAPTERS as kilasYDBMS } from './chapters/kilasY/dbms';
import { CHAPTERS as kilasYAI } from './chapters/kilasY/ai';

export function getChapters(classId: string, subjectId: string) {
  const key = `${classId}-${subjectId}`;
  
  switch (key) {
    case 'kilas9-Kompyutr':
      return kilas9Kompyutr;
    case 'kilasY-PyThon':
      return kilasYPyThon;
    case 'kilasY-DBMS':
      return kilasYDBMS;
    case 'kilasY-AI':
      return kilasYAI;
    default:
      return [];
  }
}
