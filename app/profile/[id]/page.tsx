
export default function Page({ params }: { params: { id: string } }) {
  return <p>User Profile for: {params.id}</p>;
}