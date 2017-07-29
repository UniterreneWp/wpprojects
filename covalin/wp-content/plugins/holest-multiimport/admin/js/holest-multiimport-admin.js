!function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$container=a("<div/>",{class:"ms-container"}),this.$selectableContainer=a("<div/>",{class:"ms-selectable"}),this.$selectionContainer=a("<div/>",{class:"ms-selection"}),this.$selectableUl=a("<ul/>",{class:"ms-list",tabindex:"-1"}),this.$selectionUl=a("<ul/>",{class:"ms-list",tabindex:"-1"}),this.scrollTo=0,this.elemsSelector="li:visible:not(.ms-optgroup-label,.ms-optgroup-container,."+c.disabledClass+")"};b.prototype={constructor:b,init:function(){var b=this,c=this.$element;if(0===c.next(".ms-container").length){c.css({position:"absolute",left:"-9999px"}),c.attr("id",c.attr("id")?c.attr("id"):Math.ceil(1e3*Math.random())+"multiselect"),this.$container.attr("id","ms-"+c.attr("id")),this.$container.addClass(b.options.cssClass),c.find("option").each(function(){b.generateLisFromOption(this)}),this.$selectionUl.find(".ms-optgroup-label").hide(),b.options.selectableHeader&&b.$selectableContainer.append(b.options.selectableHeader),b.$selectableContainer.append(b.$selectableUl),b.options.selectableFooter&&b.$selectableContainer.append(b.options.selectableFooter),b.options.selectionHeader&&b.$selectionContainer.append(b.options.selectionHeader),b.$selectionContainer.append(b.$selectionUl),b.options.selectionFooter&&b.$selectionContainer.append(b.options.selectionFooter),b.$container.append(b.$selectableContainer),b.$container.append(b.$selectionContainer),c.after(b.$container),b.activeMouse(b.$selectableUl),b.activeKeyboard(b.$selectableUl);var d=b.options.dblClick?"dblclick":"click";b.$selectableUl.on(d,".ms-elem-selectable",function(){b.select(a(this).data("ms-value"))}),b.$selectionUl.on(d,".ms-elem-selection",function(){b.deselect(a(this).data("ms-value"))}),b.activeMouse(b.$selectionUl),b.activeKeyboard(b.$selectionUl),c.on("focus",function(){b.$selectableUl.focus()})}var e=c.find("option:selected").map(function(){return a(this).val()}).get();b.select(e,"init"),"function"==typeof b.options.afterInit&&b.options.afterInit.call(this,this.$container)},generateLisFromOption:function(b,c,d){for(var e=this,f=e.$element,g="",h=a(b),i=0;i<b.attributes.length;i++){var j=b.attributes[i];"value"!==j.name&&"disabled"!==j.name&&(g+=j.name+'="'+j.value+'" ')}var k=a("<li "+g+"><span>"+e.escapeHTML(h.text())+"</span></li>"),l=k.clone(),m=h.val(),n=e.sanitize(m);k.data("ms-value",m).addClass("ms-elem-selectable").attr("id",n+"-selectable"),l.data("ms-value",m).addClass("ms-elem-selection").attr("id",n+"-selection").hide(),(h.prop("disabled")||f.prop("disabled"))&&(l.addClass(e.options.disabledClass),k.addClass(e.options.disabledClass));var o=h.parent("optgroup");if(o.length>0){var p=o.attr("label"),q=e.sanitize(p),r=e.$selectableUl.find("#optgroup-selectable-"+q),s=e.$selectionUl.find("#optgroup-selection-"+q);if(0===r.length){var t='<li class="ms-optgroup-container"></li>',u='<ul class="ms-optgroup"><li class="ms-optgroup-label"><span>'+p+"</span></li></ul>";r=a(t),s=a(t),r.attr("id","optgroup-selectable-"+q),s.attr("id","optgroup-selection-"+q),r.append(a(u)),s.append(a(u)),e.options.selectableOptgroup&&(r.find(".ms-optgroup-label").on("click",function(){var b=o.children(":not(:selected, :disabled)").map(function(){return a(this).val()}).get();e.select(b)}),s.find(".ms-optgroup-label").on("click",function(){var b=o.children(":selected:not(:disabled)").map(function(){return a(this).val()}).get();e.deselect(b)})),e.$selectableUl.append(r),e.$selectionUl.append(s)}c=void 0===c?r.find("ul").children().length:c+1,k.insertAt(c,r.children()),l.insertAt(c,s.children())}else c=void 0===c?e.$selectableUl.children().length:c,k.insertAt(c,e.$selectableUl),l.insertAt(c,e.$selectionUl)},addOption:function(b){var c=this;void 0!==b.value&&null!==b.value&&(b=[b]),a.each(b,function(b,d){if(void 0!==d.value&&null!==d.value&&0===c.$element.find("option[value='"+d.value+"']").length){var e=a('<option value="'+d.value+'">'+d.text+"</option>"),b=parseInt("undefined"==typeof d.index?c.$element.children().length:d.index),f=void 0===d.nested?c.$element:a("optgroup[label='"+d.nested+"']");e.insertAt(b,f),c.generateLisFromOption(e.get(0),b,d.nested)}})},escapeHTML:function(b){return a("<div>").text(b).html()},activeKeyboard:function(b){var c=this;b.on("focus",function(){a(this).addClass("ms-focus")}).on("blur",function(){a(this).removeClass("ms-focus")}).on("keydown",function(d){switch(d.which){case 40:case 38:return d.preventDefault(),d.stopPropagation(),void c.moveHighlight(a(this),38===d.which?-1:1);case 37:case 39:return d.preventDefault(),d.stopPropagation(),void c.switchList(b);case 9:if(c.$element.is("[tabindex]")){d.preventDefault();var e=parseInt(c.$element.attr("tabindex"),10);return e=d.shiftKey?e-1:e+1,void a('[tabindex="'+e+'"]').focus()}d.shiftKey&&c.$element.trigger("focus")}if(a.inArray(d.which,c.options.keySelect)>-1)return d.preventDefault(),d.stopPropagation(),void c.selectHighlighted(b)})},moveHighlight:function(a,b){var c=a.find(this.elemsSelector),d=c.filter(".ms-hover"),e=null,f=c.first().outerHeight(),g=a.height();"#"+this.$container.prop("id");if(c.removeClass("ms-hover"),1===b){if(e=d.nextAll(this.elemsSelector).first(),0===e.length){var i=d.parent();if(i.hasClass("ms-optgroup")){var j=i.parent(),k=j.next(":visible");e=k.length>0?k.find(this.elemsSelector).first():c.first()}else e=c.first()}}else if(b===-1&&(e=d.prevAll(this.elemsSelector).first(),0===e.length)){var i=d.parent();if(i.hasClass("ms-optgroup")){var j=i.parent(),l=j.prev(":visible");e=l.length>0?l.find(this.elemsSelector).last():c.last()}else e=c.last()}if(e.length>0){e.addClass("ms-hover");var m=a.scrollTop()+e.position().top-g/2+f/2;a.scrollTop(m)}},selectHighlighted:function(a){var b=a.find(this.elemsSelector),c=b.filter(".ms-hover").first();c.length>0&&(a.parent().hasClass("ms-selectable")?this.select(c.data("ms-value")):this.deselect(c.data("ms-value")),b.removeClass("ms-hover"))},switchList:function(a){a.blur(),this.$container.find(this.elemsSelector).removeClass("ms-hover"),a.parent().hasClass("ms-selectable")?this.$selectionUl.focus():this.$selectableUl.focus()},activeMouse:function(b){var c=this;this.$container.on("mouseenter",c.elemsSelector,function(){a(this).parents(".ms-container").find(c.elemsSelector).removeClass("ms-hover"),a(this).addClass("ms-hover")}),this.$container.on("mouseleave",c.elemsSelector,function(){a(this).parents(".ms-container").find(c.elemsSelector).removeClass("ms-hover")})},refresh:function(){this.destroy(),this.$element.multiSelect(this.options)},destroy:function(){a("#ms-"+this.$element.attr("id")).remove(),this.$element.off("focus"),this.$element.css("position","").css("left",""),this.$element.removeData("multiselect")},select:function(b,c){"string"==typeof b&&(b=[b]);var d=this,e=this.$element,f=a.map(b,function(a){return d.sanitize(a)}),g=this.$selectableUl.find("#"+f.join("-selectable, #")+"-selectable").filter(":not(."+d.options.disabledClass+")"),h=this.$selectionUl.find("#"+f.join("-selection, #")+"-selection").filter(":not(."+d.options.disabledClass+")"),i=e.find("option:not(:disabled)").filter(function(){return a.inArray(this.value,b)>-1});if("init"===c&&(g=this.$selectableUl.find("#"+f.join("-selectable, #")+"-selectable"),h=this.$selectionUl.find("#"+f.join("-selection, #")+"-selection")),g.length>0){g.addClass("ms-selected").hide(),h.addClass("ms-selected").show(),i.prop("selected",!0),d.$container.find(d.elemsSelector).removeClass("ms-hover");var j=d.$selectableUl.children(".ms-optgroup-container");if(j.length>0){j.each(function(){var b=a(this).find(".ms-elem-selectable");b.length===b.filter(".ms-selected").length&&a(this).find(".ms-optgroup-label").hide()});var k=d.$selectionUl.children(".ms-optgroup-container");k.each(function(){var b=a(this).find(".ms-elem-selection");b.filter(".ms-selected").length>0&&a(this).find(".ms-optgroup-label").show()})}else if(d.options.keepOrder&&"init"!==c){var l=d.$selectionUl.find(".ms-selected");l.length>1&&l.last().get(0)!=h.get(0)&&h.insertAfter(l.last())}"init"!==c&&(e.trigger("change"),"function"==typeof d.options.afterSelect&&d.options.afterSelect.call(this,b))}},deselect:function(b){"string"==typeof b&&(b=[b]);var c=this,d=this.$element,e=a.map(b,function(a){return c.sanitize(a)}),f=this.$selectableUl.find("#"+e.join("-selectable, #")+"-selectable"),g=this.$selectionUl.find("#"+e.join("-selection, #")+"-selection").filter(".ms-selected").filter(":not(."+c.options.disabledClass+")"),h=d.find("option").filter(function(){return a.inArray(this.value,b)>-1});if(g.length>0){f.removeClass("ms-selected").show(),g.removeClass("ms-selected").hide(),h.prop("selected",!1),c.$container.find(c.elemsSelector).removeClass("ms-hover");var i=c.$selectableUl.children(".ms-optgroup-container");if(i.length>0){i.each(function(){var b=a(this).find(".ms-elem-selectable");b.filter(":not(.ms-selected)").length>0&&a(this).find(".ms-optgroup-label").show()});var j=c.$selectionUl.children(".ms-optgroup-container");j.each(function(){var b=a(this).find(".ms-elem-selection");0===b.filter(".ms-selected").length&&a(this).find(".ms-optgroup-label").hide()})}d.trigger("change"),"function"==typeof c.options.afterDeselect&&c.options.afterDeselect.call(this,b)}},select_all:function(){var b=this.$element,c=b.val();if(b.find('option:not(":disabled")').prop("selected",!0),this.$selectableUl.find(".ms-elem-selectable").filter(":not(."+this.options.disabledClass+")").addClass("ms-selected").hide(),this.$selectionUl.find(".ms-optgroup-label").show(),this.$selectableUl.find(".ms-optgroup-label").hide(),this.$selectionUl.find(".ms-elem-selection").filter(":not(."+this.options.disabledClass+")").addClass("ms-selected").show(),this.$selectionUl.focus(),b.trigger("change"),"function"==typeof this.options.afterSelect){var d=a.grep(b.val(),function(b){return a.inArray(b,c)<0});this.options.afterSelect.call(this,d)}},deselect_all:function(){var a=this.$element,b=a.val();a.find("option").prop("selected",!1),this.$selectableUl.find(".ms-elem-selectable").removeClass("ms-selected").show(),this.$selectionUl.find(".ms-optgroup-label").hide(),this.$selectableUl.find(".ms-optgroup-label").show(),this.$selectionUl.find(".ms-elem-selection").removeClass("ms-selected").hide(),this.$selectableUl.focus(),a.trigger("change"),"function"==typeof this.options.afterDeselect&&this.options.afterDeselect.call(this,b)},sanitize:function(a){var c,d,b=0;if(0==a.length)return b;var e=0;for(c=0,e=a.length;c<e;c++)d=a.charCodeAt(c),b=(b<<5)-b+d,b|=0;return b}},a.fn.multiSelect=function(){var c=arguments[0],d=arguments;return this.each(function(){var e=a(this),f=e.data("multiselect"),g=a.extend({},a.fn.multiSelect.defaults,e.data(),"object"==typeof c&&c);f||e.data("multiselect",f=new b(this,g)),"string"==typeof c?f[c](d[1]):f.init()})},a.fn.multiSelect.defaults={keySelect:[32],selectableOptgroup:!1,disabledClass:"disabled",dblClick:!1,keepOrder:!1,cssClass:""},a.fn.multiSelect.Constructor=b,a.fn.insertAt=function(a,b){return this.each(function(){0===a?b.prepend(this):b.children().eq(a-1).after(this)})}}(window.jQuery);

