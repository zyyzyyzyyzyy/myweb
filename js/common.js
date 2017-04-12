/*
 * 在移动端 click事件 会有300毫秒左右延迟 用touch事件封装一个tap事件 来代替click事件 结局300毫秒延迟
 *
 *
 *
 * 解决思路
 *
 * 手指接触屏幕  没有移动  并且接触屏幕事件比较短 认为为click事件
 * */
/*
* 封装一个优化后的tap事件 用来代替点击事件
*
* obj：绑定tap事件的元素
*callback：点击事件触发后的毁掉函数
*问题2 定义在全局里面的函数和变量   很容易造成全局污染问题
* 解觉方法  使用命名空间
* */
//命名空间
var itcast={
    tap:function(obj,callback){
    var startTime=0;
    var isMove=false;
    if(typeof obj=='object'){
        obj.addEventListener('touchstart', function () {
            startTime=Date.now();//记录起始时间
        })
        obj.addEventListener('touchmove', function () {
            isMove=true;//记录是否移动
        })
        obj.addEventListener('touchend', function (e) {
            //判断是否符合点击事件的条件
            if(!isMove&&Date.now()-startTime<150){
                callback&&callback(e); //执行回调函数
            }
            //数据重置
            isMove=false;
            startTime=0;
        })
    }
}
}
itcast.tap();
