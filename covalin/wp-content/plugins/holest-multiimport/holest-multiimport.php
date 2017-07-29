<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              http://www.holest.com/
 * @since             1.0.4
 * @package           holest_multiimport
 *
 * @wordpress-plugin
 * Plugin Name:       Excel-like product manager for wooCommerce multi-import addon
 * Plugin URI:        http://www.holest.com/
 * Description:       This plugin is used to import/export products for e-ceramica.com on multiple sites.
 * Version:           1.0.6
 * Author:            Holest
 * Author URI:        http://www.holest.com/
 * License:           CUSTOM HOLEST ENGINEERING
 * License URI:       www.holest.com
 * Text Domain:       holest-multiimport
 * Domain Path:       /languages
 */

// If this file is called directly, abort.

global $holest_multiimport_load ;
$holest_multiimport_load = false; 


if(isset($_REQUEST["page"])){
	if( stripos($_REQUEST["page"],"holest-multiimport") === 0){
		$holest_multiimport_load = true;
	}
	
}

if(isset($_REQUEST["action"])){
	if(stripos($_REQUEST["action"],"holest_multiimport") === 0){
		$holest_multiimport_load = true;
	}
}



//if(!$run_plugin)
//	return;


if ( ! defined( 'WPINC' ) ) {
	die;
}


/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-holest-multiimport-activator.php
 */
function activate_holest_multiimport() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-holest-multiimport-activator.php';
	holest_multiimport_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-holest-multiimport-deactivator.php
 */
function deactivate_holest_multiimport() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-holest-multiimport-deactivator.php';
	holest_multiimport_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_holest_multiimport' );
register_deactivation_hook( __FILE__, 'deactivate_holest_multiimport' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-holest-multiimport.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function muliimport_load(){
	if(isset($_REQUEST['action'])){
			
		if($_REQUEST['action'] == "holest_multiimport"){
			ob_clean();
			ob_clean();
			ob_clean();
			ob_clean();
			ob_clean();
			ob_clean();
			header("Access-Control-Allow-Origin: *");
			$GLOBALS['holest_multiimport']->update_products_callback();
			die();
		}
	}
}
add_action("wp_loaded","muliimport_load");