jQuery(document).ready(function(){
	
	jQuery("DIV.wrap > *:not(.main_area, h2, p), .update-nag").remove();
});
var export_data = null;
(function( $ ) {
	'use strict';

	/**
	 * All of the code for your admin-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */

})( jQuery );

function progress(percent, $element) {
	var progressBarWidth = percent * $element.width() / 100;
	$element.find('div').animate({ width: progressBarWidth }, 500).html(percent + "% ");
}


	
jQuery(document).ready(function(){
	jQuery(document).on('click','#use_admin a',function(e){
		if(jQuery("#disable_connect:visible").length>0){
			var r = confirm("Connection is open, want to proceed to admin mode?");
		if (r == true) {
			updateOption("is_admin",1);
		}
		}else{
			updateOption("is_admin",1);
		}
	});
	
	jQuery(document).on('click','#use_client a',function(e){
		updateOption("is_admin",0);
	});
	
	jQuery(".export-box select").multiSelect({
		selectableHeader: "Available",
		selectionHeader: "Selected"
	});
	
	//progress bar function
	
	
	jQuery(document).on('click','#add_new_site',function(){

		var site = jQuery("input[name='new_site']").val();
		jQuery('.site_val').each(function(){
			if(site == jQuery(this).text()){
				alert("You already added that site");
				return false;
			}
				
			
		});
		var siteLength = site.length;
		if(site.charAt(siteLength-1) != "/" )
			site = site+"/";
		
		
		 jQuery.ajax({
            type: "POST",
            data: {pair_request: 1 ,uid : jQuery("#main_uid").val()},
            url: site+"?action=holest_multiimport",
            success: function(data){

				data = JSON.parse(data);
				
				if(data.message == "success")
					updateOption("available_admin_sites",site);
				else if(data.message == "blocked")
					alert("Plugin don't alow connection on client side! Please enable it there.");
		 }});
		});
		
	jQuery(document).on('click','.delete',function(){
		var site = jQuery(this).parent('.site').find('p.site_val').text().replace(/\s/g, "");
		jQuery.ajax({
            type: "POST",
            data: {delete_site:site ,uid : jQuery("#main_uid").val()},
			url: "?action=holest_multiimport",
            success: function(data){
				data = JSON.parse(data);
				
				if(data.message == "success")
					window.location.reload();
		 }});
	});
	
	var progress_bar;
	
	/*
	jQuery(document).on('click','.import-box .confirm',function(){
		var data = new FormData();
		
		//jQuery.each(jQuery('#file')[0].files, function(i, file) {
		//	data.append('file', file);
		//});
		
		
		if(!jQuery('#file')[0].files[0]){
			alert('Please select CSV file!');
			return;
		}
		
		data.append('file', jQuery('#file')[0].files[0]);
		
		var parent_div = jQuery(this).parent();
		var site = jQuery(this).parent().find('p.current_site').text();
		var file = jQuery("#file").val()
		
		jQuery(".import-box:visible DIV.import_status").html('<p style="color:green" >Uploading CSV file...</p>');
		
		data["uid"] = jQuery("#main_uid").val();
		
		jQuery.ajax({
            data: data,
			cache: false,
			contentType: false,
			processData: false,
			type: 'POST',
			url: "?action=holest_multiimport",
            success: function(data){

				data = JSON.parse(data);
				if(data.message == "success"){
					jQuery(".import-box:visible DIV.import_status").html('<p style="color:green" >Importing...</p>');
					//then retrive json part by part
					progress(10, jQuery('.import-box .progressBar'));
					jQuery('.import-box .close').attr('disabled',true);
					jQuery('.import-box .confirm').attr('disabled',true);
					start_retrive(0,data.uid,false,site,data.size);
				
					
				}
				else if(data.message == 'tmp_file'){
				    jQuery(".import-box:visible DIV.import_status").html('<p style="color:green" >Extracting CSV data...</p>');
					call_subajax(data.json,site);	
				}
					
		  },
		  error: function(x,y,x){
			  alert("Import Error [1]!");
		  }
		  });
	});
	
	function call_subajax(data,site){
		
		jQuery.ajax({
			type: 'POST',
			data: {import_file: data.import_file, tmp_file: data.tmp_file, tmp_file_n: data.tmp_file_n, commit_import: data.commit_import, import_uid: data.import_uid , uid : jQuery("#main_uid").val()},
			url: "?action=holest_multiimport",
			success: function(data){
				data = JSON.parse(data);
				if(data.message == "success"){
					//then retrive json part by part
					progress(10, jQuery('.import-box .progressBar'));
					jQuery('.import-box .close').attr('disabled',true);
					jQuery('.import-box .confirm').attr('disabled',true);
					start_retrive(0,data.uid,false,site,data.size);
				
					
				}
				else if(data.message == 'tmp_file'){
					call_subajax(data.json,site);
				}
								
		   },error: function(x,y,x){
				alert("Import Error [2]!");
		   }
		 });
	}*/
	
	/*
	var first_row;
	var old_data;
	var old_size;
	
	var error = 0;
	
	function start_retrive(n,uid,last_one,site,size){
		old_size = size;
		var part_number = 300;
		var last = false;
		if(n%(part_number) != 0 || last_one)
			last = true;
		if(!last){

			jQuery.ajax({
					type: "POST",
					url: "?action=holest_multiimport",
					data: {retrive_json:true, part:part_number, start:n, last:last, uid_base:uid, uid : jQuery("#main_uid").val()},
					success: function(data){
						
						data = JSON.parse(data);
						old_data = data;
						if(n==0){
							first_row = data.first_row;
						}

						if(data.message == "success")
						{
		
							jQuery.ajax({
								type: "POST",
								data: {get_data:true, json:old_data.json_object, first_row_n:first_row , uid: jQuery("#main_uid").val()},
								url: site+"?action=holest_multiimport",
								success: function(data_new){
						
									data_new = JSON.parse(data_new);
								
									if(data_new.message == "success"){
										progress( Math.ceil(10+((90*old_data.n)/old_size)), jQuery('.import-box .progressBar'));
										start_retrive(old_data.n, old_data.uid, old_data.last_one,site,old_size);
									}
									else if(data_new.message == "failure"){
										error++;
									   if(error<10){
										   jQuery.ajax(this);
									   }
									   else{
										   alert("Something went wrong, please check connection and try again later");
										   error=0;
										   setTimeout(function(){
											   window.location.reload();
										   },3000);
									   }
										   
							   
									}
										
							 },
							 error: function(xhr, textStatus, errorThrown){
							   error++;
							   if(error<10){
								   jQuery.ajax(this);
							   }
							   else{
								   alert("Something went wrong, please check connection and try again later");
								   error=0;
								   setTimeout(function(){
									   window.location.reload();
								   },3000);
							   }
								   
							   
							}
							 });
							
							
							//na success zovem ajax za client 
							//i rekurzivno pozivam start_retrive za ostatak na succcess klijenta
						}
				 },error: function(x,y,x){
					alert("Import Error [3]!");
								   
								   setTimeout(function(){
									   window.location.reload();
								   },3000);
				 }
	});
		}else{
			jQuery(".import-box:visible DIV.import_status").html('<p style="color:green" >Done!</p>');
			alert("Import completed");
			
			jQuery.ajax({
				type: "POST",
				data: {update_option:"log", value:false, uid: jQuery("#main_uid").val()},
				url: site+"?action=holest_multiimport",
				success: function(data){
					data = JSON.parse(data);
			 }});
			
			
			progress(0, jQuery('.import-box .progressBar'));
			jQuery('.import-box .close').attr('disabled',false);
			jQuery('.import-box .confirm').attr('disabled',false);
			setTimeout(function(){
				jQuery('.import-box .close').parent().fadeOut();
			},2000);
			//znaci da je zavrsio 
		}
	}
	*/
	
	
	
	jQuery(document).on('click','#disable_connect',function(){
		 updateOption('connection_flag',"0");
	});
	
	
	jQuery(document).on('click','#enable_connect',function(){
		 updateOption('connection_flag',"1");
	});
		
	
	jQuery(document).on('click','.export',function(){
		
		jQuery('.export-box').fadeIn();
		jQuery('.export-box .categories').append(" <input id='all_cat_selector' type='checkbox' value='all'>ALL CATEGORIES<br> ");
		
		jQuery('.export-box .categories').append(" <hr/> ");
		jQuery('.export-box .current_site').text(jQuery(this).parent('.site').find('p.site_val').text().replace(/\s/g, ""));
		var site = jQuery('.export-box .current_site').text();
		
		if(site[site.length - 1] != '/')
			site += '/';
		
		jQuery.ajax({
				type: 'POST',
				data: {get_categories: true, uid: jQuery("#main_uid").val()},
				url: site + "wp-admin/admin-ajax.php?action=pelm_frame_display&page=productexcellikemanager-root&elpm_shop_com=wooc&pelm_full_screen=1&do_export_categories=1&export_format=json&remote_export=1&diff=" + parseInt(Math.random() * 99999) + "&" + jQuery("#export_additional_sq_parm").val() ,
				success: function(data){

					
					if(data.categories){
						
						jQuery('.export-box .please_wait').fadeOut();
						jQuery('.export-box .cmd-do-export').prop('disabled',false);
						
						for (var i in data.categories) {
							
							jQuery('.export-box .categories').append("<input  type='checkbox' name='cat[]' data-label='" + data.categories[i]['category_path']+"' value='" + data.categories[i]['category_id'] + "'><label>"+data.categories[i]['category_path'] + "</label><br> ");
						}
						
						jQuery('.export-box .categories label').each(function(){
							var length = (jQuery(this).text().split("/").length - 1)*50;
							jQuery(this).prev('input').css("margin-left",length+"px");
						});
						
						jQuery('.export-box .categories INPUT').prop('checked',true);
						
						//then retrive json part by part
					}
				}
				,error:function(x,y,z){
					alert("Error! No response from client site!");
					jQuery('.export-box .cmd-do-export').prop('disabled',true);
				}
			});
		
	});
	
	function datenum(v, date1904) {
		if(date1904) v+=1462;
		var epoch = Date.parse(v);
		return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000);
	}
	 
	function sheet_from_array_of_arrays(cdata, opts) {
		var ws = {};
		var range = {s: {c:10000000, r:10000000}, e: {c:0, r:0 }};
		for(var R = 0; R < cdata.length; ++R) {
			if(cdata[R] === undefined)
				break;
			for(var C = 0; C < cdata[R].length; ++C) {
				if(cdata[R][C] === undefined)
					break;
				
				if(range.s.r > R) range.s.r = R;
				if(range.s.c > C) range.s.c = C;
				if(range.e.r < R) range.e.r = R;
				if(range.e.c < C) range.e.c = C;
				
				var cell = {v: cdata[R][C] };
				
				if(cell.v == null) 
					continue;
				
				var cell_ref = XLSX.utils.encode_cell({c:C,r:R});
				
				if(typeof cell.v === 'number'){ 
					cell.t = 'n';
				}else if(typeof cell.v === 'boolean'){ 
					cell.t = 'b';
				}else if(cell.v instanceof Date) {
					cell.t = 'n'; cell.z = XLSX.SSF._table[14];
					cell.v = datenum(cell.v);
				}else 
					cell.t = 's';
				
				ws[cell_ref] = cell;
			}
		}
		if(range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range);
		return ws;
	}
	
	function Workbook() {
		if(!(this instanceof Workbook)) return new Workbook();
		this.SheetNames = [];
		this.Sheets = {};
	}
	
	function s2ab(s) {
		var buf = new ArrayBuffer(s.length);
		var view = new Uint8Array(buf);
		for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
		return buf;
	}
	
	function outputExportFile(site){
		
		var wb = new Workbook();
		
		var final_data = [];
		
		for( var i = 0; i < export_data.length; i++ ){
			if(i === 0){
				final_data.push( Object.keys(export_data[0]) );
			}
			
			var row = [];
			for(var j = 0; j < final_data[0].length;j++){
				row.push(export_data[i][final_data[0][j]]);
			}
			
			final_data.push(row);
		}
		
		var ws = sheet_from_array_of_arrays(final_data);
		var ws_name = site;
		wb.SheetNames.push(ws_name);
		wb.Sheets[ws_name] = ws;
		
        var d = new Date();  		
			
		var file_name = site.toLowerCase().replace("https://","").replace("http://","").replace(/\./g,"_") + "_" + d.getFullYear() + "_" + (d.getMonth() + 1) + "_" +  d.getDate() + "_" + d.getHours() + "_" + d.getMinutes();
		
		if(jQuery(".export-box:visible INPUT[name='export_type']:checked").val() == "csv"){
			var result = [];
			wb.SheetNames.forEach(function(sheetName) {
				var csv = XLSX.utils.sheet_to_csv(wb.Sheets[sheetName]);
				if(csv.length > 0){
					result.push(csv);
				}
			});
			var csv = result.join("\n");
			var res = saveAs(new Blob([csv],{type:"application/octet-stream"}), file_name + ".csv");
			
			if(!res.savedAs){
				alert("This browser is not able to generate files on client side. Please use other browser. (Chrome is recommended)")
			}
			
		}else{
			
			var wbout = XLSX.write(wb, {bookType:'xlsx', bookSST:true, type: 'binary'});
			var res = saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), file_name + ".xlsx");
			if(!res.savedAs){
				alert("This browser is not able to generate files on client side. Please use other browser. (Chrome is recommended)")
			}
			
		}	
		
	}
	
	function receiveExport(site, lastResponse){
		jQuery("#frmSerialize > *").remove();
		var inp = null;
		var catsfilter = "";
		if(lastResponse){
			if(!lastResponse.product_category && lastResponse.product_category !== undefined){
				delete lastResponse.product_category;
			}
			
			for(var prop in lastResponse){
				if(lastResponse.hasOwnProperty(prop)){
					inp = jQuery('<input type="hidden" />');
					inp.attr("name",prop);
					inp.attr("value",lastResponse[prop]);
					jQuery("#frmSerialize").append(inp);
				}
			}
		}else{
			
			if(!jQuery('.export-box .categories:visible INPUT[name]:not(:checked)')[0]){
				catsfilter = "";
			}else{
				
				catsfilter = [];
				jQuery('.export-box .categories:visible INPUT[name]:checked').each(function(i){
					catsfilter.push(jQuery(this).val());
				});
				catsfilter = catsfilter.join(",");
				
			}
			
			
		}
		
		if(catsfilter){
			inp = jQuery('<input type="hidden" />');
			inp.attr("name","product_category");
			inp.attr("value",catsfilter);
			jQuery("#frmSerialize").append(inp);
		}
		
		inp = jQuery('<input type="hidden" />');
		inp.attr("name","limit");
		inp.attr("value","99999999");
		jQuery("#frmSerialize").append(inp);
		
		jQuery.ajax({
				type: 'POST',
				data: jQuery("#frmSerialize").serialize(),
				url: site + "wp-admin/admin-ajax.php?action=pelm_frame_display&page=productexcellikemanager-root&elpm_shop_com=wooc&pelm_full_screen=1&do_export=1&export_format=json&remote_export=1&diff=" + parseInt(Math.random() * 99999) + "&" + jQuery("#export_additional_sq_parm").val() ,
				success: function(data){
					
					if(data.items){
						jQuery("#export_info").html("" + (export_data.length + data.items.length) + " products...");
					}
					
					if(data.done){
						
						for(var i = 0; i < data.items.length ; i++){
							export_data.push(data.items[i]);
						}
						delete data.items;
						jQuery(".export-box .cmd-do-export").attr("disabled",false);
						outputExportFile(site);
						jQuery("#export_info").html("");
					}else{
					    for(var i = 0; i < data.items.length; i++){
							export_data.push(data.items[i]);
						}
						delete data.items;
						receiveExport(site, data);
					}
				},
				error: function(x,y,z){
					jQuery("#export_info").html("Error after " + export_data.length + " products");
					if(export_data.length)
						outputExportFile();
					
					jQuery(".export-box .cmd-do-export").attr("disabled",false);
				}
		});
		
	} 
	
	jQuery(document).on('click','.export-box .cmd-do-export',function(){
		
		var site = jQuery('.export-box .current_site').text();
		if(site[site.length - 1] != '/')
			site += '/';
		export_data = [];
		jQuery(".export-box .cmd-do-export").attr("disabled",true);
		
		receiveExport(site,null);
		
		
		
		
	});
	
	
	jQuery(document).on("click","input[name='cat[]'], input#all_cat_selector",function(){
		
		var cat = jQuery(this).next('label').text()+"/";
		var parent_cat = jQuery(this).next('label').text().split("/");
		
		if(jQuery(this).val() == 'all'){
			if((jQuery(this)).prop('checked') == true){
				jQuery("input[name='cat[]']").each(function(){
						jQuery(this).prop("checked",true);
				});
			}
			else{
				jQuery("input[name='cat[]']").each(function(){
						jQuery(this).prop("checked",false);
				});
			}
		
		}else{
			if((jQuery(this)).prop('checked') == true)
			{
				jQuery("input[name='cat[]']").each(function(){
					var current  = jQuery(this).next('label').text();
					if(current.indexOf(cat) != -1)
						jQuery(this).prop("checked",true);
				});
			}else{

				jQuery("input[name='cat[]']").each(function(){
					var current  = jQuery(this).next('label').text();
					if(current.indexOf(cat) != -1)
						jQuery(this).prop("checked",false);
					
					if(jQuery(this).next('label').text() == parent_cat[0] || jQuery(this).val()=='all'){
						jQuery(this).prop("checked",false);
					}
					
				});

			}
		}
		
		
	});
	
	jQuery(document).on('click','.close',function(){
		jQuery(this).parent().fadeOut();
		jQuery('.export-box .please_wait').fadeIn();
		jQuery('.export-box .categories').empty();
	});
	
	if(jQuery("#use_client").hasClass('activeTab')){
		function recall(){
			jQuery.ajax({
			type: "POST",
			data: {get_log:true,uid : jQuery("#main_uid").val()},
			url: "?action=holest_multiimport",
			success: function(data){
				data = JSON.parse(data);
				
				if(data.message == "success")
				{
					
					if(jQuery(".connection-await").is(':visible') && data.connection_flag == 0){
						jQuery(".connection-await").hide();
						jQuery(".connection-not-await").show();
					}else if(jQuery(".connection-not-await").is(':visible') && data.connection_flag == 1){
						jQuery(".connection-await").show();
						jQuery(".connection-not-await").hide();
					}
					
					//if(data.log.length > jQuery('.import_log p').length){
					///	jQuery('.import_log p').remove();
					//	for(x in data.log){
					//		jQuery('.import_log').append('<p>'+data.log[x]+'</p>');
					//	}
					//}
					
					//connection_flag
				}
				
				setTimeout(function(){
						recall();
					},3000);
					
		 },error: function(x,y,x){
				setTimeout(function(){
						recall();
					},3000);
		   }
		   
		   });
		}
		
		recall();
	}
	
	
});

