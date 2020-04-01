//1.构造函数方式：
function TimerButton(){
  var $btn =
      $('<input class="timer-button" type="button" disabled>'),
      cfg={  //默认配置信息
        container:'body',
        num:6,
        title:'同意',
        state:'禁用'
      },
      timer,
      isRun=false;

  this.show = function(conf){
    $(cfg.container).append($btn);
    $.extend(cfg,conf);
    num = conf.num;
    $btn.val(cfg.title+"("+num+"s)");
    
    //2.event bind 
    if(isRun === true && timer!==undefined){
      return;
    }else{
      timer = setInterval(function(){
        num--;
        if(num === 0 ){
          clearInterval(timer);
          $btn.val(cfg.title);
          $btn.removeAttr('disabled');
          num = 6;
          isRun=false;
        }else{
          isRun=true;
          $btn.val(cfg.title+'（'+num+'s)');
        }
      },1000);
    }
    
    $btn.click(function(){
      conf.onClick();
    });
  }
}


/*

//2.工场函数方式：
var $timerButton =(function(){
  //引入DOM方式①
  //var html ='<input type="button" id="add" value="同意（6S）" disabled">';
  
  //Attention：
  //写在show之外的变量声明只会执行一次，所以再点击添加按钮
  //也是在第一个的基础上做修改
  //而不是新增一个按钮
  //解决办法：把变量声明放到show函数中去
  
  function show(conf){ 
  var $btn =
      $('<input class="timer-button" type="button" disabled>'),
      cfg={  //默认配置信息
        container:'body',
        num:6,
        title:'同意',
        state:'禁用'
      },
      timer,
      isRun=false;

    //1.DOM draw DOM绘制
    //① $(container).html(html);
    //②
    $(cfg.container).append($btn);
    $.extend(cfg,conf);
    num = conf.num;
    $btn.val(cfg.title+"("+num+"s)");
    
    //2.event bind 
    if(isRun === true && timer!==undefined){
      return;
    }else{
      timer = setInterval(function(){
        num--;
        if(num === 0 ){
          clearInterval(timer);
          $btn.val(cfg.title);
          $btn.removeAttr('disabled');
          num = 6;
          isRun=false;
        }else{
          isRun=true;
          $btn.val(cfg.title+'（'+num+'s)');
        }
      },1000);
    }
    
    $btn.click(function(){
      conf.onClick();
    });
  }
  return {
    show:show
  };
  
}());
*/


//不用 page load event
/*
  封装成对象，有几种方案
  1.全局对象:简单对象字面量，不完全是面向对象，不能包括私有方法，不推荐使用
  vat timerBtn = {
    show:function()
  }
  2.工厂函数，一个函数返回值是一个简单对象

  vat timerBtn = (function{
    return {
      show：function
    }
  }())//立即执行函数
  3.构造函数，
  function TimerBtn(){
  }
  var tb = new TimerBtn();
  
  
*/
