import React, { ReactElement } from 'react'

import { Switch } from 'antd'
import useDarkMode from 'use-dark-mode'

export default function ThemeToggleSwitch(): ReactElement {
  const darkMode = useDarkMode(false)
  const handleOnClickToggle = () => {
    darkMode.toggle()
  }
  return <Switch checkedChildren="🌞" unCheckedChildren="🌚" checked={!darkMode.value} onClick={handleOnClickToggle} />
}
