# Unity Carousels

 - Contributors:      ASU KE Web Services
 - Tags:              carousel, block
 - Tested up to:      6.6.2
 - Stable tag:        v1.0
 - License:           GPL-2.0-or-later
 - License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Carousels built with glidejs, customized for the ASU Unity Design System.

## Installation

- The ASU specific CSS styling is contained in a SASS file in the unity package. Currently that SASS file needs to be compiled in the theme. `ASU-KE/UDS-WordPress-Theme >= v1.0` contains the required styling.
- Upload the plugin files to the `/wp-content/plugins/unity-carousels` directory, or install the compressed plugin flies through the WordPress plugins screen directly.
- Activate the plugin through the 'Plugins' screen in WordPress

### Development

- `.npmrc`: Add your `authToken` from Github to access the `@asu` package registry. Do not commit token.

#### Install resources

- `npm i`: installs `wp-scripts`, the build tools to scaffold the block, and `glidejs` default resources available to copy into `/resources`.

##### Install submodule resources

#### Update resources

#### glide.js ASU UDS styles
The CSS styling is contained in a SASS file in the unity package. Currently that SASS file needs to be compiled in the theme.

#### Update default glide.js assets
- `npm i`
- copy `glide.min.js` and `glide.core.min.css` to `resources/glidejs`

#### Update ASU Unity Stack carousel packages

### Changelog
#### 1.0.0
- Release
