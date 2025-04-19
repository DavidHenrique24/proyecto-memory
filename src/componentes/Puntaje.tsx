"use client"; // Esto lo pongo porque me lo pide Next

import { createContext, useContext, useState, ReactNode } from "react"

// Contexto para el puntaje global
const PuntajeContext = createContext({
  puntaje: 0,
  incrementarPuntaje: () => {}, // Función vacia
})

//Para acceder fácil al contexto
export function usePuntajeGlobal() {
  return useContext(PuntajeContext)
}

// Componente proveedor que envuelve los componentes (se pone en layout)
export function ProveedorPuntaje({ children }: { children: ReactNode }) {
  const [puntaje, setPuntaje] = useState(0) // Estado para el puntaje

  // Función para aumentar el puntaje
  const incrementarPuntaje = () => {
    setPuntaje((prev) => prev + 10)
  }

  return (
    <PuntajeContext.Provider value={{ puntaje, incrementarPuntaje }}>
      {children}
    </PuntajeContext.Provider>
  )
}

// Componente que muestra el puntaje total bonito
export function PuntajeTotal() {
  const { puntaje } = usePuntajeGlobal()

  return (
    <p className="bg-gray-700 text-white font-bold text-2xl w-18 h-10 flex justify-center items-center rounded-md mx-auto">{puntaje}</p>
  )
}
