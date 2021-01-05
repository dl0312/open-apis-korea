import React, { ReactElement } from 'react'

import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styles/themed-components'

const Advertisement = styled.div`
  margin: 1rem 0;
`

const PoweredBy = styled.div``

function Footer(): ReactElement {
  return (
    <footer
      style={{
        margin: '3rem 0 1.5rem',
      }}>
      <div>
        <Advertisement>
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-9994255438328666"
            data-ad-slot="8074364163"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </Advertisement>
        <PoweredBy>
          <FontAwesomeIcon icon={faBolt} style={{ marginRight: '0.5rem' }} />
          Powered by{' '}
          <a href="https://api.publicapis.org/" target="_blank">
            Public API for Public APIs
          </a>
        </PoweredBy>
      </div>
    </footer>
  )
}

export default Footer
