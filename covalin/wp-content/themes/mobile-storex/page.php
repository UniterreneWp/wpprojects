<?php get_header();
 if(is_front_page()) {?>

<ul class="tiles">
	
	<?php

  $taxonomy     = 'product_cat';
/*  $orderby      = 'name';  
  $show_count   = 0;      // 1 for yes, 0 for no
  $pad_counts   = 0;      // 1 for yes, 0 for no
  $hierarchical = 1;      // 1 for yes, 0 for no  
  $title        = '';  
  $empty        = 0;*/

  $args = array(
         'taxonomy'     => $taxonomy,
       /*    'orderby'      => $orderby,
       'show_count'   => $show_count,
         'pad_counts'   => $pad_counts,
         'hierarchical' => $hierarchical,
         'title_li'     => $title,
         'hide_empty'   => $empty*/
  );
 $all_categories = get_categories( $args );
 $j=1;
 foreach ($all_categories as $cat) {	 
        $category_id = $cat->term_id;  		
		$cat_meta = get_option( "taxonomy_$category_id" );
		 if($cat_meta['_settohome']=='yes'){
        $cat_thumb_id = get_woocommerce_term_meta( $category_id, 'thumbnail_id', true );
        $shop_catalog_img = wp_get_attachment_image_src( $cat_thumb_id, 'shop_catalog' );
        $cat_link = get_term_link( $cat );
             ?>
        
        <?php //if($j<=9) {?>
        
        <li> <a href="<?php echo esc_url( $cat_link ); ?>"> 
         <img src="<?php echo $shop_catalog_img[0]?>"/> </a> 
         <div class="product-name-cat"><?php //echo '==='.$j;?>
           <a href="<?php echo esc_url( $cat_link ); ?>"><?php echo $cat->name; ?> </a>
         </div>
        </li>
        
        <?php //} ?>

       <?php 
    $j++;    
		 }
		 
}
?>
        </ul>
        
   <?php } else {
	   ?>
	   <?php // Check if site turned to boxed version
	 $boxed = ''; $boxed_element = ''; $row_class = '';
	 if (get_option('site_layout')=='boxed') {$boxed = 'container'; $boxed_element = 'col-md-12 col-sm-12'; $row_class = 'row';}
	$rb_color = pt_get_post_pageribbon($post->ID);
?>

	
	<div class="header-stripe" <?php /*?>style="background-color: <?php echo esc_attr($rb_color); ?>"<?php */?>>
		<?php if (!$boxed || $boxed=='') : ?><div class="container"><?php endif; ?>
			<div class="row">
            
            <div class="page-title-row">
<?php if ( get_option('site_breadcrumbs')=='on') {pt_breadcrumbs();}?>
  <h1 class="page-title">
    <?php echo get_the_title(); ?>
  </h1>
</div>

				<?php /*?><div class="col-md-4 col-sm-4 col-xs-12">
					<?php if ( get_option('site_breadcrumbs')=='on') {pt_breadcrumbs();}?>
				</div>
				
				<div class="col-md-4 col-sm-4 col-xs-12">
					<h1 class="title"><?php the_title(); ?></h1>
				</div><?php */?>
				
				<div class="col-md-4 col-sm-4 col-xs-12">
				<?php if(get_option('back_to_home_button')&&get_option('back_to_home_button')=='on' ): ?>
					<a class="back-to-home" href="<?php echo esc_url(home_url( '/' )); ?>">&#8592; <?php esc_html_e( 'Back to Home', 'storex' ); ?></a>
				<?php endif ?>
				</div>
			</div>
		<?php if (!$boxed || $boxed=='') : ?></div><?php endif; ?>
	</div>
    		 <?php if (!$boxed || $boxed=='') : ?><div class="container"><?php endif; ?>
			<?php // Start the Loop.
				while ( have_posts() ) : the_post();

				// Include the page content template.
					get_template_part( 'content', 'page' );

				// If comments are open or we have at least one comment, load up the comment template.
			/*	if ( comments_open() || get_comments_number() ) {
					comments_template();
				}*/
				endwhile;
				?>
                  <?php if (!$boxed || $boxed=='') : ?></div><?php endif; ?>
                <?php
	   } 
   get_footer(); ?>
