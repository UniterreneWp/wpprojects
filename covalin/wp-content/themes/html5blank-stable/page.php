<?php get_header(); ?>





    <div role="main" class="ui-content ui-responsive jqm-content">
		
		<?php if(is_front_page()) :?>
		
		  <div class="slider_image">
			  <img style="width:100%;" src=" http://onlinedevserver.biz/dev/storex-store/wp-content/uploads/2013/06/mobile-banner.jpg" alt="#"/>
			  </div>
		
		
		
		<div class="ui-grid-b">
    

		
		<?php
		$meta_query   = WC()->query->get_meta_query();
$meta_query[] = array(
    'key'   => '_featured',
    'value' => 'yes'
);
$args = array(
    'post_type'   =>  'product',
    'stock'       =>  1,
    'showposts'   =>  9,
    'orderby'     =>  'date',
    'order'       =>  'DESC',
    'meta_query'  =>  $meta_query
); $loop = new WP_Query( $args );
$j=1;
    while ( $loop->have_posts() ) : $loop->the_post(); global $product; ?>
    <?php $image = wp_get_attachment_image_src( get_post_thumbnail_id( $loop->post->ID ), 'single-post-thumbnail' );?>
    <?php $class_name="";?>
    <?php if($j==1 || $j==4 || $j==7):?>
    <?php $class_name ="a";?>
    <?php endif;?>
    
    
    <?php if($j==2 || $j==5 || $j==8):?>
    <?php $class_name ="b";?>
    <?php endif;?>
    
    <?php if($j==3 || $j==6 || $j==9):?>
    <?php $class_name ="c";?>
    <?php endif;?>
		
		<div class="ui-block-<?php echo $class_name?>"><div class="ui-bar ui-bar-<?php echo $class_name?>" style="height:250px"><?php 
                if ( has_post_thumbnail( $loop->post->ID ) ) 
                    $url = $img[0];
                else 
                    //echo '<img src="' . $image[0] . '" alt="Placeholder" width="65px" height="115px" />'; 
            ?>
            
            <img style="width:100%;" src="<?php echo $image[0] ?>" alt="#"/>
            <h3 class="product_name_responsive"><a href="<?php the_permalink()?>"><?php the_title(); ?></a></h3></div></div>
    
		
		
		<?php $j++;endwhile; ?>
		
		
		</div><!-- /grid-c -->

<!--
<div class="ui-grid-b">
    <div class="ui-block-a"><div class="ui-bar ui-bar-a" style="height:60px">Block A</div></div>
    <div class="ui-block-b"><div class="ui-bar ui-bar-a" style="height:60px">Block B</div></div>
    <div class="ui-block-c"><div class="ui-bar ui-bar-a" style="height:60px">Block C</div></div>
</div><!-- /grid-b -->

<?php endif;?>

		
		
      <h1><?php the_title();?></h1>
      <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
      <ul data-role="listview" data-inset="true" data-theme="c" data-dividertheme="b">
<li><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></li>
</ul>
        <?php //the_content(); ?>
 <?php endwhile;endif ?>
        <a href="#panel-fixed-page1" class="ui-btn ui-shadow ui-corner-all ui-btn-inline ui-mini ui-icon-back ui-btn-icon-left">Back</a>

    </div><!-- /content -->
 <?php /*?>   
<ul data-role="listview" data-inset="true" data-theme="c" data-dividertheme="b">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <li><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></li>
        <?php the_content(); ?>
    <?php endwhile;endif ?>
</ul>

<?php include (TEMPLATEPATH . '/inc/nav.php' ); ?><?php */?>
<?php get_footer(); ?>
