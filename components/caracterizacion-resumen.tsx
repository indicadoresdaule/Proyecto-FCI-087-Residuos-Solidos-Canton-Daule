import { Card } from "@/components/ui/card"

interface CaracterizacionResumenProps {
  totalEncuestas: number
  totalUbicaciones: number
  totalDesechos: number
  promedioPorEncuesta: number
}

export function CaracterizacionResumen({
  totalEncuestas,
  totalUbicaciones,
  totalDesechos,
  promedioPorEncuesta,
}: CaracterizacionResumenProps) {
  /* Removidos emojis/iconos para diseño más profesional */
  const metricas = [
    {
      label: "Total de Encuestas",
      valor: totalEncuestas.toLocaleString(),
      color: "from-primary to-primary-light",
    },
    {
      label: "Total de Ubicaciones",
      valor: totalUbicaciones.toLocaleString(),
      color: "from-accent to-accent-light",
    },
    {
      label: "Total de Desechos",
      valor: `${totalDesechos.toFixed(2)} kg`,
      color: "from-secondary-light to-secondary",
    },
    {
      label: "Promedio por Encuesta",
      valor: `${promedioPorEncuesta.toFixed(2)} kg`,
      color: "from-tertiary-light to-tertiary",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metricas.map((metrica) => (
        <Card
          key={metrica.label}
          className={`p-6 border border-border bg-gradient-to-br ${metrica.color} bg-opacity-5 hover:shadow-lg transition-all`}
        >
          <div className="flex flex-col">
            <p className="text-sm font-medium text-secondary-text mb-2">{metrica.label}</p>
            <p className="text-3xl font-bold text-primary-text">{metrica.valor}</p>
          </div>
        </Card>
      ))}
    </div>
  )
}