function updateOption(option,value){
	jQuery.ajax({
		type: "POST",
		data: {update_option:option, value:value, uid : jQuery("#main_uid").val()},
		url: "?action=holest_multiimport",
		success: function(data){
			data = JSON.parse(data);
			
			if(data.message == "success")
				window.location.reload();
	 }});
}

var IMPORT_DATA_CHUNK    = 300;

var import_data                     = null;
var import_prepare_bad_items        = 0;
var import_nonprepared_items        =  0;
var import_prepare_processed_items  = 0;
var import_prepared_items           = 0;
var import_processed_items           = 0;
var import_data_sites               = null;
var import_prepare_errors_sites     = null;
var import_data_total_entries       = 0;

var import_to_site                  = null; 
var import_request_scheduler_handle = null;
var import_uid = "";

function globalImportSitePrepared(site,prepared_success){
	
	if(prepared_success){
		commitDataImportCycleOnSite(site, null);
	}else{
		if(import_data_total_entries > import_prepare_bad_items)
			jQuery("#globalImportDone").show();
		
		
		jQuery("#globalImportModal button.close, #globalImportModal button.close_modal").removeAttr('disabled');
		
		try{
			console.log("Import fail " + (new Date()));
			
			if(import_request_scheduler_handle){
				clearInterval(import_request_scheduler_handle);
				import_request_scheduler_handle = null;
			}
			
		}catch(ex){
			
		}
	}
}


