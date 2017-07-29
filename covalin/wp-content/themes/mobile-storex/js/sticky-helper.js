	jQuery(document).ready(function($){
		$(window).load(function(){
			var storex_device_width=$(document).width();
			if(storex_device_width>800){
			var sticky = new Waypoint.Sticky({
			element: $('.logo-wrapper')[0]
			})
			}
		});
	});