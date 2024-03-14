export default function PostsPorData({
  params
}: {params: { data: string }}) {
  return (
    <div>
      {params.data}
    </div>
  )
}

export async function generateStaticParams() {
  const rotas = [{data: '1'}, {data: '2'}, {data: '3'}]
 
  console.log(rotas);

  return rotas.map((rota) => ({
    slug: rota.data,
  }))
}