jQuery(document).on('hidden.bs.modal','#globalImportModal', function () {
	if(import_request_scheduler_handle){
		clearInterval(import_request_scheduler_handle);
		import_request_scheduler_handle = null;
	}
})

function updateGlobalImportProgress(){
	var prep_progress_value = 100 - (parseFloat((import_data_total_entries - import_prepare_processed_items - import_prepare_bad_items)/import_data_total_entries) * 100);
	prep_progress_value = Math.round(prep_progress_value * 50) / 100;
	
	var imp_progress_value = 100 - (parseFloat((import_data_total_entries - import_processed_items - import_prepare_bad_items)/import_prepare_processed_items) * 100);
	imp_progress_value = Math.round(imp_progress_value * 50) / 100;
	
	progress(prep_progress_value + imp_progress_value, jQuery('#globalImportModal .progressBar'));
	
	if(prep_progress_value + imp_progress_value == 100){
		if(import_data_total_entries > import_prepare_bad_items)
			jQuery("#globalImportDone").show();
		
		
		jQuery("#globalImportModal button.close, #globalImportModal button.close_modal").removeAttr('disabled');
		
		try{
			console.log("Import done " + (new Date()));
			if(import_request_scheduler_handle){
				clearInterval(import_request_scheduler_handle);
				import_request_scheduler_handle = null;
			}
		}catch(ex){
			
		}
	}
}

 
function startGlobalImportPrepare(){
	import_uid = "pelm_import_" + String(parseInt(Math.random() * 9999999));
	
	try{
		console.log("Import start " + (new Date()));
	}catch(ex){
		
	}
	import_prepare_bad_items       = 0;
	import_data_total_entries      = 0;
	import_data_sites              = {};
	import_prepare_errors_sites    = {};
	import_nonprepared_items       = 0;
	import_prepare_processed_items = 0;
	import_prepared_items          = 0;
	import_processed_items         = 0;
	
	import_data_total_entries = 0;
	
	var siteColInd = import_data[0].indexOf('site');
	
	for(var i = (siteColInd == -1 ? 0 : 1) ; i < import_data.length ; i++){
		var site = "";
		
		if(siteColInd > -1){
		  site = import_data[i][siteColInd];
		  if(site[site.length -1] != '/')
			  site += '/';
		}
		
		if(import_to_site){
			if(site == import_to_site || !site){
				if(!import_data_sites[import_to_site]){
					import_data_sites[import_to_site] = [];
					if(siteColInd > -1){
						import_data_sites[import_to_site].push(import_data[0]);
						import_data_total_entries++;
					}
				}
				
				if(import_data[i]['URL country'])
					delete import_data[i]['URL country'];
				
				import_data_sites[import_to_site].push(import_data[i]);
				import_data_total_entries++;
			}
		}else{
			if(site){
				if(!import_data_sites[site]){
					import_data_sites[site] = [];
					if(siteColInd > -1){
						import_data_sites[site].push(import_data[0]);
						import_data_total_entries++;
					}
				}
				
				delete import_data[i]['URL country'];
				import_data_sites[site].push(import_data[i]);
				import_data_total_entries++;
			}else
				import_prepare_bad_items++;
		}
	}
	
	if(import_data_total_entries == 0){
		alert("Nothing to import!");
		return;
	}
	
	var sites_to_do = []; 
	
	for (var site in import_data_sites) {
		if (import_data_sites.hasOwnProperty(site)) {
			if(!jQuery(".site[rel = '" + site + "']")[0]){
				import_prepare_bad_items += import_data_sites[site].length;
				alert("Site " + site + " is not connected jet!");	
			}else{
				sites_to_do.push(site);
			}
		}
	}
	
	if(sites_to_do.length){
		import_request_scheduler_handle = setInterval(function(){
			if(sites_to_do.length){
				if(jQuery.active < parseInt(jQuery("#max_parallel_requests:visible").val())){
					var dsite = sites_to_do.shift();
					prepareDataImportCycleOnSite(dsite, 0);
				}
			}else{
				if(import_request_scheduler_handle){
					clearInterval(import_request_scheduler_handle);
					import_request_scheduler_handle = null;
				}
				return;
			}
		},200);
	}
	
	
	//alert("Now commit!");
}
function commitDataErrorOnSite(site){
	globalImportSitePrepared(site,false);
}

