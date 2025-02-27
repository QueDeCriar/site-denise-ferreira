import {ContainerConteudo} from '@/components/ContainerConteudo'
import {ImagemComFallback} from '@/components/ImagemComFallback'
import {Texto} from '@/components/Texto'
import {Titulo} from '@/components/Titulo'
import {TamanhosTexto} from '@/data/enums'
import cores from '@/resources/cores'
import dispositivos from '@/resources/dispositivos'
import {
  detalhe,
  paragrafo,
  subtitulo,
  titulo1,
  titulo2,
} from '@/resources/textos'
import styled from 'styled-components'

export const ContainerJurista = styled(ContainerConteudo).attrs({
  corBackground: cores.terra,
  altura: 600,
})`
  overflow-x: hidden;
`

export const TituloJurista = styled(Titulo)``

export const TextoDescricaoJurista = styled.p`
  ${detalhe}

  text-align: justify;
  text-justify: newspaper;

  font-size: 1.5rem;  
  width: 100%;
  line-height: ${subtitulo.lineHeight};

  @media ${dispositivos.laptop} {
    font-size: 1.3rem;
    width: 90%;
  }

  @media ${dispositivos.laptopL} {
    font-size: 1.5rem;
    width: 100%;
  }
`

export const ImagemJurista = styled(ImagemComFallback)`
  align-self: center;

  width: 100%;
  height: auto;

  /* border: 12px solid ${cores.terra}; */
  border-radius: 12px;

  @media ${dispositivos.laptop} {
    width: 80%;
  }
`

export const CabecalhoEscritora = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 1;

  width: 100%;
  height: 120px;
`

export const TituloEscritora = styled(Titulo)``

export const TextoDescricaoEscritora = styled.p`
  ${detalhe}

  text-align: justify;
  text-justify: newspaper;
  
  font-size: 1.5rem;
  width: 100%;
  line-height: ${subtitulo.lineHeight};

  @media ${dispositivos.laptop} {
    font-size: 1.3rem;
    width: 90%;
  }

  @media ${dispositivos.laptopL} {
    font-size: 1.5rem;
    width: 100%;
  }
`

export const TituloPalestrante = styled(Texto).attrs({
  tamanho: TamanhosTexto.XG,
  fonteAlternativa: subtitulo.fontFamily,
})`
  font-size: ${titulo1.fontSize};

  @media ${dispositivos.mobileL} {
    font-size: ${titulo2.fontSize};
  }
`

export const ListaPalestrante = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 0;
  margin: 0 0 2rem 0;

  list-style: none;

  @media ${dispositivos.mobileL} {
    gap: 1rem;
  }
`

export const ItemListaPalestrante = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;

  width: 100%;
  height: 3rem;
  margin: 0;
  padding: 0;

  @media ${dispositivos.mobileL} {
    height: 2.5rem;
  }
`

export const TextoItemListaPalestrante = styled(Texto).attrs({
  tamanho: TamanhosTexto.PP,
})`
  @media ${dispositivos.tablet} {
    ${paragrafo}
  }

  @media ${dispositivos.laptopL} {
    ${subtitulo}
  }
`
