var $dlgGoto =(function(){
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
  
  function show(conf){
    //1.DOM draw DOM绘制
    //$(container).html(html);
    $(cfg.container).append($btn);
    $.extend(cfg,conf);

    num = conf.num;
    console.log(num);
  }
  return {
    show:show
  };
  
}());

