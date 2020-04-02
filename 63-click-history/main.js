$(function(){
  var $btn = $('input[type="button"]');

  var num=0;
  $btn.val('被按了 '+ num+' 次');
  
  $btn.click(function(){
    var url = location.origin + location.pathname + '#/'+(++num);

    history.pushState(null,null,url);
    $btn.val('被按了 '+ num+' 次');
  });

  $(window).on('popstate',function(){
    num = (location.href).match(/(\d*)$/)[0];

   
    num = (num === ''?0:num);
    $btn.val('被按了 '+ num+' 次');
  
  })
})
