<?php
/**
 * The Template for displaying product archives, including the main shop page which is a post type archive.
 *
 * Override this template by copying it to yourtheme/woocommerce/archive-product.php
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     2.0.0
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

get_header(); ?>

	<?php
		/**
		 * woocommerce_before_main_content hook
		 *
		 * @hooked woocommerce_output_content_wrapper - 10 (outputs opening divs for the content)
		 * @hooked woocommerce_breadcrumb - 20
		 */
		//do_action( 'woocommerce_before_main_content' );
	?>
		<?php //if ( apply_filters( 'woocommerce_show_page_title', true ) ) : ?>
<div class="page-title-row">
			
            <?php woocommerce_breadcrumb();?>
            <h1 class="page-title"><?php woocommerce_page_title(); ?></h1>
</div>
		<?php //endif; ?>

		<?php //do_action( 'woocommerce_archive_description' ); ?>

		<?php if ( have_posts() ) : ?>
			
		<?php /*?>	<div class="custom-options-wrap"><?php */?>
				<?php
					/**
					 * woocommerce_before_shop_loop hook
				 	*
				 	* @hooked woocommerce_result_count - 20
				 	* @hooked woocommerce_catalog_ordering - 30
				 	*/
				//do_action( 'woocommerce_before_shop_loop' );
			?>
		<?php /*?>	</div><?php */?>
			
			<?php /* Special Filters Sidebar */
		if ( get_option('filters_sidebar')=='on' && is_active_sidebar( 'filters-sidebar' ) ) : ?>
				<!--<div id="filters-sidebar" class="tiles">
					<?php //dynamic_sidebar('filters-sidebar'); ?>
				</div>-->
			<?php endif; 	
echo '<div class="products-cat-row">';?>
			<?php woocommerce_product_loop_start(); 

			?>

				<?php woocommerce_product_subcategories(); ?>

				<?php while ( have_posts() ) : the_post(); ?>

					<?php wc_get_template_part( 'content', 'product' ); ?>

				<?php endwhile; // end of the loop. ?>

			<?php woocommerce_product_loop_end(); ?>
</div>
			<?php
				/**
				 * woocommerce_after_shop_loop hook
				 *
				 * @hooked woocommerce_pagination - 10
				 */
				do_action( 'woocommerce_after_shop_loop' );
			?>

		<?php elseif ( ! woocommerce_product_subcategories( array( 'before' => woocommerce_product_loop_start( false ), 'after' => woocommerce_product_loop_end( false ) ) ) ) : ?>

			<?php
				/**
				 * woocommerce_no_products_found hook.
				 *
				 * @hooked wc_no_products_found - 10
				 */
				do_action( 'woocommerce_no_products_found' );
			?>

		<?php endif; ?>

	<?php
		/**
		 * woocommerce_after_main_content hook
		 *
		 * @hooked woocommerce_output_content_wrapper_end - 10 (outputs closing divs for the content)
		 */
		//do_action( 'woocommerce_after_main_content' );
	?>

	<?php
		/**
		 * woocommerce_sidebar hook
		 *
		 * @hooked woocommerce_get_sidebar - 10
		 */
		//do_action( 'woocommerce_sidebar' );
	?>

<?php get_footer(); ?>