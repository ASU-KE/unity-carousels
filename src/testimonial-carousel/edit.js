import { __ } from "@wordpress/i18n"
import { useBlockProps } from "@wordpress/block-editor"
import { TestimonialCarousel } from "../../resources/asu-unity-stack/packages/component-carousel/src/components/TestimonialCarousel"
import anonImg from "../../resources/asu-unity-stack/shared/assets/img/named/anon.png"
import Inspector from "./inspector"
import "./edit.scss"
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
			  content: "Testimonial No Citation example. Laughter is timeless, imagination has no age, dreams are forever.",
			  cite: {
				name: "",
				description: "",
			  },
			},
			imageSource: anonImg,
			imageAltText: `Image of Walt Disney`,
		  },
		  {
			id: 99999,
			quote: {
			  content: `Testimonial Citation No Image example. Computers make excellent and efficient servants, but I have no wish to serve under them.`,
			  cite: {
				name: `Spock`,
				description: `First officer, USS Enterprise`,
			  },
			},
		  },
		  {
			id: 999999,
			quote: {
			  content: `citeWithImage I used to wonder about that myself. Thought it was a bunch of mumbo-jumbo. A magical power holding together good and evil, the dark side and the light? Crazy thing is, it's true. The Force, the Jedi — all of it. It's all true.`,
			  cite: {
				name: `Han Solo`,
			  },
			},
			imageSource: anonImg,
			imageAltText: `Pretend this is Han Solo`,
		  },
		  {
			id: 9999999,
			quote: {
			  title: `testing all fields`,
			  content: `citeWithImageDesc Eight design aspirations guide the ongoing evolution of ASU as a New American University. These institutional objectives are integrated in innovative ways throughout the university to achieve excellence, access and impact.`,
			  cite: {
				name: `Michael M. Crow`,
				description: `ASU Charter`,
			  },
			},
			imageSource: anonImg,
			imageAltText: `Pretend this is Michael M. Crow, President of ASU`,
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