function commitDataImportCycleOnSite(site, last_response){
	
	var continueFrom   = 0;
	var import_count   = 0;
	
	if(last_response){
	   continueFrom   = last_response.continueFrom;
	   import_count   = last_response.import_count;
	}
						
	jQuery.ajax({
		type: 'POST',
		data: JSON.stringify({}),
		url: site + "wp-admin/admin-ajax.php?action=pelm_frame_display&page=productexcellikemanager-wooc&import_uid=" + import_uid + "&continueFrom=" + continueFrom + "&import_count=" + import_count + "&commit_import=1&elpm_shop_com=wooc&do_import=1&pelm_full_screen=1&json_import=1&remote_import=1&sep=sep" + jQuery('#additional_sq_parm:visible').val() ,
		dataType: "json",
		processData: false,
		success: function(response){
			
			try{			
				response = eval("(" + response + ")");
			}catch(ex){
				
			}
			
			if(response.import_done){
				import_processed_items += parseInt(response.proccessed);
				
			}else if(response.continueFrom !== undefined){
				import_processed_items += parseInt(response.proccessed);
				commitDataImportCycleOnSite(site, response);
			}
			
			updateGlobalImportProgress();
		},
		error:function(a,b,c){
			import_prepare_errors_sites[site]++;
			if(import_prepare_errors_sites[site] < 5){
				setTimeout(function(){
					commitDataImportCycleOnSite(site, last_response);
				},5000);
			}else{
				commitDataErrorOnSite(site);
			}
		}
	});
	
}


