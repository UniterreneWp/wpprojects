<?php
/**
* Plugin Name: Woo Add To Cart With Qrt
* Plugin URI: http://uniterrene.com/
* Description: Uniterrene websoft is an outsourcing IT & Software offshore development company which provides professional web designing services.
* Version: 7.0 
* Author: Uniterrene
* Author URI: http://uniterrene.com/
* License: UNIDS011
*/
define( 'WOOADDTOCARTQRT_DIR',plugin_dir_path( __FILE__ ) );
register_activation_hook( __FILE__, 'wooaddtocart_install' );
global $lockwpplugin_db_version;
$lockwpplugin_db_version = '7.0';
function wooaddtocart_install() {
	global $wpdb;
	global $wooaddtocart_version;	
	
	
	add_option( 'wooaddtocart_version', $wooaddtocart_version );
}

/*add_action( 'admin_menu', 'woo_addtocart_qrt_menu' );

function woo_addtocart_qrt_menu() {
	add_options_page( 
		'Add To Cart & Qrt Options',
		'Add To Cart & Qrt',
		'manage_options',
		'woo-addtocart-qrt/woo-addtocart-qrt-page.php',
		'woo-addtocart-qrt-page'
	);
}*/

add_action( 'woocommerce_after_shop_loop_item', 'withqrt_remove_add_to_cart_buttons', 1 );
function withqrt_remove_add_to_cart_buttons() {
    remove_action( 'woocommerce_after_shop_loop_item', 'woocommerce_template_loop_add_to_cart' );
}
/**
 * Adds a "More Details" button on list of products (ex. category pages).
 */
add_action( 'woocommerce_after_shop_loop_item', 'withqrt_add_qrt_dropdown', 1 );
function withqrt_add_qrt_dropdown() {
    add_action( 'woocommerce_after_shop_loop_item', 'withqrt_add_with_qrt_dropdown' );
}
function withqrt_add_with_qrt_dropdown() {
	global $product;	
	$options = get_option( 'wooaddtocartqrt_options' );
	//print_r($options);
if( $product->get_price() === '' && $product->product_type != 'external' ) return;
wp_enqueue_script('qty-add-to-cart', get_stylesheet_directory_uri() . '/js/qty-add-to-cart.js', array('jquery'), '1.0.1', true);

 if ( ! $product->is_in_stock() ) : ?>
    <a href="<?php echo get_permalink($product->id); ?>" class="button"><?php echo apply_filters('out_of_stock_add_to_cart_text', __('Read More', 'woocommerce')); ?></a>
<?php else : 
        switch ( $product->product_type ) {
            case "variable" :
                $link   = get_permalink($product->id);
                $label  = apply_filters('variable_add_to_cart_text', __('Select options', 'woocommerce'));
            break;
            case "grouped" :
                $link   = get_permalink($product->id);
                $label  = apply_filters('grouped_add_to_cart_text', __('View options', 'woocommerce'));
            break;
            case "external" :
                $link   = get_permalink($product->id);
                $label  = apply_filters('external_add_to_cart_text', __('Read More', 'woocommerce'));
            break;
            default :
                $link   = esc_url( $product->add_to_cart_url() );
                $label  = apply_filters('add_to_cart_text', __('Add to cart', 'woocommerce'));
            break;
        }
        //printf('<a href="%s" rel="nofollow" data-product_id="%s" class="button add_to_cart_button product_type_%s">%s</a>', $link, $product->id, $product->product_type, $label);
        if ( $product->product_type == 'simple' ) {
			if($options['woo_qrt']==='yes'){
            ?>
            <form action="<?php echo esc_url( $product->add_to_cart_url() ); ?>" class="cart" method="post" enctype='multipart/form-data'>
                <?php woocommerce_quantity_input(); ?>
                <button type="submit" data-quantity="1" data-product_id="<?php echo $product->id; ?>"
                    class="button alt ajax_add_to_cart add_to_cart_button product_type_simple"><?php echo $label; ?></button>
            </form>
            <?php
			}else{
				printf('<a href="%s" rel="nofollow" data-product_id="%s" class="button add_to_cart_button product_type_%s">%s</a>', $link, $product->id, $product->product_type, $label);
				}
				
        }elseif( $product->product_type == 'variable' ){		
		if($options['woo_choosoption']==='yes'){	
			woocommerce_variable_add_to_cart();
		} else {
            printf('<a href="%s" rel="nofollow" data-product_id="%s" class="button add_to_cart_button product_type_%s">%s</a>', $link, $product->id, $product->product_type, $label);
        }
			} else {
            printf('<a href="%s" rel="nofollow" data-product_id="%s" class="button add_to_cart_button product_type_%s">%s</a>', $link, $product->id, $product->product_type, $label);
        }
 endif; 
	}
	
	
	/**
 * top level menu
 */
