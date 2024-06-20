import Avatar from '../../components/Avatar'
import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Guilherme Alves</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        GuilhermeAlves148
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Front-End.
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
