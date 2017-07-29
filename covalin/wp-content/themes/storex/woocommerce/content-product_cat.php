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
  if(is_front_page()) {
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$category_id=$category->term_id;
	$cat_meta = get_option( "taxonomy_$category_id" );
		 if($cat_meta['_settohome']=='yes'){


		$thumbnail_id = get_woocommerce_term_meta( $category->term_id, 'thumbnail_id', true ); 
    // get the image URL
    $image = wp_get_attachment_url( $thumbnail_id ); 

    // print the IMG HTML

		?>
        <li class="home-cat-col" onclick="location.href = '<?php echo get_term_link( $category->slug, 'product_cat' ); ?>';">
          <div class="home-cat-box">
        <a href="<?php echo get_term_link( $category->slug, 'product_cat' ); ?>">        
        <img src="<?php echo $image;?>" class="home-cat-img" alt="<?php echo $category->name;?>">
		
        </a>
         </div>
        <!-- <div class="home-cat-box-hover">
          
        </div> -->
         <h4><?php echo $category->name;?></h4>
        </li>
<?php
//print_r($category);
//echo  '<br> ======'.$category->parent;
if($category->parent!=0){
$wsubargs = array(
    'hierarchical' => 1,
    'show_option_none' => '',
    'hide_empty' => 0,
    'parent' => $category->parent,
    'taxonomy' => 'product_cat'
);
$wsubcats = get_categories($wsubargs);
foreach ($wsubcats as $wsc):
$subcategory_id=$wsc->term_id;
//echo $wsc->parent.'==='.$subcategory_id.'<br>';
if($subcategory_id!=$category_id){
	$subcat_meta = get_option( "taxonomy_$subcategory_id" );
		 if($subcat_meta['_settohome']=='yes'){

		$subthumbnail_id = get_woocommerce_term_meta( $wsc->term_id, 'thumbnail_id', true ); 
    // get the image URL
    $subimage = wp_get_attachment_url( $subthumbnail_id ); 


    ?>
    
     <li class="home-cat-col" onclick="location.href = '<?php echo get_term_link( $wsc->slug, 'product_cat' ); ?>';">
      <div class="home-cat-box">
        <a href="<?php echo get_term_link( $wsc->slug, 'product_cat' ); ?>">        
        <img src="<?php echo $subimage;?>" class="home-cat-img" alt="<?php echo $wsc->name;?>">
		<div class="home-cat-name"><?php echo $wsc->name;?></div>
        </a>
        </div>
        <div class="home-cat-box-hover">
           <div class="home-cat-name"><?php echo $wsc->name;?></div>
        </div>
        </li>    
<?php
		 }
	 }
endforeach;


}
		}
		 
  }else{
	  
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$category_id=$category->term_id;
	$cat_meta = get_option( "taxonomy_$category_id" );
		$thumbnail_id = get_woocommerce_term_meta( $category->term_id, 'thumbnail_id', true ); 
    // get the image URL
    $image = wp_get_attachment_url( $thumbnail_id ); 

    // print the IMG HTML

		?>
        <li class="home-cat-col" onclick="location.href = '<?php echo get_term_link( $category->slug, 'product_cat' ); ?>';">
          <div class="home-cat-box">
        <a href="<?php echo get_term_link( $category->slug, 'product_cat' ); ?>">        
        <img src="<?php echo $image;?>" class="home-cat-img" alt="<?php echo $category->name;?>">
		
        </a>
         </div>
        <!-- <div class="home-cat-box-hover">
          
        </div> -->
         <h4><?php echo $category->name;?></h4>
        </li>
<?php

		 
  }
  ?>