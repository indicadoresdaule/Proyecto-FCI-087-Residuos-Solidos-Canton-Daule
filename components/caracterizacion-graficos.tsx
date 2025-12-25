"use client"

import { useState } from "react"
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface GraficosProps {
  datos: { name: string; value: number; porcentaje: number }[]
}

const COLORS = [
  { bg: "rgba(16, 185, 129, 0.7)", border: "rgb(16, 185, 129)" }, // Verde bosque
  { bg: "rgba(5, 150, 105, 0.7)", border: "rgb(5, 150, 105)" }, // Verde oscuro
  { bg: "rgba(20, 184, 166, 0.7)", border: "rgb(20, 184, 166)" }, // Teal
  { bg: "rgba(13, 148, 136, 0.7)", border: "rgb(13, 148, 136)" }, // Teal oscuro
  { bg: "rgba(6, 182, 212, 0.7)", border: "rgb(6, 182, 212)" }, // Cyan
  { bg: "rgba(8, 145, 178, 0.7)", border: "rgb(8, 145, 178)" }, // Cyan oscuro
  { bg: "rgba(14, 165, 233, 0.7)", border: "rgb(14, 165, 233)" }, // Azul claro
  { bg: "rgba(2, 132, 199, 0.7)", border: "rgb(2, 132, 199)" }, // Azul
  { bg: "rgba(59, 130, 246, 0.7)", border: "rgb(59, 130, 246)" }, // Azul royal
  { bg: "rgba(37, 99, 235, 0.7)", border: "rgb(37, 99, 235)" }, // Azul intenso
  { bg: "rgba(99, 102, 241, 0.7)", border: "rgb(99, 102, 241)" }, // Índigo
  { bg: "rgba(79, 70, 229, 0.7)", border: "rgb(79, 70, 229)" }, // Índigo oscuro
  { bg: "rgba(139, 92, 246, 0.7)", border: "rgb(139, 92, 246)" }, // Púrpura
  { bg: "rgba(124, 58, 237, 0.7)", border: "rgb(124, 58, 237)" }, // Púrpura oscuro
  { bg: "rgba(168, 85, 247, 0.7)", border: "rgb(168, 85, 247)" }, // Púrpura claro
]

const SOLID_COLORS = [
  "rgb(16, 185, 129)",
  "rgb(5, 150, 105)",
  "rgb(20, 184, 166)",
  "rgb(13, 148, 136)",
  "rgb(6, 182, 212)",
  "rgb(8, 145, 178)",
  "rgb(14, 165, 233)",
  "rgb(2, 132, 199)",
  "rgb(59, 130, 246)",
  "rgb(37, 99, 235)",
  "rgb(99, 102, 241)",
  "rgb(79, 70, 229)",
  "rgb(139, 92, 246)",
  "rgb(124, 58, 237)",
  "rgb(168, 85, 247)",
]

/* Función para calcular el ancho de etiqueta del eje Y dinámicamente */
const calculateYAxisWidth = (datos: any[]) => {
  const maxValue = Math.max(...datos.map((d) => d.value))
  const maxDigits = maxValue.toFixed(0).length
  return Math.max(50, maxDigits * 8 + 20)
}

export function CaracterizacionGraficos({ datos }: GraficosProps) {
  const [tipoGrafico, setTipoGrafico] = useState<string>("barras")

  const yAxisWidth = calculateYAxisWidth(datos)
  const barChartMargin = { top: 30, right: 30, left: yAxisWidth, bottom: 100 }
  const lineChartMargin = { top: 30, right: 30, left: yAxisWidth + 80, bottom: 100 }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4">
          <p className="font-semibold text-gray-900 mb-2">{label}</p>
          <p className="text-sm text-gray-700">
            <span className="font-medium">Cantidad:</span> {payload[0].value.toFixed(2)} kg
          </p>
          <p className="text-sm text-primary font-semibold">
            <span className="font-medium">Porcentaje:</span> {payload[0].payload.porcentaje.toFixed(1)}%
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <Card className="p-6 border border-border shadow-md">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-6">Distribución de Desechos por Categoría</h3>

        <Tabs value={tipoGrafico} onValueChange={setTipoGrafico} className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="barras">Gráfico de Barras</TabsTrigger>
            <TabsTrigger value="torta">Gráfico Circular</TabsTrigger>
            <TabsTrigger value="lineal">Gráfico de Línea</TabsTrigger>
          </TabsList>

          <TabsContent value="barras" className="mt-6">
            <div style={{ width: "100%", height: "500px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={datos} margin={barChartMargin}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="name"
                    angle={-45}
                    textAnchor="end"
                    height={120}
                    fontSize={12}
                    tick={{ fill: "#4b5563" }}
                  />
                  <YAxis fontSize={12} tick={{ fill: "#4b5563" }} width={yAxisWidth} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ paddingTop: "20px" }} formatter={() => "Cantidad (kg)"} />
                  <Bar
                    dataKey="value"
                    label={(props: any) => {
                      const { x, y, width, index } = props
                      const porcentaje = datos[index]?.porcentaje ?? 0
                      return (
                        <text
                          x={x + width / 2}
                          y={y - 8}
                          fill="#1f2937"
                          textAnchor="middle"
                          fontSize={12}
                          fontWeight="bold"
                        >
                          {`${porcentaje.toFixed(1)}%`}
                        </text>
                      )
                    }}
                    radius={[6, 6, 0, 0]}
                  >
                    {datos.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={SOLID_COLORS[index % SOLID_COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="torta" className="mt-6">
            <div
              style={{
                width: "100%",
                height: "600px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <Pie
                    data={datos}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={(entry: any) => {
                      const porcentaje = entry.porcentaje ?? 0
                      if (porcentaje < 2) return ""
                      return `${porcentaje.toFixed(1)}%`
                    }}
                    outerRadius={160}
                    innerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    paddingAngle={2}
                  >
                    {datos.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={SOLID_COLORS[index % SOLID_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend
                    verticalAlign="bottom"
                    height={36}
                    wrapperStyle={{ paddingTop: "20px", fontSize: "12px" }}
                    formatter={(value, entry: any) => {
                      const porcentaje = entry.payload?.porcentaje ?? 0
                      return `${value} (${porcentaje.toFixed(1)}%)`
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="lineal" className="mt-6">
            <div style={{ width: "100%", height: "500px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={datos} margin={lineChartMargin}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="name"
                    angle={-45}
                    textAnchor="end"
                    height={120}
                    fontSize={12}
                    tick={{ fill: "#4b5563" }}
                  />
                  <YAxis fontSize={12} tick={{ fill: "#4b5563" }} width={yAxisWidth} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ paddingTop: "20px" }} formatter={() => "Cantidad (kg)"} />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#0ea5e9"
                    dot={(props: any) => {
                      const { cx, cy, payload, index } = props
                      const pointColor = SOLID_COLORS[index % SOLID_COLORS.length]
                      return (
                        <g key={`dot-${payload.name}`}>
                          <circle cx={cx} cy={cy} r={6} fill={pointColor} stroke="white" strokeWidth={2} />
                          <text x={cx} y={cy - 28} textAnchor="middle" fontSize={11} fontWeight="600" fill="#1f2937">
                            {`${payload.porcentaje.toFixed(1)}%`}
                          </text>
                        </g>
                      )
                    }}
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Card>
  )
}
