<?php get_header(); ?>

<section>

  <?php if ( have_posts() ) : ?>
    <div class="min-width">
      <div class="post-single__content-wrapper">
      <?php while ( have_posts() ) : the_post(); ?>		
      
        <?php the_content();?>
      
      <?php endwhile; ?>
      </div>
    </div>
  <?php else : ?>
    <p class="global__no-posts"><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
  <?php endif; ?>

</section>

<?php get_footer(); ?>