/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n'

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor'
import  Inspector from './inspector'
import { CardCarousel } from '../../resources/asu-unity-stack/packages/component-carousel/src/components/CardCarousel'
import anonImg from "../../resources/asu-unity-stack/shared/assets/img/named/anon.png"

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

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
	  ];
	if (cardItems.length == 0 ) {
		setAttributes( { cardItems: myCarouselItems } );
	}
	const args = {
		perView: "2",
		cardItems,
		maxWidth: "1000px",
		cardHorizontal: cardHorizontal,
	}
	const blockProps = useBlockProps()
	 // Good - a new array is created from the old list attribute and a new list item:
//const { list } = attributes;
//const addListItem = ( newListItem ) =>
//    setAttributes( { list: [ ...list, newListItem ] } );

	return (
		<>
		<Inspector { ...props } />
		<div { ...blockProps }>
			<CardCarousel {...args} />
		</div>
		</>
	);
}
