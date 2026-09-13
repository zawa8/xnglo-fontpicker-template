'use client';
import Link from 'next/link';
import { getChapters } from '@/data/getChapters';

export default function ChapterList({
  classId,
  subjectId,
}: {
  classId: string;
  subjectId: string;
}) {
  const chapters = getChapters(classId, subjectId);
  
  if (chapters.length === 0) {
    return <p className="p-4 text-gray-500">No chapters yet.</p>;
  }
  
  return (
    <div className="p-4 space-y-3">
      {chapters.map((c) => (
        <Link
          key={c.id}
          href={`/kilas/${classId}/${subjectId}/${c.id}`}
          className="block p-4 border rounded-xl shadow hover:shadow-lg transition bg-white"
        >
          <span className="font-bold">Chaptr {c.id}:</span> {c.name}
        </Link>
      ))}
    </div>
  );
}
