import { __ } from "@wordpress/i18n"
import { useBlockProps } from "@wordpress/block-editor"
import { TestimonialCarousel } from "../../resources/asu-unity-stack/packages/component-carousel/src/components/TestimonialCarousel"
import anonImg from "../../resources/asu-unity-stack/shared/assets/img/named/anon.png"
import Inspector from "./inspector"

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

export default function Edit(props) {

	const {
		attributes: {
			maxWidth,
			testimonialItems,
			imageAutoSize,
			hasNavButtons,
			hasPositionIndicators,
			containerCssClass,
			titleCssClass,
			contentCssClass,
		}, setAttributes
	} = props

	var myCarouselItems = [
		{
			id: 9999,
			quote: {
				title: "Walt Disney",
				content:
					"Laughter is timeless, imagination has no age, dreams are forever.",
			},
			imageSource: anonImg,
			imageAltText: `image alt text`,
		},
		{
			id: 99999,
			quote: {
				title: "Anonymous",
				content:
					`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.`,
			},
			imageSource: null,
			imageAltText: null
		},
		{
			id: 999999,
			quote: {
				title: "Walt Disney",
				content:
					"Laughter is timeless, imagination has no age, dreams are forever.",
			},
			imageSource: anonImg,
			imageAltText: `image alt text`,
		},
		{
			id: 99999999,
			quote: {
				title: "Anonymous",
				content:
					`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.`,
			},
			imageSource: null,
			imageAltText: null
		},
	]

	if (testimonialItems.length == 0 ) {
		setAttributes( { testimonialItems: myCarouselItems } )
	}

	const args = {
		testimonialItems: testimonialItems,
		maxWidth: maxWidth,
		imageAutoSize: imageAutoSize,
		hasNavButtons: hasNavButtons,
		hasPositionIndicators: hasPositionIndicators,
		itemStyle: {
			/* if a testimonial item has the attribute `imageSource`
        then the carousel will add the class "with-image"
				automatically to that item */
			containerCssClass: containerCssClass,
			titleCssClass: titleCssClass,
			contentCssClass: contentCssClass
		}
	}

	const blockProps = useBlockProps()

	return (
		<>
		<div { ...blockProps }>
			<Inspector { ...props } />
			<TestimonialCarousel {...args} />
		</div>
		</>
	)
}
