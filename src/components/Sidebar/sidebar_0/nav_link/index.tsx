import * as S from './styles'
import Link from 'next/link'
import { Typewriter } from 'react-simple-typewriter'

export type navLinkProps = {
  text: string
  link?: string
  newTab?: boolean
  visible: boolean
  loading?: string
  reload?: boolean
  onClick?: () => any
}

export const NavLink = ({
  text,
  link,
  newTab = false,
  visible = false,
  loading,
  reload = false,
  onClick,
}: navLinkProps) => {
  const target = newTab ? '_blank' : '_self'
  return (
    <Link
      href={typeof link === 'string' ? link : '/'}
      passHref
      legacyBehavior
    >
      <S.Main
        loading={loading === link}
        target={target}
        onClick={onClick}
      >
        {!!visible && <Typewriter words={[text]} />}
        {!visible && text}
      </S.Main>
    </Link>
  )
}
