<?php
//FUNCTION CAROUSEL POSTSERVICES HOMEPAGE
//CUSTOM POST TYPE SERVICES

function carousel_postservices(){
  $args = array(
    'post_type' => 'service',
    'posts_per_page' => -1,
    'order' => 'DES'
    );

    $the_query = new WP_Query( $args ); ?>

    <?php if ( $the_query->have_posts() ) : ?>
    
    <?php $counterpost = 0; ?>

    <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>

    <div class="services col-lg-4 mx-4 my-4 shadow pt-3 h-100" id="service_<?php echo $counterpost; ?>">
            <div class="p-5">
                <div class="iconsbx primary-color-bg mx-auto rounded-circle"><i class="text-center icon-card bi bi-menu-button-wide-fill"></i></div>
                <h5 class="py-3"><?php the_title(); ?></h5>
                <a href="<?php the_permalink(); ?>" class="btn btn-primary btn-sm rounded-pill btn-customsecundary" role="button">Learn more <i class="bi bi-chevron-right"></i></a>
            </div>
        </div>
        <?php $counterpost++; ?>
    <?php endwhile; ?>
    <?php wp_reset_postdata(); ?>
    <?php endif;
}
add_shortcode('hrm_shortcode_postcarousel_services','carousel_postservices');

//FUNCTION CAROUSEL POST
//END
?>