<?php
namespace WePOS;

/**
 * Frontend Pages Handler
 */
class Frontend {

    public function __construct() {
        add_action( 'wp_head', [ $this, 'reset_head_style' ], 7 );
        add_action( 'wp_head', [ $this, 'reset_head_scripts' ], 8 );
        add_action( 'wp_head', [ $this, 'enqueue_scripts' ], 999 );
        add_action( 'wp_head', [ $this, 'print_styles' ], 1000 );
        add_action( 'template_redirect', [ $this, 'rewrite_templates' ], 1 );
        add_filter('show_admin_bar', [ $this, 'remove_admin_bar' ] );
        add_filter( 'document_title_parts', [ $this, 'render_page_title' ], 20 );
    }

    /**
     * Load our template on our rewrite rule
     *
     * @return void
     */
    public function rewrite_templates() {
        if ( 'true' == get_query_var( 'wepos' ) ) {
            //check if user is logged in otherwise redirect to login page
            if ( ! is_user_logged_in() ) {
                wp_redirect( get_permalink( get_option( 'woocommerce_myaccount_page_id' ) ) );
                exit();
            }

            include_once WCPOS_PATH . '/templates/wepos.php';
            exit;
        }
    }

    /**
     * Remove admin bar
     *
     * @since 1.0.0
     *
     * @return void
     */
    public function remove_admin_bar() {
        if ( 'true' == get_query_var( 'wepos' ) ) {
            return false;
        }

        return true;
    }

    /**
     * Reset all register styles from WP or Other plugins
     *
     * @return void
     */
    public function reset_head_style() {
        if ( 'true' == get_query_var( 'wepos' ) ) {
            $wp_styles = wp_styles();
            $wp_styles->registered = [];
            $wp_styles->reset();
        }
    }

    /**
     * Reset all scripts
     *
     * @return void
     */
    public function reset_head_scripts() {
        if ( 'true' == get_query_var( 'wepos' ) ) {
            $wp_scripts = wp_scripts();
            $wp_scripts->registered = [];
            $wp_scripts->reset();
        }
    }

    /**
     * Enqueue all scripts
     *
     * @return [type] [description]
     */
    public function enqueue_scripts() {
        if ( 'true' == get_query_var( 'wepos' ) ) {
            do_action( 'wepos_enqueue_scripts' );
        }
    }

    /**
     * Print registered scripts
     *
     * @return [type] [description]
     */
    public function print_styles() {
        if ( 'true' == get_query_var( 'wepos' ) ) {
            wp_print_styles();
        }
    }

    /**
     * Render page title
     *
     * @since 1.0.0
     *
     * @return void
     */
    public function render_page_title( $title ) {
        if ( 'true' == get_query_var( 'wepos' ) ) {
            $title['title'] = apply_filters( 'wepos_page_document_title', __( 'Point of Sale', 'wepos' ) );
        }

        return $title;
    }

}
