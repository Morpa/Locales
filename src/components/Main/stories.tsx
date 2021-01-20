import { Story, Meta } from '@storybook/react/types-6-0'
import Main, { MainProps } from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Página en español',
    descripiont: 'Estas leyendo en español',
    info: 'Puede acceder a la página directamente desde la dirección:',
    url: 'https://locales.vercel.app/es',
    altText: 'Un desarrollador frente a una pantalla con código.',
    hero: '/img/spn.svg'
  }
} as Meta

export const Default: Story<MainProps> = (args) => <Main {...args} />
