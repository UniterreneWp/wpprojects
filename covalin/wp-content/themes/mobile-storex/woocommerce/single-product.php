<?php
/**
 * The Template for displaying all single products
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     1.6.4
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
get_header();

 ?>
	<?php while ( have_posts() ) : the_post();
	global $product; ?>
<div class="page-title-row">
  <?php woocommerce_breadcrumb();?>
  <h1 class="page-title">
    <?php echo get_the_title(); ?>
  </h1>
</div>
<section class="single-product-row">
  <div id="pdpCarousel" class="single-product-img"> <img src="<?php echo wp_get_attachment_url( get_post_thumbnail_id(get_the_ID()) );?>"  alt="<?php echo get_the_title(); ?>"> </div>
  <div class="description gaps">
    <div div class="description-heading">
     <?php /*?> <h4>COVALIN TYPE 21S CABLE TIES 8" 50LBS 100PCS </h4><?php */?>
    </div>
    <div div class="productprice">
    <?php
    $skuproduct=$product->get_sku();
	if(empty($skuproduct)){
		}else{
		?>
          <span>SKU: </span><?php echo $product->get_sku(); ?><br />
        <?php
			}
	?>
      <span>Price: </span><?php woocommerce_template_single_price();?>
    </div>
  </div>

<div class="cart-box-mobile">
<?php
if( $product->is_type( 'simple' ) ){
woocommerce_simple_add_to_cart();
} elseif( $product->is_type( 'variable' ) ){
woocommerce_variable_add_to_cart();
}
?>
<?php /*?><form class="qtyAddToCart" action="<?php echo wc_get_cart_url();?>" method="post" >
    <input type="hidden" name="add-to-cart" value="<?php echo get_the_ID();?>">
    <ul class="group-cart">
      <li class="cart-quenty">QTY</li>
      <li class="field">
      <input type="number" name="quantity" value="1" min="1" max="10" class="textfield">
      </li>
      <li class="cart-btn-box">
        <button type="submit" name="addToCart" class="btn-cart">Add to Cart</button>
      </li>
    </ul>
  </form><?php */?>
</div>

    
    <div class="inner-product-description"> <?php woocommerce_template_single_excerpt();?><?php the_content();?></div>
     <?php	 woocommerce_template_single_meta(); ?>

</section>     
<!--<footer class="scrollingFooter"> </footer>-->
<?php endwhile; // end of the loop. ?>

<?php get_footer();?>
