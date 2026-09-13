import SubjectSelector from '@/components/SubjectSelector';

export default function ClassPage({ params }: { params: { class: string } }) {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        {params.class.toUpperCase()}
      </h1>
      <SubjectSelector classId={params.class} />
    </div>
  );
}
