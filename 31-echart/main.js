$(function(){
 var x=[],
     y=[];

  for(var i=0;i<1;i+=0.1){
    x.push(roundFractional(i,1));
    y.push(roundFractional(h(i),2));
  }

    var myChart = echarts.init($('#main').get(0));

    var option = {
      title: {
        text: '二进熵函数曲线'
      },
      tooltip: {},
      legend: {
        data:['信息量']
      },
      xAxis: {
        data: x
      },
      yAxis: {},
      series: [{
        name: '信息量',
        type: 'line',
        smooth: 'true',
        data: y
      }]
    };

  myChart.setOption(option);
console.log(x)
  //小数点保留位数
  //x做近似处理的数
  //n小数点后第n位

  function roundFractional(x,n){
    return Math.round(x*Math.pow(10,n))/Math.pow(10,n);
  }
  
  /**
   * 计算二进制熵
   *
   * @param p 概率，取值范围 0 ~ 1
   * @returns -p*log(p) - (1-p)*log(1-p)
   */

  function h(p) {
    return -1 * (plog(p) + plog(1 - p));
  }


  /**
   * 计算 p*log(p)
   *
   * @param p 概率，取值范围 0 ~ 1
   * @returns p*log(p)
   */
  function plog(p) {
    return (p === 0)? 0 : p * Math.log2(p);
  }

})
