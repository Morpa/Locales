import { useRouter } from 'next/router'

import Main from 'components/Main'

import { en, pt, es } from 'locales'

export default function Home() {
  const router = useRouter()
  const { locale } = router

  function handleLocale(locale: string) {
    switch (locale) {
      case 'en':
        return en
      case 'es':
        return es
      default:
        return pt
    }
  }

  const content = handleLocale(locale!)

  return (
    <Main
      title={content.title}
      description={content.descripiont}
      info={content.info}
      url={content.url}
      altText={content.altText}
      hero={content.hero}
    />
  )
}
