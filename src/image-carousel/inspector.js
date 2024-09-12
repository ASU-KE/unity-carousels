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

	const handleAddCard = () => {
    const imageCardItems = [...props.attributes.imageCardItems]
		if( imageCardItems[0].id === 9999 ) {
			props.setAttributes( { imageCardItems: [ imageCard ] } )
		} else {
			let length = imageCardItems.length
			imageCard.id = length
			props.setAttributes( { imageCardItems: [ ...imageCardItems, imageCard ] } )
		}
  }

	const handleRemoveCard = (event, index) => {
		const imageCardItems = [...props.attributes.imageCardItems]
		let filteredCardItems = imageCardItems.filter((card) => card.id !== index)
		filteredCardItems.forEach((card, i) => { card.id = i })
		props.setAttributes({ imageCardItems: filteredCardItems })
	}

	const handleCardHeaderChange = (text, imageCardItem, index) => {
		const imageCardItems = [...props.attributes.imageCardItems]
		let card = imageCardItems[index]
		card.title = text
		props.setAttributes({ imageCardItems: imageCardItems })
	}

	const handleCardContentChange = (text, imageCardItem, index) => {
		const imageCardItems = [...props.attributes.imageCardItems]
		let card = imageCardItems[index]
		card.content = text
		props.setAttributes({ imageCardItems: imageCardItems })
	}

	const handleCardImageSourceChange = (mediaUrl, imageCardItem, index) => {
		const imageCardItems = [...props.attributes.imageCardItems]
		let card = imageCardItems[index]
		card.imageSource = mediaUrl
		props.setAttributes({ imageCardItems: imageCardItems })
	}

	let imageCardItemFields

	if (props.attributes.imageCardItems.length) {

		imageCardItemFields = props.attributes.imageCardItems.map((imageCardItem, index) => {

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
