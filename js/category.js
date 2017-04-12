window.onload= function () {
    //��ർ������
    swipeLeft();
}
/*
*  1 ������li�������
*   1-1��ǰ�������li��ɫ
*   1-2���ҹ�����ҳ�涥��
*  2 ��������ʱ
*   2-1 �����ݻ���ʱ ul �����ƶ�
*   2-2 ����������  ul������ȥ
* */
function swipeLeft(){
    var leftBox=document.querySelector('.body-left');
    var ul=leftBox.querySelector('ul');
    var lis=ul.querySelectorAll('li');
    var currentY=0;//���ڼ�¼ulλ�Ƶ�����ֵ

    //----------------�ٽ�ֵ-------------------
    /*��λ�ٽ�ֵ*/
    var maxTop=0;
    var minTop=leftBox.offsetHeight-ul.offsetHeight;
    //�����ٽ�ֵ
    var swipeMax=maxTop+150;
    var swipeMin=minTop-150;
    //---------------��װ���ô���----------------
    //��ӹ���
    var addTransition= function () {
        ul.style.transition="transform 0.3s";
        ul.style.webkitTransition="transform 0.3s";
    }
    //ɾ������
    var removeTransition= function () {
        ul.style.transition="none";
        ul.style.webkitTransition="none";
    }
    //ulλ��
    var setTranslateY= function (y) {
        ul.style.transform='translateY('+y+'px)';
        ul.style.webkitTransform='translateY('+y+'px)';
        currentY=top;//��¼ul��topֵ
    }

    //-------------������������¼�------------
        itcast.tap(leftBox, function(e) {
            //e.target���Ի�ȡ�����¼���С��Ԫ��

            console.log(e.target.parentNode);
            var target=e.target.parentNode;//��ȡ����ǰ�����li��ǩ
            ////1-1��ǰ�������li��ɫ ��������    �õ�ǰ��li��������ʽ
            for(var i=0;i<lis.length;i++){
                lis[i].classList.remove('current');
                lis[i].index=i;//�Զ�������ֵ
            }
            target.classList.add('current');//ͻ���Լ�
            //  1-2���ҹ�����ҳ�涥��
            /*
            * 0   0
            * 1  -50
            * 2  -100
            * 3  -150   -index*50
            * */
            var top=-target.index*50;//���ul�ƶ��ľ���
            //ʹ��ǰ����Ҫ��֤
            if(top>maxTop){
                top=maxTop;
            }
            if(top<minTop) {
                top = minTop;
            }
            addTransition();//��ӹ���
            setTranslateY(top);//��ulλ��
            currentY=top;//��¼ul��topֵ



        });
    //------------��������ʱ----------------

    var startY=0;
    var moveY=0;
    var distanceY=0;
    leftBox.addEventListener('touchstart', function (e) {
        startY= e.targetTouches[0].clientY;//��ȡ��ʼ����ֵ
    })
     //2-1 ��������ʱ ul �����ƶ�
    leftBox.addEventListener('touchmove', function (e) {
       moveY= e.targetTouches[0].clientY;
        distanceY=moveY-startY;//�����
        removeTransition();//ɾ������
        var y=currentY+distanceY;
        //�߽��� ��֤���ݵĺ�����
        if(y>swipeMax){
            y=swipeMax;
        }
        if(y<swipeMin){
            y=swipeMin;
        }
        setTranslateY(y);//��ulλ��=֮ǰ��λ��+distanceY
    })
    //2-2 ���������� ul������ȥ
    leftBox.addEventListener('touchend', function (e) {
    //�ڴ���������
        currentY=currentY+distanceY;
       // �ж�ul��λ���Ƿ�Խ��
        window.onload=function(){
            //��ർ������
            swipeLeft();
            //�Ҳ໬��
            swipeRight();
        }

//��ർ������
        /*
         *  1��������li�������
         *     1-1��ǰ�������li��ɫ��
         *     1-2���ҹ�����ҳ��Ķ���
         * 2����������ʱ��
         *    2-1����������ʱul���滬��
         *    2-2������������ul������ȥ
         */
        function swipeLeft(){
            var leftBox=document.querySelector('.body-left');
            var ul=leftBox.querySelector('ul');
            var lis=ul.querySelectorAll('li');
            var currentY=0; //���ڼ�¼ulλ�Ƶ�����Yֵ
            //------------------�ٽ�ֵ------------------------
            /*��λ�ٽ�ֵ*/
            var maxTop=0;
            var minTop=leftBox.offsetHeight-ul.offsetHeight;

            //�����ٽ�ֵ
            var swipeMax=maxTop+150;
            var swipeMin=minTop-150;
            //-------------��װ���ô���------------------------
            /* ��ӹ���*/
            var addTransition=function(){
                ul.style.transition="transform 0.3s";
                ul.style.webkitTransition="transform 0.3s";
            }
            /*ɾ������*/
            var removeTransition=function(){
                ul.style.transition="none";
                ul.style.webkitTransition="none";
            }
            /*ulλ��*/
            var setTranslateY=function(y){
                ul.style.transform='translateY('+y+'px)';
                ul.style.webkitTransform='translateY('+y+'px)';
            }


            //----------------1�� ������������¼�-------------------------
            itcast.tap(leftBox,function(e){
                //e.target ���Ի�ȡ�������¼���С��Ԫ��
                console.log(e.target.parentNode);
                var target= e.target.parentNode; //��ȡ����ǰ�����li��ǩ
                // 1-1��ǰ�������li��ɫ  �����������õ�ǰ��li��������ʽ
                for(var i=0;i<lis.length;i++){
                    lis[i].classList.remove('current');
                    lis[i].index=i; //�Զ�������ֵ
                }
                target.classList.add('current'); //ͻ���Լ�

                //1-2���ҹ�����ҳ��Ķ���
                /*
                 * 0   0
                 * 1   -50
                 * 2   -100
                 * 3   -150    -index*50
                 * */
                var top= -target.index*50; //���ul �ƶ��ľ���
                //ʹ��ǰ����Ҫ��֤
                if(top>maxTop){
                    top=maxTop;
                }
                if(top<minTop){
                    top=minTop;
                }
                addTransition();  //��ӹ���
                setTranslateY(top);//��ulλ��
                currentY=top; //��¼ul��topֵ
            });

            //----------------2����������ʱ ------------------------

            var startY=0;
            var moveY=0;
            var distanceY=0;

            leftBox.addEventListener('touchstart',function(e){
                startY= e.targetTouches[0].clientY; //��ȡ��ʼ����ֵ
            })
            //2-1����������ʱul���滬��
            leftBox.addEventListener('touchmove',function(e){
                moveY= e.targetTouches[0].clientY; //��ȡ�ƶ�����ֵ
                distanceY=moveY-startY; //�����

                removeTransition(); //ɾ������
                var y=currentY+distanceY;
                //�߽��� ��֤���ݺ�����
                if(y>swipeMax){
                    y=swipeMax;
                }
                if(y<swipeMin){
                    y=swipeMin;
                }
                setTranslateY(y); // ��ulλ��= ֮ǰ��λ��+distanceY

            })
            //2-2������������ul������ȥ
            leftBox.addEventListener('touchend',function(e){
                //�ڴ���������
                currentY=currentY+distanceY;
                //�ж�ul��λ���Ƿ�Խ�磨maxTop,minTop��
                if(currentY<=minTop){
                    currentY=minTop;
                }
                if(currentY>=maxTop){
                    currentY=maxTop;
                }
                addTransition(); //��ӹ���
                setTranslateY(currentY);//��ulλ��



                //��������
                startY=0;
                moveY=0;
                distanceY=0;
            })



        }

        function swipeRight(){
            var leftBox=document.querySelector('.body-right');
            var ul=leftBox.querySelector('.right-in');

            var currentY=0; //���ڼ�¼ulλ�Ƶ�����Yֵ
            //------------------�ٽ�ֵ------------------------
            /*��λ�ٽ�ֵ*/
            var maxTop=0;
            var minTop=leftBox.offsetHeight-ul.offsetHeight;

            //�����ٽ�ֵ
            var swipeMax=maxTop+150;
            var swipeMin=minTop-150;
            //-------------��װ���ô���------------------------
            /* ��ӹ���*/
            var addTransition=function(){
                ul.style.transition="transform 0.3s";
                ul.style.webkitTransition="transform 0.3s";
            }
            /*ɾ������*/
            var removeTransition=function(){
                ul.style.transition="none";
                ul.style.webkitTransition="none";
            }
            /*ulλ��*/
            var setTranslateY=function(y){
                ul.style.transform='translateY('+y+'px)';
                ul.style.webkitTransform='translateY('+y+'px)';
            }

            //----------------��������ʱ ------------------------

            var startY=0;
            var moveY=0;
            var distanceY=0;

            leftBox.addEventListener('touchstart',function(e){
                startY= e.targetTouches[0].clientY; //��ȡ��ʼ����ֵ
            })
            //2-1����������ʱul���滬��
            leftBox.addEventListener('touchmove',function(e){
                moveY= e.targetTouches[0].clientY; //��ȡ�ƶ�����ֵ
                distanceY=moveY-startY; //�����

                removeTransition(); //ɾ������
                var y=currentY+distanceY;
                //�߽��� ��֤���ݺ�����
                if(y>swipeMax){
                    y=swipeMax;
                }
                if(y<swipeMin){
                    y=swipeMin;
                }
                setTranslateY(y); // ��ulλ��= ֮ǰ��λ��+distanceY

            })
            //2-2������������ul������ȥ
            leftBox.addEventListener('touchend',function(e){
                //�ڴ���������
                currentY=currentY+distanceY;
                //�ж�ul��λ���Ƿ�Խ�磨maxTop,minTop��
                if(currentY<=minTop){
                    currentY=minTop;
                }
                if(currentY>=maxTop){
                    currentY=maxTop;
                }
                addTransition(); //��ӹ���
                setTranslateY(currentY);//��ulλ��



                //��������
                startY=0;
                moveY=0;
                distanceY=0;
            })



        }

        //��������
        startY=0;
        moveY=0;
        distanceY=0;
    })
}