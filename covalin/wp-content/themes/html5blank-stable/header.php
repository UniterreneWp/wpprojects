<!DOCTYPE html>
<html>
<head>	
   <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/jquery.mobile-1.4.5.min.css" />
<script src="<?php echo get_template_directory_uri();?>/jquery.js"></script>
<script src="<?php echo get_template_directory_uri();?>/index.js"></script>

<script src="<?php echo get_template_directory_uri();?>/jquery.mobile-1.4.5.min.js"></script>
<?php wp_head(); ?>
	</head>
	<body>
    
  <div data-role="page" class="jqm-demos" id="panel-fixed-page1" data-title="Panel fixed positioning" >

    <div data-role="header" data-position="fixed" data-theme="b">
		
		
      <h1><?php bloginfo('name'); ?></h1>
        <a href="#nav-panel" data-icon="bars" data-iconpos="notext">Menu</a>
       
       <!-- For Search-->
        <a href="#transitionExample" data-transition="slidedown" data-icon="search" data-rel="popup"></a>
        <!--Search end-->
        
        
        <!--For Phone-->
         <a href="tel:+1234567890" data-transition="slidedown" data-icon="phone"></a>
        <!--End of phone-->
        
        <!--For Cart-->
         <a href="#" data-transition="slidedown" data-icon="cart"></a>
        <!--End of cart--> 
        

        <a href="#add-form" data-icon="user" data-iconpos="notext">Add</a>
    </div><!-- /header -->


	<?php include (TEMPLATEPATH . '/inc/nav.php' ); ?>
    <!-- /panel -->

	<div data-role="panel" data-position="right" data-position-fixed="true" data-display="overlay" data-theme="a" id="add-form">

        <form class="userform">

        	<h2>Login</h2>

            <label for="name">Username:</label>
            <input type="text" name="name" id="name" value="" data-clear-btn="true" data-mini="true">

            <label for="password">Password:</label>
            <input type="password" name="password" id="password" value="" data-clear-btn="true" autocomplete="off" data-mini="true">

            <div class="ui-grid-a">
                <div class="ui-block-a"><a href="#" data-rel="close" class="ui-btn ui-shadow ui-corner-all ui-btn-b ui-mini">Cancel</a></div>
                <div class="ui-block-b"><a href="#" data-rel="close" class="ui-btn ui-shadow ui-corner-all ui-btn-a ui-mini">Save</a></div>
			</div>
        </form>

	</div><!-- /panel -->
	
	
	
	<!-- For Search Popup-->
	
	<div data-role="popup" id="transitionExample" class="ui-content" data-theme="a">
		<form role="search" method="get" class="woocommerce-product-search" action="<?php echo home_url() ?>">
			<label class="screen-reader-text" for="woocommerce-product-search-field-0">Search for:</label>
			<input type="search" id="woocommerce-product-search-field-0" class="search-field" placeholder="Search products…" value="" name="s">
			<input type="submit" value="Search">
			<input type="hidden" name="post_type" value="product">
		</form>
	</div>
   <!-- End Of Search Popup-->
