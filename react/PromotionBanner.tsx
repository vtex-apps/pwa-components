import React, { FC } from 'react'
import PropTypes from 'prop-types'
import { injectIntl, InjectedIntlProps } from 'react-intl'

import { Button } from 'vtex.styleguide'
import { usePWA } from 'vtex.store-resources/PWAContext'

const propTypes = {
  imageUrl: PropTypes.string,
  type: PropTypes.oneOf(['install', 'push-notification']),
}

type Props = PropTypes.InferProps<typeof propTypes>

const PromotionBanner: FC<Props & InjectedIntlProps> = ({ intl, type = 'install' }) => {
  const { showInstallPrompt } = usePWA() || {}

  return (
    <div className="pa6 br2 bg-muted-5 mb8 mw5 w-80-ns w-90 center fr-l">
      <p className="t-body">
        {intl.formatMessage({ id: 'store/promotion-banner.install.title' })}
      </p>
      <p className="t-small c-muted-1">
        {intl.formatMessage({
          id: 'store/promotion-banner.install.description',
        })}
      </p>
      <Button
        onClick={() => {
          window && window.localStorage.setItem('appInstallDismissed', 'true')
        }}
        variation="tertiary"
        size="small"
      >
        {intl.formatMessage({
          id: 'store/promotion-banner.install.button-dismiss.label',
        })}
      </Button>
      <Button onClick={showInstallPrompt} size="small">
        {intl.formatMessage({
          id: 'store/promotion-banner.install.button-accept.label',
        })}
      </Button>
    </div>
  )
}

PromotionBanner.propTypes = propTypes

export default injectIntl(PromotionBanner)
