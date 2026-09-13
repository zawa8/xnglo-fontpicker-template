import ContentViewer from '@/components/ContentViewer';

export default function ChapterPage({
  params,
}: {
  params: { class: string; subject: string; chapter: string };
}) {
  return (
    <ContentViewer
      classId={params.class}
      subjectId={params.subject}
      chapterId={params.chapter}
    />
  );
}
