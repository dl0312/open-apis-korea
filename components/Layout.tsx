import React, { ReactElement, ReactNode } from 'react'

import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`

const PageWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  padding: 0 1.5rem;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

interface Props {
  children: ReactNode
}

function Layout({ children }: Props): ReactElement {
  return (
    <Container>
      <PageWrapper>{children}</PageWrapper>
    </Container>
  )
}

export default Layout
