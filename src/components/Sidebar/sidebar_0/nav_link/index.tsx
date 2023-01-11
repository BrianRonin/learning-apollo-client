import * as S from './styles'
import Link from 'next/link'
import { Typewriter } from 'react-simple-typewriter'

export type navLinkProps = {
  text: string
  link: string
  newTab?: boolean
  visible: boolean
}

export const NavLink = ({
  text,
  link,
  newTab = false,
  visible = false,
}: navLinkProps) => {
  const target = newTab ? '_blank' : '_self'
  return (
    <Link href={link} passHref legacyBehavior>
      <S.Main target={target}>
        {!!visible && (
          <Typewriter words={[text]} />
        )}
        {!visible && text}
      </S.Main>
    </Link>
  )
}
