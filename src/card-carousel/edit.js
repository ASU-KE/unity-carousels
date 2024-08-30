import { __ } from '@wordpress/i18n'
import { useBlockProps } from '@wordpress/block-editor'
import  Inspector from './inspector'
import { CardCarousel } from '../../resources/asu-unity-stack/packages/component-carousel/src/components/CardCarousel'
import anonImg from "../../resources/asu-unity-stack/shared/assets/img/named/anon.png"

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */


export default function Edit(props) {

	const {
		attributes: {
			perView,
			maxWidth,
			cardItems,
			cardHorizontal,
		}, setAttributes
	} = props

	var myCarouselItems = [
		{
			id: 9999,
			imageSource: anonImg,
			imageAltText: "Card image cap",
			title: "Card 1",
			content:
				"Body 1 copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit\n      amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n      ut labore et dolore magna aliqua eiusmod tempo.",
			buttons: [
				{
					ariaLabel: "dummy button",
					color: "maroon",
					href: "#",
					label: `Button 1 link here`,
					size: "default",
					onClick: () => window.alert("Holoa Amigo 😃."),
				},
			],
		},
		{
			id: 99999,
			imageSource: anonImg,
			imageAltText: "Card image cap",
			title: "Card 2",
			content:
				"Body 2 copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit\n      amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n      ut labore et dolore magna aliqua eiusmod tempo.",
			buttons: [
				{
					ariaLabel: "dummy button",
					color: "maroon",
					href: "#",
					label: `Button 2 link here`,
					size: "default",
					onClick: () => window.alert("Holoa Amigo 😃."),
				},
			],
		},
		{
			id: 999999,
			imageSource: anonImg,
			imageAltText: "Card image cap",
			title: "Card 3",
			content:
				"Body 3 copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit\n      amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n      ut labore et dolore magna aliqua eiusmod tempo.",
			buttons: [
				{
					ariaLabel: "dummy button",
					color: "maroon",
					href: "#",
					label: `Button 3 link here`,
					size: "default",
					onClick: () => window.alert("Holoa Amigo 😃."),
				},
			],
		},
	]

	if (cardItems.length == 0 ) {
		setAttributes( { cardItems: myCarouselItems } )
	}

	const args = {
		perView: "2",
		cardItems,
		maxWidth: "1000px",
		cardHorizontal: cardHorizontal,
	}

	const blockProps = useBlockProps()

	return (
		<>
		<Inspector { ...props } />
		<div { ...blockProps }>
			<CardCarousel {...args} />
		</div>
		</>
	)
}
