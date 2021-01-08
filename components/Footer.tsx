import React, { ReactElement } from 'react'

import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styles/themed-components'

const Container = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 3rem 0 1.5rem;
`
// const Advertisement = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   margin: 1rem 0;
// `

const PoweredBy = styled.div`
  align-self: center;
  margin: 1rem;
`

function Footer(): ReactElement {
  return (
    <Container>
      {/* <Advertisement>
        <ins
          className="kakao_ad_area"
          style={{ display: 'none' }}
          data-ad-unit="DAN-TLKSG6Khw4lDAQVy"
          data-ad-width="300"
          data-ad-height="250"
        />
        <ins
          className="kakao_ad_area"
          style={{ display: 'none' }}
          data-ad-unit="DAN-P6gv4cKjhpS3GPJH"
          data-ad-width="300"
          data-ad-height="250"
        />
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-9994255438328666"
          data-ad-slot="8074364163"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </Advertisement> */}
      <PoweredBy>
        <FontAwesomeIcon icon={faBolt} style={{ marginRight: '0.5rem' }} />
        Powered by{' '}
        <a href="https://api.publicapis.org/" target="_blank">
          Public API for Public APIs
        </a>
      </PoweredBy>
    </Container>
  )
}

export default Footer
