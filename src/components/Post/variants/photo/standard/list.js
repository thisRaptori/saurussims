import React from 'react'
import { Link } from 'react-router5'
import classNames from 'classnames'

const Standard = ({ linkProps, styles, photos, tags }) => (
	<article className={styles.listItem}>
		<Link
			{...linkProps}
			className={classNames(linkProps.className, styles.listItemPadding)}
		>
			{photos &&
				photos.map(({ caption, thumbnail }, i) => (
					<img key={thumbnail} src={thumbnail} alt={caption} />
				))}
		</Link>
	</article>
)

export default Standard
