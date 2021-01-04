import Layout from 'components/Layout'
import ThemeToggleSwitch from 'components/ThemeToggleSwitch'
import styled from 'styled-components'

const Title = styled.div`
  font-size: 2rem;
  margin: 1rem;
`

function Home() {
  return (
    <Layout>
      <Title>Next.js Boilerplate</Title>
      <ThemeToggleSwitch />
    </Layout>
  )
}

export default Home
