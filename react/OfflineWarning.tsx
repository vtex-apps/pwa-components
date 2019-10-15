import React, { FC } from 'react'
import PropTypes from 'prop-types'
import { injectIntl, InjectedIntlProps, intlShape } from 'react-intl'
import { Button, EmptyState } from 'vtex.styleguide'
import PromotionBanner from './PromotionBanner';


const propTypes = {
  intl: intlShape,
}

type Props = PropTypes.InferProps<typeof propTypes>

const OfflineWarning: FC<Props & InjectedIntlProps> = () => {
  return (
    <EmptyState
    title={
      warningTitle ||
      intl.formatMessage({ id: 'store/store.offline-warning.warningTitle' })
    }
  >
    <p>
      {message ||
        intl.formatMessage({ id: 'store/store.offline-warning.message' })}
    </p>
    <div className="pt5">
      <Button variation="secondary" size="small" onClick={() => window.location.reload()}>
        <span className="flex align-baseline">
          {buttonLabel ||
            intl.formatMessage({ id: 'store/store.offline-warning.button' })}
        </span>
      </Button>
    </div>
  </EmptyState>
  )
}

OfflineWarning.propTypes = propTypes

export default injectIntl(PromotionBanner)