<?php
/**
 * Login form
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     2.1.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

if ( is_user_logged_in() ) {
	return;
}

?>

<form method="post" class="login" <?php if ( $hidden ) echo 'style="display:none;"'; ?> >
      <input type="hidden" name="flyout" value="true"/>
      <div class="field">
        <div class="form-heading">Sign In <a href="#" class="local" data-local-selector="#help_panel"> </a></div>
        <?php do_action( 'woocommerce_login_form_start' ); ?>

	<?php if ( $message ) echo wpautop( wptexturize( $message ) ); ?>
        <input type="email" name="username" placeholder="Email Address" class="textfield userEmail" value="" maxlength="50"/>
      </div>
      <div class="field">
        <input type="password" name="password" class="textfield userEmail" placeholder="Password" maxlength="20"/>
      </div>
      <?php do_action( 'woocommerce_login_form' ); ?>
      	<?php wp_nonce_field( 'woocommerce-login' ); ?>
      <button name="login" value="true" type="submit" class="btn btn-primary">Sign In</button>
      <input type="hidden" name="redirect" value="<?php echo esc_url( $redirect ) ?>" />
		<input name="rememberme" class="input-checkbox" type="checkbox" id="rememberme" value="forever" /> 
      
      <ul class="user-links group">
        <li><a href="<?php echo esc_url( wc_lostpassword_url() ); ?>" class="forgotPswLink">Forgot Password</a></li>
        <li><a href="#">Update Email Address</a></li>
      </ul>
      	<?php do_action( 'woocommerce_login_form_end' ); ?>
        </form>
        
     <form method="post" class="login">
     <div class="field">
        <div class="form-heading">Register</div>
        </div>
			<?php do_action( 'woocommerce_register_form_start' ); ?>

			<?php if ( 'no' === get_option( 'woocommerce_registration_generate_username' ) ) : ?>

               <div class="field">
					<input type="text" class="woocommerce-Input woocommerce-Input--text input-text textfield" name="username" id="reg_username" placeholder="<?php _e( 'Username', 'woocommerce' ); ?>" value="<?php if ( ! empty( $_POST['username'] ) ) echo esc_attr( $_POST['username'] ); ?>" />
                       </div>          
			<?php endif; ?>
              <div class="field">
				<input type="email" class="woocommerce-Input woocommerce-Input--text input-text textfield" name="email" id="reg_email" value="<?php if ( ! empty( $_POST['email'] ) ) echo esc_attr( $_POST['email'] ); ?>" placeholder="<?php _e( 'Email address', 'woocommerce' ); ?>"/>
                 </div>   
			<?php if ( 'no' === get_option( 'woocommerce_registration_generate_password' ) ) : ?>
            <div class="field">
					<input type="password" class="woocommerce-Input woocommerce-Input--text input-text textfield" name="password" id="reg_password" placeholder="<?php _e( 'Password', 'woocommerce' ); ?>" />
                    </div> 
			<?php endif; ?>

			<!-- Spam Trap -->
			<div style="<?php echo ( ( is_rtl() ) ? 'right' : 'left' ); ?>: -999em; position: absolute;"><label for="trap"><?php _e( 'Anti-spam', 'woocommerce' ); ?></label><input type="text" name="email_2" id="trap" tabindex="-1" autocomplete="off" /></div>

			<?php do_action( 'woocommerce_register_form' ); ?>
				<?php wp_nonce_field( 'woocommerce-register', 'woocommerce-register-nonce' ); ?>
                  <div class="field">
				<input type="submit" class="btn btn-primary" name="register" value="<?php esc_attr_e( 'Register', 'woocommerce' ); ?>" />
</div>
			<?php do_action( 'woocommerce_register_form_end' ); ?>

		</form>
        
       <?php /*?> <form method="post" class="login" <?php if ( $hidden ) echo 'style="display:none;"'; ?> >
      <hr class="en"/>      
      <div class="field">
        <input type="email" id="emailRegister" name="emailRegister" placeholder="Email Address" class="textfield userEmail" maxlength="50"/>
      </div>
      <div class="register_buttons_cont">
        <button name="register" value="true" class="btn btn-secondary">Register</button>
      </div>
    </form><?php */?><?php /*?>
    
    
<form method="post" class="login" <?php if ( $hidden ) echo 'style="display:none;"'; ?>>

	<?php do_action( 'woocommerce_login_form_start' ); ?>

	<?php if ( $message ) echo wpautop( wptexturize( $message ) ); ?>

	<p class="form-row form-row-first">
		<label for="username"><?php esc_html_e( 'Username or email', 'storex' ); ?> <span class="required">*</span></label>
		<input type="text" class="input-text" name="username" id="username" />
	</p>
	<p class="form-row form-row-last">
		<label for="password"><?php esc_html_e( 'Password', 'storex' ); ?> <span class="required">*</span></label>
		<input class="input-text" type="password" name="password" id="password" />
	</p>
	<div class="clear"></div>

	<?php do_action( 'woocommerce_login_form' ); ?>

	<p class="form-row">
		<?php wp_nonce_field( 'woocommerce-login' ); ?>
		<input type="submit" class="button" name="login" value="<?php esc_html_e( 'Login', 'storex' ); ?>" />
		<input type="hidden" name="redirect" value="<?php echo esc_url( $redirect ) ?>" />
		<input name="rememberme" class="input-checkbox" type="checkbox" id="rememberme" value="forever" /> 
		<label for="rememberme" class="inline checkbox"><?php esc_html_e( 'Remember me', 'storex' ); ?></label>
	</p>
	<p class="lost_password">
		<a href="<?php echo esc_url( wc_lostpassword_url() ); ?>"><?php esc_html_e( 'Lost your password?', 'storex' ); ?></a>
	</p>

	<div class="clear"></div>

	<?php do_action( 'woocommerce_login_form_end' ); ?>

</form>
<?php */?>