import React, { FC } from 'react'
import PropTypes from 'prop-types'
import { injectIntl, InjectedIntlProps } from 'react-intl'

import { Button } from 'vtex.styleguide'
import { usePWA } from 'vtex.store-resources/PWAContext'

import setWebAppData from './utils/webAppIndexedDB'

const propTypes = {
  imageUrl: PropTypes.string,
  type: PropTypes.oneOf(['install', 'push-notification']),
}

const CONSTANTS = {
  INSTALL_TITLE: 'store/promotion-banner.install.title',
  INSTALL_DESCRIPTION: 'store/promotion-banner.install.description',
  INSTALL_ACCEPT_BUTTON_LABEL: 'store/promotion-banner.install.button-accept.label',
  PUSH_NOTIFICATION_TITLE: 'store/promotion-banner.push-notification.title',
  PUSH_NOTIFICATION_DESCRIPTION: 'store/promotion-banner.push-notification.description',
  PUSH_NOTIFICATIONS_ACCEPT_BUTTON_LABEL: 'store/promotion-banner.push-notification.button-accept.label',
  DISMISS_BUTTON_LABEL: 'store/promotion-banner.button-dismiss.label'
}

type Props = PropTypes.InferProps<typeof propTypes>

const PromotionBanner: FC<Props & InjectedIntlProps> = ({ intl, type = 'install' }) => {
  const { showInstallPrompt = null } = usePWA() || {}

  const handleDismiss = async () => {
    if(type === 'install')
      setWebAppData('appInstallDismissed')
    else
      setWebAppData('pushNotificationsDismissed')
  }

  const handleAccept = () => {
    if(type === 'install')
      showInstallPrompt()
    else
      console.log('Push notifications are not implemented.')
  }

  return (
    <div className='pa6 br2 bg-muted-5 mb8 mw5 w-80-ns w-90 center fr-l'>
      <p className='t-body'>
        {intl.formatMessage({ 
          id: type === 'install' ? CONSTANTS.INSTALL_TITLE : CONSTANTS.PUSH_NOTIFICATION_TITLE
        })}
      </p>
      <p className='t-small c-muted-1'>
        {intl.formatMessage({
         id: type === 'install' ? CONSTANTS.INSTALL_DESCRIPTION : CONSTANTS.PUSH_NOTIFICATION_DESCRIPTION
        })}
      </p>
      <Button
        onClick={handleDismiss}
        variation='tertiary'
        size='small'
      >
        {intl.formatMessage({
          id: CONSTANTS.DISMISS_BUTTON_LABEL,
        })}
      </Button>
      <Button onClick={handleAccept} size='small'>
        {intl.formatMessage({
          id: type === 'install' ? CONSTANTS.INSTALL_ACCEPT_BUTTON_LABEL : CONSTANTS.PUSH_NOTIFICATIONS_ACCEPT_BUTTON_LABEL,
        })}
      </Button>
    </div>
  )
}

PromotionBanner.propTypes = propTypes

export default injectIntl(PromotionBanner)
