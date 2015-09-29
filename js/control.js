$(function () {
    init();
});
function init(){

    var cmp=0;
    var interval;
    var stat = 0;
    var tabcolor=["black","white","red","blue","green"]
    $( "#applet" ).click(function() {

        if(!stat){
            stat=1;
            interval= setInterval(function (){
                say(cmp)
                $("#applet").css('background',tabcolor[cmp])
                cmp==4 ? cmp=0 : cmp++;

            },300)

        }
        else{
            clearInterval(interval);
            stat=0
        }
    });


}
function say(text){
    console.log(text);

}