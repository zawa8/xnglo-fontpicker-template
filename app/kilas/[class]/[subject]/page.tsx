import ChapterList from '@/components/ChapterList';

export default function SubjectPage({
  params,
}: {
  params: { class: string; subject: string };
}) {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        {params.subject}
      </h1>
      <ChapterList classId={params.class} subjectId={params.subject} />
    </div>
  );
}
