<div class="slide hideMe" id="sld-visitor-info">
   <header>
     <a class="btn btn-link" id="back-btn" onclick="go('#sld-visitor-info','#sld-visitor-type')">
       <i class="fa fa-arrow-left"></i>
     </a>
     <a class="btn btn-link next-btn" onclick="go('#sld-visitor-info','#sld-nda')">Next</a>
   </header>
   <div class="container">
    <h1>Please Enter Your Information</h1>
    <?php echo do_shortcode("[contact-form-7 id='53' title='Guest Information Form']"); ?>
   </div>
</div>

<script>
document.addEventListener( 'wpcf7mailsent', function( event ) {
    location = 'http://example.com/';
}, false );
</script>
