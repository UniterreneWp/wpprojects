<?php

/**

 * Cart Page

 *

 * This template can be overridden by copying it to yourtheme/woocommerce/cart/cart.php.

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

 * @version 3.0.3

 */



if ( ! defined( 'ABSPATH' ) ) {

	exit; // Exit if accessed directly

}



wc_print_notices(); ?>



<div class="cart-info-block">
	<h2>* shipping Info</h2>
	<ul>
		<li>$ 13.97 for all orders $0 to $100.00 before HST. </li>
		<li>$ 17.97 for all orders $100.01 to $249.49 before HST. </li>
		<li>Free for all the orders Over $250.00 before HST.</li>
	</ul>
	
</div>



<?php do_action( 'woocommerce_before_cart' ); ?>



<form class="woocommerce-cart-form" action="<?php echo esc_url( wc_get_cart_url() ); ?>" method="post">

	<?php do_action( 'woocommerce_before_cart_table' ); ?>



<table class="shop_table shop_table_responsive cart woocommerce-cart-form__contents" cellspacing="0">

	<thead>

		<tr>

			<th class="product-remove">&nbsp;</th>

			<th class="product-thumbnail"><?php esc_html_e( 'Product', 'storex' ); ?></th>

			<th class="product-name"></th>

			<th class="product-avail"><?php esc_html_e( 'Avail', 'storex' ); ?></th>

			<th class="product-price"><?php esc_html_e( 'Price', 'storex' ); ?></th>

			<th class="product-quantity"><?php esc_html_e( 'Quantity', 'storex' ); ?></th>

			<th class="product-subtotal"><?php esc_html_e( 'Total', 'storex' ); ?></th>

		</tr>

	</thead>

	<tbody>

		<?php do_action( 'woocommerce_before_cart_contents' ); ?>



		<?php

		foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ) {

			$_product     = apply_filters( 'woocommerce_cart_item_product', $cart_item['data'], $cart_item, $cart_item_key );

			$product_id   = apply_filters( 'woocommerce_cart_item_product_id', $cart_item['product_id'], $cart_item, $cart_item_key );



			if ( $_product && $_product->exists() && $cart_item['quantity'] > 0 && apply_filters( 'woocommerce_cart_item_visible', true, $cart_item, $cart_item_key ) ) {

				?>

				<tr class="woocommerce-cart-form__cart-item <?php echo esc_attr( apply_filters( 'woocommerce_cart_item_class', 'cart_item', $cart_item, $cart_item_key ) ); ?>">



				<td class="product-remove">

							<?php

								echo apply_filters( 'woocommerce_cart_item_remove_link', sprintf(

									'<a href="%s" class="remove" aria-label="%s" data-product_id="%s" data-product_sku="%s">&times;</a>',

									esc_url( WC()->cart->get_remove_url( $cart_item_key ) ),

									esc_html__( 'Remove this item', 'storex' ),

									esc_attr( $product_id ),

									esc_attr( $_product->get_sku() )

								), $cart_item_key );

							?>

				</td>

				

					<td class="product-thumbnail">

						<?php

							$thumbnail = apply_filters( 'woocommerce_cart_item_thumbnail', $_product->get_image(), $cart_item, $cart_item_key );



							if ( ! $product_permalink ) {

								echo $thumbnail;

							} else {

								printf( '<a href="%s">%s</a>', esc_url( $product_permalink ), $thumbnail );

							}

						?>

					</td>



					<td class="product-name" data-title="<?php esc_attr_e( 'Product', 'storex' ); ?>">

							<?php

								if ( ! $product_permalink ) {

									echo apply_filters( 'woocommerce_cart_item_name', $_product->get_name(), $cart_item, $cart_item_key ) . '&nbsp;';

								} else {

									echo apply_filters( 'woocommerce_cart_item_name', sprintf( '<a href="%s">%s</a>', esc_url( $product_permalink ), $_product->get_name() ), $cart_item, $cart_item_key );

								}



								// Meta data

								echo WC()->cart->get_item_data( $cart_item );



								// Backorder notification

								if ( $_product->backorders_require_notification() && $_product->is_on_backorder( $cart_item['quantity'] ) ) {

									echo '<p class="backorder_notification">' . esc_html__( 'Available on backorder', 'storex' ) . '</p>';

								}

							?>

					</td>



					<td class="avail"><i class="fa fa-check"></i></td>

					

					<td class="product-price" data-title="<?php esc_attr_e( 'Price', 'storex' ); ?>">

						<?php

							echo apply_filters( 'woocommerce_cart_item_price', WC()->cart->get_product_price( $_product ), $cart_item, $cart_item_key );

						?>

					</td>



					<td class="product-quantity" data-title="<?php esc_attr_e( 'Quantity', 'storex' ); ?>">

							<?php

								if ( $_product->is_sold_individually() ) {

									$product_quantity = sprintf( '1 <input type="hidden" name="cart[%s][qty]" value="1" />', $cart_item_key );

								} else {

									$product_quantity = woocommerce_quantity_input( array(

										'input_name'  => "cart[{$cart_item_key}][qty]",

										'input_value' => $cart_item['quantity'],

										'max_value'   => $_product->backorders_allowed() ? '' : $_product->get_stock_quantity(),

										'min_value'   => '0',

									), $_product, false );

								}



								echo apply_filters( 'woocommerce_cart_item_quantity', $product_quantity, $cart_item_key, $cart_item );

							?>

					</td>



					<td class="product-subtotal" data-title="<?php esc_attr_e( 'Total', 'storex' ); ?>">

							<?php

								echo apply_filters( 'woocommerce_cart_item_subtotal', WC()->cart->get_product_subtotal( $_product, $cart_item['quantity'] ), $cart_item, $cart_item_key );

							?>

						<div class="clear"></div>

					</td>

					

				</tr>

				<?php

			}

		}



		do_action( 'woocommerce_cart_contents' );

		?>

		<tr class="coupon-cart_totals">

			<td colspan="4"  class="actions">



				<?php if ( wc_coupons_enabled() ) { ?>

					<div class="coupon">



						<label for="coupon_code"><?php esc_html_e( 'Coupon', 'storex' ); ?></label> <input type="text" name="coupon_code" class="input-text" id="coupon_code" value="" placeholder="<?php esc_html_e( 'Coupon code', 'storex' ); ?>" /> <input type="submit" class="button" name="apply_coupon" value="<?php esc_html_e( 'Apply Coupon', 'storex' ); ?>" />



						<?php do_action( 'woocommerce_cart_coupon' ); ?>



					</div>

				<?php } ?>

				

				<?php do_action( 'woocommerce_cart_actions' ); ?>



				<?php wp_nonce_field( 'woocommerce-cart' ); ?>

			</td>

			

			<td colspan="3" class="cart-totals">

			<?php do_action( 'woocommerce_cart_collaterals' ); ?>

			</td>

		</tr>



		<?php do_action( 'woocommerce_after_cart_contents' ); ?>

	</tbody>

</table>



<?php do_action( 'woocommerce_after_cart_table' ); ?>

		

<div class="update-cart-checkout">

	<?php   
	 $terms = get_the_terms($product_id, 'product_cat' );
	foreach ($terms as $term) {
$product_cat_id = $term->term_id;
	break;
}

$shop_page_url = get_term_link( $product_cat_id, 'product_cat' );

	
	// $shop_page_url = get_permalink( wc_get_page_id( 'shop' ) );

                if ($shop_page_url) {

                    echo '<a class="button-go-shop" rel="bookmark" href="' . esc_url($shop_page_url) . '">' . esc_html__('Continue Shopping', 'storex') . '</a>';

                }?>

<div class="wc-proceed-to-checkout">

	<?php do_action( 'woocommerce_proceed_to_checkout' ); ?>

</div>



	<input type="submit" class="button update_cart" name="update_cart" value="<?php esc_html_e( 'Update Cart', 'storex' ); ?>" />

</div>



</form>

	<div class="row">

		<div class="cart-collaterals col-xs-12 col-md-6">

			<?php woocommerce_shipping_calculator(); ?>

		</div>

	</div>





<?php do_action( 'woocommerce_after_cart' ); ?>

