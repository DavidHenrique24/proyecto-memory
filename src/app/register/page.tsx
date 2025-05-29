import { RegisterForm } from "@/components/register-form" // Asegúrate que el componente esté en esta ruta



export default function RegisterPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center px-4">

      <img
        src="https://gocdkeys.es/assets/thumbnails/super-smash-bros-ultimate-nintendo-switch-2.webp"
        alt="Fondo registro"
        className="absolute inset-0 h-full w-full object-cover brightness-50 -z-10"
      />
      <div className="max-w-md w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 bg-opacity-90 p-8 rounded-2xl shadow-lg text-white">
        <RegisterForm />
      </div>
      
    </main>
  )
}
