import {LayoutDashboard} from '@/components/LayoutDashboard'
import {Post} from '@/data/tipos'
import {ContainerPostagens} from './PostagensDashboard.styled'

interface Props {
  postagens: Post[]
}

export function PostagensDashboard(props: Props) {
  console.log(props)
  return (
    <LayoutDashboard titulo="Postagens">
      <ContainerPostagens>Alguma coisa</ContainerPostagens>
    </LayoutDashboard>
  )
}
