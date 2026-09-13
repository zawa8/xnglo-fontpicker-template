'use client';
import { SUBJECTS } from '@/data/subjects';
import Link from 'next/link';

export default function SubjectSelector({ classId }: { classId: string }) {
  const subjects = SUBJECTS[classId] || [];
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {subjects.map((s) => (
        <Link
          key={s}
          href={`/kilas/${classId}/${s}`}
          className="p-6 border rounded-xl shadow hover:shadow-lg transition text-center bg-white"
        >
          <h3 className="text-xl font-bold">{s}</h3>
        </Link>
      ))}
    </div>
  );
}
