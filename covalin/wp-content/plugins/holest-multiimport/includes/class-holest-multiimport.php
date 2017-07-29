<?php

/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @package    Holest_Multiimport
 * @subpackage Holest_Multiimport/includes
 */

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.0.0
 * @package    Holest_Multiimport
 * @subpackage Holest_Multiimport/includes
 * @author     Your Name <email@example.com>
 */
class Holest_Multiimport {

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      Holest_Multiimport_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $holest_multiimport    The string used to uniquely identify this plugin.
	 */
	protected $holest_multiimport;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;
	
	protected $options = array();

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {
		
		if(ini_get('max_execution_time') < 300)
			set_time_limit ( 300 ); //1.5 min
		
		
		$this->holest_multiimport = 'holest-multiimport';
		$this->version = '1.0.0';

		
		$this->load_dependencies();
		$this->set_locale();
		$this->define_admin_hooks();
		//add_action( 'admin_init', array( $this, 'plugin_admin_init' ) );
		//$this->define_public_hooks();
		
			//adding admin menu pag
	
		add_action( 'admin_menu', array( $this, 'wpdocs_register_menu_page') );
		
		//add_action( 'wp_ajax_holest_multiimport',array($this,'update_products_callback'));
		//add_action( 'wp_ajax_nopriv_holest_multiimport', array($this,'update_products_callback'));
		
		//adding settings
		$this->loadConfig();
	}
	
	public function loadConfig(){
		if(empty($this->options)){
			$this->options = get_option("holest_multiimport_options", $this->options);
			if(empty($this->options)){
				
				$this->options['uid']                   = $this->generateRandomString(10);
				$this->options['connection_flag']       = 1;
				$this->options['is_admin']              = 0;
				$this->options['client_uids']           = array();
				$this->options['available_admin_sites'] = array();
				$this->options['log']                   = array("Plugin setup ".date("D M d, Y G:i"));
				
				update_option('holest_multiimport_options',(array)$this->options);
			}
		}
	}
	
	public function updateConfig(){
		update_option('holest_multiimport_options',(array)$this->options);
	}
	
	
	
	
	public function wpdocs_register_menu_page(){
		add_menu_page(
			__( 'Excel-like product manager multi-import addon', 'holest-multiimport' ),
			'Excel-like product manager multi-import addon',
			'manage_options',
			__FILE__,
			array($this, 'RenderPage'),
			'',	
			6
		);
	}
	

	
	



	/**
	 * Load the required dependencies for this plugin.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - Holest_Multiimport_Loader. Orchestrates the hooks of the plugin.
	 * - Holest_Multiimport_i18n. Defines internationalization functionality.
	 * - Holest_Multiimport_Admin. Defines all hooks for the admin area.
	 * - Holest_Multiimport_Public. Defines all hooks for the public side of the site.
	 *
	 * Create an instance of the loader which will be used to register the hooks
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function load_dependencies() {

		/**
		 * The class responsible for orchestrating the actions and filters of the
		 * core plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-holest-multiimport-loader.php';

		/**
		 * The class responsible for defining internationalization functionality
		 * of the plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-holest-multiimport-i18n.php';

		/**
		 * The class responsible for defining all actions that occur in the admin area.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-holest-multiimport-admin.php';
		
		/**
		 * The class responsible for defining all actions that occur in the public-facing
		 * side of the site.
		 */
		//require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/class-holest-multiimport-public.php';

