import { createRoot } from 'react-dom/client'
import { ImageCarousel } from "../../resources/asu-unity-stack/packages/component-carousel/src/components/ImageCarousel"

const carousels = document.querySelectorAll(".wp-block-unity-carousels-image-carousel")

carousels.forEach((carousel) => {

	const root = createRoot(carousel)
	const imageCardItems = JSON.parse(carousel.dataset.imageCardItems)
	const perView = carousel.dataset.perView
	const maxWidth = carousel.dataset.maxWidth
	const imageAutoSize = carousel.dataset.imageAutoSize === "true"

	const props = {
		perView: perView,
		imageItems: imageCardItems,
		maxWidth: maxWidth,
		imageAutoSize: imageAutoSize,
	}

	root.render(<ImageCarousel { ...props}/>)

})