function prepareDataImportCycleOnSite(site, offset){
	
	var items = import_data_sites[site].slice(offset,offset + IMPORT_DATA_CHUNK);
	
	if(!items.length){
		globalImportSitePrepared(site,true);
		return;
	}
	
	jQuery.ajax({
		type: 'POST',
		data: JSON.stringify({"items": items, "offset": offset, "import_uid": import_uid }),
		url: site + "wp-admin/admin-ajax.php?action=pelm_frame_display&page=productexcellikemanager-wooc&import_uid=" + import_uid + "&elpm_shop_com=wooc&do_import=1&pelm_full_screen=1&json_import=1&remote_import=1&sep=sep" + jQuery('#additional_sq_parm:visible').val() ,
		dataType: "json",
		processData: false,
		success: function(response){
			
					try{			
						response = eval("(" + response + ")");
					}catch(ex){
						//
					}
					
					if((response.imported_count || 0))
						import_prepare_errors_sites[site] = 0;
					else{
						import_prepare_bad_items += import_data_sites[site].length;
						import_prepare_bad_items -= (offset || 0);
						globalImportSitePrepared(site,false);
						updateGlobalImportProgress();
						alert("Import operation closed for site '" + site + "' beacuse product could not be imported!");
						return;
					}
					
					import_nonprepared_items += ((response.import_count || 0) - (response.imported_count || 0));
					import_prepare_processed_items += (response.import_count || 0);
					import_prepared_items  += (response.imported_count || 0);
					updateGlobalImportProgress();
					prepareDataImportCycleOnSite(site, (offset || 0) + (response.import_count || 0));
					
		},
		error:function(a,b,c){
			import_prepare_errors_sites[site]++;
			if(import_prepare_errors_sites[site] < 5){
				
				if(import_prepare_errors_sites[site] > 1){
				   if(IMPORT_DATA_CHUNK == 300){
						IMPORT_DATA_CHUNK = 150;
				   }	
				}
				
				var self = this;
				setTimeout(function(){
					prepareDataImportCycleOnSite(site, (offset || 0));
				},5000);
				
			}else{
				import_prepare_bad_items += import_data_sites[site].length;
				import_prepare_bad_items -= offset;
				globalImportSitePrepared(site, false);
				updateGlobalImportProgress();
				
				alert("Import operation closed for site '" + site + "' beacuse of 5 subsequent failures to complete opertion");
			}
		}
	});
}


