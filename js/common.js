/*
 * ���ƶ��� click�¼� ����300���������ӳ� ��touch�¼���װһ��tap�¼� ������click�¼� ���300�����ӳ�
 *
 *
 *
 * ���˼·
 *
 * ��ָ�Ӵ���Ļ  û���ƶ�  ���ҽӴ���Ļ�¼��Ƚ϶� ��ΪΪclick�¼�
 * */
/*
* ��װһ���Ż����tap�¼� �����������¼�
*
* obj����tap�¼���Ԫ��
*callback������¼�������Ļٵ�����
*����2 ������ȫ������ĺ����ͱ���   ���������ȫ����Ⱦ����
* �������  ʹ�������ռ�
* */
//�����ռ�
var itcast={
    tap:function(obj,callback){
    var startTime=0;
    var isMove=false;
    if(typeof obj=='object'){
        obj.addEventListener('touchstart', function () {
            startTime=Date.now();//��¼��ʼʱ��
        })
        obj.addEventListener('touchmove', function () {
            isMove=true;//��¼�Ƿ��ƶ�
        })
        obj.addEventListener('touchend', function (e) {
            //�ж��Ƿ���ϵ���¼�������
            if(!isMove&&Date.now()-startTime<150){
                callback&&callback(e); //ִ�лص�����
            }
            //��������
            isMove=false;
            startTime=0;
        })
    }
}
}
itcast.tap();
