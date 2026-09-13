'use client';
import { getChapters } from '@/data/getChapters';

export default function ContentViewer({
  classId,
  subjectId,
  chapterId,
}: {
  classId: string;
  subjectId: string;
  chapterId: string;
}) {
  const chapters = getChapters(classId, subjectId);
  const chapter = chapters.find((c) => c.id === parseInt(chapterId));
  
  if (!chapter) {
    return <p className="p-4 text-gray-500">Chapter not found.</p>;
  }
  
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{chapter.name}</h1>
      <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded-xl border">
        {chapter.content}
      </pre>
    </div>
  );
}
