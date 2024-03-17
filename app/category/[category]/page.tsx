export default function Category({
  params
}: {params: {category: string}}) {
  return (
    <main className="bg-white w-full h-screen">
      <h1>{params.category}</h1>
    </main>
  );
}
