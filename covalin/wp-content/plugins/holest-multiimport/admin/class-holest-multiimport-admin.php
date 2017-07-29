<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       http://holest.com
 * @since      1.0.0
 *
 * @package    Cross-site Import/Export
 * @subpackage Excel-like product manager multi-import addon
*/

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Holest_Multiimport
 * @subpackage Holest_Multiimport/admin
 * @author     Your Name <email@example.com>
 */
class Holest_Multiimport_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $holest_multiimport    The ID of this plugin.
	 */
	private $holest_multiimport;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $holest_multiimport       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $holest_multiimport, $version ) {
		
		$this->holest_multiimport = $holest_multiimport;
		$this->version = $version;
		
		global $holest_multiimport_load ;
		if($holest_multiimport_load && is_admin()){
			$this->enqueue_styles();
			$this->enqueue_scripts();
		}
	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {
		
		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Holest_Multiimport_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Holest_Multiimport_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */
		
	
		wp_enqueue_style( $this->holest_multiimport . "_BS", 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css', array(), $this->version, 'all' );
	
		wp_enqueue_style( $this->holest_multiimport, plugin_dir_url( __FILE__ ) . 'css/holest-multiimport-admin.css', array(), $this->version, 'all' );
		

	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {
		

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Holest_Multiimport_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Holest_Multiimport_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( $this->holest_multiimport . "_BS", 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js', array( 'jquery' ), $this->version, false );
		wp_enqueue_script( $this->holest_multiimport, plugin_dir_url( __FILE__ ) . 'js/holest-multiimport-admin.js', array( 'jquery' ), "1.0.3", false );
		wp_enqueue_script( $this->holest_multiimport. "_XSLX", plugin_dir_url( __FILE__ ) . 'js/xlsx.full.min.js', array( 'jquery' ), $this->version, false );
		wp_enqueue_script( $this->holest_multiimport. "_CSV", plugin_dir_url( __FILE__ ) . 'js/jquery.csv.min.js', array( 'jquery' ), $this->version, false );
		wp_enqueue_script( $this->holest_multiimport. "_FSB", plugin_dir_url( __FILE__ ) . 'js/Blob.js', array( 'jquery' ), $this->version, false );
		wp_enqueue_script( $this->holest_multiimport. "_FS", plugin_dir_url( __FILE__ ) . 'js/FileSaver.js', array( 'jquery' ), $this->version, false );

	}

}
