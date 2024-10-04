# Unity Carousels

 - Contributors:      ASU KE Web Services
 - Tested up to:      6.6.2
 - Stable tag:        v1.1.0
 - License:           GPL-2.0-or-later
 - License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Carousels built with glidejs, customized for the ASU Unity Design System.

## Installation

> [!IMPORTANT]
> ASU specific CSS styling is provided by the theme. `ASU-KE/UDS-WordPress-Theme >= v1.0` contains the required styling.

- Upload the plugin files to the `/wp-content/plugins/unity-carousels` directory, or install the compressed plugin flies through the WordPress plugins screen directly.
- Activate the plugin through the 'Plugins' screen in WordPress

## Development

- `.npmrc`: Add your `authToken` from Github to access the `@asu` package registry. Do not commit token.

### Install resources

- `npm i`: installs `wp-scripts`, the build tools to scaffold the block, and `glidejs` default resources available to copy into `/resources`.

### Clone submodule resources

There is a command in Git to clone both the top level project and all submodules.
If a developer cloned directly from Github, submodule files will not have been pulled. To get the rest of the files:

- `git pull --recurse-submodules` pulls latest submodule files
- `git submodule update --init` set submodule files to the main repo commit. Developers must track submodule commits in the main project, to keep compiling builds across team members in sync.

### Install submodule package resources
After cloning, the unity package being used needs dependencies installed.
- `cd packages/component-carousel`
- `npm i --legacy-peer-deps`

### glide.js ASU UDS styles
The ASU specific CSS styling is contained in `glide.theme.scss` in `@asu/asu-unity-stack/packages/component-carousel`. Currently that SCSS file needs to be compiled in the theme for the complete experience. The carousel is functional without this SCSS file.

### Update default glide.js assets
- `npm i`
- copy `glide.min.js` and `glide.core.min.css` to `resources/glidejs`

### Update resources folder: ASU Unity Stack carousel packages

When an update for `component-carousel` from UDS is released, a developer can update the resources folder and build the new carousel.

- the `ke-dev` branch is intended to mirror latest updates from `@asu/asu-unity-stack`. If needed, clone the `ke-dev` fork from Github to a directory outside of this project, and merge upstream changes to Github.
- `cd resources/asu-unity-stack/`
- double check git branch has switched from `unity-carousels project branch` to git branch `ke-dev`: `git status`
- `git pull` get latest updates
- Change directory back to the top level `unity-carousels project branch`, commit the submodule directory update ` modified:  resources/asu-unity-stack (modified content)`.
- build latest

## Changelog
### 1.1.0
- testimonial: add example  variations
- testimonial: citation fields
- testimonial: remove img button
### 1.0.0
- Release
