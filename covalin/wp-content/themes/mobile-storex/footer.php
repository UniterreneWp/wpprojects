<?php
if(is_front_page()) {
	 $shop_page_url = get_permalink( woocommerce_get_page_id( 'shop' ) );
?>
      <footer>
        <div class="expand_block">
          <div class="block"> <a class="expand_toggle" href="#">All Products</a> </div>
          <div class="expand_content">
            <ul><?php

  $taxonomy     = 'product_cat';
  $orderby      = 'name';  
  $show_count   = 0;      // 1 for yes, 0 for no
  $pad_counts   = 0;      // 1 for yes, 0 for no
  $hierarchical = 1;      // 1 for yes, 0 for no  
  $title        = '';  
  $empty        = 0;

  $args = array(
         'taxonomy'     => $taxonomy,
         'orderby'      => $orderby,
         'show_count'   => $show_count,
         'pad_counts'   => $pad_counts,
         'hierarchical' => $hierarchical,
         'title_li'     => $title,
         'hide_empty'   => $empty
  );
 $all_categories = get_categories( $args );
 $j=1;
 foreach ($all_categories as $cat) {
    if($cat->category_parent == 0) {
        $category_id = $cat->term_id;  
        
     
        $cat_thumb_id = get_woocommerce_term_meta( $cat->term_id, 'thumbnail_id', true );
        $shop_catalog_img = wp_get_attachment_image_src( $cat_thumb_id, 'shop_catalog' );
             ?>
        

        
<!--
        <li> <a href="Cls_04/Boxes-Corrugated?dup=3"> <img src="<?php echo $shop_catalog_img[0]?>"/> <?php echo $cat->name; ?> </a> </li>
-->
        
       <li> <a href="<?php echo get_term_link( $category_id, 'product_cat' ); ?>" data-path="<?php echo get_term_link( $category_id, 'product_cat' ); ?>" data-ga="All Products &ndash; Anti-Static"><?php echo $cat->name; ?></a> </li>

       <?php $args2 = array(
                'taxonomy'     => $taxonomy,
                'child_of'     => 0,
                'parent'       => $category_id,
                'orderby'      => $orderby,
                'show_count'   => $show_count,
                'pad_counts'   => $pad_counts,
                'hierarchical' => $hierarchical,
                'title_li'     => $title,
                'hide_empty'   => $empty
        );
        $sub_cats = get_categories( $args2 );
        if($sub_cats) {
            foreach($sub_cats as $sub_category) {
                //echo  $sub_category->name ;
            }   
        }
    } 
    $j++;      
}
?>
				
				
     </ul>
          </div>
        </div>
        <div class="expand_block">
          <div class="block"> <a class="no_expand" href="<?php echo $shop_page_url;?>"> Products </a> </div>
        </div>
        
      </footer>
      <?php
}
	?>
	
			</section>
  <div class="content_overlay hide"></div>
  <div class="search_overlay hide"></div>
  <div id="stateSite" data-state="us" data-site="prod" data-ua="Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1" data-currency="" data-lang="en"></div>

  <div class="stickyFooterscrollingFooter">
  <div class="content_overlay hide"></div>
  <footer class="main-footer">
   <?php 
    $defaults = array( 'menu' => 'mobile-footer-menu', 'container' => '', 'container_class' => '', 'container_id' => '', 'menu_class' => 'menu', 'menu_id' => '',
    'echo' => true, 'fallback_cb' => 'wp_page_menu', 'before' => '', 'after' => '', 'link_before' => '', 'link_after' => '', 'items_wrap' => '<ul>%3$s</ul>', 'item_spacing' => 'preserve',
    'depth' => 0, 'walker' => '', 'theme_location' => '' );	
	
wp_nav_menu($defaults);
?>
    <?php 
   /* $defaultsdd = array( 'menu' => 'Top Menu', 'container' => '', 'container_class' => '', 'container_id' => '', 'menu_class' => 'menu', 'menu_id' => '',
    'echo' => true, 'fallback_cb' => 'wp_page_menu', 'before' => '', 'after' => '', 'link_before' => '', 'link_after' => '', 'items_wrap' => '<ul>%3$s</ul>', 'item_spacing' => 'preserve',
    'depth' => 0, 'walker' => '', 'theme_location' => '' );
	
	
wp_nav_menu($defaultsdd);*/
?>
    
    <div class="site-info">
       <?php $copyright = esc_attr(get_option('site_copyright'));
       if ($copyright != '') {
        echo esc_attr($copyright);
       } else {
        echo 'Storex &copy; '.date('Y') .''.esc_html__(' Theme by Themes Zone. All rights reserved', 'storex');
       }
       ?>
      </div>
    
  </footer>
</div>
  <span id="lblSharedCartDisabled" class="hide">1</span>
  <span id="lblCartID">0</span>
<?php 
wp_footer();

if(is_front_page()) {?>
<script>
jQuery(document).ready(function(){
    function myfunction(){
         var banner_height = jQuery('#slideshow div a img').height();
	     //console.log(banner_height);
	     jQuery(".banner").css("height", banner_height);
	}
	myfunction();
	
    jQuery(window).resize(function(){
         myfunction();
    });
});
</script>
    <?php 
}
?>
<script src="<?php echo get_stylesheet_directory_uri(); ?>/js/main-js.js" type="text/javascript"  ></script>
 <script type="text/javascript">$(document).ready(function(){(function(d,t,a,s,e,i){s=d.getElementsByTagName(t)[0];for(i=0;i<a.length;i++){e=d.createElement(t);e.src=a[i];s.parentNode.insertBefore(e,s)}})(document,'script',["<?php echo get_stylesheet_directory_uri(); ?>/js/1.221.js"]);});</script>
</body>
</html>