import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ComportamientoContent } from "@/components/comportamiento-content"

export default async function AutosustentabilidadPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="flex-grow w-full py-10 sm:py-12 md:py-16">
        <div className="container-safe">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-text mb-2">
              Autosustentabilidad y Comportamiento Proambiental
            </h1>
            <p className="text-secondary-text text-sm sm:text-base">
              Análisis de factores que inciden en el comportamiento proambiental en la gestión de desechos sólidos
              domiciliarios
            </p>
          </div>

          <ComportamientoContent />
        </div>
      </main>
      <Footer />
    </div>
  )
}
