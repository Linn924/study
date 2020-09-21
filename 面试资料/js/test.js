for(var i = 0 ;i<li.length;i++){
    li[i].onclick=function(){
      alert(i);  // 结果总是3.而不是0，1，2
    }
  }

  {
      var i =0
    li[i].onclick=function(){
      alert(i);  // 结果总是3.而不是0，1，2
    }
  }
  {
    var i =1
    li[i].onclick=function(){
      alert(i);  // 结果总是3.而不是0，1，2
    }
  }
  {
    var i =2
    li[i].onclick=function(){
      alert(i);  // 结果总是3.而不是0，1，2
    }
  }

  {
    let i =0
  li[i].onclick=function(){
    alert(i);  // 结果总是3.而不是0，1，2
  }
}
{
  let i =1
  li[i].onclick=function(){
    alert(i);  // 结果总是3.而不是0，1，2
  }
}
{
  let i =2
  li[i].onclick=function(){
    alert(i);  // 结果总是3.而不是0，1，2
  }
}