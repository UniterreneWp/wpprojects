<?php
  
	$defualt_setting = new stdClass;
	$defualt_setting->use_custom_import          = 0;
	$defualt_setting->use_custom_export          = 0;
	$defualt_setting->onimportstatus_overide     = 0;
	$defualt_setting->notfound_setpending        = '';
	$defualt_setting->first_row_header           = 1;
	$defualt_setting->custom_import_columns      = "";
	$defualt_setting->custom_export_columns      = "";
	$defualt_setting->german_numbers             = 0;
	$defualt_setting->delimiter                  = ','; 
	$defualt_setting->delimiter2                 = ',';
	$defualt_setting->value_delimiter            = ',';
	$defualt_setting->allow_remote_import        = 0;
	$defualt_setting->remote_import_ips          = ''; 
	$defualt_setting->parent_export_method       = 'id';
	$defualt_setting->category_export_method     = 'fullpath';
	$defualt_setting->export_site_url            = 0;
	$defualt_setting->export_product_terms       = 0;
	$defualt_setting->export_product_terms_ids   = 0;
	$defualt_setting->export_loop_chunk          = 300;
  
  
  if(!isset($this->settings[$elpm_shop_com.'_custom_import_settings'])){
	$isettings = new stdClass();
	
	foreach($defualt_setting as $prop => $val){
		$isettings->{$prop} = $val;
	}
	
	$this->settings[$elpm_shop_com.'_custom_import_settings'] = $isettings;
	$this->saveOptions();
  }else
	$isettings = $this->settings[$elpm_shop_com.'_custom_import_settings'];

  $savesett = false; 
  foreach($defualt_setting as $prop => $val){
	  if(!isset($isettings->{$prop})){
		$isettings->{$prop} = $val;
		$savesett = true;
	  }
  }
  
  if($savesett){
	  $this->settings[$elpm_shop_com.'_custom_import_settings'] = $isettings;
	  $this->saveOptions();
  }
 	
  if(isset($_REQUEST['save_import_settings']) && strtoupper($_SERVER['REQUEST_METHOD']) === 'POST'){
	
	foreach($defualt_setting as $prop => $val){
	  if(isset($_REQUEST[$prop])){
		$isettings->{$prop} = $_REQUEST[$prop];
	  }
	}
	
	$this->saveOptions();
  }	
  
  if(!$isettings->delimiter)
	$isettings->delimiter = ',';
  if(!$isettings->delimiter2)
	$isettings->delimiter2 = ',';
  if(!$isettings->value_delimiter)
	$isettings->value_delimiter = ',';



  
?>

