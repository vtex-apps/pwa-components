import React, { FC } from 'react'
import { Button, EmptyState } from 'vtex.styleguide'
import { injectIntl, intlShape, InjectedIntlProps } from 'react-intl'
import PropTypes from 'prop-types'

const propTypes = {
  intl: intlShape,
}

type Props = PropTypes.InferProps<typeof propTypes>

const OfflineWarning:  FC<Props & InjectedIntlProps> = ({ intl }) => (
  <EmptyState title={intl.formatMessage({ id: 'store/store.offline-warning.title' })}>
    <p>
      {intl.formatMessage({ id: 'store/store.offline-warning.message' })}
    </p>
    <div className="pt5">
      <Button variation="secondary" size="small" onClick={() => console.log('nooo')}>
        <span className="flex align-baseline">
          {intl.formatMessage({ id: 'store/store.offline-warning.button' })}
        </span>
      </Button>
    </div>
  </EmptyState>
)

OfflineWarning.propTypes = propTypes

export default injectIntl(OfflineWarning)