<?php
/**
 * PlumTree functions and definitions.
 *
 * Sets up the theme and provides some helper functions, which are used
 * in the theme as custom template tags. Others are attached to action and
 * filter hooks in WordPress to change core functionality.
 *
 */
 
 /* Contents:
	1.  Set up the content width value based on the theme's design
	2.  Set up php DIR variable
	3.  Adding additional image sizes
	4.  Plumtree_setup
	5.  Enqueue scripts and styles for the front-end
	6.  Plumtree Init Sidebars
	7.  Removing autop filter
	8.  Include widgets
	9.  Additional functions
	10. Adding pagebuilder custom shortcodes
	11. Required functions
*/

/* 1. Set up the content width value based on the theme's design. (start)*/
add_filter( 'automatic_updater_disabled', '__return_true' );
	if (!isset( $content_width )) $content_width = 1200;

/* 1. Set up the content width value based on the theme's design. (end)*/

/* 2. Set up php DIR variable (start)*/

	if (!defined(__DIR__)) define ('__DIR__', dirname(__FILE__));

/* 2. Set up php DIR variable (end)*/

/* 3. Adding additional image sizes (start)*/

	if ( function_exists( 'add_image_size' ) ) { 
		add_image_size( 'storex-related-thumb', 370, 216, true );
		add_image_size( 'storex-carousel-medium', 660, 720, false);
		add_image_size( 'storex-carousel-large', 760, 500, true);
		add_image_size( 'storex-pt-recent-post', 520, 520, false);
		add_image_size( 'storex-pt-portfolio-thumb', 720, 9999);		
	}

/* 3. Adding additional image sizes (end) */

/* 4. Plumtree_setup (start)*/
	if ( ! function_exists( 'storex_setup' ) ) :
		function storex_setup() {
			// Translation availability
			load_theme_textdomain( 'storex', get_template_directory() . '/languages' );

			// Add RSS feed links to <head> for posts and comments.
			add_theme_support( 'automatic-feed-links' );

			add_theme_support( "title-tag" );
			
			add_theme_support( "custom-header");

			// Enable support for Post Thumbnails.
			add_theme_support( 'post-thumbnails' );

			set_post_thumbnail_size( 820, 420, true);

			// Nav menus.
			register_nav_menus( array(
				'header-top-nav'   => esc_html__( 'Top Menu', 'storex' ),
				'header-top-nav-login'   => esc_html__( 'Top Menu After log in', 'storex' ),
				'primary-nav'      => esc_html__( 'Primary Menu (Under Logo)', 'storex' ),
				'footer-nav'       => esc_html__( 'Footer Menu', 'storex' )
			) );

			// Switch default core markup for search form, comment form, and comments to output valid HTML5.
			add_theme_support( 'html5', array(
				'search-form', 'comment-form', 'comment-list', 'gallery', 'caption'
			) );

			// Enable support for Post Formats.
			add_theme_support( 'post-formats', array(
				'aside', 'image', 'video', 'audio', 'quote', 'link', 'gallery',
			) );
	
			// This theme allows users to set a custom background.
			add_theme_support( 'custom-background', array(
				'default-color' => 'FFFFFF',
			) );

			// Enable woocommerce support
			add_theme_support( 'woocommerce' );
	
			// Enable layouts support
			$pt_layouts = array(
				array('value' => 'one-col', 'label' => '1 Column (no sidebars)', 'icon' => get_template_directory_uri().'/assets/one-col.png'),
				array('value' => 'two-col-left', 'label' => '2 Columns, sidebar on left', 'icon' => get_template_directory_uri().'/assets/two-col-left.png'),
				array('value' => 'two-col-right', 'label' => '2 Columns, sidebar on right', 'icon' => get_template_directory_uri().'/assets/two-col-right.png'),
			);
			add_theme_support( 'plumtree-layouts', apply_filters('pt_default_layouts', $pt_layouts) ); 
		}
	endif;
// storex_setup
add_action( 'after_setup_theme', 'storex_setup' );

/* 4. Plumtree_setup (end) */

