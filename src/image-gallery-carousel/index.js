import { registerBlockType } from "@wordpress/blocks"
import edit from "./edit"
import metadata from "./block.json"
import save from "./save"

registerBlockType(metadata.name, {
  /**
   * @see ./edit.js
   */
  edit,

  /**
   * @see ./save.js
   */
  save,
})
