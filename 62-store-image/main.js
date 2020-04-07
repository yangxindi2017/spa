$(function(){
  var $url =$('input[type="text"]'), 
      $btnSave =$('input[type="button"]'),
      $img =$('img'),
      $tmpImg = $('<img>');//临时图片，存于内存，与cavas关联

  //load localstorage string to $img
  var strImg = window.localStorage.getItem('img');
  if(strImg !== ''){
    $img.attr('src',strImg);
  }

  $btnSave.click(function(){
    //validate url not null
    var url = $url.val();
    if(url==='') return;
    
    //load url image tmpImg
    //跨域访问
    $tmpImg.attr('crossOrigin','anonymous');
    $tmpImg.attr('src',url);
  })

  $tmpImg.load(function(){
    //create cavas
    var can = $('<canvas>').get(0);
    var ctx = can.getContext('2d');

    can.width = $tmpImg.get(0).width;
    can.height = $tmpImg.get(0).height;
    
    //cavas fill tmpImg
    ctx.drawImage($tmpImg.get(0),0,0,can.width,can.height);
    //cavas output base64 string
    var str = can.toDataURL();

    console.log(str);

    //save base64 string to lacalstorage
    window.localStorage.setItem('img',str);

    //load localstorage string to $img
    var strImg = window.localStorage.getItem('img');
    $img.attr('src',strImg);
    
  })
})
