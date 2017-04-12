
window.onload= function () {
    var dels=document.querySelectorAll('.option .del');
    var winBox=document.querySelector(".winBox");
    var delBox=document.querySelector('.delBox');
    var cancel=document.querySelector('.cancel');
    //给页面中所有桶绑定点击事件
    for(var i=0;i<dels.length;i++){
        dels[i].onclick= function () {
            this.classList.add('open');//桶盖打开
            winBox.style.display='block';
            delBox.classList.add('animated');//添加动画效果
            delBox.classList.add('bounceInDown');

        }
    }
    //当点击取消 模态框消失 桶盖关闭 动画类名去掉
    cancel.onclick= function () {
        winBox.style.display='none';  //模态框消失
        delBox.classList.remove('animated');
        delBox.classList.remove('bounceInDown');//删除动画效果
        //找到有open类名的盒子 删除类名
        document.querySelector('.open').classList.remove('open'); //动画类名去掉



    }
}