var rABS         = true;
if(!(typeof FileReader !== "undefined" && typeof FileReader.prototype !== "undefined" && typeof FileReader.prototype.readAsBinaryString !== "undefined")) {
	rABS = false;
}

function fixdata(data) {
	var o = "", l = 0, w = 10240;
	for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,new Uint8Array(data.slice(l*w,l*w+w)));
	o+=String.fromCharCode.apply(null, new Uint8Array(data.slice(l*w)));
	return o;
}

function to_json(workbook) {
	var result = [];
	workbook.SheetNames.forEach(function(sheetName) {
		//XLSX.utils.sheet_to_csv(workbook.Sheets[sheetName]) // vraca CSV string
		
		var roa = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
		if(roa.length > 0){
			result = result.concat(roa);
		}
	});
	return result;
}

function to_arrays(workbook) {
	var result = [];
	var n = 0;
	workbook.SheetNames.forEach(function(sheetName) {
		var roa = XLSX.utils.sheet_to_csv(workbook.Sheets[sheetName]);
		roa = jQuery.csv.toArrays(roa);
		
		if(n > 0 && roa.length)
			roa.splice(0,1);
		
		if(roa.length > 0){
			result = result.concat(roa);
		}
		n++;
	});
	return result;
}


jQuery(document).on("click","#cmdGlobalImport",function(){
	initImportWindow(null);
});

