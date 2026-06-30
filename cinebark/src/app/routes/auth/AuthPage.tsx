import { type FormEvent, useState } from 'react'
import { Box, Card, CardContent, Divider, Typography } from '@mui/material'
import { Button, Input } from '@/components'
import * as S from './AuthPage.styles'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('login', { email, password })
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <Box>
        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          Entrar
        </Typography>
        <Typography variant="body2">
          Acesse com sua conta para continuar.
        </Typography>
      </Box>

      <Input
        fullWidth
        required
        type="email"
        label="E-mail"
        name="login-email"
        placeholder="admin@cinebark.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <Input
        fullWidth
        required
        type="password"
        label="Senha"
        name="login-password"
        placeholder="Digite sua senha"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <S.FormActions>
        <Typography variant="body2">Recuperar senha</Typography>
        <Button type="submit" variant="contained">
          Entrar
        </Button>
      </S.FormActions>
    </S.Form>
  )
}

function RegisterForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('register', { name, email, password })
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <Box>
        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          Registro
        </Typography>
        <Typography variant="body2">
          Crie uma conta de usuario para acessar a plataforma.
        </Typography>
      </Box>

      <Input
        fullWidth
        required
        label="Nome"
        name="register-name"
        placeholder="Nome do usuario"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <Input
        fullWidth
        required
        type="email"
        label="E-mail"
        name="register-email"
        placeholder="usuario@cinebark.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <Input
        fullWidth
        required
        type="password"
        label="Senha inicial"
        name="register-password"
        placeholder="Crie uma senha"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <S.FormActions>
        <Typography variant="body2">A permissao sera validada apos o login.</Typography>
        <Button type="submit" variant="outlined">
          Criar conta
        </Button>
      </S.FormActions>
    </S.Form>
  )
}

export const AuthPage = () => {
  return (
    <S.AuthPage>
      <S.AuthContent>
        <Card>
          <CardContent sx={{ p: { xs: 2.5, sm: 4 } }}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h3" sx={{ fontWeight: 900 }}>
                Area administrativa
              </Typography>
              <Typography variant="body2">
                Entre ou registre um usuario. As permissoes de acesso serao aplicadas pela role da conta.
              </Typography>
            </Box>

            <Divider sx={{ mb: 3 }} />

            <S.FormsGrid>
              <LoginForm />
              <RegisterForm />
            </S.FormsGrid>
          </CardContent>
        </Card>
      </S.AuthContent>
    </S.AuthPage>
  )
}
