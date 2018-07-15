import { connect as connectStyles } from 'react-fela'

import { withConfig } from 'hocs'
import { compose } from 'utils/general'

import Page from './component'
import styles from './styles'

export default compose(
	withConfig('columnSpacing', 'itemPadding'),
	connectStyles(styles),
)(Page)