import React, { ReactElement } from 'react'

import { Switch } from 'antd'
import styled from 'styled-components'
import useDarkMode from 'use-dark-mode'

const Container = styled.div`
  margin-bottom: 0.5rem;
`
export default function ThemeToggleSwitch(): ReactElement {
  const darkMode = useDarkMode(false)
  const handleOnClickToggle = () => {
    darkMode.toggle()
  }
  return (
    <Container>
      <Switch checkedChildren="🌞" unCheckedChildren="🌚" checked={!darkMode.value} onClick={handleOnClickToggle} />
    </Container>
  )
}
