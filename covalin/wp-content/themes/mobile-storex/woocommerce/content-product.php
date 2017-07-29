<?php
/**
 * The template for displaying product content within loops
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @author  WooThemes
 * @package WooCommerce/Templates
 * @version 3.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $product;

// Ensure visibility
if ( ! $product || ! $product->is_visible() ) {
	return;
}

// Adding extra data for isotope filtering
$attributes = $product->get_attributes();

if ($attributes) {
	foreach ( $attributes as $attribute ) {
		if ( $attribute['is_taxonomy'] ) {
			$values = wc_get_product_terms( $product->get_id(), $attribute['name'], array( 'fields' => 'names' ) );
			$result = implode( ' ', $values );
		} else {
			$values = array_map( 'trim', explode( '|', $attribute['value'] ) );
			$result = implode( ' ', $values );
		}
		$classes[] = strtolower($result);
	}
}

if ( get_option('shop_columns')=='3' ) {
	if ( pt_show_layout()!='layout-one-col' ) {
		$responsive_class = " col-xs-12 col-md-4 col-sm-6";
	} else {
		$responsive_class = " col-xs-12 col-md-4 col-sm-3";
	}
} elseif ( get_option('shop_columns')=='4' ) {
	if ( pt_show_layout()!='layout-one-col' ) {
		$responsive_class = " col-xs-12 col-md-3 col-sm-6";
	} else {
		$responsive_class = " col-xs-12 col-md-3 col-sm-4";
	}
}
$classes[] = $responsive_class;

if (get_option('products_hover_animation_')=='on'){
	$classes[]="animation-on";
}

if (get_option('catalog_mode')=='on'){
	$classes[]="catalog-mode";
}
?>
<li <?php //post_class( $classes ); ?>>
 <a href="<?php echo get_permalink();?>">
  <img src="<?php echo wp_get_attachment_url( get_post_thumbnail_id(get_the_ID()) );?>" alt="<?php echo get_the_ID();?>" title="<?php echo get_the_ID(); ?>" />
 </a>
 <div class="product-name-cat">
  <a href="<?php echo get_permalink();?>"><?php echo get_the_title(); ?></a>
  <?php
    $skuproduct=$product->get_sku();
	if(empty($skuproduct)){
		}else{?>
  sku:<?php echo $product->get_sku(); ?>
  <br />
  <?php
		}?>
  Price:<?php echo $product->get_price_html();?>
 </div> 
 
	<?php
	
	/**
	 * woocommerce_before_shop_loop_item hook.
	 *
	 * @hooked woocommerce_template_loop_product_link_open - 10
	 */
	//do_action( 'woocommerce_before_shop_loop_item' );

	/**
	 * woocommerce_before_shop_loop_item_title hook.
	 *
	 * @hooked woocommerce_show_product_loop_sale_flash - 10
	 * @hooked woocommerce_template_loop_product_thumbnail - 10
	 */
	//do_action( 'woocommerce_before_shop_loop_item_title' );

	/**
	 * woocommerce_shop_loop_item_title hook.
	 *
	 * @hooked woocommerce_template_loop_product_title - 10
	 */
	//do_action( 'woocommerce_shop_loop_item_title' ); 
	
	/*if ( $p->post_excerpt ) : ?>
		<div class="entry-content">
				<?php echo apply_filters( 'woocommerce_short_description', $post->post_excerpt ) ?>
		</div>
	<?php endif;*/

	/**
	 * woocommerce_after_shop_loop_item_title hook.
	 *
	 * @hooked woocommerce_template_loop_rating - 5
	 * @hooked woocommerce_template_loop_price - 10
	 */
	//do_action( 'woocommerce_after_shop_loop_item_title' );

	/**
	 * woocommerce_after_shop_loop_item hook.
	 *
	 * @hooked woocommerce_template_loop_product_link_close - 5
	 * @hooked woocommerce_template_loop_add_to_cart - 10
	 */
	//do_action( 'woocommerce_after_shop_loop_item' );
	?>
	
</li>
