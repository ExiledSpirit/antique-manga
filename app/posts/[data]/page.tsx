export default function PostsPorData({
  params
}: {params: { data: string }}) {
  return (
    <div>
      {params.data}
    </div>
  )
}