<div id="settings-panel" style="display:none;">
<div>

    <h2> <?php echo __("General Options",'productexcellikemanager'); ?> </h2>
    <h3><?php echo __("Common settings",'productexcellikemanager'); ?></h3>
	<table>
		<tr>
			<td>
				<input type="checkbox" value="1" name="german_numbers" <?php echo $isettings->german_numbers ? " checked='checked' " : ""; ?> /><label><?php echo __("Thousand separator is '.' decimal is ','",'productexcellikemanager'); ?></label>		
				<br/>
				<label><?php echo __("Used CSV delimiter for import:",'productexcellikemanager'); ?></label><input style="width:20px;" type="text" value="<?php echo $isettings->delimiter; ?>" name="delimiter" />		
				<br/>
				<label><?php echo __("Used CSV delimiter for export:",'productexcellikemanager'); ?></label><input style="width:20px;" type="text" value="<?php echo $isettings->delimiter2; ?>" name="delimiter2" />	
				<br/>
				<label><?php echo __("Multi-value delimiter:",'productexcellikemanager'); ?></label><input style="width:20px;" type="text" value="<?php echo $isettings->value_delimiter; ?>" name="value_delimiter" />	
				<br/>
				
				<div class="only-wooc" >
				<label><?php echo __("Export products per loop",'productexcellikemanager'); ?></label><input style="width:50px;" type="text" value="<?php echo $isettings->export_loop_chunk; ?>" name="export_loop_chunk" />	
				<label class="note">**<?php echo __("Try to reduce 'Export products per loop' if you get error 500 on export",'productexcellikemanager'); ?></label>
				<br/>
				<input type="checkbox" value="1" name="export_site_url" <?php echo $isettings->export_site_url ? " checked='checked' " : ""; ?> /><label><?php echo __("Include site url in export",'productexcellikemanager'); ?></label>
				<br/>
				<input type="checkbox" value="1" name="export_product_terms" <?php echo $isettings->export_product_terms ? " checked='checked' " : ""; ?> /><label><?php echo __("Include all terms 'terms' column in export",'productexcellikemanager'); ?></label>
				<input type="checkbox" value="1" name="export_product_terms_ids" <?php echo $isettings->export_product_terms_ids ? " checked='checked' " : ""; ?> /><label><?php echo __(" export them as id-s",'productexcellikemanager'); ?></label>
				<br/>
				<label><?php echo __("Parent export method",'productexcellikemanager'); ?>:</label>
				<select id="parent_export_method" name="parent_export_method" > 
				   <option value="id"   ><?php echo __("By id",'productexcellikemanager');?></option>
				   <option value="sku"  ><?php echo __("By sku",'productexcellikemanager');?></option>
				   <option value="slug" ><?php echo __("By slug",'productexcellikemanager');?></option>
				   <option value="title" ><?php echo __("By title",'productexcellikemanager');?></option>
				</select>
				<label class="note"><?php echo __("Select other than 'id' if variations need to be added to other site",'productexcellikemanager'); ?></label>
				
				<br/>
				<label><?php echo __("Categories export method",'productexcellikemanager'); ?>:</label>
				
				
				<select id="category_export_method" name="category_export_method" > 
				   <option value="fullpath"><?php echo __("Comma separated full paths",'productexcellikemanager');?></option>
				   <option value="names"  ><?php echo __("Comma separated names",'productexcellikemanager');?></option>
				   <option value="ids" ><?php echo __("Comma separated ids",'productexcellikemanager');?></option>
				</select>
				
				
				<script type="text/javascript" >
					var parent_export_method = '<?php echo $isettings->parent_export_method ?>' || 'id';
					jQuery("#parent_export_method").val(parent_export_method);
					
					var category_export_method = '<?php echo $isettings->category_export_method ?>' || 'fullpath';
					jQuery("#category_export_method").val(category_export_method);
				</script>
				</div>
				<hr/>
	
				<h3> <?php echo __("Remote import/export options",'productexcellikemanager'); ?> </h3>
				<table>
					<tr>
						<td colspan="2" >
							<input type="checkbox" value="1" name="allow_remote_import" <?php echo $isettings->allow_remote_import ? " checked='checked' " : ""; ?> /><label><?php echo __("Allow remote import/export",'productexcellikemanager'); ?></label>
							<br/>
							<label><?php echo __("Allow update form following IP addresses",'productexcellikemanager'); ?>:</label>
							<br/>
							<label  class="note">(<?php echo __("comma separated for multiple, leave blank for no restrictions",'productexcellikemanager'); ?>)</label>
							<br/>
							<input class="full-width" type="text" value="<?php echo $isettings->remote_import_ips; ?>" name="remote_import_ips" />
							<br/>
							<a id="download_utility" href="#" ><?php echo __("Download auto-import php script and set-up instructions",'productexcellikemanager'); ?> &rArr;</a>
						</td>
					</tr>
				</table>	
				<hr/>
	
			</td>
		</tr>
	</table>
	
	
    <h3><?php echo __("Complete inventory import options",'productexcellikemanager'); ?></h3>
	<table>
		<tr>
			<td>
				<label  class="note"><?php echo __("(Use following two opinions only if you are importing CSV containing full product list)",'productexcellikemanager'); ?></label>
				<br/>
			    <label><?php echo __("If not found in CSV change existing product status to 'Pending':",'productexcellikemanager'); ?></label>  
				<input type="checkbox" value="1" name="notfound_setpending" <?php echo $isettings->notfound_setpending ? " checked='checked' " : ""; ?> />
				<br/>
				<label><?php echo __("For imported product override status:",'productexcellikemanager'); ?></label>
				<select name="onimportstatus_overide">
					<option value="" ><?php echo __("Do not override (use data from CSV)",'productexcellikemanager'); ?></option>
					<option value="published" ><?php echo __("Always set 'Published'",'productexcellikemanager'); ?></option>
					<option value="cond_published_pending" ><?php echo __("If stock > 0 set 'Published', otherwise 'Pending'",'productexcellikemanager'); ?></option>
				</select>
			</td>
		</tr>
	</table>
	
	<h2> <?php echo __("Custom Import Format",'productexcellikemanager'); ?> </h2>
	<h3> <?php echo __("CSV custom format",'productexcellikemanager'); ?>  <label  class="note"><?php echo __("(Allows you to use CSV files exported form external programs)",'productexcellikemanager'); ?></label> </h3>
	<table>
		<tr>
			<td colspan="2" >
				
				<input type="checkbox" value="1" name="use_custom_import" <?php echo $isettings->use_custom_import ? " checked='checked' " : ""; ?> /><label><?php echo __("Use custom import format",'productexcellikemanager'); ?></label>
				<br/>
				<input type="checkbox" value="1" name="first_row_header" <?php echo $isettings->first_row_header ? " checked='checked' " : ""; ?> /><label><?php echo __("First row is header row (skip it)",'productexcellikemanager'); ?></label>		
				<br/>
				<label><?php echo __("Input columns one by one in order your CSV file will give",'productexcellikemanager'); ?>:</label>
				<br/>
				<label class="note" ><?php echo __("(You must include ID or SKU)",'productexcellikemanager'); ?>:</label>
				<br/>
				<input type="hidden" name="custom_import_columns"  />
				<select id="custom_import_columns" multiple="multiple" > 
				</select>
			</td>
		</tr>
	</table>
	
	
	<!-- CUSTOM EXPORT-->
	<!--added by Nikola-->
	<h2> <?php echo __("Custom Export Format",'productexcellikemanager'); ?> </h2>
	<h3> <?php echo __("CSV custom export format",'productexcellikemanager'); ?>  <label  class="note"><?php echo __("(Allows you to use export CSV files with rows of your choice)",'productexcellikemanager'); ?></label> </h3>
	
	<table>
		<tr>
			<td colspan="2" >
				
				
				<br/>
				<input type="checkbox" value="1" name="use_custom_export" <?php echo $isettings->use_custom_export ? " checked='checked' " : ""; ?> /><label><?php echo __("Use custom export format",'productexcellikemanager'); ?></label>
				<br/>
				<br/>
				<label><?php echo __("Input columns one by one in order your CSV file will export",'productexcellikemanager'); ?>:</label>
				<br/>
				<label class="note" ><?php echo __("(You must include ID or SKU)",'productexcellikemanager'); ?>:</label>
				<br/>
				<input type="hidden" name="custom_export_columns"  />
				<select id="custom_export_columns" multiple="multiple" > 
				</select>
				
			</td>
		</tr>
	</table>	
	<!-- /// -->
	<script type="text/javascript">
		function showSettings(){
			jQuery('#settings-panel').show();
		}

		jQuery(document).ready(function(){
			
			jQuery('SELECT[name="onimportstatus_overide"]').val('<?php echo $isettings->onimportstatus_overide ; ?>');
			
			jQuery('#cmdSettingsSave').click(function(){
				doLoad(true);
			});
			
			jQuery('#cmdSettingsCancel').click(function(){
				jQuery('#settings-panel').hide();
			});
			
			jQuery("a#download_utility").attr("href", window.location.href + "&download_util_file=<?php echo "autoimport_".$elpm_shop_com.".zip"; ?>");
			
		});
	
		jQuery(window).load(function(){
			 setTimeout(function(){
				 try{
					
					var inp = jQuery('INPUT[name="custom_import_columns"]');
                    var inp2 = jQuery('INPUT[name="custom_export_columns"]');
					var select = jQuery('SELECT#custom_import_columns');
					var select2 = jQuery('SELECT#custom_export_columns'); 
					var n = 0;
					DG.getSettings().columns.map(function(c){
						
                        if(DG.getSettings().colHeaders[n] == "Category" && jQuery('#dg_wooc')[0]){
							
							select.append(jQuery('<option value="categories_ids"><?php echo __("Categories id-s",'productexcellikemanager'); ?></option>'));
							select.append(jQuery('<option value="categories_names"><?php echo __("Categories names",'productexcellikemanager'); ?></option>'));
							select.append(jQuery('<option value="categories_paths"><?php echo __("Categories full paths",'productexcellikemanager'); ?></option>'));
							
							select2.append(jQuery('<option value="categories_ids"><?php echo __("Categories id-s",'productexcellikemanager'); ?></option>'));
							select2.append(jQuery('<option value="categories_names"><?php echo __("Categories names",'productexcellikemanager'); ?></option>'));
							select2.append(jQuery('<option value="categories_paths"><?php echo __("Categories full paths",'productexcellikemanager'); ?></option>'));
							select2.append(jQuery('<option value="terms"><?php echo __("Terms",'productexcellikemanager'); ?></option>'));
							
						}else{
							select.append(jQuery('<option value="' + c.data + '">' + DG.getSettings().colHeaders[n] + '</option>'));
							select2.append(jQuery('<option value="' + c.data + '">' + DG.getSettings().colHeaders[n] + '</option>'));
						}
						n++;
						return c.data;
					});
					
					var value = "<?php echo $isettings->custom_import_columns; ?>".split(",");
                                        var value2 = "<?php echo $isettings->custom_export_columns; ?>".split(",");
					var tmp = [];
					value.map(function(v){
						if(v){
							tmp.push(v);	
						}
					});
					value = tmp;
                    var tmp2 = [];
					value2.map(function(v){
						if(v){
							tmp2.push(v);	
						}
					});
					value2 = tmp2;
					inp.val(tmp.join(","));
                                        inp2.val(tmp2.join(","));
					select.chosen();
					select.val(value);
					select.trigger("chosen:updated");
					var cnt = select.next(".chosen-container").find("UL.chosen-choices");
					select2.chosen();
					select2.val(value2);
					select2.trigger("chosen:updated");
					var cnt2 = select2.next(".chosen-container").find("UL.chosen-choices");
					//order
					for(var i = 0 ; i < value.length; i++ ){
						var opt = select.find('option[value="'+ value[i] +'"]');
						cnt.find("a[data-option-array-index='" + opt.index() + "']").parent().insertBefore(cnt.find(".search-field"));
					}
					
                    for(var i = 0 ; i < value2.length; i++ ){
						var opt2 = select2.find('option[value="'+ value2[i] +'"]');
						cnt2.find("a[data-option-array-index='" + opt2.index() + "']").parent().insertBefore(cnt2.find(".search-field"));
					}
					select.change(function(){
                                             setTimeout(function(){
						var newval = [];
						cnt.find("a[data-option-array-index]").map(function(item){
							var ind = parseInt( jQuery(this).attr("data-option-array-index"));
							newval.push(
								jQuery(select.find("option")[ind]).attr("value")
							);
						});
						inp.val(newval.join(","));
                                              },50);
					});
					select2.change(function(){
						setTimeout(function(){var newval = [];
							cnt2.find("a[data-option-array-index]").map(function(item){
								var ind = parseInt( jQuery(this).attr("data-option-array-index"));
								newval.push(
									jQuery(select2.find("option")[ind]).attr("value")
								);
							});
							inp2.val(newval.join(","));		
						}, 50);
					});
					
					jQuery(document).on('click','#custom_import_columns_chosen a.search-choice-close',function(e){
						e.preventDefault();
						select.trigger('change');
					});
					
					
					jQuery(document).on('click','#custom_export_columns_chosen a.search-choice-close',function(e){
						e.preventDefault();
						select2.trigger('change');
					});
						
				 }catch(e){
					alert(e.name + ":" + e.message);
				 }
			 },2000);
		});
	</script>	
  
  <button id="cmdSettingsCancel" ><?php echo __("Cancel",'productexcellikemanager'); ?></button>
  <button id="cmdSettingsSave" ><?php echo __("Save",'productexcellikemanager'); ?></button>
