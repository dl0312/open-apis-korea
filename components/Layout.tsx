import React, { ReactElement, ReactNode } from 'react'

import { useThemeSwitcher } from 'react-css-theme-switcher'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`

interface Props {
  children: ReactNode
}

function Layout({ children }: Props): ReactElement {
  const { status } = useThemeSwitcher()

  if (status === 'loading') {
    return null
  }

  return <Container>{children}</Container>
}

export default Layout
