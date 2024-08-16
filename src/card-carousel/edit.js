/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
import  Inspector from './inspector';
import { CardCarousel } from '../../resources/asu-unity-stack/packages/component-carousel/src/components/CardCarousel'
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */


export default function Edit() {
	var myCarouselItems = [
		{
		  id: 0,
		  imageSource: "https://source.unsplash.com/random/500x400?a=-1",
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
		  id: 1,
		  imageSource: "https://source.unsplash.com/random/300x400?a=0",
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
		  id: 2,
		  imageSource: "https://source.unsplash.com/random/400x400?a=1",
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
		{
		  id: 3,
		  imageSource: "https://source.unsplash.com/random/200x200?a=2",
		  imageAltText: "Card image cap",
		  title: "Card 4",
		  content:
			"Body 4 copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit\n      amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n      ut labore et dolore magna aliqua eiusmod tempo.",
		  buttons: [
			{
			  ariaLabel: "dummy button",
			  color: "maroon",
			  href: "#",
			  label: `Button 4 link here`,
			  size: "default",
			  onClick: () => window.alert("Holoa Amigo 😃."),
			},
		  ],
		},
		{
		  id: 4,
		  imageSource: "https://source.unsplash.com/random/300x400?a=3",
		  imageAltText: "Card image cap",
		  title: "Card 5",
		  content:
			"Body 5 copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit\n      amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n      ut labore et dolore magna aliqua eiusmod tempo.",
		  buttons: [
			{
			  ariaLabel: "dummy button",
			  color: "maroon",
			  href: "#",
			  label: `Button 5 link here`,
			  size: "default",
			  onClick: () => {
				window.alert("Hola Amigo 😃.");
				return false;
			  },
			},
		  ],
		},
		{
		  id: 5,
		  imageSource: "https://source.unsplash.com/random/300x400?a=4",
		  imageAltText: "Card image cap",
		  title: "Card 6",
		  content:
			"Body 6 copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit\n      amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n      ut labore et dolore magna aliqua eiusmod tempo.",
		  buttons: [
			{
			  ariaLabel: "dummy button",
			  color: "maroon",
			  href: "#",
			  label: `Button 6 link here`,
			  size: "default",
			  onClick: () => window.alert("Holoa Amigo 😃."),
			},
		  ],
		},
		{
		  id: 6,
		  imageSource: "https://source.unsplash.com/random/400x400?a=5",
		  imageAltText: "Card image cap",
		  title: "Card 7",
		  content:
			"Body 7 copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit\n      amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n      ut labore et dolore magna aliqua eiusmod tempo.",
		  buttons: [
			{
			  ariaLabel: "dummy button",
			  color: "maroon",
			  href: "#",
			  label: `Button 7 link here`,
			  size: "default",
			  onClick: () => window.alert("Holoa Amigo 😃."),
			},
		  ],
		},
		{
		  id: 7,
		  imageSource: "https://source.unsplash.com/random/300x400?a=6",
		  imageAltText: "Card image cap",
		  title: "Card 8",
		  content:
			"Body 8 copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit\n      amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n      ut labore et dolore magna aliqua eiusmod tempo.",
		  buttons: [
			{
			  ariaLabel: "dummy button",
			  color: "maroon",
			  href: "#",
			  label: `Button 8 link here`,
			  size: "default",
			  target: "_parent",
			},
		  ],
		},
	  ];
	const args = {
		perView: 2,
		cardItems: myCarouselItems,
		maxWidth: "1000px",
	}
	return (
		<div { ...useBlockProps() }>
			{'hello from editor div'}
		</div>
	);
}