/* 5. Enqueue scripts and styles for the front-end. (start)*/

	function storex_scripts() {
	//----Base CSS Styles-----------
		wp_enqueue_style( 'storex-basic', get_stylesheet_uri() );
		wp_enqueue_style( 'storex-hover-effects', get_template_directory_uri().'/css/hover-effects.css' );
		
		
	//----Base JS libraries
		wp_enqueue_script( 'hoverIntent', array('jquery') );
		wp_enqueue_script( 'imagesloaded', array('jquery') );
		wp_enqueue_script( 'storex-easings', get_template_directory_uri() . '/js/jquery.easing.1.3.min.js', array('jquery'), '1.3', true );	
		wp_enqueue_script( 'storex-lazy-load', get_template_directory_uri() . '/js/lazyload.min.js', array('jquery'), '1.9.3', true );
		wp_enqueue_script( 'storex-basic-js', get_template_directory_uri() . '/js/helper.js', array('jquery'), '1.0', true );
		wp_enqueue_script( 'storex-bootstrap-js', get_template_directory_uri() . '/js/bootstrap.min.js', array('jquery'), '3.3.7', true);
		
		//----Load Waypoints---------------
	if(get_option ('stycky_menu')=='on'){          
		wp_enqueue_script('storex-waypoints-sticky', get_template_directory_uri() . '/js/jquery.waypoints.min.js', array('jquery'), '1.8', true);
		wp_enqueue_script('storex-sticky', get_template_directory_uri() . '/js/sticky.min.js', array('jquery'), '1.8', true);
		wp_enqueue_script('storex-sticky-helper', get_template_directory_uri() . '/js/sticky-helper.js', array('jquery'), '1.8', true);
	}
	
	wp_enqueue_script('storex-countdown', get_template_directory_uri() . '/js/jquery.countdown.min.js', array('jquery'), '1.0.1.', true );
	//----Load Bootsrap-------------
		wp_enqueue_style( 'storex-bootstrap-layout', get_template_directory_uri() . '/css/bootstrap.css' );
		wp_enqueue_style( 'storex-bootstrap-components', get_template_directory_uri() . '/css/bootstrap-theme.css' );
		wp_enqueue_style( 'storex-font-awesome', get_template_directory_uri() . '/css/font-awesome.min.css' );

	//----Comments script-----------
		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}
	}
	
	add_action( 'wp_enqueue_scripts', 'storex_scripts' );
	
/* 5. Enqueue scripts and styles for the front-end. (end)*/

