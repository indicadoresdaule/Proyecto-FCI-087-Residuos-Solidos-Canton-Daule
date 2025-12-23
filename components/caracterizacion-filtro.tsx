"use client"

import { useState, useEffect } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import type { CaracterizacionRecord } from "@/lib/utils/caracterizacion-data"

interface CaracterizacionFiltroProps {
  registros: CaracterizacionRecord[]
  onFiltroChange: (registrosFiltrados: CaracterizacionRecord[]) => void
}

export function CaracterizacionFiltro({ registros, onFiltroChange }: CaracterizacionFiltroProps) {
  const [lugares, setLugares] = useState<string[]>([])
  const [lugarSeleccionado, setLugarSeleccionado] = useState<string>("todos")

  useEffect(() => {
    const lugaresUnicos = Array.from(new Set(registros.map((r) => r.lugar))).sort()
    setLugares(lugaresUnicos)
  }, [registros])

  useEffect(() => {
    if (lugarSeleccionado === "todos") {
      onFiltroChange(registros)
    } else {
      onFiltroChange(registros.filter((r) => r.lugar === lugarSeleccionado))
    }
  }, [lugarSeleccionado, registros, onFiltroChange])

  return (
    <Card className="p-6 border border-border bg-white">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Filtros de Visualización</h3>
          <p className="text-sm text-secondary-text">Selecciona una ubicación para filtrar los datos</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="lugar-select" className="text-sm font-semibold text-foreground">
            Ubicación
          </Label>
          <Select value={lugarSeleccionado} onValueChange={setLugarSeleccionado}>
            <SelectTrigger
              id="lugar-select"
              className="w-full bg-white border-2 border-border hover:border-primary transition-colors"
            >
              <SelectValue placeholder="Selecciona una ubicación" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="todos">
                <span className="font-medium">Todas las ubicaciones</span>
                <span className="text-secondary-text ml-2">({registros.length} registros)</span>
              </SelectItem>
              {lugares.map((lugar) => {
                const count = registros.filter((r) => r.lugar === lugar).length
                return (
                  <SelectItem key={lugar} value={lugar}>
                    <span className="font-medium">{lugar}</span>
                    <span className="text-secondary-text ml-2">({count})</span>
                  </SelectItem>
                )
              })}
            </SelectContent>
          </Select>
        </div>
      </div>
    </Card>
  )
}
