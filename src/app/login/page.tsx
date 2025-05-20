import { LoginForm } from "@/components/login-form"
//Componente ShadCN

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
         <div className="flex flex-col gap-4 p-6 md:p-10  bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="https://nintenduo.com/wp-content/uploads/2024/05/Desmentido-Smash-Bros-Ultimate-1080x1080.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
