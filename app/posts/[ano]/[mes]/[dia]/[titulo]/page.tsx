interface Params {
  ano: string
  mes: string
  dia: string
  titulo: string
}

export default function PostsPorData({
  params
}: {params: Params}) {
  const { ano, mes, dia, titulo } = params
  return (
    <div>
      <p>ano {ano}</p>
      <p>mês {mes}</p>
      <p>dia {dia}</p>
      <p>titulo {titulo}</p>
    </div>
  )
}
