import { __ } from "@wordpress/i18n"
import { InspectorControls } from "@wordpress/block-editor"
import { Button, PanelBody, PanelRow, TextControl, ToggleControl, SelectControl } from "@wordpress/components"
import anonImg from "../../resources/asu-unity-stack/shared/assets/img/named/anon.png"
import TestimonialItem from "./components/testimonialItem"

/**
 * Inspector controls
 *
 * @param {Object} props
 */

const Inspector = (props) => {

	const testimonialCard = {
		id: 0,
		quote: {
			title: "Walt Disney",
			content:"Laughter is timeless, imagination has no age, dreams are forever.",
			cite: {
				name: "",
				description: "",
			},
		},
		imageSource: anonImg,
		imageAltText: `image alt text`,
	}

	const handleMaxWidthChange = (maxWidth) => {
		props.setAttributes({ maxWidth })
	}

	const handleImageAutoSizeChange = (checked) => {
		props.setAttributes({ imageAutoSize: checked })
	}

	const handleHasNavButtonsChange = (checked) => {
		props.setAttributes({ hasNavButtons: checked })
	}

	const handleHasPositionIndicatorsChange = (checked) => {
		props.setAttributes({ hasPositionIndicators: checked })
	}

	const handleContainerCssClassChange = (selectedClass) => {
		let selection = []
		selection.push(selectedClass)
		props.setAttributes({ containerCssClass: selection })
	}

	const handleContentCssClassChange = (selectedClass) => {
		let selection = []
		selection.push(selectedClass)
		props.setAttributes({ contentCssClass: selection })
	}

	const handleTitleHighlightCssClassChange = (selectedClass) => {
		const titleSettings = [...props.attributes.titleCssClass]
		titleSettings[0] = selectedClass
		props.setAttributes({ titleCssClass: titleSettings })
	}

	const handleTitleTextCssClassChange = (selectedClass) => {
		const titleSettings = [...props.attributes.titleCssClass]
		titleSettings[1] = selectedClass
		props.setAttributes({ titleCssClass: titleSettings })
	}

  const handleAddCard = () => {
    const testimonialItems = [...props.attributes.testimonialItems]
		if( testimonialItems[0].id === 9999 ) {
			props.setAttributes( { testimonialItems: [ testimonialCard ] } )
		} else {
			let length = testimonialItems.length
			testimonialCard.id = length
			props.setAttributes( { testimonialItems: [ ...testimonialItems, testimonialCard ] } )
		}
  }
	let cardItemFields

	if (props.attributes.testimonialItems.length && props.attributes.testimonialItems[0].id !== 9999) {

		cardItemFields = props.attributes.testimonialItems.map((cardItem, index) => {

			return (
				<TestimonialItem cardItem={cardItem} index={index} props={props} />
			)

		})
	}

	return (
    <InspectorControls>
			<PanelBody title={__("Carousel Settings")}>
				<PanelRow>
					<TextControl
						label={__("Max Width")}
						value={props.attributes.maxWidth}
						onChange={handleMaxWidthChange}
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={__("Image Auto Size")}
						help={__("Automatically resize images to fit the carousel card size. Default in UDS system is to autosize.")}
						checked={props.attributes.imageAutoSize}
						onChange={handleImageAutoSizeChange}
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={__("Show Navigation Buttons")}
						help={__("Display navigation arrows for the carousel. Hide for a single testimonial.")}
						checked={props.attributes.hasNavButtons}
						onChange={handleHasNavButtonsChange}
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={__("Show Position Indicators")}
						help={__("Display position indicator dots for each slide in the carousel. Hide for a single testimonial.")}
						checked={props.attributes.hasPositionIndicators}
						onChange={handleHasPositionIndicatorsChange}
					/>
				</PanelRow>
				<PanelRow>
					<SelectControl
						label={__("Quote mark/Accent color")}
						value={props.attributes.containerCssClass}
						options={[
							{ label: "Accent Gold", value: ["accent-gold"] },
							{ label: "Accent Maroon", value: ["accent-maroon"] },
							{ label: "Accent Dark", value: ["accent-gray-5"] },
						]}
						onChange={(selectedClass) => handleContainerCssClassChange(selectedClass)}
					/>
				</PanelRow>
				<PanelRow>
					<SelectControl
						label={__("Content color")}
						value={props.attributes.contentCssClass}
						options={[
							{ label: "Text Gold", value: ["text-gold"] },
							{ label: "Text Maroon", value: ["text-maroon"] },
							{ label: "Text Gray", value: ["text-gray"] },
							{ label: "Text Dark", value: ["text-dark"] },
							{ label: "Text Light", value: ["text-light"] },
						]}
						onChange={(selectedClass) => handleContentCssClassChange(selectedClass)}
					/>
				</PanelRow>
				<PanelRow>
						<SelectControl
							label={__("Header Hihglight color")}
							value={props.attributes.titleCssClass[0]}
							options={[
								{ label: "Highlight Gold", value: "highlight-gold" },
								{ label: "Highlight Dark", value: "highlight-black" },
								{ label: "Highlight Light", value: "highlight-white" },
							]}
							onChange={(selectedClass) => handleTitleHighlightCssClassChange(selectedClass)}
						/>
				</PanelRow>
				<PanelRow>
					<SelectControl
						label={__("Header text color")}
						value={props.attributes.titleCssClass[1]}
						options={[
							{ label: "Text Gold", value: "text-gold" },
							{ label: "Text Maroon", value: "text-maroon" },
							{ label: "Text Gray", value: "text-gray" },
							{ label: "Text Dark", value: "text-dark" },
							{ label: "Text Light", value: "text-light" },
						]}
						onChange={(selectedClass) => handleTitleTextCssClassChange(selectedClass)}
					/>
				</PanelRow>
			</PanelBody>
			<PanelBody title={__("Testimonial Cards")}>
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
