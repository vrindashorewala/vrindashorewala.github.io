$(document).ready(function(){
    var scroll_pos=0;
    $(window).scroll(function(){
        scroll_pos = $(this).scrollTop();
        homeHeight= ($(window).width())*(800/1920);
        if(scroll_pos>homeHeight){
            $('.navbar').css('background-color','#9A7197');
        }
        else{
            $('.navbar').css('background-color','transparent');
        }
    })
})