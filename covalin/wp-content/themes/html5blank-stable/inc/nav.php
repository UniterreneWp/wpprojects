<div data-role="panel" data-position-fixed="true" data-theme="b" id="nav-panel">
<?php 
$defaults = array( 'menu' => '', 'container' => 'div', 'container_class' => '', 'container_id' => '', 'menu_class' => 'menu', 'menu_id' => '',
    'echo' => true, 'fallback_cb' => 'wp_page_menu', 'before' => '', 'after' => '', 'link_before' => '', 'link_after' => '', 'items_wrap' => '<ul id="%1$s" class="%2$s" data-role="listview" data-inset="true" data-theme="c" data-dividertheme="b">%3$s</ul>', 'item_spacing' => 'preserve',
    'depth' => 0, 'walker' => '', 'theme_location' => 'header-menu' );
	
wp_nav_menu($defaults); ?>
</div>