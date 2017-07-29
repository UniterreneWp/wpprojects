<?php
/**
* Product Loop Start
*
* @author WooThemes
* @package WooCommerce/Templates
* @version 2.0.0
*/
?>
<?php 
// Related products extra class
$new_class = '';
if ( is_product() ) {
	$upsells_qty = (get_option('upsells_qty') != '') ? get_option('upsells_qty') : '2';
	$related_qty = (get_option('related_products_qty') != '') ? get_option('related_products_qty') : '4';
	$new_class = ' related-cols-'.$related_qty.' upsells-cols-'.$upsells_qty;
}
$term = get_queried_object();

$children = get_terms( $term->taxonomy, array(
'parent'    => $term->term_id,
'hide_empty' => false
) );
// print_r($children); // uncomment to examine for debugging
if($children) { // get_terms will return false if tax does not exist or term wasn't found.
    // term has children
	
	?>
<?php /*?><ul class="products<?php echo esc_attr($new_class); ?> tiles" <?php echo esc_attr($filter_class); ?> ><?php */
if(is_shop()){
?>
<ul class="products grid-layout tiles" data-isotope="container" data-isotope-layout="fitrows" data-isotope-elements="product">
<?php
}else{
	?>
    <ul class="products<?php echo esc_attr($new_class); ?> tiles" <?php echo esc_attr($filter_class); ?> >
    <?php
	}
}else{
	?>
<ul class="products grid-layout" data-isotope="container" data-isotope-layout="fitrows" data-isotope-elements="product">
<?php
}?>