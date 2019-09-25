import React from 'react'
import PropTypes from 'prop-types'

import { Helmet, useRuntime } from "vtex.render-runtime"

export interface Props {
  appId: string
}

const PWAHelmet = ({ appId }: Props) => {
  const { rootPath = '' } = useRuntime()

  return (
    <Helmet
      meta={[
        { name: "theme-color", content: "#F71963" },
        { name: "apple-mobile-web-app-capable", content: "yes" }
      ]}
      script={[
        {
          type: "text/javascript",
          src: `${rootPath}/pwa/workers/register.js?scope=${encodeURIComponent(
            rootPath
          )}`,
          defer: true
        }
      ]}
      link={[
        {
          rel: "manifest",
          href: `${rootPath}/pwa/manifest.json?app=${appId}`
        }
      ]}
    />
  )
}

PWAHelmet.propTypes = {
  appId: PropTypes.string
}

export default PWAHelmet
