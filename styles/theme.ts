// sizes for media queries
const sizes = {
  giant: 1080,
  desktop: 922,
  tablet: 768,
  phone: 576,
}

//   export const fontSize = {
//     smallFontSize: '9px',
//     normalFontSize: '12px',
//     largeFontSize: '15px',
//   };

//   export const websiteTitle = 'react-typescript-template';

export interface Theme {
  mainBackground: string
  // neutral color
  title: string
  primaryText: string
  secondaryText: string
  disable: string
  border: string
  divider: string
  background: string
  tableHeader: string
  // point-color
  linkText: string
}

interface Themes {
  light: Theme
  dark: Theme
}

export const themes: Themes = {
  light: {
    mainBackground: `#fff`,
    // neutral color
    title: `rgba(0, 0, 0, 0.85)`,
    primaryText: `rgba(0, 0, 0, 0.75)`,
    secondaryText: `rgba(0, 0, 0, 0.45)`,
    disable: `rgba(0, 0, 0, 0.25)`,
    border: `rgba(0, 0, 0, 0.15)`,
    divider: `rgba(0, 0, 0, 0.06)`,
    background: `rgba(0, 0, 0, 0.04)`,
    tableHeader: `rgba(0, 0, 0, 0.02)`,
    // point-color
    linkText: 'blue',
  },
  dark: {
    mainBackground: `#333`,
    // neutral color
    title: `rgba(255,255,255,0.85)`,
    primaryText: `rgba(255,255,255,0.65)`,
    secondaryText: `rgba(255,255,255,0.45)`,
    disable: `rgba(255,255,255,0.25)`,
    border: `rgba(255,255,255,0.15)`,
    divider: `rgba(255,255,255,0.06)`,
    background: `rgba(255,255,255,0.04)`,
    tableHeader: `rgba(255,255,255,0.02)`,
    // point-color
    linkText: 'blue',
  },
}

const customMediaQuery = (maxWidth: number): string => `@media (max-width: ${maxWidth}px)`

interface MediaQuery {
  giant: string
  desktop: string
  tablet: string
  phone: string
}

export const media: MediaQuery = {
  giant: customMediaQuery(sizes.giant),
  desktop: customMediaQuery(sizes.desktop),
  tablet: customMediaQuery(sizes.tablet),
  phone: customMediaQuery(sizes.phone),
}