		$this->loader = new Holest_Multiimport_Loader();

	}

	/**
	 * Define the locale for this plugin for internationalization.
	 *
	 * Uses the Holest_Multiimport_i18n class in order to set the domain and to register the hook
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function set_locale() {

		$plugin_i18n = new Holest_Multiimport_i18n();

		$this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_holest-multiimport' );

	}

	/**
	 * Register all of the hooks related to the admin area functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_admin_hooks() {

		$plugin_admin = new Holest_Multiimport_Admin( $this->get_holest_multiimport(), $this->get_version() );

		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_styles' );
		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts' );
	
	
	}

	/**
	 * Register all of the hooks related to the public-facing functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	 /*
	private function define_public_hooks() {

		$plugin_public = new Holest_Multiimport_Public( $this->get_holest_multiimport(), $this->get_version() );

		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_styles' );
		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_scripts' );

	}*/

	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    1.0.0
	 */
	public function run() {
		$this->loader->run();
	}

	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     1.0.0
	 * @return    string    The name of the plugin.
	 */
	public function get_holest_multiimport() {
		return $this->holest_multiimport;
	}

	/**
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @since     1.0.0
	 * @return    Holest_Multiimport_Loader    Orchestrates the hooks of the plugin.
	 */
	public function get_loader() {
		return $this->loader;
	}

	/**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     1.0.0
	 * @return    string    The version number of the plugin.
	 */
	public function get_version() {
		return $this->version;
	}
	
	/*
	function holest_multiimport(){
		global $wpdb;
		$plugin = $GLOBALS['holest_multiimport'];
		$plugin->run();
		
		$post_data = $_POST;
		
		
		if(ini_get('max_execution_time') < 300)
			set_time_limit ( 300 ); //1.5 min

	}
	*/
	
	
	//used in import
	function normalizeFileLineEndings ($filename) {
		$string = file_get_contents($filename);
		if (!string) {
			return false;
		}
		$out = "";
		
		$string = explode("\r",$string);
		
		for($i = 0 ; $i < count($string); $i++){
			$string[$i] = explode("\n",$string[$i]);
			for($j = 0; $j < count($string[$i]);$j++){
				if($string[$i][$j]){
					$out .= ($string[$i][$j] . "\r\n");
				}
			}
		}
		
		file_put_contents($filename, $out);
		return true;
	}
	

	function getMemAllocated(){
		global $start_mem;
		return memory_get_usage() - $start_mem;
	} 


	//used in import
	function save_csv_for_cross_req_import($csv_file,$import_uid, $tmp_file_read = 0){
		global $wpdb;
		global $start_time, $max_time, $mem_limit;
		
		if($tmp_file_read == 0){
			
			$probecnt = file_get_contents($csv_file, false, NULL, 0,2048);

			
			if(!$probecnt){
				 echo "CSV file you tried to import could not be stored on temporal loaction : " . $csv_file . "! Check folder permissions and max upload size!" ;
				 die;
				 return;
			}
			
			if( !preg_match('!!u', $probecnt) ){
				 echo "CSV file you tried to import is not UTF8 encoded! Correct this then try to import again!";
				 die;
				 return;
			}
			
			$first_line = explode("\n",$probecnt);
			if(empty($first_line)){
				echo "CSV file you tried to import is invalid. Check file then try again!";
				die;
				return;
			}elseif(strpos($first_line,",") === false){
				echo "CSV file you tried to import of invalid format. Probable cause id incorrect delimiter! Check file then try again!";
				die;
				return;
			}
		}
		
		$handle = fopen($csv_file,"r");
		$n = 0;
			
		if($handle){
			$added = 0;
			$data  = null;
			while (($data = fgetcsv($handle, 32768 * 2 , ",")) !== FALSE) {
				if($n < $tmp_file_read){
					$n++;
					continue;
				}
				
				if($n == 0){//REMOVE UTF8 BOM IF THERE
					 $bom     = pack('H*','EFBBBF');
					 $data[0] = preg_replace("/^$bom/", '', $data[0]);
				}
				
				//update_option($import_uid."_". $n, $data , "no");
				
				$wpdb->query($wpdb->prepare("INSERT INTO $wpdb->options (option_name,option_value,autoload) VALUES('%s','%s','%s');",$import_uid."_". $n, serialize($data), "no"));
				$n++;	
				$added++;

				if($added == 2000 || $start_time + $max_time  < time() ){
					
					fclose($handle);
					return $n;
				}
			}
			
			fclose($handle);
			
			if(empty($data)){
			
				unlink($csv_file);

				ob_get_clean();
				ob_get_clean();
				ob_get_clean();
				ob_get_clean();
				$response = new stdClass;
				$response->message  = "success";
				$response->uid = $import_uid;
				$response->origin = get_site_url();
				$response->size = $n;
			
				echo json_encode($response);
				die();
				
				
				//return NULL;
			}
			
			return $n;
		}
		
		return NULL;
	}


	//then retrive JSON from file on client



	function update_products_callback(){
		
		//some memory, time and usage restrictions
		global $mem_limit, $start_time, $max_time;
		
		$mem_limit = get_option("plem_mem_limit" . ini_get('memory_limit'), 0); 
		$start_time     = time();
		$max_time       = ini_get('max_execution_time') / 2;
		
		global $start_mem;
		$start_mem = memory_get_usage();
		
		global $wpdb;
		
		$post_data = $_POST;
		
		if(isset($post_data['pair_request'])){
			
			$this->loadConfig();

			if(!in_array($post_data['uid'],$this->options['client_uids']) && $this->options['connection_flag'] == "1"){
				
				$this->options["client_uids"][] = $post_data['uid'];
				$this->options["connection_flag"] = 0;
				$this->updateConfig();
				$response = new stdClass;
				$response->message  = "success";
				
				echo json_encode($response);
				die();
			}else if($this->options['connection_flag'] == "0"){
				
				$response = new stdClass;
				$response->message  = "blocked";
				
				echo json_encode($response);
				die();
			}else if(in_array($post_data['uid'],$this->options['client_uids'])){
				
				$response = new stdClass;
				$response->message  = "success";
				$this->options["connection_flag"] = 0;
				$this->updateConfig();
				echo json_encode($response);
				die();
			}
			
			die();

		}
		
		
		
		$let_in = false;
		
		$request_uid = trim($_REQUEST['uid']);
		
		if(stripos(trim($this->options['uid']),$request_uid) == 0)
			$let_in = true;	
        else{
			if($this->options["client_uids"]){
				if(is_array($this->options["client_uids"])){
					foreach($this->options["client_uids"] as $cuid){
						if(stripos($request_uid, trim($cuid)) == 0){
							$let_in = true;
							break;
						}
					}
				}
			}
		}
		
		if(!$let_in){
			header('HTTP/1.0 403 Forbidden');
			die;
		}

		if(isset($_REQUEST['direct_import'])){
			
		
			$mapper = array(
				'productidd'  => 'm', 
				'post_title' => 'p', 
				'post_content' => 'p', 
				'post_category' => array( 't' => 'category' ), 
				'guid' => 'pm', 
				'producers' => 'm', 
				'productimage' => 'm', 
				'productimage1' => 'm', 
				'productimage2' => 'm', 
				'productimage3' => 'm', 
				'productimage4' => 'm', 
				'productimage5' => 'm', 
				'productimage6' => 'm', 
				'price' => 'm', 
				'specialprice' => 'm', 
				'priceper' => 'm', 
				'producmail' => 'm', 
				'qualitylevel' => 'm', 
				'weight' => 'm', 
				'istaxable' => 'm', 
				'size' => 'm', 
				'color' => 'm', 
				'size_stock' => 'm', 
				'color_stock' => 'm', 
				'is_check_outofstock' => 'm', 
				'initstock' => 'm', 
				'minstock' => 'm', 
				'isshowstock' => 'm', 
				'affiliate_link' => 'm', 
				'posttype' => 'm',
				'url_country' => ''
			);
			
				
			$response_object = new stdClass;
			
			$response_object->event_log = array(); 
			$response_object->event_log[] = date("c") . ": " . "Entering sequence import";
			
			$response_object->event_log[] = date("c") . ": " . "Reading request data";
			
			$json  = file_get_contents('php://input');
			
			$response_object->event_log[] = date("c") . ": " . "Parsing request data";
			
			$imp_request = json_decode($json);
			
			$total_to_import = count($imp_request->data);
			$total_imported  = 0;
			
			$response_object->event_log[] = date("c") . ": " . "Parsed request data";
			
			remove_action('pre_post_update', 'wp_save_post_revision');
			remove_action('post_updated', 'wp_save_post_revision' );
			
			$response_object->event_log[] = date("c") . ": " . "Entering loop to process $total_to_import products update...";
			
			foreach($imp_request->data as $item){
				$seo = false;
				$seo_t = "";
				$seo_d = "";
				$seo_k = "";
				
				if(isset($item->productidd)){
					$response_object->event_log[] = date("c") . ": " . "Impoting product with pidd:" . $item->productidd;
					
					$p_dirty     = false;
					$m_dirty     = false;
					$post_data   = array();	
					$meta_object = null;
					
					
					$productidd = $item->productidd;
					
					$response_object->event_log[] = date("c") . ": " . "Serching existing records for pidd: " . $item->productidd;
					$product_id = $wpdb->get_col("select post_id from $wpdb->postmeta where meta_key='key' AND (meta_value like '%\"$productidd\"%' OR meta_value like '%\'$productidd\'%')");
					
					if(is_array($product_id))
						$product_id = $product_id[0];

					if(!empty($item->seo_title) || !empty($item->seo_description) || !empty($item->seo_keywords)){
						$seo = true;
						
						$seo_t = $item->seo_title;
						$seo_d = $item->seo_description;
						$seo_k = $item->seo_keywords;
						
					}
						
				
					if(!$product_id){
						$response_object->event_log[] = date("c") . ": " . "pidd " . $item->productidd . " is new. Creating post...";
						
						$p_title = "Post ".date("y-m-d H:i:s");
						if(isset($item->{'Post Title'}))
							$p_title = $item->{'Post Title'};
						else if(isset($item->{'post_title'}))
							$p_title = $item->{'post_title'};
						else if(isset($item->{'post Title'}))
							$p_title = $item->{'post Title'};
						else if(isset($item->{'Post title'}))
							$p_title = $item->{'Post title'};
						else if(isset($item->{'post title'}))
							$p_title = $item->{'post title'};
							
						
						
						$post = array(
							 'post_author'  => get_current_user_id(),
							 'post_content' => '',
							 'post_status'  => "publish",
							 'post_title'   => $p_title,
							 'post_name'    => sanitize_title($p_title),
							 'post_type'    => 'post'
						);
						
						if(isset($item->guid)){
							if($item->guid)
								$post['guid'] = $item->guid;
						}
						
						
						$product_id  = wp_insert_post( $post, $wp_error );
						$response_object->event_log[] = date("c") . ": " . "pidd " . $item->productidd . " creted";
						$meta_object = array();
					}else{
						$response_object->event_log[] = date("c") . ": " . "pidd " . $item->productidd . " found. Getting meta...";
						$meta_object = get_post_meta($product_id,"key",true);
						if(!$meta_object)
							$meta_object = array();
						
						$response_object->event_log[] = date("c") . ": " . "pidd " . $item->productidd . " meta read";
					}
					
					if(!$product_id){
						$response_object->event_log[] = date("c") . ": " . "pidd " . $item->productidd . " could not be imported";
						continue;
					}
					
					$post_data['ID'] = $product_id;
			
			
					if($product_id){
						$response_object->event_log[] = date("c") . ": " . "pidd " . $item->productidd . " finding properties to set";
						foreach($item as $prop => $value){
							
							if($prop == "seo_description" || $prop == "seo_keywords" || $prop == "seo_title")
								continue;
							
							$property = str_replace(" ","_",strtolower(trim($prop)));
							$dst = 'm';
							if(isset( $mapper[$property])){
								$dst = $mapper[$property];
							}
							
							$wmeta      = false;
							$wtaxonomy  = false;
							$wproduct   = false;
							
							if(!$dst)
								continue;
							
							if(is_string($dst)){
								if(strpos($dst,"m") !== false){
									$wmeta     = $property;
									$m_dirty   = true; 
								}
								if(strpos($dst,"p") !== false){
									$wproduct  = $property; 
									$p_dirty   = true;
								}
							}else{
								if(isset( $dst["t"] )){
									$wtaxonomy = $dst["t"];	
								}
								if(isset( $dst["p"] )){
									$wproduct  = $dst["p"];
									$p_dirty   = true;
								}
								if(isset( $dst["m"] )){	
									$wmeta     = $dst["m"];
									$m_dirty   = true;
								}
							}
							
							if($wproduct){
								$post_data[$wproduct] = $value;
								if($wproduct == "post_title")
									$post_data["post_name"] = sanitize_title($post_data[$wproduct]);
							}
							
							if($wmeta)
								$meta_object[$wmeta]  = $value;
							
							if($wtaxonomy){
								$response_object->event_log[] = date("c") . ": " . "pidd " . $item->productidd . " setting categories";
								if($wtaxonomy == "category"){
									$category_terms = array_map(array($this, 'fn_return_ids'), explode(",",$value));
									wp_set_object_terms( $product_id, $category_terms, 'category'); 
								}else
									wp_set_object_terms( $product_id, array_map("intval", explode(",",$value)), $wtaxonomy); 
								$response_object->event_log[] = date("c") . ": " . "pidd " . $item->productidd . " categories set";
							}
						}
						
						
					}
				}

				$total_imported++;
				
				if($p_dirty){
					$response_object->event_log[] = date("c") . ": " . "pidd " . $item->productidd . " post properties are dirty running update posts using sql query";
					
					//wp_update_post( $post_data ); this takes too long
					
					$uq = array();
					$uv = array();
					foreach($post_data as $post_filed => $post_filed_value){
						if($post_filed != "ID"){
							$uq[] = ($post_filed ." = %s ");
							$uv[] = $post_filed_value;
						}
					}
					
					if(count($uq)){
					
						$wpdb->query($wpdb->prepare("UPDATE $wpdb->posts SET " . implode("," , $uq ) . " WHERE ID = " . $product_id . ";",$uv));
		
					}
					
					$response_object->event_log[] = date("c") . ": " . "pidd " . $item->productidd . " update posts using sql query done";
				}
				
				if($m_dirty){
					$response_object->event_log[] = date("c") . ": " . "pidd " . $item->productidd . " post meta properties are dirty running update_post_meta";
					update_post_meta( $product_id, 'key', $meta_object);
					$response_object->event_log[] = date("c") . ": " . "pidd " . $item->productidd . " update_post_meta done";
				}
				
				if($seo){
					$response_object->event_log[] = date("c") . ": " . "pidd " . $item->productidd . " updating seo properties...";
					update_post_meta( $product_id, '_aioseop_title', $seo_t);
					update_post_meta( $product_id, '_aioseop_description', $seo_d);
					update_post_meta( $product_id, '_aioseop_keywords', $seo_k);
					$response_object->event_log[] = date("c") . ": " . "pidd " . $item->productidd . " updated seo properties.";
				}
				
			}
			
			$response_object->event_log[] = date("c") . ": " . " exited loop.";
			
			$response_object->to_import = $total_to_import;
			$response_object->imported  = $total_imported;
			$response_object->site      = $_REQUEST["site"];
			
			$response_object->event_log[] = date("c") . ": " . " Done. Echo response.";
			
			echo json_encode($response_object);
			die;
		}
		
		if(isset($post_data['retrive_json'])){
			
			$from = 0;
			$amount = 0;
			$to = 0;
			$uid = "";
			
			if(isset($post_data['start']))
				$from = (int)$post_data['start'];
			
			if(isset($post_data['part']))
				$amount = (int)$post_data['part'];
			
			if($from!=0)
				$to = $amount + $from;
			else
				$to = $amount;
			
			if(isset($post_data['uid_base']))
				$uid = $post_data['uid_base'];
			
			$json = array();
			
			$row = 0;
			
			$first_row = array();
			
			for($i=$from; $i<$to; $i++ ){
				if( get_option($uid."_".$i))
					$json[]  = get_option($uid."_".$i);
				else
					break;
				
				if($i == 0)
					$first_row = $json[0];
			}
			
			$response = new stdClass;
			$response->n = $i;
			$response->uid = $uid;
			$response->message  = "success";
			$response->json_object = $json;
			$response->origin = get_site_url();
			$response->first_row = $first_row;
			
			if(count($json) == 0 && $from!=0){
				$response->last_one = true;
			}else{
				$response->last_one = false;
			}
			
			echo json_encode($response);
			die();

		}
		
		if(isset($post_data['get_log'])){
			
			$log   = array_reverse($this->options['log']);

			$response->message  = "success";
			$response->connection_flag = $this->options['connection_flag'];
			$response->log  = $log;
			echo json_encode($response);
			die();
		}
		
		
		if(isset($post_data['update_option'])){
			$response = new stdClass;
			
			$this->loadConfig();
			
			$option  = $post_data['update_option'];
			
			if(isset($post_data['value']))
				$value = $post_data['value'];
			else
				$value = false;
			
			if($option != "log"){
				
				if($option == "available_admin_sites"){
					$this->options[$option][] = $value;
					$this->updateConfig();
				}else{
					$this->options[$option] = $value;
					$this->updateConfig();
				}
				
			}else{
				
				
				$date = date("D M d, Y G:i");	
				if(isset($post_data['site']))
					$site = $post_data['site'];
				else 
					$site = "";
				
				if(!isset($this->options['log']))
					$this->options['log'] = array();
				
				if(count($this->options['log']) > 200)
					 array_shift($this->options['log']);	
				 
				$this->options['log'][] = ($site." Import: ". $date );	
				
				$this->updateConfig();
			}
			
			$response->message  = "success";
			
			echo json_encode($response);
			die();
		}

		
		if(isset($post_data['disable_connect'])){
			$this->loadConfig();
			
			$this->options['connection_flag'] = 0;
			
			$this->updateConfig();
			
			
			$response = new stdClass;
			$response->message  = "success";
			
			echo json_encode($response);
			die();
		}
		
		if(isset($post_data['enable_connect'])){
			$this->loadConfig();
			
			$this->options['connection_flag'] = 1;
			$this->updateConfig();
			
			$response = new stdClass;
			$response->message  = "success";
			
			echo json_encode($response);
			die();
		}

		if(isset($post_data['delete_site'])){
			$site = $post_data['delete_site'];
			
			$this->loadConfig();
			
			$key = array_search($site, $this->options['available_admin_sites']);
			unset($this->options['available_admin_sites'][$key]);
			$this->updateConfig();
			
			$response = new stdClass;
			$response->message  = "success";
			
			echo json_encode($response);
			die();
			
		}
	
	
	   
		
	
		//IMPORTING FILE
		
		//first upload file to admin server
		if(isset($_REQUEST['import_file']) || isset($_FILES['file'])){

			$import_uid = isset($_REQUEST["import_uid"]) ? $_REQUEST["import_uid"] : uniqid("holest_multiimport_csv_");
			$tmp_file   = NULL;
			$tmp_file_n = NULL;
			
			$echo_prep = false;
		
			if(isset($_FILES['file']['tmp_name']) && !isset($_REQUEST["continueFrom"])){
				$wpdb->query("DELETE FROM $wpdb->options WHERE option_name LIKE 'holest_multiimport_csv_%'");
				$tmp_file = wp_upload_dir();
				$tmp_file = $tmp_file["path"] . DIRECTORY_SEPARATOR . $import_uid .".csv";
				$tmp_file = str_replace(array("\\\\","\\\\","\\\\","\\","/"),array("\\","\\","\\", DIRECTORY_SEPARATOR,DIRECTORY_SEPARATOR),$tmp_file);
				move_uploaded_file( $_FILES['file']['tmp_name'], $tmp_file);
				
				$this->normalizeFileLineEndings($tmp_file);
				
				$tmp_file_n = $this->save_csv_for_cross_req_import($tmp_file, $import_uid, 0 );
				$echo_prep  = true;
				
				$wpdb->query("DELETE p from $wpdb->posts as p LEFT JOIN $wpdb->posts as pp on pp.ID = p.post_parent where p.post_type ='product_variation' AND  coalesce(p.post_parent,0) > 0 AND pp.ID IS NULL");
				$wpdb->query("DELETE PM FROM $wpdb->postmeta as PM LEFT JOIN $wpdb->posts as P ON P.ID = PM.post_id WHERE P.ID IS NULL");
				
				
			}elseif(isset($_REQUEST["tmp_file"])){
				
				$tmp_file	= $_REQUEST["tmp_file"];
				$tmp_file = str_replace(array("\\\\","\\\\","\\\\","\\","/"),array("\\","\\","\\", DIRECTORY_SEPARATOR,DIRECTORY_SEPARATOR),$tmp_file);
				$tmp_file_n	= $_REQUEST["tmp_file_n"];
				$tmp_file_n = $this->save_csv_for_cross_req_import($tmp_file, $import_uid, $tmp_file_n);
				$echo_prep  = true;

			}
			
			
			if($echo_prep){
				
				$response = new stdClass;
				$response->message  = "tmp_file";
				
				$json = array();
				$json['import_file'] = 1;
				if($tmp_file_n) {
					$json['tmp_file'] = $tmp_file ;
					$json['tmp_file_n'] = $tmp_file_n ;
				}
				$json['commit_import'] = 1;
				$json['import_uid'] = $import_uid;
				
				$response->json = $json;
				
				echo json_encode($response);
				die();
	
				}
			
		}
		
		if(isset($post_data['return_csv'])){
			$export_uid = $post_data['export_uid'];
			$wp_dir = wp_upload_dir();
			
			$fname = $export_uid .".csv";
			
			$tmp_file = $wp_dir["path"] . DIRECTORY_SEPARATOR . $fname;
			
			$tmp_file = str_replace(array("\\\\","\\\\","\\\\","\\","/"),array("\\","\\","\\", DIRECTORY_SEPARATOR,DIRECTORY_SEPARATOR),$tmp_file);
			
			$response->filename = $tmp_file;
			$response->fileurl  = $wp_dir["url"]. "/" . $fname;
	
			echo json_encode($response);
			die();
				
		}
		
		
		//EXPORT
		if(isset($post_data['categories'])){
			//DEO ZA EXPORT OSTALO MI JE DA ZAVRSIM
			
			
			$from = 0;
			if(isset($post_data['from']))
				$from = intval($post_data['from']);

			$export_uid = isset($_REQUEST["export_uid"]) ? $_REQUEST["export_uid"] : uniqid("holest_multiimport_export_");
			
			$choice = $post_data['choice'];
			
			if($choice == "path"){
				
				$ids_paths = $wpdb->get_results("SELECT
					cat.term_id as category_id,  concat(
						 coalesce( concat(parent4n.name,'/')  ,''),
						 coalesce( concat(parent3n.name,'/')  ,''),
						 coalesce( concat(parent2n.name,'/')  ,''),
						 coalesce( concat(parent1n.name,'/')  ,'') ,
						 catn.name
					) as category_key 
					FROM 
					$wpdb->term_taxonomy as cat
					LEFT JOIN
					$wpdb->terms as catn on catn.term_id = cat.term_id
					LEFT JOIN
					$wpdb->term_taxonomy as parent1 on parent1.term_id = cat.parent 
					LEFT JOIN
					$wpdb->terms as parent1n on parent1n.term_id = parent1.term_id
					LEFT JOIN
					$wpdb->term_taxonomy as parent2 on parent2.term_id = parent1.parent
					LEFT JOIN
					$wpdb->terms as parent2n on parent2n.term_id = parent2.term_id
					LEFT JOIN
					$wpdb->term_taxonomy as parent3 on parent3.term_id = parent2.parent
					LEFT JOIN
					$wpdb->terms as parent3n on parent3n.term_id = parent3.term_id
					LEFT JOIN
					$wpdb->term_taxonomy as parent4 on parent4.term_id = parent3.parent
					LEFT JOIN
					$wpdb->terms as parent4n on parent4n.term_id = parent4.term_id
					WHERE
					cat.taxonomy = 'category' 
					AND 
					catn.name != 'Uncategorized'
					AND
					(parent1.term_id IS NULL OR parent1.taxonomy = 'category')
					AND
					(parent2.term_id IS NULL OR parent2.taxonomy = 'category')
					AND
					(parent3.term_id IS NULL OR parent3.taxonomy = 'category')
					AND
					(parent4.term_id IS NULL OR parent4.taxonomy = 'category')",OBJECT_K);

			}
	

			if(isset($post_data['tmp_file']) && $from!=0){
				//append on already created file
				$tmp_file = $post_data['tmp_file'];
				$file  = fopen ($tmp_file, "a");
				$header = get_option($export_uid."_header");
				$all_cat = $post_data['all_cat'] === 'true'? true: false;
				$categories_string = $post_data['categories'];
				
			}else{
				$categories = $post_data['categories'];
				$all_cat = false;
				$last = false;
				
				if(!is_array($categories))
					$categories = explode(",",$categories);
				
				if($categories[0] == "all")
					$all_cat = true;
			
				$categories = array_map(array($this, 'fn_return_ids'), $categories);
				
				$categories_string = implode(",",$categories);
				$categories_string = trim($categories_string,",");

				$tmp_file = wp_upload_dir();
				$tmp_file = $tmp_file["path"] . DIRECTORY_SEPARATOR . $export_uid .".csv";
				$tmp_file = str_replace(array("\\\\","\\\\","\\\\","\\","/"),array("\\","\\","\\", DIRECTORY_SEPARATOR,DIRECTORY_SEPARATOR),$tmp_file);
				
				$file  = fopen ($tmp_file, "a");
				
				$header = array('productidd','post_title','post_content','post_category','guid','producers','productimage','productimage1','productimage2','productimage3','productimage4','productimage5','productimage6','price','specialprice','priceper','producmail','qualitylevel','weight','istaxable','size','color','size_stock','color_stock','is_check_outofstock','initstock','minstock','isshowstock','affiliate_link','posttype','seo_title','seo_description','seo_keywords');
				
				update_option($export_uid."_header",$header);
			}
			
			if(!$all_cat){
				$terms  = $wpdb->get_results("select term_id from $wpdb->terms where term_id IN  (".$categories_string.")",ARRAY_A);
				
			}else
				$terms  = $wpdb->get_results("SELECT DISTINCT t.term_id
												FROM 
												$wpdb->terms as t
												LEFT JOIN
												$wpdb->term_taxonomy as tt on tt.term_id = t.term_id
											  WHERE
												tt.taxonomy = 'category' AND t.slug != 'uncategorized'",ARRAY_A);
			
			$term_ids = array();
			
			foreach($terms as $term)
				$term_ids[] = intval($term['term_id']);
				
			$terms_string = implode(",",$term_ids);
			
		
			if(!$all_cat){
				$objects = $wpdb->get_results("SELECT distinct(object_id) FROM $wpdb->term_relationships WHERE term_taxonomy_id IN (".$terms_string.") ORDER BY object_id ASC LIMIT $from, 300",ARRAY_A);
			}else{
				$objects = $wpdb->get_results("SELECT distinct(post_id) FROM $wpdb->postmeta WHERE meta_key = 'key' AND (meta_value like '%\"productidd\"%' OR meta_value like '%\'productidd\'%')  ORDER BY post_id ASC LIMIT $from, 300",ARRAY_A);
			}
			
			

			if($from == 0){
				fputcsv($file,$header);
			}
			
			//get n rows and put in file
			if(count($objects) < 300){

				$last = true;
			}

			//get post and post meta and put in csv
			foreach($objects as $obj){
				
				if(!$all_cat){
					$object_id = intval($obj['object_id']);
				}else{
					$object_id = intval($obj['post_id']);
				}
				
				$post = get_post($object_id);
				$post_meta = get_post_meta($object_id, 'key');
				//add for SEO fields
				$post_meta_all = get_post_meta($object_id);
				$array_csv = array();
				
				foreach($header as $head){
					$array_csv[] = "";
				}

				$post_title   = $post->post_title;
				$post_content = $post->post_content;
				$guid         = $post->guid;
				
				$array_csv[array_search('post_title',$header)]  = $post_title;
				$array_csv[array_search('post_content',$header)] = $post_content;
				$array_csv[array_search('guid',$header)] = $guid;
				
				
				
				$category_id = $wpdb->get_results("SELECT distinct(term_taxonomy_id) FROM $wpdb->term_relationships WHERE object_id = $object_id",ARRAY_A);
				
				if($choice == "id"){
					$cat_ids = array();
			
					foreach($category_id as $cat)
						$cat_ids[] = intval($cat['term_taxonomy_id']);
					$category_string = implode(", ",$cat_ids);
					
					$array_csv[array_search('post_category',$header)] = $category_string;
				}else if($choice == "path"){
					$cat_ids = array();
			
					foreach($category_id as $cat){
						if(isset($ids_paths[$cat['term_taxonomy_id']]))
							$cat_ids[] = $ids_paths[$cat['term_taxonomy_id']]->category_key;
					}
					
					$category_string = implode(", ",$cat_ids);
					
					$array_csv[array_search('post_category',$header)] = $category_string;
	
				}
				
				foreach($post_meta[0] as $key=>$post){
					if($key == "Post Title")
						$key = "post_title";
					if($key == "Post Category")
						$key = "post_category";
					if($key == "Post Content")
						$key = "post_content";
					
					if(array_search($key,$header)!==false)
						$array_csv[array_search($key,$header)] = $post;

					
				}
				foreach($post_meta_all as $key=>$post){
					if($key == "_aioseop_title" || $key == "_aioseop_description" || $key == "_aioseop_keywords"){
						
						if($key == "_aioseop_title")
							$key = "seo_title";
						if($key == "_aioseop_description")
							$key = "seo_description";
						if($key == "_aioseop_keywords")
							$key = "seo_keywords";
						
						if(array_search($key,$header)!==false)
							$array_csv[array_search($key,$header)] = $post[0];
						
					}
					
				}
				
				if($array_csv[0]!=""){
					fputcsv($file,$array_csv);
				
					$from++;
				}
				
			}
		
			//die();
			fclose($file);

			
			$response = new stdClass;
			
			if($last){
				delete_option($export_uid."_header");
				$response->export_uid = $export_uid;
				$response->message  = "finished";
				
				$date = date("D M d, Y G:i");	
				if(isset($post_data['site']))
					$site = $post_data['site'];
				else 
					$site = "";
				
				$this->loadConfig();
				
				if(count($this->options['log']) > 200)
					 array_shift($this->options['log']);
				 
				$this->options['log'][]= $site." Export: ".$date;
				
				$this->updateConfig();
				
			}else{
				//continue from last id
				
				$response->message  = "continue";
				$response->from = $from;
				$response->choice = $choice;
				
				$response->tmp_file = str_replace("\\\\","\\", $tmp_file);
				$response->tmp_file = str_replace("\\\\","\\", $response->tmp_file);
				$response->tmp_file = str_replace("\\\\","\\", $response->tmp_file);
				
				$response->export_uid = $export_uid;
				$response->categories_string = $categories_string;
				$response->all_cat = $all_cat;
			}
		
			
			echo json_encode($response);
			die();

			
		}
		//EXPORT END
		
		//get categories for export
		if(isset($post_data['get_categories'])){
			$res = $wpdb->get_results("SELECT 
					 concat(
						 coalesce( concat(parent4n.name,'/')  ,''),
						 coalesce( concat(parent3n.name,'/')  ,''),
						 coalesce( concat(parent2n.name,'/')  ,''),
						 coalesce( concat(parent1n.name,'/')  ,'') ,     catn.name
					 ) as category_path ,
					cat.term_id as category_id 
					FROM 
					$wpdb->term_taxonomy as cat
					LEFT JOIN
					$wpdb->terms as catn on catn.term_id = cat.term_id
					LEFT JOIN
					$wpdb->term_taxonomy as parent1 on parent1.term_id = cat.parent 
					LEFT JOIN
					$wpdb->terms as parent1n on parent1n.term_id = parent1.term_id
					LEFT JOIN
					$wpdb->term_taxonomy as parent2 on parent2.term_id = parent1.parent
					LEFT JOIN
					$wpdb->terms as parent2n on parent2n.term_id = parent2.term_id
					LEFT JOIN
					$wpdb->term_taxonomy as parent3 on parent3.term_id = parent2.parent
					LEFT JOIN
					$wpdb->terms as parent3n on parent3n.term_id = parent3.term_id
					LEFT JOIN
					$wpdb->term_taxonomy as parent4 on parent4.term_id = parent3.parent
					LEFT JOIN
					$wpdb->terms as parent4n on parent4n.term_id = parent4.term_id
					WHERE
					cat.taxonomy = 'category'
					AND
					catn.name != 'Uncategorized'
					AND
					(parent1.term_id IS NULL OR parent1.taxonomy = 'category')
					AND
					(parent2.term_id IS NULL OR parent2.taxonomy = 'category')
					AND
					(parent3.term_id IS NULL OR parent3.taxonomy = 'category')
					AND
					(parent4.term_id IS NULL OR parent4.taxonomy = 'category')

					ORDER BY 
					concat(
						 coalesce( concat(parent4n.name,'/')  ,''),
						 coalesce( concat(parent3n.name,'/')  ,''),
						 coalesce( concat(parent2n.name,'/')  ,''),
						 coalesce( concat(parent1n.name,'/')  ,'') ,
						 catn.name
					)");


			$response = new stdClass;
			$response->message  = "success";
			$response->categories = $res;
			
			echo json_encode($response);
			die();
		}
		
		//import
		if(isset($post_data['get_data'])){
			
			global $path_ids;
			global $wpdb;
			
			$load_cpaths = false;
			
			if(!isset($path_ids))
				$load_cpaths = true;
			else if(empty($path_ids))
				$load_cpaths = true;
			if($load_cpaths){
				$path_ids = $wpdb->get_results("SELECT LOWER( REPLACE(concat(
					 coalesce( concat(parent4n.name,'/')  ,''),
					 coalesce( concat(parent3n.name,'/')  ,''),
					 coalesce( concat(parent2n.name,'/')  ,''),
					 coalesce( concat(parent1n.name,'/')  ,'') ,
					 catn.name
				),' ','' )) as category_key ,
				cat.term_id as category_id 
				FROM 
				$wpdb->term_taxonomy as cat
				LEFT JOIN
				$wpdb->terms as catn on catn.term_id = cat.term_id
				LEFT JOIN
				$wpdb->term_taxonomy as parent1 on parent1.term_id = cat.parent 
				LEFT JOIN
				$wpdb->terms as parent1n on parent1n.term_id = parent1.term_id
				LEFT JOIN
				$wpdb->term_taxonomy as parent2 on parent2.term_id = parent1.parent
				LEFT JOIN
				$wpdb->terms as parent2n on parent2n.term_id = parent2.term_id
				LEFT JOIN
				$wpdb->term_taxonomy as parent3 on parent3.term_id = parent2.parent
				LEFT JOIN
				$wpdb->terms as parent3n on parent3n.term_id = parent3.term_id
				LEFT JOIN
				$wpdb->term_taxonomy as parent4 on parent4.term_id = parent3.parent
				LEFT JOIN
				$wpdb->terms as parent4n on parent4n.term_id = parent4.term_id
				WHERE
				cat.taxonomy = 'category'
				AND
				(parent1.term_id IS NULL OR parent1.taxonomy = 'category')
				AND
				(parent2.term_id IS NULL OR parent2.taxonomy = 'category')
				AND
				(parent3.term_id IS NULL OR parent3.taxonomy = 'category')
				AND
				(parent4.term_id IS NULL OR parent4.taxonomy = 'category')",OBJECT_K);
			}
			
			if(isset($post_data['first_row_n']))
				$header_row = $post_data['first_row_n'];
			
			if(isset($post_data['json']))
				$products = $post_data['json'];
			
			$header_title = array_search('Post Title', $header_row); 
			if($header_title){
				 $header_row[$header_title] = 'post_title';
			}
			
			//header title fallback
			$header_title = array_search('"Post Title"', $header_row); 
			if($header_title){
				 $header_row[$header_title] = 'post_title';
			}
			
			
			$header_content = array_search('Post Content', $header_row); 
			if($header_content){
				 $header_row[$header_content] = 'post_content';
			}
			
			$header_category = array_search('Post Category', $header_row); 
			if($header_category){
				 $header_row[$header_category] = 'post_category';
			}
			
			$productidd_index = array_search("productidd", $header_row);
			
			
			
			
			//sada updateujem svaki proizvod ponaosob, ako ne postoji pokusavam da ga napravim
			//nalazimo proizvod preko productidd, tako sto trazimo u postmeta value
			foreach($products as $product){
				if(is_numeric($product[$productidd_index])){
					$productidd = $product[$productidd_index];
					$product_meta = $wpdb->get_col("select post_id from $wpdb->postmeta where meta_key='key' AND meta_value like '%$productidd%'");
				
					if(empty($product_meta)){
						//kreiramo novi post i ubacujemo polja 
						
						 $post = array(
							 'post_author' => get_current_user_id(),
							 'post_content' => '',
							 'post_status' => "publish",
							 'post_title' => "Post ".date("y-m-d H:i:s"),
							 'post_type' => ($variataion_of ? "product_variation" : "product"),
							 'guid' => $product[array_search('guid', $header_row)]
						 );
						 
						  //Create post
						 $post_id = wp_insert_post( $post, $wp_error );
						 
						 $update_array = array(
							'ID' => $post_id,
							'post_title' => $product[array_search('post_title', $header_row)],
							'post_content' => $product[array_search('post_content', $header_row)],
							'guid' => $product[array_search('guid', $header_row)]
							
						 );
						 
						 wp_update_post( $update_array );
						 
						 //adding post value
						 
						 $post_value = array();
						 
						 foreach($header_row as $row){
							 if($row == "post_title" || $row == "post_content" || $row == "post_category")
								 continue;
							 
							 $post_value[$row] = $product[array_search($row, $header_row)];
						 }
						 
						  add_post_meta( $post_id, 'key', $post_value);
						  
						  $category_terms = array_map(array($this, 'fn_return_ids'), explode(",",$product[array_search("post_category", $header_row)]));
						
						  wp_set_object_terms( $post_id, $category_terms, 'category'); 
					

					}
					else{
						 $post_id = $product_meta[0];
						 $update_array = array(
							'ID' => $post_id,
							'post_title' => $product[array_search('post_title', $header_row)],
							'post_content' => $product[array_search('post_content', $header_row)],
							'guid' => $product[array_search('guid', $header_row)]
						 );
						 
						wp_update_post( $update_array );
						//update-ujemo post i sve vezano za njega
						$post_value = array();
						 
						 foreach($header_row as $row){
							 if($row == "post_title" || $row == "post_content" || $row == "post_category")
								 continue;
							 
							 $post_value[$row] = $product[array_search($row, $header_row)];
						 }
						 
						update_post_meta( $post_id, 'key', $post_value);
						  
						$category_terms = array_map(array($this, 'fn_return_ids'), explode(",",$product[array_search("post_category", $header_row)]));
						
						wp_set_object_terms( $post_id, $category_terms, 'category'); 
					}

					
					//pokusamo naci proizvod u bazi, ako ga nema sacuvamo ga
				}
				
				
			}
			
			$response = new stdClass;
			$response->message  = "success";

			
			echo json_encode($response);
			die();
			
		}
		
		
		
		
		//die();
	}
	
	function fn_return_ids($s){
		
		  global $path_ids,$wpdb;
		  
		  if( is_numeric(trim($s)))
			return intval($s);
		  else{
			  global $path_ids_loaded;
			  
			  if(!$path_ids && !$path_ids_loaded){
				  $path_ids_loaded = true;
				  $path_ids = $wpdb->get_results("SELECT LOWER( REPLACE(concat(
						 coalesce( concat(parent4n.name,'/')  ,''),
						 coalesce( concat(parent3n.name,'/')  ,''),
						 coalesce( concat(parent2n.name,'/')  ,''),
						 coalesce( concat(parent1n.name,'/')  ,'') ,
						 catn.name
					),' ','' )) as category_key ,
					cat.term_id as category_id 
					FROM 
					$wpdb->term_taxonomy as cat
					LEFT JOIN
					$wpdb->terms as catn on catn.term_id = cat.term_id
					LEFT JOIN
					$wpdb->term_taxonomy as parent1 on parent1.term_id = cat.parent 
					LEFT JOIN
					$wpdb->terms as parent1n on parent1n.term_id = parent1.term_id
					LEFT JOIN
					$wpdb->term_taxonomy as parent2 on parent2.term_id = parent1.parent
					LEFT JOIN
					$wpdb->terms as parent2n on parent2n.term_id = parent2.term_id
					LEFT JOIN
					$wpdb->term_taxonomy as parent3 on parent3.term_id = parent2.parent
					LEFT JOIN
					$wpdb->terms as parent3n on parent3n.term_id = parent3.term_id
					LEFT JOIN
					$wpdb->term_taxonomy as parent4 on parent4.term_id = parent3.parent
					LEFT JOIN
					$wpdb->terms as parent4n on parent4n.term_id = parent4.term_id
					WHERE
					cat.taxonomy = 'category'
					AND
					(parent1.term_id IS NULL OR parent1.taxonomy = 'category')
					AND
					(parent2.term_id IS NULL OR parent2.taxonomy = 'category')
					AND
					(parent3.term_id IS NULL OR parent3.taxonomy = 'category')
					AND
					(parent4.term_id IS NULL OR parent4.taxonomy = 'category')",OBJECT_K);
				  
			  }
			  
			  if(isset($path_ids[strtolower(str_replace(' ','', $s ))]))
				  return intval($path_ids[strtolower(str_replace(' ','', $s ))]->category_id);//find id in category map
			  else{
				  //return null;
				  
				  $parts = explode("/",$s);
				  $last_parent = 0;
				  $cpath = "";
				  
				  foreach($parts as $part){
					  $part = trim($part);
					  
					  if(!$part)
						  return NULL;
					  
					  $t = get_term( $part, "category");
					  
					  if($cpath !== '')
						  $cpath .= '/';
					  
					  if(!$t){
						 $t = wp_insert_term(
								  $part, // the term 
								  "category", // the taxonomy
								  array(
									'description'=> $part,
									'slug' => str_ireplace(' ','',strtolower($part)) ,
									'parent'=> $last_parent
								  )
							  );
					     if(!$t)
							return null;
						
						 $last_parent = $t['term_id'];							  
						 $cpath .= strtolower(str_replace(' ','',$t['name']));
						 
					  }else{
						  
						 $last_parent = $t['term_id'];
						 
						 $cpath .= strtolower(str_replace(' ','',$t['name']));
					  }
					  
					  if(!isset($path_ids[$cpath]))
						  $path_ids[$cpath] = $last_parent;
				  }
				  
				  return $last_parent;
			  }
		  } 
			 
	}
	
	
	//random string for uid
	function generateRandomString($length = 10) {
		$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		$charactersLength = strlen($characters);
		$randomString = '';
		for ($i = 0; $i < $length; $i++) {
			$randomString .= $characters[rand(0, $charactersLength - 1)];
		}
		return $randomString;
	}

	
	function connection_flag_callback(){
		
		$this->loadConfig();
		
	    printf(
            '<input type="hidden" id="connection_flag" name="holest_multiimport_options[connection_flag]" value="%s" />',
            isset( $this->options['connection_flag'] ) ? esc_attr( $this->options['connection_flag']) : ''
        );
    }
	
	function is_admin_callback(){
        $this->loadConfig();
		
		printf(
            '<input type="hidden" id="is_admin" name="holest_multiimport_options[is_admin]" value="%s" />',
            isset( $this->options['is_admin'] ) ? esc_attr( $this->options['is_admin']) : ''
        );
    }
	
	function uids_callback(){
		$this->loadConfig();
		
        printf(
            '<input type="hidden" id="client_uids" name="holest_multiimport_options[client_uids]" value="%s" />',
            isset( $this->options['client_uids'] ) ? esc_attr( $this->options['client_uids']) : ''
        );
    }
	
	function uid_callback(){
		$this->loadConfig();
		
        printf(
            '<input type="hidden" id="uid" name="holest_multiimport_options[uid]" value="%s" />',
            isset( $this->options['uid'] ) ? esc_attr( $this->options['uid']) : ''
        );
    }
	
	function available_admin_sites_callback(){
		$this->loadConfig();
		
        printf(
            '<input type="hidden" id="available_admin_sites" name="holest_multiimport_options[available_admin_sites]" value="%s" />',
            isset( $this->options['available_admin_sites'] ) ? esc_attr( $this->options['available_admin_sites']) : ''
        );
    }
	
    /*	
    function sanitize( $input ){
        return $input;
    }
	*/
		
	
	function RenderPage(){

		
		if(isset($_REQUEST['uid']))
			$uid = $_REQUEST['uid'];
		else
			$uid = false;
		
		$this->loadConfig();
		
		$args = array(
			'number'     => 99999,
			'orderby'    => 'slug',
			'order'      => 'ASC',
			'hide_empty' => false,
			'include'    => ''
		);
		
		//Some plugin settings
		if(isset($this->options['is_admin']))
			$IS_ADMIN = $this->options['is_admin'];
		else{
			$IS_ADMIN = 0;
		}
		
		
		
		if(isset($this->options['connection_flag']))
			$CONNECTION_FLAG = $this->options['connection_flag'];
		else{
			$CONNECTION_FLAG = 0;
		}
		
		if(isset($this->options['client_uids']))
			$SAVED_UIDS = $this->options['client_uids'];
		else{
			$SAVED_UIDS = false;
		}
		
		if($uid!=false && count($SAVED_UIDS)!=0){
			if(!in_array($uid,$SAVED_UIDS)){
				
				$this->options['client_uids'][]= $uid;
				$this->updateConfig();
			}		
		}else if($uid != false && count($SAVED_UIDS)==0){
			$this->options['client_uids'][]=$uid;
			$this->options['connection_flag'] = 1;
			$CONNECTION_FLAG = 1;
			$this->updateConfig();
		}
		
		$sites = $this->options['available_admin_sites'];
		
		
		$log   = array_reverse($this->options['log']);
	  
	 
       ?>
       <div class='wrap'>
        <h2><?php echo __("Excel-like product manager multi-import","holest-multiimport");?></h2>
		<p></p>
		<div class='main_area'>
		 <form method="post" class='options_form' action="options.php">
            <?php
                // This prints out all hidden setting fields
                settings_fields('holest_multiimport_options');
                do_settings_sections( 'my-setting-admin' );
                //submit_button();
            ?>
         </form>
		    <p><?php echo __("This is auxiliary plugin used with","holest-multiimport");?> <a href="http://holest.com/holest-outsourcing/joomla-wordpress/excel-like-manager-for-woocommerce-and-wp-e-commerce.html">'Excel-like product manager'</a> for wooCommerce plugin</p>
			<div class='modeBar'>
				<div id="use_admin" <?php if($IS_ADMIN){ ?> class='activeTab' <?php } ?>>
					<a href="#"><?php echo __("Admin mode","holest-multiimport");?></a>
				</div>
				<div id="use_client"  <?php if(!$IS_ADMIN){ ?> class='activeTab' <?php } ?>>
					<a href="#"><?php echo __("Client mode","holest-multiimport");?></a>
				</div>
				<?php if($IS_ADMIN){ ?>
				<div style="display:inline-block; float:right;">
					<button class="btn btn-primary" id="cmdGlobalImport" data-toggle="modal" data-target="#globalImportModal" ><?php echo __("Global import","holest-multiimport");?></button>
				</div>
				<?php } ?>
			</div>
			<?php
			global $wpdb;
			//prosetaj se kroz sve
			$objects = $wpdb->get_results("SELECT distinct(post_id) FROM $wpdb->postmeta WHERE meta_key = 'key' AND (meta_value like '%\"productidd\"%' OR meta_value like '%\'productidd\'%')  ORDER BY post_id ASC",ARRAY_A);
			
			
			$product_id = $wpdb->get_col("select post_id from $wpdb->postmeta where meta_key='key' AND (meta_value like '%\"$productidd\"%' OR meta_value like '%\'$productidd\'%')");
			
			//array of all pidd
			$pidd = array();
			
			//array of duplicates
			$piddd = array();

			foreach($objects as $object){
	
				$post_meta = get_post_meta($object['post_id'], 'key');
				if(isset($pidd[$post_meta[0]['productidd']])){
					$piddd[$post_meta[0]['productidd']][] = $object['post_id'];
				}else{
					$pidd[$post_meta[0]['productidd']] = $object['post_id'];
				}
			}
			
			foreach($pidd as $key => $unique){
				if(isset($piddd[$key]))
					$piddd[$key][] = $unique;
			}
			
			if(!empty($piddd)){ ?>
				<div style='width: 100%; text-align: center;'>
					<p style='color: red'> <?php echo __("You have duplicated product id","holest-multiimport");?> </p>
					<button class="btn btn-primary" id="duplicated" data-toggle="modal" data-target="#duplicatedmodal" ><?php echo __("Open","holest-multiimport");?></button>
				</div>
			<?php	} ?>
			<div class='adminPart' <?php if(!$IS_ADMIN){ ?> style='display: none' <?php } ?>>
			    
				<p style="font-weight:bold;" ><?php echo __('To add new client site you must install this plugin on its side , enter "Client Mode" and click on "Await new secure tunnel acceptance" (if client is not already in awaiting mode)',"holest-multiimport");?></p>
				<div class='addNew'>
					<input type="text" style="width:360px;" name="new_site" placeholder="<?php echo __("Client site(front url ending with /, without 'index.php')","holest-multiimport");?>" value="">
					<input type="hidden" id="main_uid" value="<?php echo $this->options['uid']; ?>">
					<button class="btn btn-primary" type="button" id="add_new_site"><?php echo __("Add client site","holest-multiimport");?></button>
				</div>
				<div class='sites' >
				<?php $i =1; foreach($sites as $site){ ?>
					<div class='site' rel="<?php echo $site;  ?>">
						<p class='site_no'><?php echo $i.".";  ?> </p>
						<p class='site_val'><?php echo $site;  ?></p>
						<button class='import btn btn-success'> <?php echo __("Import","holest-multiimport");?> </button>
						<button class='export btn btn-success'> <?php echo __("Export","holest-multiimport");?></button>
						<button class='delete btn btn-success'> <?php echo __("Delete from list","holest-multiimport");?> </button>
					</div>
				<?php 
					$i++;
				}
				?>
				</div>
				<div class='import-box' style='display: none'>
					<button class='close'>&#10060;</button>
					
						<p><?php echo __("Import products to:","holest-multiimport");?></p>
						<strong><p class='current_site'></p></strong>
						<p><?php echo __("Select file to import","holest-multiimport");?></p>
						<input type='file' name='file' id='file' />
						<br>
						<br>
						<button class='confirm cmd-do-import'><?php echo __("IMPORT","holest-multiimport");?></button>
						<br>
						<div class="import_status"></div>
						<div class="progressBar"><div></div></div>
						<br>
					
				</div>
				<div class='export-box' style='display: none'>
					<button class='close'>&#10060;</button>
					
						<h4><?php echo __("Select categories to export","holest-multiimport");?></h4>
						<p><?php echo __("Export products from:","holest-multiimport");?></p>
						<strong><p class='current_site'></p></strong>
					
						<p class='please_wait'><?php echo __("Please wait to load categories from client site.","holest-multiimport");?></p>
						<div class='categories' style="border:1px solid silver;padding:5px 7px;" ></div>
						<table>
							<tr>
								<td>
									<p><?php echo __("Export format:","holest-multiimport");?></p>
									<input type="radio" name="export_type" value="csv" ><span>CSV</span><br>
									<input type="radio" name="export_type" value="xlsx" checked><span> XLSX</span><br>
								</td>
								<td>
									<p><?php echo __("Additional query string parameters","holest-multiimport");?></p>
									<input type="text" id="export_additional_sq_parm" value="&amp;lang=all">
								</td>
							</tr>
						</table>
						<br/>
						<p style="color:red;float:right;" ><?php echo __("Please use Chrome browser!","holest-multiimport");?></p>
						<button class='cmd-do-export confirm btn btn-primary' disabled><?php echo __("Do export","holest-multiimport");?></button>
						<span id="export_info"></span>
						<br>
					
				</div>
				<form id="frmSerialize" style="display:none;">
				</form>
				
			</div>
		
	
			<div class='clientPart' <?php if($IS_ADMIN){ ?> style='display: none' <?php } ?>>
				<div <?php echo (!$CONNECTION_FLAG ? " style='display:none;' " : ""); ?> class="connection-await">
				<p><span style="color:red"><?php echo __("Awaiting for connection...");?></span><br/> <?php echo __("If you are not planning to establish secure tunnel to this site from admin console on other please disable await mode.","holest-multiimport");?></p>
				<button class="btn btn-danger" id='disable_connect'><?php echo __("Disable secure tunnel acceptance","holest-multiimport");?></button>
				</div>
				
				<div <?php echo ($CONNECTION_FLAG ? " style='display:none;' " : ""); ?> class="connection-not-await">
				<p><?php echo __("Connection await is");?> <strong><span style='color:red;'><?php echo __("NOT ACTIVATED","holest-multiimport");?></span></strong><?php echo __(". Click button to enable main site initial connection.","holest-multiimport");?></p>
				<button class="btn btn-danger" id='enable_connect'><?php echo __("Await new secure tunnel acceptance","holest-multiimport");?></button>
			    </div>
				<p>&nbsp;</p>
				<div style="color:red;font-weight:bold;background:#e8e8cf;">
			    <p style="color:red;font-weight:bold;background:#e8e8cf;"><?php echo __("MAKE SURE YOU CHECK 'Allow remote import/export' in Options -> Import/Export settings of 'Product excel-like product manager' on client side! If this site is both import/export center and client in same time you can skip this step.");?></p>
				<p style="color:red;font-weight:bold;background:#e8e8cf;"><?php echo __("If this site is both import/export center(admin mode) and client in same time you can skip this step.");?></p>
			    </div>
				
				<div class='import_log'>
				
				<?php
				 foreach($log as $single_log){
					 ?>
					 <p><?php echo $single_log; ?></p>
					 
					 <?php
				 }
				?>
				
				</div>
			</div>

			<?php if(!empty($piddd)){ ?>
				<div class="modal fade" id="duplicatedmodal" tabindex="-1" role="dialog" aria-labelledby="duplicatedmodal">
				  <div class="modal-dialog" role="document">
					<div class="modal-content">
					  <div class="modal-header">
						<h4><?php echo __("Duplicated fields","holest-multiimport");?></h4>
					  </div>
					  <div class="modal-body">
						<?php  foreach($piddd as $key => $value){
							?> <p style="font-size: 16px; font-weight: bold; border-bottom: 1px solid #d5d5d5;"><?php echo $key; ?> <?php echo __("(product id)","holest-multiimport");?></p> <ul><?php 
								foreach($value as $post_id){ 
								    $post = get_post($post_id);
									?> 
									<li><?php echo __("Post ID:","holest-multiimport");?> <span style='font-weight: bold;'><?php echo $post_id?></span> <?php echo __("Post Title:","holest-multiimport");?> <span style='font-weight: bold;'><?php echo $post->post_title; ?></span></li>
									<?php
								}
						}?>
						</ul>
					  </div>
					  <div class="modal-footer">
						<button type="button" class="btn btn-default close_modal" data-dismiss="modal"><?php echo __("Close","holest-multiimport");?></button>
					  </div>
					</div>
				  </div>
				</div>
			<?php } ?>
			
			<div class="modal fade" id="globalImportModal" tabindex="-1" role="dialog" aria-labelledby="globalImportLabel">
			  <div class="modal-dialog" role="document">
				<div class="modal-content">
				  <div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="globalImportLabel"><?php echo __("Import to:","holest-multiimport");?> <span style="color:#0073aa" id="import_to_indicator"> <?php echo __("global (input spreadsheet must contain 'site' column)","holest-multiimport");?></span></h4>
					<div class="progressBar"><div></div></div>
				  </div>
				  <div class="modal-body">
				    <p><?php echo __("Max parallel requests","holest-multiimport");?></p>
					<input type="text" id="max_parallel_requests" value="4">
					<p><?php echo __("Additional query string parameters","holest-multiimport");?></p>
					<input type="text" id="additional_sq_parm" value="&lang=all">
					<p><?php echo __("CSV separator:");?> <input id="csv_separtor" value="," type="text" style="width:20px;" /></p>
					<p></p>
				    <p><?php echo __("Select CSV/XLSX file to import","holest-multiimport");?></p>
					<input type="file" multiple="multiple" name="file" id="global_file">
					<br/>
					
					<button id="cmdStartGlobalImport" disabled="disabled" class="btn btn-primary" ><?php echo __("Start","holest-multiimport");?></button>
					
				  </div>
				  <div class="modal-footer">
					<span id="globalImportDone" style="float:left;display:none;color:green"><?php echo __("DONE!","holest-multiimport");?></span>
					<button type="button" class="btn btn-default close_modal" data-dismiss="modal"><?php echo __("Close","holest-multiimport");?></button>
				  </div>
				</div>
			  </div>
			</div>
			
			
			
		</div>
       </div>
       <?php
      }


}
	
$GLOBALS['holest_multiimport'] = new holest_multiimport();
	

