import { margin, padding } from 'polished'

import { listItem } from 'utils/styling'

export default {
	wrapper: ({ columnSpacing }) => ({
		alignItems: 'flex-start',
		display: 'flex',
		justifyContent: 'space-around',
		...padding(0, `${columnSpacing / 2}px`),
	}),
	responsiveWrapper: ({ columnCount }) => ({
		display: columnCount > 1 ? 'flex' : 'block !important',
	}),
	column: ({ columnCount, columnSpacing, columnWidth }) => ({
		flex: `0 1 calc(100% - ${columnSpacing}px)`,
		overflow: 'hidden',
		'@media (min-width: 320px)': {
			flex: `0 1 calc(100vw / ${columnCount})`,
		},
	}),
	wide: ({ columnCount, columnSpacing }) => ({
		flex: '1 1 100%',
		marginBottom: columnCount < 2 && '0 !important',
	}),
	narrow: ({ columnWidth }) => ({
		flex: `0 0 ${columnWidth}px`,
		overflow: 'hidden',
	}),
	listItem: listItem,
	link: ({ columnSpacing }) => ({
		display: 'block',
		textDecoration: 'none',
		...margin(`${columnSpacing}px`, `${columnSpacing / 2}px`),
		'>article': {
			marginLeft: 0,
			marginRight: 0,
		},
		'>article>div': {
			marginLeft: 0,
			marginRight: 0,
		},
	}),
}