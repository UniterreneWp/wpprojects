<?php
/**
 * Template Name: img change
 */
 //487
 
		echo $catid=$_REQUEST['cat'];
		$argscat = array( 'type' => 'product', 'taxonomy' => 'product_cat' ); 
$categories = get_categories( $argscat ); 

	?>
    <form action="" method="get" name="catffff">
    <select name="cat">
    <?php foreach ($categories as $cat) { ?>
     <option value="<?php echo $cat->term_id; ?>" <?php if($cat->term_id==$catid){?>selected="selected"<?php }?>><?php echo $cat->name; ?></option>
     <?php /*?><a href="<?php echo get_term_link($cat->slug, 'product_cat') ?>"><i class="fa fa-chevron-right"></i><?php echo $cat->name; ?></a></li><?php */?>
<?php } ?>

</select>
<input type="submit" name="submit" value="submit" />
</form>

    <?php	
function getdddd($valuefile,$product_id){
$path = realpath('/home/unitetoh/public_html/onlinedevserver.biz/dev/newimg/');
$di = new RecursiveIteratorIterator(

    new RecursiveDirectoryIterator($path, FilesystemIterator::SKIP_DOTS),

    RecursiveIteratorIterator::LEAVES_ONLY

);

$i=1;

foreach($di as $name => $fio) {
$filename= explode(".",$fio->getFilename());
    $newname = $fio->getPath() . DIRECTORY_SEPARATOR . $fio->getFilename();

//$newname = preg_replace('/\s+/', '-', $newname);

	//$newname='member-poster-'.$i.'.jpg';

	// echo $i.'=>'.$filename, "\r\n  <br> ";
//	  rename($name, $newname); 
$pos = strpos($valuefile, $filename[0]);
if ($pos === false) {
 //   echo "The string '$valuefile' was not found in the string '$mystring'";
 
// echo $i.'=>'.$filename[0], "\r\n  <br> ";
} else {
	 echo $i.'=>'.$newname, "\r\n  <br> ";
Generate_Featured_Image( $newname,   $product_id );

   // echo "<br>  =The string '$valuefile' was found in the string '$filename[0]'";
 //   echo " and exists at position $pos <br>";
	$i++;
}

  //  rename($name, $newname); //- first check the output, then remove the comment...

	//$i++;

}





}
	
	function Generate_Featured_Image( $image_url, $post_id  ){
    $upload_dir = wp_upload_dir();
    $image_data = file_get_contents($image_url);
    $filename = basename($image_url);
    if(wp_mkdir_p($upload_dir['path']))     $file = $upload_dir['path'] . '/' . $filename;
    else                                    $file = $upload_dir['basedir'] . '/' . $filename;
    file_put_contents($file, $image_data);

    $wp_filetype = wp_check_filetype($filename, null );
    $attachment = array(
        'post_mime_type' => $wp_filetype['type'],
        'post_title' => sanitize_file_name($filename),
        'post_content' => '',
        'post_status' => 'inherit'
    );
    $attach_id = wp_insert_attachment( $attachment, $file, $post_id );
    require_once(ABSPATH . 'wp-admin/includes/image.php');
    $attach_data = wp_generate_attachment_metadata( $attach_id, $file );
    $res1= wp_update_attachment_metadata( $attach_id, $attach_data );
    $res2= set_post_thumbnail( $post_id, $attach_id );
}

	
	
	$args = array( 'post_type' => 'product', 'posts_per_page' => -1);
$args = array(
'post_type' => 'product',
'tax_query' => array(
    array(
    'taxonomy' => 'product_cat',
    'field' => 'id',
    'terms' => $catid
     )
  )
);


    $loop = new WP_Query( $args );

    while ( $loop->have_posts() ) : $loop->the_post(); 
    global $product; 
/*   echo '<pre>';
    print_r($product);
   echo '</pre>';*/
   $product_id = get_the_ID();
 $name = $product->name;
	echo '<br>='.$name.'=<br>' ;
	getdddd($name,$product_id);
//$image_url = "/home/unitetoh/public_html/onlinedevserver.biz/dev/storex-store/newimg/type21s-cable-ties/".$sku.".jpg";
//echo "<br> img url=".$image_url."<br/>";
//if (file_exists($image_url)) {
//echo "img url".$image_url."<br/>";
	
		//~ $post_id = get_the_ID();
		//~ $upload_dir = wp_upload_dir();
		//~ $image_data = file_get_contents($image_url);
		//~ $filename = basename($image_url);
		//~ if(wp_mkdir_p($upload_dir['path']))     $file = $upload_dir['path'] . '/' . $filename;
		//~ else                                    $file = $upload_dir['basedir'] . '/' . $filename;
		//~ file_put_contents($file, $image_data);

		//~ $wp_filetype = wp_check_filetype($filename, null );
		//~ $attachment = array(
			//~ 'post_mime_type' => $wp_filetype['type'],
			//~ 'post_title' => sanitize_file_name($filename),
			//~ 'post_content' => '',
			//~ 'post_status' => 'inherit'
		//~ );
		//~ $attach_id = wp_insert_attachment( $attachment, $file, $post_id );
		//~ require_once(ABSPATH . 'wp-admin/includes/image.php');
		//~ $attach_data = wp_generate_attachment_metadata( $attach_id, $file );
		//~ $res1= wp_update_attachment_metadata( $attach_id, $attach_data );
		//~ $res2= set_post_thumbnail( $post_id, $attach_id );
	//}
	
	
    endwhile; 


    wp_reset_query(); 

		
	