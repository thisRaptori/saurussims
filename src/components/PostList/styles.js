import { margin, padding } from 'polished'
import { borderRadius } from 'utils/styling'

export default {
	wrapper: ({ columnSpacing }) => ({
		alignItems: 'flex-start',
		display: 'flex',
		...padding(0, `${columnSpacing / 2}px`),
		justifyContent: 'space-around',
	}),
	responsiveWrapper: ({ columnCount }) => ({
		display: columnCount > 1 ? 'flex' : 'block !important',
	}),
	column: ({ columnCount, columnSpacing, columnWidth }) => ({
		flex: `0 1 calc(100% - ${columnSpacing}px)`,
		overflowX: 'hidden',
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
	listItem: ({ columnSpacing, itemPadding }) => ({
		background: 'white',
		display: 'block',
		overflow: 'hidden',
		padding: `${itemPadding}px`,
		...borderRadius('4px'),
		...margin(`${columnSpacing}px`, `${columnSpacing / 2}px`),
	}),
}
