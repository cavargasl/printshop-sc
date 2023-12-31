import { Shell } from "@/components/Shell"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import { auth } from "@clerk/nextjs"
import Link from "next/link"
import { redirect } from "next/navigation"
import { OAuthSignIn } from "../components/auth/OAuthSignIn"
import { SignUpForm } from "./components/SignUpForm"

export default async function SingUpPage() {
  const { userId } = auth()
  if (userId) return redirect("/")

  return (
    <Shell variant={"centered"}>
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Registrarse</CardTitle>
          <CardDescription>
            Selecciona un metodo para registrarse
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <OAuthSignIn />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                O continua con
              </span>
            </div>
          </div>
          <SignUpForm />
        </CardContent>
        <CardFooter className="grid gap-4">
          <div className="text-sm text-muted-foreground">
            ¿Ya tienes una cuenta?{" "}
            <Link
              aria-label="Acceder"
              href="/sign-in"
              className="text-primary underline-offset-4 transition-colors hover:underline"
            >
              Acceder
            </Link>
          </div>
        </CardFooter>
      </Card>
    </Shell>
  )
}
