import { createRoot } from 'react-dom/client'
import { TestimonialCarousel } from "../../resources/asu-unity-stack/packages/component-carousel/src/components/TestimonialCarousel"

const carousels = document.querySelectorAll(".wp-block-unity-carousels-testimonial-carousel")

carousels.forEach((carousel) => {

	const root = createRoot(carousel)
	const testimonialItems = JSON.parse(carousel.dataset.testimonialItems)
	const maxWidth = carousel.dataset.maxWidth
	const imageAutoSize = carousel.dataset.imageAutoSize === "true"
	const hasNavButtons = carousel.dataset.hasNavButtons === "true"
	const hasPositionIndicators = carousel.dataset.hasPositionIndicators === "true"
	const containerCssClass = JSON.parse(carousel.dataset.containerCssClass)
	const titleCssClass = JSON.parse(carousel.dataset.titleCssClass)
	const contentCssClass = JSON.parse(carousel.dataset.contentCssClass)

	const props = {
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

	root.render(<TestimonialCarousel { ...props}/>)

})