</div>
</div>
<?php

if($elpm_shop_com == "wooc"){
	
	
if(isset($_REQUEST["attribute_settings_save"])){
	if($_REQUEST["attribute_settings_save"] == "1"){
		$this->settings["attribute_settings"] = json_decode( urldecode($_REQUEST["attribute_settings"] ));
		$this->saveOptions();
	}
}	



if(!isset($this->settings["attribute_settings"]))
	$this->settings["attribute_settings"] = new stdClass;
else if(is_string($this->settings["attribute_settings"]))
	$this->settings["attribute_settings"] = json_decode($this->settings["attribute_settings"]);
	
?>
<div id="attribute-settings" style="display:none;">
<div style="padding:5px;">
<h2><?php echo __("Attribute Settings",'productexcellikemanager');?></h2>
<div style="max-width:320px; text-align: left;">
<h4><?php echo __("Attribute ordering and visibility",'productexcellikemanager');?></h4>

<label style="display:inline-block; padding-left: 10px;; ">
<?php echo __("Use this option",'productexcellikemanager');?>
<input style="margin: 2px;position: relative;top: 3px;" type="checkbox" id="use_attribute_ordering" value="1" />
</label>

<label style="display:inline-block; padding-left: 10px;; ">
<?php echo __("Hide attribute columns with no value",'productexcellikemanager');?>
<input style="margin: 2px;position: relative;top: 3px;" type="checkbox" id="hide_no_value" value="1" />
</label>

<br/>
<label><?php echo __("For category",'productexcellikemanager');?>:</label>
<select style="max-width:320px;text-align: left;" data-placeholder="<?php echo __("[DEFAULT]",'productexcellikemanager'); ?>" class="inputbox" id="attr_settings_category" >
		<option value=""><?php echo __("[DEFAULT]",'productexcellikemanager'); ?></option>
		<?php
		    foreach($categories as $category){
			   echo '<option value="'.$category->category_id.'" >'. $category->treename .'</option>';
			}
		?>
</select>

<label><?php echo __("Settings of",'productexcellikemanager'); ?>:</label>
<h3 id="current-category"><?php echo __("[DEFAULT]",'productexcellikemanager'); ?></h3>
<hr/>

<button class="cmdResortAttributes"><?php echo __("Show in order",'productexcellikemanager'); ?></button>
<button class="cmdAttributesSortByName"><?php echo __("Sort By Name",'productexcellikemanager'); ?></button>

<br/>
<label><?php echo __("Use same settings as",'productexcellikemanager');?>:</label>
<select style="max-width:320px;text-align: left;" data-placeholder="<?php echo __("[DEFAULT]",'productexcellikemanager'); ?>" class="inputbox" id="use_attr_settings_of" >
		<option value="-1"><?php echo __("[USE OWN SETTINGS]",'productexcellikemanager'); ?></option>
		<option value=""><?php echo __("[DEFAULT]",'productexcellikemanager'); ?></option>
		<?php
		    foreach($categories as $category){
			   echo '<option value="'.$category->category_id.'" >'. $category->treename .'</option>';
			}
		?>
</select>

<table>
<thead>
<tr>
<td><?php echo __("Attribute",'productexcellikemanager'); ?></td>
<td><?php echo __("Save order",'productexcellikemanager'); ?></td>
<td><?php echo __("Display in grid",'productexcellikemanager'); ?></td>
</tr>
</thead>
<tbody id="attribute-settings-attributes">
<?php


foreach($attributes as $attribute){
	?>
	<tr attribute_id="<?php echo $attribute->id ?>" attribute_name="pa_<?php echo $attribute->name ?>" >
		<td><?php echo $attribute->label . " (" . $attribute->name . ")"; ?></td>
		<td><input type="text" name="order" value="<?php echo $attribute->order; ?>" /></td>
		<td><input type="checkbox" name="visible" value="1" checked="checked" /></td>
	</tr>
	<?php
}
?>

</tbody>
</table>
<button class="cmdResortAttributes"><?php echo __("Show in order",'productexcellikemanager'); ?></button>
</div>


<hr/>
<button id="cmdAttributeSettingsCancel" ><?php echo __("Cancel",'productexcellikemanager'); ?></button>
<button id="cmdAttributeSettingsSave" ><?php echo __("Save",'productexcellikemanager'); ?></button>
<br>
<p class="note" >**<?php echo __("Attributes must be first enabled under 'Settings' to be considered for this option.",'productexcellikemanager'); ?></p>
</div>
</div>

<script type="text/javascript">
  var attribute_settings = <?php echo json_encode($this->settings["attribute_settings"]); ?>; 
  if(!attribute_settings)
	  attribute_settings = {};
  
  if(attribute_settings.length)
	  attribute_settings = {};
  
  if(!attribute_settings.cat)
	attribute_settings.cat = {};

  var attribute_settings_loading = false;
  
  if(attribute_settings.use){
	  jQuery('<li><span><button id="cmdRepackAttributes" onclick="repackAttributes();">&#8802;&nbsp;<?php echo __("Re-sort attr.",'productexcellikemanager'); ?></button></span></li>').insertBefore("ul.menu li:has(#cmdActiveFind)");
  }
  
  jQuery(document).ready(function(){
	  if(!attributes)
		  attributes = <?php echo json_encode($attributes) ?>;
	  
	  if(attribute_settings.use === undefined)
		  attribute_settings.use = 0;
	  
	  if(attribute_settings.hide_no_value === undefined)
		  attribute_settings.hide_no_value = 0;
	  
	  jQuery("#use_attr_settings_of").css("opacity","0.3").prop("disabled",true);
	  
	  jQuery("#use_attribute_ordering").prop("checked",!!attribute_settings.use);
	  jQuery("#hide_no_value").prop("checked",!!attribute_settings.hide_no_value);
	  
	  for(var i = 0; i < attributes.length; i++){
		  if(!attribute_settings["pa_" + attributes[i].name]){
			  attribute_settings["pa_" + attributes[i].name] = {
				order: attributes[i].order,
				visible: 1			
			  };
		  }
	  }
	  
	  loadCategoryAttibuteSettings(null);
	  
	  setTimeout(function(){
		attributesSort();  
	  },50);
	  
	  
  });
  
  function repackAttributes(){
	  if(DG){
		  var ids = [];
		  
		  for(var i = 0; i < DG.countRows(); i++){
			  var id     = DG.getDataAtRowProp(i,"id");
			  var parent = DG.getDataAtRowProp(i,"parent");
			  if(id && !parent){
				 ids.push(id); 
			  }
		  }
		  
		  jQuery.ajax({
			url: window.location.href + "&REPACK_ATTRIBUTES=1&diff=" + Math.random(),
			type: "POST",
			dataType: "json",
			data: JSON.stringify({
				p_ids: ids
			}),
			success: function (data) {
				alert("<?php echo __("Attributes of filtered products re-sorted successfully",'productexcellikemanager'); ?>");
			},
			error: function(a,b,c){
				alert("<?php echo __("Attribute re-sorting failed",'productexcellikemanager'); ?>");
			}
		  });
		  
		  console.log(ids);
		  
	  }
	  
  }
  
  function attributesSort(){
	 var trs = jQuery("#attribute-settings-attributes tr").toArray();
	 
	 trs.sort(function(a,b){
		 var b_val = parseInt(jQuery(b).find("INPUT[name='order']").val());
		 var a_val = parseInt(jQuery(a).find("INPUT[name='order']").val());
		 
		 if(b_val == a_val){
			 var b_val = jQuery(b).closest('tr').attr('attribute_name');
			 var a_val = jQuery(a).closest('tr').attr('attribute_name');
			 
			 if(b_val > a_val)
				 return 1;
			 else if(b_val < a_val)
				 return -1;
			 else
				 return 0;
		 }
		 
		 return  b_val - a_val;
	 });
	 
	 trs.map(function(item){
		 jQuery("#attribute-settings-attributes").prepend(jQuery(item));
	 });
  }
  
  function attributesSortByName(){
	  var trs = jQuery("#attribute-settings-attributes tr").toArray();
	 
	  trs.sort(function(a,b){
		  
		 if(jQuery(a).attr("attribute_name") > jQuery(b).attr("attribute_name"))
			 return 1;
		 else if(jQuery(a).attr("attribute_name") < jQuery(b).attr("attribute_name"))
			 return -1;
		 else 
			 return 0;
	  });
	  
	  attribute_settings_loading = true;
	  var n = 1;
	  trs.map(function(item){
		 jQuery(item).find("INPUT[name='order']").val(n);
		 n++;
	  });
	  
	  attribute_settings_loading = false;
	  attributesSort();
	  
  }
  
  function attributeSettings(){
	  jQuery("#attribute-settings").show();
  }
  
  function saveAttributeSettings(){
	  doLoad(false,{
		  attribute_settings_save: 1,
		  attribute_settings: encodeURIComponent(JSON.stringify(attribute_settings))
	  });
  }
  
  function loadCategoryAttibuteSettings(cat_id){
	  attribute_settings_loading = true;
	  
	  jQuery("#current-category").html( jQuery("#attr_settings_category option:selected").text());
	  
	  var same_as = -1;
	  var same_as_obj = cat_id 
	  if(cat_id){
		  jQuery("#use_attr_settings_of").css("opacity","1").prop("disabled",false);
		  if(attribute_settings.cat[cat_id])
			  if(attribute_settings.cat[cat_id].hasOwnProperty("use_attr_settings_of"))
				  same_as = attribute_settings.cat[cat_id]["use_attr_settings_of"];
	  }else{
		  jQuery("#use_attr_settings_of").css("opacity","0.3").prop("disabled",true);
	  }
	  
	  jQuery("#use_attr_settings_of").val(same_as);
	  
	 
	  if(same_as != -1){
		  
		  jQuery("#attribute-settings-attributes input").prop("disabled",true);
		  jQuery("#attribute-settings-attributes").css("opacity","0.3");
		  jQuery(".cmdAttributesSortByName, .cmdResortAttributes").prop("disabled",true).css("opacity","0.3");
		  
	  }else{
		  jQuery("#attribute-settings-attributes input").prop("disabled",false);
		  jQuery("#attribute-settings-attributes").css("opacity","1");
		  jQuery(".cmdAttributesSortByName, .cmdResortAttributes").prop("disabled",false).css("opacity","1");
	  }
	  
	  jQuery('#attribute-settings-attributes tr[attribute_name]').each(function(ind){
		  var attribute_name = jQuery(this).attr('attribute_name');
		  
		  var INPU_ORD = jQuery(this).find('INPUT[name="order"]');
		  var INPU_VIS = jQuery(this).find('INPUT[name="visible"]');
		  
		  var obj       = null;
		  var virtual   = false;
		  
		  if(cat_id){
			  if(attribute_settings.cat[cat_id]){
				 if(attribute_settings.cat[cat_id][attribute_name]){
					 obj = attribute_settings.cat[cat_id][attribute_name];
					 virtual = false;
				 }else if(attribute_settings[attribute_name]){
					 obj = attribute_settings[attribute_name];
					 virtual = true;
				 }
			  }else if(attribute_settings[attribute_name]){
				  obj = attribute_settings[attribute_name];
				  virtual = true;
			  }else
				  virtual = true;
		  }else{
			  if(attribute_settings[attribute_name]){
				  obj = attribute_settings[attribute_name];
				  virtual = false;
			  }else
				  virtual = true;
		  }
		  
		  if(obj){
			  INPU_ORD.val(obj.order || ""); 
			  INPU_VIS.prop("checked",obj.visible === undefined ? 1 : (!!obj.visible));
		  }else{
			  INPU_ORD.val(ind + 1); 
			  INPU_VIS.prop("checked",true);
		  }
		  
		  if(virtual){
			  INPU_ORD.css('color','rgba(255,255,255,0.35)');
			  INPU_VIS.css('opacity','0.35');
		  }else{
			  INPU_ORD.css('color','white');
			  INPU_VIS.css('opacity','1');
		  }  
	  });
	  
	  
	  attribute_settings_loading = false;
  }
  
  
  
  jQuery(document).on("change","#use_attr_settings_of",function(e){
	  if(attribute_settings_loading)
		  return;
	  
	  var cat    = jQuery("#attr_settings_category").val();
	  var obj    = null;
	  
	  if(!cat){
		   obj = attribute_settings;
	  }else{
		   if(!attribute_settings.cat[cat])
				attribute_settings.cat[cat] = {};
		   obj = attribute_settings.cat[cat];			
	  }
	  
	  obj.use_attr_settings_of = jQuery(this).val();
	  if(obj.use_attr_settings_of != -1){
		  
		  jQuery("#attribute-settings-attributes input").prop("disabled",true);
		  jQuery("#attribute-settings-attributes").css("opacity","0.3");
		  jQuery(".cmdAttributesSortByName, .cmdResortAttributes").prop("disabled",true).css("opacity","0.3");
		  
	  }else{
		  jQuery("#attribute-settings-attributes input").prop("disabled",false);
		  jQuery("#attribute-settings-attributes").css("opacity","1");
		  jQuery(".cmdAttributesSortByName, .cmdResortAttributes").prop("disabled",false).css("opacity","1");
	  }
	  
  });
  
  jQuery(document).on("change","#use_attribute_ordering",function(e){
	  if(attribute_settings_loading)
		  return;
	  
	  attribute_settings.use = jQuery(this).prop("checked") ? 1 : 0;
  });
  
  jQuery(document).on("change","#hide_no_value",function(e){
	  if(attribute_settings_loading)
		  return;
	  
	  attribute_settings.hide_no_value = jQuery(this).prop("checked") ? 1 : 0;
  });
  
  
  jQuery(document).on("change","#attribute-settings-attributes INPUT",function(e){
	  if(attribute_settings_loading)
		  return;
	  
	  
	 
	  if(jQuery(this).attr("name") == "order"){
		  if(parseInt(jQuery(this).val()) == NaN){
			  jQuery(this).val(jQuery(this).closest('tr').index() + 1);
			  return;
		  }
		  jQuery(this).css('color','white');
		  jQuery(this).closest('tr').find("INPUT[type='checkbox']").css('opacity','1');
	  }else{
		  jQuery(this).closest('tr').find("INPUT[type='text']").css('color','white');
		  jQuery(this).css('opacity','1');
	  }
	 
	  
	  
	  
	  var cat    = jQuery("#attr_settings_category").val();
	  var att_name = jQuery(this).closest('tr').attr('attribute_name');
	  var att_id = jQuery(this).closest('tr').attr('attribute_id');
	  var obj    = null;
	  
	  if(!cat){
		   if(!attribute_settings[att_name])
			   attribute_settings[att_name] = {};
		   obj = attribute_settings[att_name];
	  }else{
		   if(!attribute_settings.cat[cat])
				attribute_settings.cat[cat] = {};
		   if(!attribute_settings.cat[cat][att_name])		
		   		attribute_settings.cat[cat][att_name] = {};
           obj = attribute_settings.cat[cat][att_name];			
	  }
	  
	  
	  if(jQuery(this).attr("name") == "order"){
		  obj.id = att_id;
		  obj.order   = parseInt(jQuery(this).val());
		  obj.visible = jQuery(this).closest("TR").find("INPUT[name='visible']").prop("checked") ? 1 : 0
	  }else if(jQuery(this).attr("name") == "visible"){
		  obj.id = att_id;
		  obj.visible = jQuery(this).prop("checked") ? 1 : 0;
		  obj.order   = parseInt(jQuery(this).closest("TR").find("INPUT[name='order']").val());
	  }
	  
  });
  
  jQuery(document).on("change","#attr_settings_category",function(e){
	 loadCategoryAttibuteSettings(jQuery(this).val());
	 
	 setTimeout(function(){
		attributesSort();  
	  },50);
  });
  
  jQuery(document).on("click","#cmdAttributeSettingsCancel",function(e){
	  jQuery("#attribute-settings").hide();
  });
  
  jQuery(document).on("click",".cmdResortAttributes",function(e){
	  attributesSort();
  });
  
  jQuery(document).on("click",".cmdAttributesSortByName",function(e){
	  attributesSortByName();
  });
  
  
  
  jQuery(document).on("click","#cmdAttributeSettingsSave",function(e){
	  saveAttributeSettings();
  });

</script>
<?php } ?>

<script type="text/javascript">

  
  
  jQuery(document).ready(function(){
	var ffocus = "<?php echo ($this->settings["autofocus_filter"]); ?>" ;  
	var elname = "";
	if(ffocus == "sku"){
		elname = "sku";
	}else if(ffocus == "name"){
		elname = "product_name";
	}
	
	if(ffocus && elname){
		jQuery('.filter_panel .filter_option INPUT[name="' + elname + '"]').focus().keyup(function(e){
			var key = e.which || e.keyCode || e.charCode; 
			if(key == 13)
				jQuery("#cmdRefresh").trigger('click');
		})[0].select();
	}
	  
  });
  
</script>