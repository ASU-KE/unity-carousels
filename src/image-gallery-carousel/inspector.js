/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n"
import { InspectorControls, MediaPlaceholder } from "@wordpress/block-editor"
import { Button, PanelBody, PanelRow, TextControl, TextareaControl, ToggleControl } from "@wordpress/components"
import anonImg from "../../resources/asu-unity-stack/shared/assets/img/named/anon.png"

/**
 * Inspector controls
 *
 * @param {Object} props
 */
const Inspector = (props) => {

	const imageCard = {
		id: 0,
		imageSource: anonImg,
		imageAltText: "image alt text",
		title: "Card 1",
		content: "Body 1 copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",
	}

	const handlePerViewChange = (perView) => {
		props.setAttributes({ perView })
	}

	const handleMaxWidthChange = (maxWidth) => {
		props.setAttributes({ maxWidth })
	}

	const toggleimageAutoSize = (checked) => {
		props.setAttributes({ imageAutoSize: checked })
	}

	const toggleHasContent = (checked) => {
		props.setAttributes({ hasContent: checked })
	}

	const handleAddCard = () => {
    const imageItems = [...props.attributes.imageItems]
		if( imageItems[0].id === 9999 ) {
			props.setAttributes( { imageItems: [ imageCard ] } )
		} else {
			let length = imageItems.length
			imageCard.id = length
			props.setAttributes( { imageItems: [ ...imageItems, imageCard ] } )
		}
  }

	const handleRemoveCard = (event, index) => {
		const imageItems = [...props.attributes.imageItems]
		let filteredCardItems = imageItems.filter((card) => card.id !== index)
		filteredCardItems.forEach((card, i) => { card.id = i })
		props.setAttributes({ imageItems: filteredCardItems })
	}

	const handleCardHeaderChange = (text, imageCardItem, index) => {
		const imageItems = [...props.attributes.imageItems]
		let card = imageItems[index]
		card.title = text
		props.setAttributes({ imageItems: imageItems })
	}

	const handleCardContentChange = (text, imageCardItem, index) => {
		const imageItems = [...props.attributes.imageItems]
		let card = imageItems[index]
		card.content = text
		props.setAttributes({ imageItems: imageItems })
	}

	const handleCardImageSourceChange = (mediaUrl, imageCardItem, index) => {
		const imageItems = [...props.attributes.imageItems]
		let card = imageItems[index]
		card.imageSource = mediaUrl
		props.setAttributes({ imageItems: imageItems })
	}

	let imageCardItemFields

	if (props.attributes.imageItems.length) {

		imageCardItemFields = props.attributes.imageItems.map((imageCardItem, index) => {

			if( imageCardItem.id < 9999 ) {

				const mediaPreview = !! imageCardItem.imageSource && (<img src={ imageCardItem.imageSource } />)

				return (
					<PanelBody title={`Card ${index+1}`} key={index}>
								<PanelRow>
									<MediaPlaceholder
										icon="format-image"
										labels={{ title: "Image", instructions: "Upload an image" }}
										allowedTypes = { [ 'image' ] }
										multiple = { false }
										onSelect={(image) => handleCardImageSourceChange(image.url, imageCardItem, index)}
										mediaPreview={mediaPreview}
									/>
								</PanelRow>
								<PanelRow>
									<TextControl
										label="Header text"
										className="card-header-text"
										placeholder="Placeholder text"
										value={imageCardItem.title}
										onChange={(text) => handleCardHeaderChange(text, imageCardItem, index)}
									/>
								</PanelRow>
								<PanelRow>
									<TextareaControl
										label="Content text"
										className="card-content-text"
										placeholder="Placeholder text"
										value={imageCardItem.content}
										onChange={(text) => handleCardContentChange(text, imageCardItem, index)}
									/>
								</PanelRow>
								<PanelRow>
									<Button variant="secondary" size="small" onClick={(event) => handleRemoveCard(event, index)}>
										{__("Remove Card")}
									</Button>
								</PanelRow>
					</PanelBody>
				)
			}
		})
	}

	return (
		<InspectorControls>
				<PanelBody title={__("Carousel Settings")}>
					<PanelRow>
						<TextControl
							label={__("Per View")}
							value={props.attributes.perView}
							onChange={handlePerViewChange}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={__("Max Width")}
							value={props.attributes.maxWidth}
							onChange={handleMaxWidthChange}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__("Image auto sizing")}
							help={__("Automatically resize images to fit the carousel card size. Default in UDS system is to autosize.")}
							checked={props.attributes.imageAutoSize}
							onChange={toggleimageAutoSize}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__("Show Content area")}
							help={__("Display content in the carousel card.")}
							checked={props.attributes.hasContent}
							onChange={toggleHasContent}
						/>
					</PanelRow>
				</PanelBody>
		<PanelBody title={__("Carousel Cards")}>
					{imageCardItemFields}
			<PanelRow>
			<Button variant="primary" onClick={handleAddCard.bind(this)}>
				{__("Add New Card")}
			</Button>
			</PanelRow>
		</PanelBody>
		</InspectorControls>
	)
}

export default Inspector
