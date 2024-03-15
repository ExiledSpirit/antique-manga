interface Params {
  ano: string
  mes: string
  dia: string
}

export default function PostsPorData({
  params
}: {params: Params}) {
  const { ano, mes, dia } = params
  return (
    <div>
      <p>ano {ano}</p>
      <p>mês {mes}</p>
      <p>dia {dia}</p>
    </div>
  )
}