jQuery(document).on('click','.site button.import',function(){
    initImportWindow(jQuery(this).closest("div.site").attr('rel'));	
});


function initImportWindow(site){
	jQuery("#cmdStartGlobalImport").attr('disabled','disabled');
	jQuery("#global_file").val(null);
	
	import_to_site = site;
	jQuery("#import_to_indicator").html( import_to_site || " global (input spreadsheet must contain 'site' column)" );
	
	jQuery("#globalImportDone").hide(); 
	progress(0, jQuery('#globalImportModal .progressBar'));
	jQuery("#globalImportModal button.close, #globalImportModal button.close_modal").removeAttr('disabled');
	if(site){
		jQuery("#globalImportModal").modal('show');	
	}
}

jQuery(document).on("change", "#global_file",function(){
	if(jQuery("#global_file")[0].files.length)
		jQuery("#cmdStartGlobalImport").removeAttr('disabled');
});



jQuery(document).on("click","#cmdStartGlobalImport",function(e){
	
	jQuery("#cmdStartGlobalImport,  #globalImportModal button.close, #globalImportModal button.close_modal").attr('disabled','disabled');
	
	import_data = [];
	
	if(!jQuery("#global_file")[0].files.length){
		alert('Plese select files to import first!');
		return;
	}
	
	var csv_separator = jQuery("#csv_separtor").val();
	
	var files_loaded = 0;
	var total_files  = jQuery("#global_file")[0].files.length;
	
	for(var i = 0; i < total_files; i++ ){
		var file = jQuery("#global_file")[0].files[i];
		var fname = file.name;
		var ext = fname.split('.');
		ext = ext[ext.length - 1].toLowerCase();
		
		if(ext == "csv"){
			var reader = new FileReader();
		    reader.onload = function(event){
				try{
					var csv = event.target.result;
					var data = jQuery.csv.toArrays(csv, {"separator" : csv_separator} );
					import_data = import_data.concat(data);
				}catch(ex){
					alert("Cound not load " + fname);
				}
				files_loaded++;
				if(total_files == files_loaded && import_data.length){
					startGlobalImportPrepare();
				}
			};
			reader.readAsText(file);
		}else{
			var reader = new FileReader();
		    reader.onload = function(event){
				
				try{
					var data = event.target.result;
					
					var wb;
					if(rABS) {
						wb = XLSX.read(data, {type: 'binary'});
					} else {
						var arr = fixdata(data);
						wb = XLSX.read(btoa(arr), {type: 'base64'});
					}
					
					import_data = import_data.concat(to_arrays(wb));
					
					files_loaded++;
					if(total_files == files_loaded && import_data.length){
						startGlobalImportPrepare();
					}
				}catch(ex){
					alert("Cound not load " + fname);
				}
			};
			
			if(rABS) 
				reader.readAsBinaryString(file);
			else 
				reader.readAsArrayBuffer(file);
		}
		
	}
});
