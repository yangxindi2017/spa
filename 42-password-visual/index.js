$(function(){
  var $add = $('#add-password'),
      $get = $("#get-password"),
      $con = $(".main");
      pwdboxs = [];

  $add.click(function(){
    var pwd = new PasswordTextbox({'container':'div.main'});
    pwdboxs.push(pwd);
    $get.removeAttr('disabled');
  });

  $get.click(function(){
    pwdboxs.forEach(function(pwd){
      alert(pwd.getPwd());
    })
  })

})
