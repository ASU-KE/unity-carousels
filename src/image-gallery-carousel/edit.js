import { __ } from "@wordpress/i18n"
import { useBlockProps } from "@wordpress/block-editor"
import { ImageGalleryCarousel } from "../../resources/asu-unity-stack/packages/component-carousel/src/components/ImageGalleryCarousel"
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
			perView,
			maxWidth,
			imageItems,
			imageAutoSize,
			hasContent,
		}, setAttributes
	} = props

	var myCarouselItems = [
		{
			id: 9999,
			imageSource: anonImg,
			imageAltText: "Card image cap",
				title: `Content 1`,
        content: `Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua eiusmod tempo.`,
		},
		{
			id: 99999,
			imageSource: anonImg,
			imageAltText: "Card image cap",
				title: `Content 2`,
        content: `Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua eiusmod tempo.`,
		},
		{
			id: 999999,
			imageSource: anonImg,
			imageAltText: "Card image cap",
				title: `Content 3`,
        content: `Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua eiusmod tempo.`,
		},
		{
			id: 9999999,
			imageSource: anonImg,
			imageAltText: "Card image cap",
				title: `Content 4`,
        content: `Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua eiusmod tempo.`,
		},
		{
			id: 999999999,
			imageSource: anonImg,
			imageAltText: "Card image cap",
				title: `Content 5`,
        content: `Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua eiusmod tempo.`,
		},
	]

	if (imageItems.length == 0 ) {
		setAttributes( { imageItems: myCarouselItems } )
	}

	const args = {
		perView: perView,
		imageItems: imageItems,
		maxWidth: "1000px",
		imageAutoSize: imageAutoSize,
		hasContent: hasContent,
	}

	const blockProps = useBlockProps()

	return (
		<>
		<Inspector { ...props } />
		<div { ...blockProps }>
			<ImageGalleryCarousel {...args} />
		</div>
		</>
	)
}
