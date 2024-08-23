/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n"
import { InspectorControls, MediaPlaceholder } from "@wordpress/block-editor"
import { Button, IconButton, PanelBody, PanelRow, TextControl, TextareaControl } from "@wordpress/components"

/**
 * Inspector controls
 *
 * @param {Object} props
 */

const Inspector = (props) => {
	const newCard = {
		id: 0,
		imageSource: "/resources/asu-unity-stack/shared/assets/img/named/anon.png",
		imageAltText: "Card image cap",
		title: "Card 1",
		content:
		"Body 1 copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit\n      amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n      ut labore et dolore magna aliqua eiusmod tempo.",
		buttons: [
		{
			ariaLabel: "dummy button",
			color: "maroon",
			href: "#",
			label: `Button 1 link here`,
			size: "default",
			onClick: () => window.alert("Holoa Amigo 😃."),
		},
		],
	}
  const handleAddCard = () => {
    const cardItems = [...props.attributes.cardItems]
		console.log( returnLast(cardItems) )
		if( cardItems[0].id === 9999 ) {
			props.setAttributes( { cardItems: [ newCard ] } )
		} else {
			props.setAttributes( { cardItems: [ ...cardItems, newCard ] } )
		}
			 // Good - a new array is created from the old list attribute and a new list item:
//const { list } = attributes;
//const addListItem = ( newListItem ) =>
//    setAttributes( { list: [ ...list, newListItem ] } );
  };
	function returnLast(arr) {
		return arr.at(-1);
	}

	const handleCardHeaderChange = (text, cardItem, index) => {
		const cardItems = [...props.attributes.cardItems]
		let card = cardItems[index]
		card.title = text
		props.setAttributes({ cardItems: cardItems });
	}
	const handleCardContentChange = (text, cardItem, index) => {
		const cardItems = [...props.attributes.cardItems]
		let card = cardItems[index]
		card.content = text
		props.setAttributes({ cardItems: cardItems });
	}
	const handleCardImageSourceChange = (mediaUrl, cardItem, index) => {
		const cardItems = [...props.attributes.cardItems]
		let card = cardItems[index]
		card.imageSource = mediaUrl
		props.setAttributes({ cardItems: cardItems });
	}

	let cardItemFields
  // const handleRemoveItem = (index) => {
  //   const itemIcons = [...props.attributes.itemIcons];
  //   const itemTexts = [...props.attributes.itemTexts];
  //   const itemTargets = [...props.attributes.itemTargets];
  //   itemIcons.splice(index, 1);
  //   itemTexts.splice(index, 1);
  //   itemTargets.splice(index, 1);
  //   props.setAttributes({ itemIcons });
  //   props.setAttributes({ itemTexts });
  //   props.setAttributes({ itemTargets });
  // };

  // const handleItemTextChange = (text, index) => {
  //   const itemTexts = [...props.attributes.itemTexts];
  //   itemTexts[index] = text;
  //   props.setAttributes({ itemTexts });
  // };

  // const handleItemTargetChange = (targetIdName, index) => {
  //   const itemTargets = [...props.attributes.itemTargets];
  //   itemTargets[index] = targetIdName;
  //   props.setAttributes({ itemTargets });
  // };

  // const handleItemIconChange = (icon, index) => {
  //   const itemIcons = [...props.attributes.itemIcons];
  //   itemIcons[index] = icon;
  //   props.setAttributes({ itemIcons });
  // }

  // const handleItemIconValueChange = (index, value, itemIndex) => {
  //   const itemIcons = [...props.attributes.itemIcons];
  //   let icon = itemIcons[itemIndex];
  //   if (!Array.isArray(icon) || icon.length !== 2) {
  //     icon = ["", ""];
  //   }
  //   icon[index] = value;
  //   handleItemIconChange(icon, itemIndex);
  // }

  // let itemFields;

  // if (props.attributes.itemTexts.length) {
  //   itemFields = props.attributes.itemTexts.map((itemText, index) => {
  //     return (
  //       <PanelBody>
  //         <PanelRow key={index}>
  //           <TextControl
  //             label="Icon prefix"
  //             className="anchormenu__item-icon-prefix"
  //             placeholder="(optional) 'fa', 'fas', 'fa-solid'"
  //             value={props.attributes.itemIcons[index][0]}
  //             onChange={(text) => handleItemIconValueChange(0, text, index)}
  //           />
  //           </PanelRow>
  //           <PanelRow>
  //           <TextControl
  //             label="Icon class name"
  //             className="anchormenu__item-icon-name"
  //             placeholder="(optional) 'users', 'tasks'"
  //             value={props.attributes.itemIcons[index][1]}
  //             onChange={(text) => handleItemIconValueChange(1, text, index)}
  //           />
  //         </PanelRow>
  //         <PanelRow key={index}>
  //           <TextControl
  //             label="Text for menu item"
  //             className="anchormenu__item-text"
  //             placeholder="'About'"
  //             value={props.attributes.itemTexts[index]}
  //             onChange={(text) => handleItemTextChange(text, index)}
  //           />
  //         </PanelRow>
  //         <PanelRow>
  //           <TextControl
  //             label="Target ID for menu item"
  //             className="anchormenu__item-targetIdName"
  //             placeholder="'about'"
  //             value={props.attributes.itemTargets[index]}
  //             onChange={(targetIdName) =>
  //               handleItemTargetChange(targetIdName, index)
  //             }
  //           />
  //         </PanelRow>
  //         <PanelRow>
  //           <IconButton
  //             className="anchormenu__remove-item-text"
  //             icon="no-alt"
  //             label="Delete item"
  //             onClick={() => handleRemoveItem(index)}
  //           />
  //         </PanelRow>
  //       </PanelBody>
  //     );
  //   });
  // }
	if (props.attributes.cardItems.length && props.attributes.cardItems[0].id !== 9999) {
		cardItemFields = props.attributes.cardItems.map((cardItem, index) => {
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
						/>
					</PanelRow>
				</PanelBody>
			)
		})
	}


  return (
    <InspectorControls>
      <PanelBody title={__("Carousel Cards")}>
				{cardItemFields}
        <PanelRow>
          <Button onClick={handleAddCard.bind(this)}>
            {__("Add Card")}
          </Button>
        </PanelRow>
      </PanelBody>
    </InspectorControls>
  )
}

export default Inspector
