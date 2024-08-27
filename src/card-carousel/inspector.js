/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n"
import { InspectorControls, MediaPlaceholder } from "@wordpress/block-editor"
import { Button, IconButton, PanelBody, PanelRow, TextControl, TextareaControl, ToggleControl, SelectControl } from "@wordpress/components"
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
				//onClick: () => window.alert("Holoa Amigo 😃."),
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
		console.log( returnLast(cardItems) )
		if( cardItems[0].id === 9999 ) {
			props.setAttributes( { cardItems: [ newCard ] } )
		} else {
			let length = cardItems.length
			newCard.id = length
			props.setAttributes( { cardItems: [ ...cardItems, newCard ] } )
		}
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

	const handleItemTargetChange = (targetBool, index) => {
		const cardItems = [...props.attributes.cardItems]
		let card = cardItems[index]
		if (targetBool) {
			card.buttons[0].target = "_blank"
		} else {
			card.buttons[0].target = "_self"
		}
		props.setAttributes({ cardItems: cardItems })
	}

	// const handleAddCtaButton = () => {
	// 	const cardItems = [...props.attributes.cardItems]
	// 	let card = cardItems[index]
	// 	card.buttons.push({
	// 		ariaLabel: "dummy button",
	// 		color: "maroon",
	// 		href: "#",
	// 		label: `Button 1 link here`,
	// 		size: "default",
	// 		onClick: () => window.alert("Holoa Amigo 😃."),
	// 	})
	// 	props.setAttributes({ cardItems: cardItems });
	// }

	let cardItemFields

  // const handleItemTargetChange = (targetIdName, index) => {
  //   const itemTargets = [...props.attributes.itemTargets];
  //   itemTargets[index] = targetIdName;
  //   props.setAttributes({ itemTargets });
  // };

  // const handleItemIconValueChange = (index, value, itemIndex) => {
  //   const itemIcons = [...props.attributes.itemIcons];
  //   let icon = itemIcons[itemIndex];
  //   if (!Array.isArray(icon) || icon.length !== 2) {
  //     icon = ["", ""];
  //   }
  //   icon[index] = value;
  //   handleItemIconChange(icon, itemIndex);
  // }

	if (props.attributes.cardItems.length && props.attributes.cardItems[0].id !== 9999) {
		cardItemFields = props.attributes.cardItems.map((cardItem, index) => {
			const mediaPreview = !! cardItem.imageSource && (
				<img src={ cardItem.imageSource } />
			);
			let targetBool = false
			return (
				<PanelBody title={`Card ${index+1}`}>
					<PanelRow key={index}>
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
					<ToggleControl
						label={__("Open in new tab")}
						checked={targetBool}
						onChange={(targetBool) => handleItemTargetChange(targetBool, index)}
					/>
				</PanelRow>
				</PanelBody>
				<PanelRow>
					<Button variant="secondary" size="small">
						{__("Remove Card")}
					</Button>
				</PanelRow>
				</PanelBody>
			)
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
