jQuery(document).ready(function(){

  const descendant = $('#destinations li').length;
  const child = $('#destinations > li').length;
  const multiple = $('.promo, #france').length;

  console.log('There are ' + descendant + ' descendants of the descendant id.');
  console.log('There are ' + child + ' children of the descendant id.');
  console.log(multiple + ' elements have been selected');

});
