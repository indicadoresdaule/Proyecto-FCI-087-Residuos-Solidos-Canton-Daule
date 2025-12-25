import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://residuosdaule.vercel.app"),
  title: {
    default: "Gestión de Residuos Sólidos - Cantón Daule | GAD Municipal",
    template: "%s | Gestión de Residuos - Cantón Daule",
  },
  description:
    "Plataforma oficial del GAD Cantón Daule para el monitoreo, reporte y gestión transparente de residuos sólidos. Consulta indicadores ambientales, participa en encuestas y conoce nuestros avances en sostenibilidad.",
  generator: "v0.app",
  applicationName: "Gestión de Residuos Sólidos Daule",
  keywords: [
    "residuos sólidos",
    "gestión ambiental",
    "Daule",
    "Ecuador",
    "ecología",
    "sostenibilidad",
    "GAD Daule",
    "medio ambiente",
    "reciclaje",
    "caracterización de desechos",
    "comportamiento proambiental",
    "indicadores ambientales",
    "autosustentabilidad",
  ],
  authors: [{ name: "GAD Municipal del Cantón Daule" }],
  creator: "Universidad de Guayaquil - Facultad de Ingeniería Industrial",
  publisher: "GAD Cantón Daule",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://residuosdaule.vercel.app",
    siteName: "Gestión de Residuos Sólidos - Cantón Daule",
    title: "Gestión de Residuos Sólidos - Cantón Daule",
    description:
      "Plataforma oficial para el monitoreo y gestión de residuos sólidos en el cantón Daule, Ecuador. Indicadores, reportes y participación ciudadana.",
    images: [
      {
        url: "/images/ingenieria-20-282-29.jpeg",
        width: 1200,
        height: 630,
        alt: "Gestión de Residuos Sólidos Cantón Daule",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gestión de Residuos Sólidos - Cantón Daule",
    description: "Plataforma oficial para el monitoreo y gestión de residuos sólidos en el cantón Daule, Ecuador.",
    images: ["/images/ingenieria-20-282-29.jpeg"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Agrega aquí tu código de verificación de Google Search Console cuando lo tengas
    // google: 'tu-codigo-de-verificacion',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${geist.className} antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
