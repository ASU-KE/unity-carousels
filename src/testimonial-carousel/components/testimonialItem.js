import { __ } from "@wordpress/i18n"
import { MediaPlaceholder } from "@wordpress/block-editor"
import { Button, PanelBody, PanelRow, TextControl, TextareaControl } from "@wordpress/components"

export default function TestimonialItem({cardItem, index, props}) {

	const mediaPreview = !! cardItem.imageSource && (<img src={ cardItem.imageSource } />)

	const handleRemoveCard = (event, index) => {
		const testimonialItems = [...props.attributes.testimonialItems]
		let filteredCardItems = testimonialItems.filter((card) => card.id !== index)
		filteredCardItems.forEach((card, i) => { card.id = i })
		props.setAttributes({ testimonialItems: filteredCardItems })
	}

	const handleCardHeaderChange = (text, cardItem, index) => {
		const testimonialItems = [...props.attributes.testimonialItems]
		let card = testimonialItems[index]
		card.quote.title = text
		props.setAttributes({ testimonialItems: testimonialItems })
	}

	const handleCardContentChange = (text, cardItem, index) => {
		const testimonialItems = [...props.attributes.testimonialItems]
		let card = testimonialItems[index]
		card.quote.content = text
		props.setAttributes({ testimonialItems: testimonialItems })
	}

	const handleCardCiteNameChange = (text, cardItem, index) => {
		const testimonialItems = [...props.attributes.testimonialItems]
		let card = testimonialItems[index]
		card.quote.cite.name = text
		props.setAttributes({ testimonialItems: testimonialItems })
	}

	const handleCardCiteDescriptionChange = (text, cardItem, index) => {
		const testimonialItems = [...props.attributes.testimonialItems]
		let card = testimonialItems[index]
		card.quote.cite.description = text
		props.setAttributes({ testimonialItems: testimonialItems })
	}

	const handleCardImageSourceChange = (mediaUrl, cardItem, index) => {
		const testimonialItems = [...props.attributes.testimonialItems]
		let card = testimonialItems[index]
		card.imageSource = mediaUrl
		props.setAttributes({ testimonialItems: testimonialItems })
	}

	const handleCardImageAltTextChange = (altText, cardItem, index) => {
		const testimonialItems = [...props.attributes.testimonialItems]
		let card = testimonialItems[index]
		card.imageAltText = altText
		props.setAttributes({ testimonialItems: testimonialItems })
	}

	const handleCardImageRemove = (mediaUrl, cardItem, index) => {
		const testimonialItems = [...props.attributes.testimonialItems]
		let card = testimonialItems[index]
		card.imageSource = ""
		props.setAttributes({ testimonialItems: testimonialItems })
	}

	return (
		<PanelBody title={`Card ${index+1}`} key={index}>
			<PanelRow>
				<TextControl
					label="Header text"
					className="card-header-text"
					placeholder="Placeholder text"
					value={cardItem.quote.title}
					onChange={(text) => handleCardHeaderChange(text, cardItem, index)}
				/>
			</PanelRow>
			<PanelRow>
				<TextareaControl
					label="Content text"
					className="card-content-text"
					placeholder="Placeholder text"
					value={cardItem.quote.content}
					onChange={(text) => handleCardContentChange(text, cardItem, index)}
				/>
			</PanelRow>
			<PanelRow>
				<TextControl
					label="Cite Name"
					className="card-cite-name"
					placeholder="Placeholder text"
					value={cardItem.quote.cite.name}
					onChange={(text) => handleCardCiteNameChange(text, cardItem, index)}
				/>
			</PanelRow>
			<PanelRow>
				<TextControl
					label="Cite Description"
					className="card-cite-description"
					placeholder="Placeholder text"
					value={cardItem.quote.cite.description}
					onChange={(text) => handleCardCiteDescriptionChange(text, cardItem, index)}
				/>
			</PanelRow>
			<PanelRow>
				<MediaPlaceholder
					icon="format-image"
					labels={{ title: "Image", instructions: "Upload an image" }}
					allowedTypes = { [ 'image' ] }
					multiple = { false }
					onSelect={(image) => handleCardImageSourceChange(image.url, cardItem, index)}
					mediaPreview={mediaPreview}
				/>
			</PanelRow>
			<PanelRow>
				<TextControl
					label="Image Alt Text"
					className="card-image-alt-text"
					placeholder="Placeholder text"
					value={cardItem.imageAltText}
					onChange={(text) => handleCardImageAltTextChange(text, cardItem, index)}
				/>
			</PanelRow>
			<PanelRow>
				<Button variant="secondary" size="small" onClick={(event) => handleCardImageRemove(event, cardItem, index)}>
					{__("Remove Image")}
				</Button>
			</PanelRow>
		<PanelRow>
			<Button variant="secondary" size="small" onClick={(event) => handleRemoveCard(event, index)}>
				{__("Remove Card")}
			</Button>
		</PanelRow>
		</PanelBody>
	)
}
