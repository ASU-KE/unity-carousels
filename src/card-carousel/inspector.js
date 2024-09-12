import { __ } from "@wordpress/i18n"
import { InspectorControls, MediaPlaceholder } from "@wordpress/block-editor"
import { Button, PanelBody, PanelRow, TextControl, TextareaControl, ToggleControl, SelectControl } from "@wordpress/components"
import anonImg from "../../resources/asu-unity-stack/shared/assets/img/named/anon.png"

/**
 * Inspector controls
 *
 * @param {Object} props
 */

const Inspector = (props) => {

	const newCard = {
		id: 0,
		imageSource: anonImg,
		imageAltText: "image alt text",
		title: "Card 1",
		content: "Body 1 copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",
		buttons: [
			{
				ariaLabel: "descriptive text for screen readers",
				color: "maroon",
				href: "#",
				label: `Button 1 link here`,
				size: "default",
				//onClick: () => window.alert("alert"),
			},
		],
	}

	const handlePerViewChange = (perView) => {
		props.setAttributes({ perView })
	}

	const handleMaxWidthChange = (maxWidth) => {
		props.setAttributes({ maxWidth })
	}

	const toggleHorizontalCard = (checked) => {
		props.setAttributes({ cardHorizontal: checked })
	}

  const handleAddCard = () => {
    const cardItems = [...props.attributes.cardItems]
		if( cardItems[0].id === 9999 ) {
			props.setAttributes( { cardItems: [ newCard ] } )
		} else {
			let length = cardItems.length
			newCard.id = length
			props.setAttributes( { cardItems: [ ...cardItems, newCard ] } )
		}
  }

	const handleRemoveCard = (event, index) => {
		const cardItems = [...props.attributes.cardItems]
		let filteredCardItems = cardItems.filter((card) => card.id !== index)
		filteredCardItems.forEach((card, i) => { card.id = i })
		props.setAttributes({ cardItems: filteredCardItems })
	}

	function returnLast(arr) {
		return arr.at(-1)
	}

	const handleCardHeaderChange = (text, cardItem, index) => {
		const cardItems = [...props.attributes.cardItems]
		let card = cardItems[index]
		card.title = text
		props.setAttributes({ cardItems: cardItems })
	}

	const handleCardContentChange = (text, cardItem, index) => {
		const cardItems = [...props.attributes.cardItems]
		let card = cardItems[index]
		card.content = text
		props.setAttributes({ cardItems: cardItems })
	}

	const handleCardImageSourceChange = (mediaUrl, cardItem, index) => {
		const cardItems = [...props.attributes.cardItems]
		let card = cardItems[index]
		card.imageSource = mediaUrl
		props.setAttributes({ cardItems: cardItems })
	}

	const handleButtonLabelChange = (label, cardItem, index) => {
		const cardItems = [...props.attributes.cardItems]
		let card = cardItems[index]
		card.buttons[0].label = label
		props.setAttributes({ cardItems: cardItems })
	}

	const handleButtonHrefChange = (url, cardItem, index) => {
		const cardItems = [...props.attributes.cardItems]
		let card = cardItems[index]
		card.buttons[0].href = url
		props.setAttributes({ cardItems: cardItems })
	}

	const handleButtonColorChange = (color, cardItem, index) => {
		const cardItems = [...props.attributes.cardItems]
		let card = cardItems[index]
		card.buttons[0].color = color
		props.setAttributes({ cardItems: cardItems })
	}

	const handleButtonSizeChange = (size, cardItem, index) => {
		const cardItems = [...props.attributes.cardItems]
		let card = cardItems[index]
		card.buttons[0].size = size
		props.setAttributes({ cardItems: cardItems })
	}

	const handleButtonAriaLabelChange = (ariaLabel, cardItem, index) => {
		const cardItems = [...props.attributes.cardItems]
		let card = cardItems[index]
		card.buttons[0].ariaLabel = ariaLabel
		props.setAttributes({ cardItems: cardItems })
	}

	const handleRemoveButton = (event, cardItem, index) => {
		const cardItems = [...props.attributes.cardItems]
		let card = cardItems[index]
		card.buttons = [{ariaLabel: null,color: null,href: null,label:null,size: null}]
		props.setAttributes({ cardItems: cardItems })
	}

	let cardItemFields

	if (props.attributes.cardItems.length && props.attributes.cardItems[0].id !== 9999) {

		cardItemFields = props.attributes.cardItems.map((cardItem, index) => {

			if( cardItem.id < 9999 ) {

				const mediaPreview = !! cardItem.imageSource && (<img src={ cardItem.imageSource } />)

				return (
					<PanelBody title={`Card ${index+1}`} key={index}>
						<PanelRow>
							<TextControl
								label="Header text"
								className="card-header-text"
								placeholder="Placeholder text"
								value={cardItem.title}
								onChange={(text) => handleCardHeaderChange(text, cardItem, index)}
							/>
						</PanelRow>
						<PanelRow>
							<TextareaControl
								label="Content text"
								className="card-content-text"
								placeholder="Placeholder text"
								value={cardItem.content}
								onChange={(text) => handleCardContentChange(text, cardItem, index)}
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
						<PanelBody title={__("CTA Button")}>
					<PanelRow>
						<TextControl
							label={__("Button Label")}
							value={cardItem.buttons[0].label}
							onChange={(label) => handleButtonLabelChange(label, cardItem, index)}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={__("Button URL")}
							value={cardItem.buttons[0].href}
							onChange={(url) => handleButtonHrefChange(url, cardItem, index)}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label={__("Button Color")}
							value={cardItem.buttons[0].color}
							options={[
								{ label: "Maroon", value: "maroon" },
								{ label: "Gold", value: "gold" },
								{ label: "Gray", value: "gray" },
								{ label: "Dark", value: "dark" },
							]}
							onChange={(color) => handleButtonColorChange(color, cardItem, index)}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label={__("Button Size")}
							value={cardItem.buttons[0].size}
							options={[
								{ label: "Small", value: "small" },
								{ label: "Default", value: "default" },
								{ label: "X-Small", value: "xsmall" },
							]}
							onChange={(size) => handleButtonSizeChange(size, cardItem, index)}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={__("Button Aria Label")}
							value={cardItem.buttons[0].ariaLabel}
							onChange={(ariaLabel) => handleButtonAriaLabelChange(ariaLabel, cardItem, index)}
						/>
					</PanelRow>
					<PanelRow>
						<Button variant="secondary" size="small" onClick={(event) => handleRemoveButton(event, cardItem, index)}>
							{__("Remove Button")}
						</Button>
					</PanelRow>
					</PanelBody>
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
						label={__("Horizontal Cards")}
						checked={props.attributes.cardHorizontal}
						onChange={toggleHorizontalCard}
					/>
				</PanelRow>
			</PanelBody>
			<PanelBody title={__("Carousel Cards")}>
				{cardItemFields}
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
