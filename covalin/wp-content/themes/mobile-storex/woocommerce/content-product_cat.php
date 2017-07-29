<?php
/**
 * The template for displaying product category thumbnails within loops.
 *
 * Override this template by copying it to yourtheme/woocommerce/content-product_cat.php
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     2.4.0
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
global $woocommerce_loop;
// Store loop count we're currently on
if ( empty( $woocommerce_loop['loop'] ) ) {
	$woocommerce_loop['loop'] = 0;
}
// Store column count for displaying the grid
if ( empty( $woocommerce_loop['columns'] ) ) {
	$woocommerce_loop['columns'] = apply_filters( 'loop_shop_columns', 4 );
}
// Increase loop count
$woocommerce_loop['loop'] ++;
?>

<li>
	<?php do_action( 'woocommerce_before_subcategory', $category ); ?>

	<a href="<?php echo get_term_link( $category->slug, 'product_cat' ); ?>">

		<?php
			/**
			 * woocommerce_before_subcategory_title hook
			 *
			 * @hooked woocommerce_subcategory_thumbnail - 10
			 */
			//do_action( 'woocommerce_before_subcategory_title', $category );
		$thumbnail_id = get_woocommerce_term_meta( $category->term_id, 'thumbnail_id', true ); 

    // get the image URL
    $image = wp_get_attachment_url( $thumbnail_id ); 

    // print the IMG HTML
    echo "<img src='{$image}' alt='{$category->name}' /></a>";
	echo '<div class="product-name-cat"><a href="'.get_term_link( $category->slug, 'product_cat' ).'">';
				echo $category->name;
					echo '</a></div>';
				//if ( $category->count > 0 )
				//	echo apply_filters( 'woocommerce_subcategory_count_html', ' <mark class="count">(' . $category->count . ')</mark>', $category );
		
			/**
			 * woocommerce_after_subcategory_title hook
			 */
			do_action( 'woocommerce_after_subcategory_title', $category );
		?>

	<?php 
		/*echo $category->description;
		//get subcategories
		$args = array(
	       'hierarchical' => 1,
	       'show_option_none' => '',
	       'hide_empty' => 0,
	       'parent' => $category->term_id,
	       'taxonomy' => 'product_cat'
	    );
		$subcategories = get_categories($args);
		//echo subcategory links
		if(!is_null($subcategories)){
			echo '<ul class="subcategories">';
			foreach($subcategories as $subcat){
				echo '<li><a href="/product-category/' . $subcat->category_nicename . '/">' . $subcat->name . '</a>';
				//get subcategories of the sub-category
				$args = array(
			       'hierarchical' => 1,
			       'show_option_none' => '',
			       'hide_empty' => 0,
			       'parent' => $subcat->term_id,
			       'taxonomy' => 'product_cat'
			    );
			    $subchildren = get_categories($args);
			    if(!is_null($subchildren)){
			    	echo '<ul class="subcat-children">' . "\n";
			    	foreach($subchildren as $subchild){
			    		echo '<li><a href="/product-category/' . $subchild->category_nicename . '/">' . $subchild->name . '</a>' ."</li>\n";
			    	}
			    	echo '</ul>';
			    }
				echo "</li>\n";
			}
			echo '</ul>';
		}
		do_action( 'woocommerce_after_subcategory', $category ); */
	?>
</li>