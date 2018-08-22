import styled from 'styled-components'

const calculateColumns = ({ columnSpacing, columnWidth }, columns) =>
	(columnSpacing + columnWidth) * columns - columnSpacing

export default styled.main`
	${props =>
		props.theme.isDesktop
			? `
		display: flex;

		.header {
			width: ${props => props.theme.columnWidth}px;
		}
	`
			: ''} margin: 0 auto;
	max-width: ${props =>
		calculateColumns(props.theme, props.theme.maxColumns)}px;

	html:not(&) {
		background: ${props => props.theme.background};

		img + img,
		article button + button {
			margin-top: ${window.config.itemPadding}px;
		}
	}
`
