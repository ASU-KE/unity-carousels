import { createRoot } from 'react-dom/client'
import { CardCarousel } from "../../resources/asu-unity-stack/packages/component-carousel/src/components/CardCarousel"

const carousels = document.querySelectorAll(".wp-block-unity-carousels-card-carousel")

carousels.forEach((carousel) => {

	const root = createRoot(carousel)
	const cardItems = JSON.parse(carousel.dataset.cardItems)
	const perView = carousel.dataset.perView
	const maxWidth = carousel.dataset.maxWidth
	const cardHorizontal = carousel.dataset.cardHorizontal === "true"

	const props = {
		perView: perView,
		cardItems: cardItems,
		maxWidth: maxWidth,
		cardHorizontal: cardHorizontal,
	}

	root.render(<CardCarousel { ...props}/>)

})

