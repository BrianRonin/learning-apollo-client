import * as S from './styles'
import Link from 'next/link'
import { Typewriter } from 'react-simple-typewriter'

export type navLinkProps = {
  text: string
  link: string
  newTab?: boolean
  visible: boolean
  loading: string
  reload?: boolean
}

export const NavLink = ({
  text,
  link,
  newTab = false,
  visible = false,
  loading,
  reload,
}: navLinkProps) => {
  const target = newTab ? '_blank' : '_self'
  return (
    <Link
      href={link}
      passHref
      legacyBehavior
      shallow={reload}
    >
      <S.Main
        loading={loading === link}
        target={target}
      >
        {!!visible && (
          <Typewriter words={[text]} />
        )}
        {!visible && text}
      </S.Main>
    </Link>
  )
}
