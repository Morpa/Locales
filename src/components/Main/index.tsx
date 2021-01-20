import { useCallback } from 'react'
import { useRouter } from 'next/router'

import * as S from './styles'

export type MainProps = {
  title: string
  description: string
  info: string
  url: string
}

const Main = ({ title, description, info, url }: MainProps) => {
  const router = useRouter()

  const handleChangeLang = useCallback(
    (lang: string) => {
      const locale = lang
      router.push(router.pathname, router.asPath, { locale })
    },
    [router]
  )

  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código."
      />

      <S.FlagsWrapper>
        <S.Flag onClick={() => handleChangeLang('pt')}>🇧🇷</S.Flag>
        <S.Flag onClick={() => handleChangeLang('es')}>🇪🇸</S.Flag>
        <S.Flag onClick={() => handleChangeLang('en')}>🇺🇸</S.Flag>
      </S.FlagsWrapper>

      <S.InfoWrapper>
        <p>{info}</p>
        <p>{url}</p>
      </S.InfoWrapper>
    </S.Wrapper>
  )
}

export default Main
