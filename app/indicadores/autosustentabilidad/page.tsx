import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { createClient } from "@/lib/supabase/server"

export default async function AutosustentabilidadPage() {
  const supabase = await createClient()

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

        <div className="bg-secondary-bg rounded-lg border border-border p-8 text-center">
          <p className="text-secondary-text">Los datos y gráficos de esta encuesta estarán disponibles pronto.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
