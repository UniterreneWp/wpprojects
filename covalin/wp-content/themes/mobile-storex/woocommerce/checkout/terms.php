<?php
/**
 * Checkout terms and conditions checkbox
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     2.5.0
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( wc_get_page_id( 'terms' ) > 0 && apply_filters( 'woocommerce_checkout_show_terms', true ) ) : ?>
	<?php do_action( 'woocommerce_checkout_before_terms_and_conditions' ); ?>
	<p class="form-row terms wc-terms-and-conditions">
		
			<input type="checkbox" class="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox" name="terms" <?php checked( apply_filters( 'woocommerce_terms_is_checked_default', isset( $_POST['terms'] ) ), true ); ?> id="terms" /><label for="terms" class="woocommerce-form__label woocommerce-form__label-for-checkbox checkbox"></label> <span><?php printf( wp_kses_post(__( 'I&rsquo;ve read and accept the <a href="%s" target="_blank">terms &amp; conditions</a>', 'storex' )), esc_url( wc_get_page_permalink( 'terms' ) ) ); ?></span> <span class="required">*</span>
		
		<input type="hidden" name="terms-field" value="1" />
	</p>
	<?php do_action( 'woocommerce_checkout_after_terms_and_conditions' ); ?>
<?php endif; ?>
