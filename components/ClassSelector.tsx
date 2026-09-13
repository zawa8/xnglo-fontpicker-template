'use client';
import { CLASSES } from '@/data/classes';
import Link from 'next/link';

export default function ClassSelector() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {CLASSES.map((c) => (
        <Link
          key={c.id}
          href={`/kilas/${c.id}`}
          className="p-6 border rounded-xl shadow hover:shadow-lg transition text-center bg-white"
        >
          <h2 className="text-2xl font-bold">{c.name}</h2>
        </Link>
      ))}
    </div>
  );
}