/* 6. Plumtree Init Sidebars. (start)*/
	
		function storex_widgets_init() {
		// Default Sidebars
		register_sidebar( array(
			'name' => esc_html__( 'Blog Sidebar', 'storex' ),
			'id' => 'sidebar-blog',
			'description' => esc_html__( 'Appears on single blog posts and on Blog Page', 'storex' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget' => '</div>',
			'before_title' => '<h3 class="widget-title">',
			'after_title' => '</h3>',
		) );
		register_sidebar( array(
			'name' => esc_html__( 'Header Top Panel Sidebar', 'storex' ),
			'id' => 'top-sidebar',
			'description' => esc_html__( 'Located at the top of site', 'storex' ),
			'before_widget' => '<div id="%1$s" class="%2$s left-aligned">',
			'after_widget' => '</div>',
			'before_title' => '<!--',
			'after_title' => '-->',
		) );

		register_sidebar( array(
			'name' => esc_html__( 'Header (Logo group) sidebar', 'storex' ),
			'id' => 'hgroup-sidebar',
			'description' => esc_html__( 'Located to the right from header', 'storex' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget' => '</div>',
			'before_title' => '',
			'after_title' => '',
		) );

		register_sidebar( array(
			'name' => esc_html__( 'Front Page Bottom Sidebar#1', 'storex' ),
			'id' => 'front-page-bottom-sidebar-1',
			'description' => esc_html__( 'Appears when using the optional Front Page template with a page set as Static Front Page', 'storex' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget' => '</div>',
			'before_title' => '<h3 class="widget-title">',
			'after_title' => '</h3>',
		) );

		register_sidebar( array(
			'name' => esc_html__( 'Front Page Bottom Sidebar#2', 'storex' ),
			'id' => 'front-page-bottom-sidebar-2',
			'description' => esc_html__( 'Appears when using the optional Front Page template with a page set as Static Front Page', 'storex' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget' => '</div>',
			'before_title' => '<h3 class="widget-title">',
			'after_title' => '</h3>',
		) );
		
		register_sidebar( array(
			'name' => esc_html__( 'Front Page Bottom Sidebar#3', 'storex' ),
			'id' => 'front-page-bottom-sidebar-3',
			'description' => esc_html__( 'Appears when using the optional Front Page template with a page set as Static Front Page', 'storex' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget' => '</div>',
			'before_title' => '<h3 class="widget-title">',
			'after_title' => '</h3>',
		) );
		
		register_sidebar( array(
			'name' => esc_html__( 'Front Page Bottom Sidebar#4', 'storex' ),
			'id' => 'front-page-bottom-sidebar-4',
			'description' => esc_html__( 'Appears when using the optional Front Page template with a page set as Static Front Page', 'storex' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget' => '</div>',
			'before_title' => '<h3 class="widget-title">',
			'after_title' => '</h3>',
		) );
		
		register_sidebar( array(
			'name' => esc_html__( 'Pages Sidebar', 'storex' ),
			'id' => 'sidebar-pages',
			'description' => esc_html__( 'Appears on Pages', 'storex' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget' => '</div>',
			'before_title' => '<h3 class="widget-title">',
			'after_title' => '</h3>',
		) );

		register_sidebar( array(
			'name' => esc_html__( 'Shop Page Sidebar', 'storex' ),
			'id' => 'sidebar-shop',
			'description' => esc_html__( 'Appears on Products page', 'storex' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget' => '</div>',
			'before_title' => '<h3 class="widget-title">',
			'after_title' => '</h3>',
		) );

		register_sidebar( array(
			'name' => esc_html__( 'Single Product Page Sidebar', 'storex' ),
			'id' => 'sidebar-product',
			'description' => esc_html__( 'Appears on Single Products page', 'storex' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget' => '</div>',
			'before_title' => '<h3 class="widget-title">',
			'after_title' => '</h3>',
		) );

		// Footer Sidebars
		register_sidebar( array(
			'name' => esc_html__( 'Footer Top Sidebar Col#1', 'storex' ),
			'id' => 'footer-top-sidebar-1',
			'description' => esc_html__( 'Located in the top footer of the site', 'storex' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget' => '</div>',
			'before_title' => '<h3 class="widget-title">',
			'after_title' => '</h3>',
		) );

		register_sidebar( array(
			'name' => esc_html__( 'Footer Top Sidebar Col#2', 'storex' ),
			'id' => 'footer-top-sidebar-2',
			'description' => esc_html__( 'Located in the top footer of the site', 'storex' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget' => '</div>',
			'before_title' => '<h3 class="widget-title">',
			'after_title' => '</h3>',
		) );

		register_sidebar( array(
			'name' => esc_html__( 'Footer Middle Sidebar Col#1', 'storex' ),
			'id' => 'footer-sidebar-1',
			'description' => esc_html__( 'Located in the footer of the site', 'storex' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget' => '</div>',
			'before_title' => '<h3 class="widget-title">',
			'after_title' => '</h3>',
		) );
		
		register_sidebar( array(
			'name' => esc_html__( 'Footer Middle Sidebar Col#2', 'storex' ),
			'id' => 'footer-sidebar-2',
			'description' => esc_html__( 'Located in the footer of the site', 'storex' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget' => '</div>',
			'before_title' => '<h3 class="widget-title">',
			'after_title' => '</h3>',
		) );

		register_sidebar( array(
			'name' => esc_html__( 'Footer Middle Sidebar Col#3', 'storex' ),
			'id' => 'footer-sidebar-3',
			'description' => esc_html__( 'Located in the footer of the site', 'storex' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget' => '</div>',
			'before_title' => '<h3 class="widget-title">',
			'after_title' => '</h3>',
		) );

		register_sidebar( array(
			'name' => esc_html__( 'Footer Middle Sidebar Col#4', 'storex' ),
			'id' => 'footer-sidebar-4',
			'description' => esc_html__( 'Located in the footer of the site', 'storex' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget' => '</div>',
			'before_title' => '<h3 class="widget-title">',
			'after_title' => '</h3>',
		) );

		register_sidebar( array(
        'name' => esc_html__( 'Footer Bottom Sidebar', 'storex' ),
        'id' => 'footer-bottom',
        'description' => esc_html__( 'Located in the footer of the site', 'storex' ),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ) );

		register_sidebar( array(
			'name' => esc_html__( 'Footer Bottom Sidebar(Shop)', 'storex' ),
			'id' => 'footer-bottom-shop',
			'description' => esc_html__( 'Located in the footer of the shop', 'storex' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget' => '</div>',
			'before_title' => '<h3 class="widget-title">',
			'after_title' => '</h3>',
		) );
	    if ( get_option('filters_sidebar')=='on' ) {		
		// Register sidebar
			register_sidebar( array(
			    'name' => esc_html__( 'Special Filters Sidebar', 'storex' ),
		        'id' => 'filters-sidebar',
		        'description' => esc_html__( 'Located at the top of the products page', 'storex' ),
		        'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		        'after_widget' => '</aside>',
		        'before_title' => '<h3 class="dropdown-filters-title">',
		        'after_title' => '</h3>',
		    ) );
		}
		}
		add_action( 'widgets_init', 'storex_widgets_init' );
	
	
/* 6. Plumtree Init Sidebars. (end)*/

/* 7. Add filter do_shortcode in the text widget. (start)*/

	add_filter('widget_text', 'do_shortcode');
	
/* 7.Add filter do_shortcode in the text widget. (end)*/

/* 8. Include widgets. (start)*/
	require_once( trailingslashit( get_template_directory() ).'/widgets/class-pt-widget-search.php');
	require_once(trailingslashit( get_template_directory() ).'/widgets/class-pt-widget-contacts.php');
	if ( class_exists('Woocommerce') ) {
		require_once(trailingslashit( get_template_directory() ).'/widgets/class-pt-widget-shop-filters.php');
		require_once(trailingslashit( get_template_directory() ).'/widgets/class-pt-widget-cart.php');
	}
	require_once(trailingslashit( get_template_directory() ).'/widgets/social-networks/class-pt-widget-socials.php');
	require_once(trailingslashit( get_template_directory() ).'/widgets/class-pt-widget-recent-posts.php');
	require_once(trailingslashit( get_template_directory() ).'/widgets/class-pt-widget-collapsing-categories.php');
	require_once(trailingslashit( get_template_directory() ).'/widgets/pay-icons/class-pt-widget-pay-icons.php');
	
/* 8. Include widgets. (end)*/

/* 9. Additional functions (start)*/
	if ( !is_single() ) {
		require_once(trailingslashit( get_template_directory() ).'/extensions/isotope/isotope.php');
	}
	require_once(trailingslashit( get_template_directory() ).'/extensions/videobg/videobg.php');
	require_once(trailingslashit( get_template_directory() ).'/extensions/magnific/magnific.php');
	require_once(trailingslashit( get_template_directory() ).'/extensions/pagination/pagination.php');
	require_once(trailingslashit( get_template_directory() ).'/extensions/owl-carousel/owl-carousel.php');
	require_once(trailingslashit( get_template_directory() ).'/extensions/select2/select2.php');
	require_once(trailingslashit( get_template_directory() ).'/extensions/stellar/stellar.php');
	require_once(trailingslashit( get_template_directory() ).'/extensions/post-likes/post-like.php');
	if ( get_option('to_top_button')=='on' ) {
		require_once(trailingslashit( get_template_directory() ).'/extensions/totop/totop.php');
	}
	if ( get_option('blog_pagination')=='infinite' ) {
		require_once(trailingslashit( get_template_directory() ).'/extensions/infinite-blog/infinite-blog.php');
	}
	if ( get_option('site_breadcrumbs')=='on' || get_option('post_breadcrumbs')=='on' ) {
		require_once(trailingslashit( get_template_directory() ).'/extensions/breadcrumbs/breadcrumbs.php');
	}
	if ( get_option('blog_share_buttons')=='on' || get_option('pt_shares_for_product')=='on' ) {
		require_once(trailingslashit( get_template_directory() ).'/extensions/share-buttons/pt-share-buttons.php');
	}
	if ( class_exists('Woocommerce') ) {
		if ( get_option('use_pt_images_slider')=='on' ) {
			require_once(trailingslashit( get_template_directory() ).'/inc/pt-product-images.php');
		}
	}
	
/* 9. Additional functions (end)*/

/* 10. Adding pagebuilder custom shortcodes (start)*/

	if (class_exists('IG_Pb_Init')) {
		require_once(trailingslashit( get_template_directory() ).'/shortcodes/add_to_contentbuilder.php');
	}

/* 10. Adding pagebuilder custom shortcodes (end)*/

/* 11. Required functions (start)*/
	
	// Required functions
	require_once(trailingslashit( get_template_directory() ).'/inc/pt-theme-layouts.php');
	require_once(trailingslashit( get_template_directory() ).'/inc/pt-functions.php');
	require_once(trailingslashit( get_template_directory() ).'/inc/storex-google-fonts.php');
	require_once(trailingslashit( get_template_directory() ).'/ptpanel/ptpanel.php');
	require_once(trailingslashit( get_template_directory() ).'/inc/pt-admin.php');
	require_once(trailingslashit( get_template_directory() ).'/inc/pt-self-install.php');
	if ( class_exists('Woocommerce') ) {
		require_once(trailingslashit( get_template_directory() ).'/inc/pt-woo-modification.php');
	}
	require_once(trailingslashit( get_template_directory() ).'/inc/page-stripe.php');
/* 11. Required functions (end)*/

// Add term page
function custom_settohome_taxonomy_add_new_meta_field() {
	// this will add the custom meta field to the add new term page
	?>
	<div class="form-field">
		<label for="term_meta[_settohome]">Set to Home</label>
	 <select name="term_meta[_settohome]" id="term_meta[_settohome]">
                   <option value="no">No</option>
            <option value="yes">Yes</option>
     
            </select>
		<p class="description">&nbsp;</p>
	</div>
<?php
}
add_action( 'product_cat_add_form_fields', 'custom_settohome_taxonomy_add_new_meta_field', 10, 2 );
// Edit term page
function custom_settohome_taxonomy_edit_meta_field($term) {
 
	// put the term ID into a variable
	$t_id = $term->term_id;
 
	// retrieve the existing value(s) for this meta field. This returns an array
	$term_meta = get_option( "taxonomy_$t_id" ); ?>
	<tr class="form-field">
	<th scope="row" valign="top"><label for="term_meta[_settohome]">Set to Home</label></th>
		<td>
			<?php /*?><input type="text" name="term_meta[_settohome]" id="term_meta[_settohome]" value="<?php echo esc_attr( $term_meta['_settohome'] ) ? esc_attr( $term_meta['_settohome'] ) : ''; ?>"><?php */?>
            <select name="term_meta[_settohome]" id="term_meta[_settohome]">
                   <option value="no" <?php if($term_meta['_settohome']=='no'){?> selected="selected"<?php }?>>No</option>
            <option value="yes" <?php if($term_meta['_settohome']=='yes'){?> selected="selected"<?php }?>>Yes</option>
     
            </select>
            </p>
		</td>
	</tr>
<?php
}
add_action( 'product_cat_edit_form_fields', 'custom_settohome_taxonomy_edit_meta_field', 10, 2 );
// Save extra taxonomy fields callback function.
function save_taxonomy_custom_meta( $term_id ) {
	if ( isset( $_POST['term_meta'] ) ) {
		$t_id = $term_id;
		$term_meta = get_option( "taxonomy_$t_id" );
		$cat_keys = array_keys( $_POST['term_meta'] );
		foreach ( $cat_keys as $key ) {
			if ( isset ( $_POST['term_meta'][$key] ) ) {
				$term_meta[$key] = $_POST['term_meta'][$key];
			}
		}
		// Save the option array.
		update_option( "taxonomy_$t_id", $term_meta );
	}
}  
add_action( 'edited_product_cat', 'save_taxonomy_custom_meta', 10, 2 );  
add_action( 'create_product_cat', 'save_taxonomy_custom_meta', 10, 2 );

/*function woo_settohome_catview(){
	ob_start();
	$taxonomy     = 'product_cat';
	$args = array(
         'taxonomy'     => $taxonomy,
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
          <li> <a href="<?php echo esc_url( $cat_link ); ?>"> 
         <img src="<?php echo $shop_catalog_img[0]?>"/> </a> 
         <div class="product-name-cat"><?php //echo '==='.$j;?>
           <a href="<?php echo esc_url( $cat_link ); ?>"><?php echo $cat->name; ?> </a>
         </div>
        </li>
        <?php
		 $j++;    
		 }
 }
	?>
    <?php
	
	return ob_get_clean();	
	}
add_shortcode( 'WOOCATVIEWHOMEPAGE', 'woo_settohome_catview' );*/


/*
* Hide shipping rates when free shipping is available.
*/
function sb_hide_shipping_when_free_is_available( $rates ) {
	$free = array();
	foreach ( $rates as $rate_id => $rate ) {
		if ( 'free_shipping' === $rate->method_id ) {
			$free[ $rate_id ] = $rate;
			break;
		}
	}
	return ! empty( $free ) ? $free : $rates;
}
add_filter( 'woocommerce_package_rates', 'sb_hide_shipping_when_free_is_available', 100 );

//disable woocommerce table rate shipping updates
function sb_filter_plugin_updates( $value ) {
    unset( $value->response['woocommerce-table-rate-shipping/woocommerce-table-rate-shipping.php'] );
    return $value;
}
add_filter( 'site_transient_update_plugins', 'sb_filter_plugin_updates' );




function add_this_script_all_footer(){ ?>
<script type="text/javascript">
jQuery(document).ready(function($){
	$('.buttons-wrapper form.variations_form').show();
	});
</script>
<?php } 

add_action('wp_footer', 'add_this_script_all_footer');

// Add Barcode

function add_barcode(){
    woocommerce_wp_text_input(
        array(
            'id' => '_barcode',
            'label' => __( 'Barcode', 'your-plugin' ),
            'placeholder' => 'Scan Barcode',
            'desc_tip' => 'true',
            'description' => __( "Scan the product's barcode.", "your-plugin" )
        )
    );
}
add_action('woocommerce_product_options_inventory_product_data','add_barcode');


function add_barcode_save( $product ){
    if( isset( $_POST['_barcode'] ) ) {
        $product->update_meta_data( '_barcode', sanitize_text_field( $_POST['_barcode'] ) );
    } else {
        $product->delete_meta_data( '_barcode' );
    }
}
add_action( 'woocommerce_admin_process_product_object', 'add_barcode_save' );


add_filter( 'add_to_cart_text', 'woo_custom_cart_button_text' );    // < 2.1
function woo_custom_cart_button_text() {
        return __( 'Add to Order', 'woocommerce' );
		}
add_filter( 'woocommerce_product_tabs', 'wcs_woo_remove_reviews_tab', 98 );
    function wcs_woo_remove_reviews_tab($tabs) {
    unset($tabs['reviews']);
    return $tabs;
}
/* Slider */
/*register_post_type('slideshows', array(
    'label' => 'Slideshows',
    'show_ui' => true,
    'supports' => array('title'),
    'labels' => array (
        'name' => 'Slideshows',
        'singular_name' => 'Slideshow',
        'menu_name' => 'Slideshows'
    ),
) );
simple_fields_register_field_group('slideshow_images',
    array (
        'name' => 'Slideshow images',
        'description' => 'Add images to your slideshow here',
        'repeatable' => 1,
        'fields' => array(
            array('name' => 'Slideshow image',
                'slug' => 'slideshow_image',
                'description' => 'Select image',
                'type' => 'file'
            )
        )
    )
);
simple_fields_register_post_connector('slideshow_images_connector',
    array (
        'name' => "Slideshow images connector",
        'field_groups' => array(
            array('name' => 'Slideshow images',
                'key' => 'slideshow_images',
                'context' => 'normal',
                'priority' => 'high')
        ),
        'post_types' => array('slideshows'),
        'hide_editor' => 1
    )
);
simple_fields_register_field_group('slideshow_page_options',
    array (
        'name' => 'Slideshow options',
        'fields' => array(
            array('name' => 'Slideshow display',
                'slug' => 'slideshow_page_display',
                'description' => 'Choose a slideshow to display on this page',
                'type' => 'post',
                'type_post_options' => array("enabled_post_types" => array("slideshows"))
            )
        )
    )
);
 
simple_fields_register_post_connector('slideshow_page_connector',
    array (
        'name' => "Slideshow page connector",
        'field_groups' => array(
            array('name' => 'Slideshow options',
                'key' => 'slideshow_page_options',
                'context' => 'normal',
                'priority' => 'high')
        ),
        'post_types' => array('page')
    )
);
 
simple_fields_register_post_type_default('slideshow_page_connector', 'page');*/

/*===============================================================================================
======================= WOOCOMMERCR REMOVE PARTICULAR SORTING OPTION=============================
=================================================================================================*/




// Edit WooCommerce dropdown menu item of shop page//
// Options: menu_order, popularity, rating, date, price, price-desc
 
function my_woocommerce_catalog_orderby( $orderby ) {
    unset($orderby["popularity"]);
    unset($orderby["date"]);
    return $orderby;
}
add_filter( "woocommerce_catalog_orderby", "my_woocommerce_catalog_orderby", 20 );


/*---------- woo-product pagination number setting ------------*/
add_filter( 'loop_shop_per_page', 'new_loop_shop_per_page', 27 );

function new_loop_shop_per_page( $cols ) {
  // $cols contains the current number of products per page based on the value stored on Options -> Reading
  // Return the number of products you wanna show per page.
  $cols = 27;
  return $cols;
}
/*---------- woo-product pagination number setting ------------*/