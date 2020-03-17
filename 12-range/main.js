$(function(){
  var $range = $('#range');
  var $age = $('#age');

  $range.change(function(){
    console.log('hello')
    $age.html($range.val());
  });


});
