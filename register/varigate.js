$(function(){
  var $user = $("#username"),
      $umsg = $("#username-message"),
      $tel = $("#tel"),
      $tmsg = $("#tel-message"),
      $password =$("#password"),
      $pmsg = $("#password-message"),
      $code =$("#code"),
      $cmsg = $("#code-message"),
      $checkout = $("#checkout"),
      $submit =$("#submit"),
      $btn = $("#btn"),
      timer,
      num = 6;
      
      
  $submit.click(function(){
    //集中校验
    if(!validate('#username') || !validate('#tel')||!validate("#password") || !validate("#code")) return;

    if($checkout.prop("checked") == true){
      alert('注册成功');
    }else{
      alert('请勾选用户协议');
    }
  })

  //字符级校验
  //用户名校验
  $user.focusout(function(){
    var myreg1=/^[(a-zA-Z0-9\u4e00-\u9fa5){1}_]{1,16}$/;
    var myreg2 = /^[0-9]{1,14}$/;
    if(!(myreg1.test($user.val())) || myreg2.test($user.val())){
      $umsg.html('用户名仅支持中英文、数字和下划线，且不能为纯数字');
      $user.select();
    }else{
      $umsg.html('');
    }
  })
  
  //手机号码校验
  $tel.focusout(function(){
    var myreg=/^1[3456789]\d{9}$/; 
    if(!(myreg.test($tel.val()))){
      $tmsg.html("手机号码格式不正确")
      $tel.select();
    }else{
      $tmsg.html('');
    }
  })
  //密码校验
  $password.focusout(function(){
    var preg=/^[0-9a-z]{6,18}$/;
    if(!(preg.test($password.val()))){
      $pmsg.html("密码设置不符合要求，至少六位数字或字母")
      $password.select();
    }else{
      $pmsg.html('');
    }
  })
  
  //验证码为空校验
  $code.focusout(function(){
    if($code.val()===''){
      $cmsg.html('请求超时，请稍后重试');
      $code.select();
    }else{
      $cmsg.html('');

    }
  })

  //发送验证码效果
  $btn.click(function(){
    timer = setInterval(function(){
      num--;
      if(num === 0){
        clearInterval(timer);
        $btn.removeAttr('disabled');
        $btn.val('重新发送');
        num=6;
      }else{
        $btn.val(num+'s ');
        $btn.attr('disabled','true');
      }
    },1000)
  })
  
})


function validate(field){
  var $data = $(field),
      $msg = $(field+'-message');
  
  //validate null
  if($data.val() === ''){
    console.log($msg);
    if(field === '#username'){
      $msg.html('用户名仅支持中英文、数字和下划线，且不能为纯数字');
    }
    if(field === '#tel'){
      $msg.html('手机号为空请输入手机号');
    }
    if(field === '#password'){
      $msg.html('密码设置不符合要求');
    }
    if(field === '#code'){
      $msg.html('请求超时，请稍后再试');
    }
    $data.select();
    return false;
  }

  $msg.html('');
  return true;
}
