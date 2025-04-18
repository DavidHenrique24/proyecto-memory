"use client"; //Esto lo pongo por que me lo pide next 
import { createContext, useContext, useState, ReactNode } from "react"

// Contexto para el contador global
const ContadorContext = createContext({
  contadorGlobal: 0,          
  incrementarGlobal: () => {}, // Función vacia por defecto
})

// Hook personalizado para acceder facil al contexto
export function useContadorGlobal() {
  return useContext(ContadorContext)
}

// Componente proveedor que envuelve los componentes que se pone en layaou
export function ContadorProvider({ children }: { children: ReactNode }) {
  const [contadorGlobal, setContadorGlobal] = useState(0) // Creamos estado para el contador global

  // Función que incrementa el contador en 1
  const incrementarGlobal = () => {
    setContadorGlobal((prev) => prev + 1)
  }

  return (
    // Proveemos el valor del contador y la función para incrementarlo
    <ContadorContext.Provider value={{ contadorGlobal, incrementarGlobal }}>
      {children} 
    </ContadorContext.Provider>
  )
}

// Componente que muestra el total 
export function TotalClicks() {
  const { contadorGlobal } = useContadorGlobal(); 

  return (
    <p className="bg-gray-700 text-white font-bold text-2xl w-18 h-10 flex justify-center items-center rounded-md mx-auto">{contadorGlobal}</p>
  );
}
