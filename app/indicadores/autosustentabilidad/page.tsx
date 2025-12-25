import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ComportamientoContent } from "@/components/comportamiento-content"

export const metadata: Metadata = {
  title: "Comportamiento Proambiental",
  description:
    "Análisis detallado de factores que inciden en el comportamiento proambiental en la gestión de desechos sólidos domiciliarios del cantón Daule. Indicadores de autosustentabilidad y cultura ambiental.",
  keywords: [
    "comportamiento proambiental",
    "autosustentabilidad",
    "gestión de desechos",
    "cultura ambiental",
    "Daule Ecuador",
  ],
  openGraph: {
    title: "Comportamiento Proambiental - Cantón Daule",
    description: "Análisis de factores que inciden en el comportamiento proambiental en la gestión de desechos sólidos",
  },
}

export default async function AutosustentabilidadPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container-safe py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary-text mb-2">
            Autosustentabilidad y Comportamiento Proambiental
          </h1>
          <p className="text-secondary-text">
            Análisis de factores que inciden en el comportamiento proambiental en la gestión de desechos sólidos
            domiciliarios
          </p>
        </div>

        <ComportamientoContent />
      </main>
      <Footer />
    </div>
  )
}
