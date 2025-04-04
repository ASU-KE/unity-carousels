<?php
/**
 * Plugin Name:       Unity Carousels
 * Description:       Carousels built with glidejs customized for UDS.
 * Requires at least: 6.2.0
 * Requires PHP:      7.4
 * Version:           1.4.0
 * Author:            ASU KE Web Services
 * Author URI:        https://rto.asu.edu/web-services
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       unity-carousels
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_unity_carousels_block_init() {
	register_block_type( __DIR__ . '/build/card-carousel' );
	register_block_type( __DIR__ . '/build/image-carousel' );
	register_block_type( __DIR__ . '/build/image-gallery-carousel' );
	register_block_type( __DIR__ . '/build/testimonial-carousel' );
}
add_action( 'init', 'create_block_unity_carousels_block_init' );
/**
 * Register a custom category in the Block Editor that we can use for organizing our blocks.
 */
function unitycarousels_register_block_category($categories)
{
	// Adding a new category.
	$categories[] = array(
		'slug'  => 'unity-carousels',
		'title' => 'Unity Carousels'
	);

	return $categories;
}
add_filter('block_categories_all', 'unitycarousels_register_block_category');

function unity_carousels_scripts() {
	wp_enqueue_script( 'unity-carousels-glidejs', plugin_dir_url(__FILE__) . 'resources/glidejs/glide.min.js', array(), '3.6.2', true );
	wp_enqueue_style('unity-carousels-glidejs-style', plugin_dir_url(__FILE__) . 'resources/glidejs/glide.core.min.css', array(), '3.6.2', 'all');
}
add_action( 'wp_enqueue_scripts', 'unity_carousels_scripts' );
