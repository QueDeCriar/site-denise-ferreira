import {ChaveValor} from '@/data/tipos'
import {NextFont} from 'next/dist/compiled/@next/font'
import {Barlow} from 'next/font/google'

const barlowLight = Barlow({
  style: 'normal',
  weight: '300',
  subsets: ['latin'],
})

const barlowRegular = Barlow({
  style: 'normal',
  weight: '400',
  subsets: ['latin'],
})

const barlowMedium = Barlow({
  style: 'normal',
  weight: '500',
  subsets: ['latin'],
})

const xillian: NextFont = {
  className: 'xillian',
  style: {
    fontFamily: 'Xillian, sans-serif',
    fontWeight: 400,
  },
}

const fontes: ChaveValor<NextFont> = {
  xillian,
  barlowLight,
  barlowRegular,
  barlowMedium,
}

export default fontes