function withqrt_options_page() {
 // add top level menu page
 add_menu_page(
 'Add To Cart & Qrt',
 'Add To Cart & Qrt Options',
 'manage_options',
 'wooaddtocartqrt',
 'withqrt_options_page_html'
 );
}
 
/**
 * register our withqrt_options_page to the admin_menu action hook
 */
add_action( 'admin_menu', 'withqrt_options_page' );
 
/**
 * top level menu:
 * callback functions
 */
function withqrt_options_page_html() {
 // check user capabilities
 if ( ! current_user_can( 'manage_options' ) ) {
 return;
 }
 
 // add error/update messages
 
 // check if the user have submitted the settings
 // wordpress will add the "settings-updated" $_GET parameter to the url
 if ( isset( $_GET['settings-updated'] ) ) {
 // add settings saved message with the class of "updated"
 add_settings_error( 'withqrt_messages', 'withqrt_message', __( 'Settings Saved', 'wooaddtocartqrt' ), 'updated' );
 }
 
 // show error/update messages
 settings_errors( 'withqrt_messages' );
 ?>
 <div class="wrap">
 <h1><?php echo esc_html( get_admin_page_title() ); ?></h1>
 <form action="options.php" method="post">
 <?php
 // output security fields for the registered setting "wooaddtocartqrt"
 settings_fields( 'wooaddtocartqrt' );
 // output setting sections and their fields
 // (sections are registered for "wooaddtocartqrt", each field is registered to a specific section)
 do_settings_sections( 'wooaddtocartqrt' );
 // output save settings button
 submit_button( 'Save Settings' );
 ?>
 </form>
 </div>
 <?php
}


/**
 * custom option and settings
 */
function wooaddtocartqrt_settings_init() {
 // register a new setting for "wooaddtocartqrt" page
 register_setting( 'wooaddtocartqrt', 'wooaddtocartqrt_options' );
 
 // register a new section in the "wooaddtocartqrt" page
 add_settings_section(
 'wooaddtocartqrt_section_custom',
 __( '', 'wooaddtocartqrt' ),
 'wooaddtocartqrt_section_custom_cb',
 'wooaddtocartqrt'
 );
 
 // register a new field in the "wooaddtocartqrt_section_custom" section, inside the "wooaddtocartqrt" page
 add_settings_field(
 'woo_choosoption', // as of WP 4.6 this value is used only internally
 // use $args' _choosoption to populate the id inside the callback
 __( 'Choose an option', 'wooaddtocartqrt' ),
 'wooaddtocartqrt_choosoption_cb',
 'wooaddtocartqrt',
 'wooaddtocartqrt_section_custom',
 [
 '_choosoption' => 'woo_choosoption',
 'class' => 'wooaddtocartqrt_row',
 'wooaddtocartqrt_custom_data' => 'custom',
 ]
 );
  add_settings_field(
 'woo_qrt', // as of WP 4.6 this value is used only internally
 // use $args' _qrt to populate the id inside the callback
 __( 'Qrt Field', 'wooaddtocartqrt' ),
 'wooaddtocartqrt_field_qrt_cb',
 'wooaddtocartqrt',
 'wooaddtocartqrt_section_custom',
 [
 '_qrt' => 'woo_qrt',
 'class' => 'wooaddtocartqrt_row',
 'wooaddtocartqrt_custom_data' => 'custom',
 ]
 );
 
}
 
 
 function wooaddtocartqrt_section_custom_cb( $args ) {

}

function wooaddtocartqrt_choosoption_cb( $args ) {
 // get the value of the setting we've registered with register_setting()
 $options = get_option( 'wooaddtocartqrt_options' );
 // output the field
 ?>Yes <input type="radio" name="wooaddtocartqrt_options[<?php echo esc_attr( $args['_choosoption'] ); ?>]" value="yes" <?php if($options[ $args['_choosoption'] ]==='yes'){ echo 'checked="checked"';}?>  /> No<input type="radio" name="wooaddtocartqrt_options[<?php echo esc_attr( $args['_choosoption'] ); ?>]" value="no" <?php if($options[ $args['_choosoption'] ]==='no'){ echo 'checked="checked"';}?> />
 <?php
}
  function wooaddtocartqrt_field_qrt_cb( $args ) {
 // get the value of the setting we've registered with register_setting()
 $options = get_option( 'wooaddtocartqrt_options' );
 // output the field
 ?>
 Yes <input type="radio" name="wooaddtocartqrt_options[<?php echo esc_attr( $args['_qrt'] ); ?>]" value="yes" <?php if($options[ $args['_qrt'] ]==='yes'){ echo 'checked="checked"';}?>  /> No<input type="radio" name="wooaddtocartqrt_options[<?php echo esc_attr( $args['_qrt'] ); ?>]" value="no" <?php if($options[ $args['_qrt'] ]==='no'){ echo 'checked="checked"';}?> />
 <?php
}

/**
 * register our wooaddtocartqrt_settings_init to the admin_init action hook
 */
add_action( 'admin_init', 'wooaddtocartqrt_settings_init' );

?>