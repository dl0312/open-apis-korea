import React, { ReactElement } from 'react'

import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer(): ReactElement {
  return (
    <footer
      style={{
        margin: '3rem 0 1.5rem',
      }}>
      <div>
        <FontAwesomeIcon icon={faBolt} style={{ marginRight: '0.5rem' }} />
        Powered by{' '}
        <a href="https://api.publicapis.org/" target="_blank">
          Public API for Public APIs
        </a>
      </div>
    </footer>
  )
}

export default Footer
