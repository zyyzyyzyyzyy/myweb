
window.onload= function () {
    var dels=document.querySelectorAll('.option .del');
    var winBox=document.querySelector(".winBox");
    var delBox=document.querySelector('.delBox');
    var cancel=document.querySelector('.cancel');
    //��ҳ��������Ͱ�󶨵���¼�
    for(var i=0;i<dels.length;i++){
        dels[i].onclick= function () {
            this.classList.add('open');//Ͱ�Ǵ�
            winBox.style.display='block';
            delBox.classList.add('animated');//��Ӷ���Ч��
            delBox.classList.add('bounceInDown');

        }
    }
    //�����ȡ�� ģ̬����ʧ Ͱ�ǹر� ��������ȥ��
    cancel.onclick= function () {
        winBox.style.display='none';  //ģ̬����ʧ
        delBox.classList.remove('animated');
        delBox.classList.remove('bounceInDown');//ɾ������Ч��
        //�ҵ���open�����ĺ��� ɾ������
        document.querySelector('.open').classList.remove('open'); //��������ȥ��



    }
}