<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme and one
 * of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query,
 * e.g., it puts together the home page when no home.php file exists.
 *
 * @link http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Plumtree
 * @since Plumtree 1.0
 */

get_header(); ?><?php // Check if site turned to boxed version
	  $boxed = ''; $boxed_element = ''; $row_class = '';
	  if (get_option('site_layout')=='boxed') {$boxed = 'container'; $boxed_element = 'col-md-12 col-sm-12'; $row_class = 'row';}
		$blog_title = esc_html__('Blog', 'storex');
		$rb_color = pt_get_post_pageribbon($post->ID);
?>

    <div class="header-stripe" style="background-color: <?php echo esc_attr($rb_color); ?>">
        <?php if (!$boxed || $boxed=='') : ?><div class="container"><?php endif; ?>
             <div class="row">
                <div class="col-md-4 col-sm-4 col-sx-12">
					<?php if ( get_option('post_breadcrumbs')=='on') {pt_breadcrumbs();}?>
                </div>
				
				<div class="col-md-4 col-sm-4 col-sx-12">
					<h1 class="title"><?php echo esc_attr($blog_title); ?></h1>    
				</div>
			
				<div class="col-md-4 col-sm-4 col-sx-12">
				<?php if(get_option('back_to_home_button')&&get_option('back_to_home_button')=='on' ): ?>
					<a class="back-to-home" href="<?php echo esc_url(home_url( '/' )); ?>">&#8592; <?php esc_html_e( 'Back to Home', 'storex' ); ?></a>
				<?php endif ?>
				</div>
            </div>
        <?php if (!$boxed || $boxed=='') : ?></div><?php endif; ?>
    </div>


			 <?php if (!$boxed || $boxed=='') : ?><div class="container"><?php endif; ?>
             <div class='blog-grid-wrapper' data-isotope=container data-isotope-layout=masonry data-isotope-elements=post>
<?php
	if ( have_posts() ) {
				
					/*if ( get_option('blog_frontend_layout')=='grid' || $blog_type) {
						echo "<div class='blog-grid-wrapper' data-isotope=container data-isotope-layout=masonry data-isotope-elements=post>";
					}*/
				
			// Start the Loop.
				while ( have_posts() ) : the_post();
				
				/*
				* Include the post format-specific template for the content. If you want to
				* use this in a child theme, then include a file called called content-___.php
				* (where ___ is the post format) and that will be used instead.
				*/
				
				get_template_part( 'content', get_post_format() );

				endwhile;
				
			// Close isotope container
				/*if ( get_option('blog_frontend_layout')=='grid') { echo "</div>"; }*/
				
			// Post navigation.
		if ( $blog_type!=='2cols' && $blog_type!=='3cols' ) {
				$blog_pagination = get_option('blog_pagination');
					if ( ($wp_query->max_num_pages > 1) && ($blog_pagination == 'infinite') ) {
						echo '<span class="pt-get-more-posts">'. esc_html__( 'Show More Posts', 'storex').'</span>';
					}
					elseif(function_exists('storex_content_nav')) {
						storex_content_nav();
					}
					else{
					wp_link_pages( array(
						'before'      => '<div class="page-links"><span class="page-links-title">' . esc_html__( 'Pages:', 'storex' ) . '</span>',
						'after'       => '</div>',
						'link_before' => '<span>',
						'link_after'  => '</span>',
					) );
					}
				}
			}
				else {
				// If no content, include the "No posts found" template.
					get_template_part( 'content', 'none' );
				}
				?>
 <?php if (!$boxed || $boxed=='') : ?></div><?php endif; ?>
<?php get_footer(); ?>
