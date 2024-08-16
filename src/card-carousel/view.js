/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */
import { createRoot } from 'react-dom/client';

import { CardCarousel } from "../../resources/asu-unity-stack/packages/component-carousel/src/components/CardCarousel"

const carousels = document.querySelectorAll(".wp-block-unity-carousels-card-carousel");
carousels.forEach((carousel) => {
const root = createRoot(carousel);
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
const props = {
	perView: "2",
	cardItems: myCarouselItems,
	maxWidth: "1000px",
}

root.render(<CardCarousel { ...props}/>);
})

