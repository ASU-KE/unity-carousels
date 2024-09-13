/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor'

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save(props) {

	const {
		attributes: {
			testimonialItems,
			maxWidth,
			imageAutoSize,
			hasNavButtons,
			hasPositionIndicators,
			containerCssClass,
			titleCssClass,
			contentCssClass
		}
	} = props

	return (
		<div { ...useBlockProps.save() }
		data-max-width={ maxWidth }
		data-testimonial-items={ JSON.stringify(testimonialItems) }
		data-image-auto-size={ imageAutoSize }
		data-has-nav-buttons={ hasNavButtons }
		data-has-position-indicators={ hasPositionIndicators }
		data-container-css-class={ JSON.stringify(containerCssClass) }
		data-title-css-class={ JSON.stringify(titleCssClass) }
		data-content-css-class={ JSON.stringify(contentCssClass) }
		>
		</div>
	)
}
