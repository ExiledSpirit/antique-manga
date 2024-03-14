export default function PostsPorDataETitulo({
  params
}: {params: { data: string, titulo: string }}) {
  return (
    <div>
      {params.data}
      {params.titulo}
    </div>
  )
}
