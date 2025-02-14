interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}
const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const awaitedParams = await params;
  const documentId = awaitedParams.documentId;
  return <div>DocumentId: {documentId}</div>;
};

export default DocumentIdPage;
