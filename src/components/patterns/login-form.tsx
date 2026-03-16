import * as React from "react"
import { cn } from "../../lib/utils"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

export interface LoginFormProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSubmit'> {
  /** Título do formulário */
  title?: string
  /** Descrição abaixo do título */
  description?: string
  /** Texto do botão de submit */
  submitLabel?: string
  /** Texto do link de esqueci a senha */
  forgotPasswordLabel?: string
  /** Callback ao submeter o formulário */
  onSubmit?: (data: { email: string; password: string }) => void
  /** Callback ao clicar em "Esqueci minha senha" */
  onForgotPassword?: () => void
  /** Estado de loading */
  loading?: boolean
  /** Mensagem de erro geral */
  error?: string
}

const LoginForm = React.forwardRef<HTMLDivElement, LoginFormProps>(
  function LoginForm(
    {
      className,
      title = "Login",
      description = "Entre com suas credenciais para acessar sua conta.",
      submitLabel = "Entrar",
      forgotPasswordLabel = "Esqueceu sua senha?",
      onSubmit,
      onForgotPassword,
      loading = false,
      error,
      ...props
    },
    ref
  ) {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    function handleSubmit(e: React.FormEvent) {
      e.preventDefault()
      onSubmit?.({ email, password })
    }

    return (
      <Card ref={ref} className={cn("w-full max-w-sm", className)} {...props}>
        <CardHeader>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {error && (
              <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                {error}
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="login-email">Email</Label>
              <Input
                id="login-email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="login-password">Senha</Label>
                {onForgotPassword && (
                  <button
                    type="button"
                    onClick={onForgotPassword}
                    className="text-sm text-primary underline-offset-4 hover:underline"
                  >
                    {forgotPasswordLabel}
                  </button>
                )}
              </div>
              <Input
                id="login-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                disabled={loading}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Entrando..." : submitLabel}
            </Button>
          </CardFooter>
        </form>
      </Card>
    )
  }
)

export { LoginForm }
