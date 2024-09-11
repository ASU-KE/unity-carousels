import { createRoot } from 'react-dom/client'
import { ImageGalleryCarousel } from "../../resources/asu-unity-stack/packages/component-carousel/src/components/ImageGalleryCarousel"

const carousels = document.querySelectorAll(".wp-block-unity-carousels-image-gallery-carousel")

carousels.forEach((carousel) => {

	const root = createRoot(carousel)
	const imageItems = JSON.parse(carousel.dataset.imageItems)
	const perView = carousel.dataset.perView
	const maxWidth = carousel.dataset.maxWidth
	const imageAutoSize = carousel.dataset.imageAutoSize === "true"
	const hasContent = carousel.dataset.hasContent === "true"

	const props = {
		perView: perView,
		imageItems: imageItems,
		maxWidth: maxWidth,
		imageAutoSize: imageAutoSize,
		hasContent: hasContent,
	}

	root.render(<ImageGalleryCarousel { ...props}/>)

})

