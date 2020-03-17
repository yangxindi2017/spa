function roundFractional(x,y){
  return Math.round(x*Math.pow(10,y))/ Math.pow(10,y);
}

$(function(){

  //get dom elem
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');
  /*calc button click enent*/
  $btnCal.click(function(){
    
   //集中(表单)校验：点下计算按钮进行校验
   //validate if error return;
   if(!validate('#width')||!validate('#height')) return;

    //get value
    var w = Number($width.val()),
        h = Number($height.val());
    //calculate
    var p=2 * roundFractional(w+h,2);
        a = roundFractional(w*h,2);
  
    //output
    $perimeter.val(p);
    $area.val(a);

  });

  //字符校验
  //1. event keypress
  //2.event argument get key value,w.key and e.target.value
  //3. illegal key filter(过滤),e.preventDefault();
  //4.合法字符还有考虑出现的位置，例如：. , e E -
  $width.keypress(function(e){
    //过滤了以下字符
    if(/[abcdf-zABCDF-Z`~!@#$%^&*()\-=_+[\]{}|;:'",<>/?\\]/.test(e.key)){
      e.preventDefault();
      return;
    }; 
    
    //合法字符 e
    //允许出现在非科学计数法的数字末尾
    //允许出现在非科学计数法的数字中尾
    
    //不允许出现在非科学计数法的数字前面
    //不允许出现在空文本中
    //不允许出现在负号后面
    //不允许出现在科学计数法（e，E）数字末尾、前面、和中间
      //即只能有一个e 出现
    //
    var pos = e.target.selectionStart,
        con = e.target.value;
  console.log(e);
    if(e.key === 'e'){
      if(pos === 0 || con.indexOf('e')!== -1 || con.indexOf('E')!== -1){
        e.preventDefault();
        return;
      }
      if(pos === 1 && con.substring(0,1) === '-'){
        e.preventDefault();
        return; 
      }

    }

  });

  $height.keypress(function(e){
    if(/[abcdf-zABCDF-Z`~!@#$%^&*()\-=_+[\]{}|;:'",<>/?\\]/.test(e.key)){
      e.preventDefault();
      return;
    }; 

  });
  
  //字段校验
  $width.focusout(function(){
  //if(!validate(width)) select this;
    if(!validate('#width')){
      $width.select();
    } 
  });

  $height.focusout(function(){
  //if(!validate(width)) select this;
  if(!validate('#height')) $height.select();
  })

});

function validate(field){
  //get DOM error message
  var $data = $(field),
      $msg = $(field + '-validation-message');
  var arr = field.split('');
  arr.shift()
  var params = arr.join('');

  //validate null
  if($data.val()===''){
    $msg.html(params+'不能为空');
    $data.select();//设置焦点
    return false;
  }
  //validate number
  if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())){
    $msg.html(params+'必须是数值');
    $data.select();
    return false;
  }
  
  
  //validate > 0
    //prompt error message
    //return false;
  if(Number($data.val())<0){
    $msg.html(params+'必须大于零！');
    $data.select();
    return false;
  }
  $msg.html('');
  return true;
}
