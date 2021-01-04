import * as styledComponents from 'styled-components'

import { Theme } from './theme'

export type DeviceSize = 'phone' | 'tablet' | 'desktop' | 'ssr'

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ServerStyleSheet,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>

export { css, createGlobalStyle, keyframes, ServerStyleSheet, ThemeProvider }

export default styled
