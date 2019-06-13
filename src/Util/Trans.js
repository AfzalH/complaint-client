import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

const Trans = props => <FormattedMessage {...props} />;

export default injectIntl(Trans, {
    withRef: false,
});
