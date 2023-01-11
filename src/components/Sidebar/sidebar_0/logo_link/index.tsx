import * as S from './styles'
import { Heading } from '../../../Text/heading_0'
import Link from 'next/link'
import { motion } from 'framer-motion'

export type logoLinkProps = {
  text: string
  srcImg?: string
  link: string
  newTab?: boolean
  circle?: boolean
}

export const LogoLink = ({
  text,
  srcImg = '',
  link = '',
  newTab = false,
  circle = false,
}: logoLinkProps) => {
  const isNextLink = link.match(/^\//)
    ? true
    : false
  const target = newTab ? '_blank' : '_self'
  // if (isNextLink) {
  return (
    <Heading size='small' uppercase>
      <Link
        href={'/'}
        passHref
        target={target}
        legacyBehavior
      >
        <S.Main href={'/'}>
          {srcImg ? (
            <S.LogoContainer>
              <S.Logo
                circle={circle}
                src={srcImg}
              ></S.Logo>
            </S.LogoContainer>
          ) : (
            text
          )}
        </S.Main>
      </Link>
    </Heading>
  )
}
