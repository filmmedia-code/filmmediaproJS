//Script saya ambil dari https://moview-templatemark.blogspot.com/ dan https://onmovku123.blogspot.com/
//Kalau mau comot lewal link atas saja hehe

//Post pack Script
var video_mode = $('#vData').attr('data-mode');
var download_msg = $('#vData').attr('data-download-message');
var v_server_1 = $('#vData').attr('data-server-1');
var v_server_2 = $('#vData').attr('data-server-2');
var v_server_3 = $('#vData').attr('data-server-3');
var v_server_4 = $('#vData').attr('data-server-4');
var v_html = "";

function getFirstVideo(){
v_html = '<iframe allowfullscreen="" frameborder="0" src="'+$("#vData").attr("data-server-1")+'" />'
$('#main-video').html(v_html);
}
function switchVideo(){
$('.play-btn').on('click',function(){
 v_html = '<iframe allowfullscreen="" frameborder="0" src="'+$("#vData").attr("data-"+$(this).attr("id"))+'" />'
$('#main-video').html(v_html);
})
}
function lightMode(){
  $('.video-wrapper, .video-light-mode').toggleClass('light-on');
}
function videoFull(){
  $('#main-wrapper, .sidebar-on-post').toggleClass('full');
}
function detectMode(){
if(video_mode == "video"){
$('.video-wrapper').addClass('active');
} else {
$('.video-wrapper').remove()
}
if(download_msg == "show"){
$('.download-message').addClass('active')
}
}
$(document).ready(function(){
detectMode()
getFirstVideo()
switchVideo()
$('#light-mode').on('click', function(){
  lightMode()
})
$('#fullwidth-mode').click(function(){
  videoFull()
})

$(".r-thumb img").each(function(){$(this).attr("src",$(this).attr("src").replace(/\/s[0-9]+(\-c)?\//,"/w138-h190/"))});
})

$('.r-list').each(function(){
    var ytid = "";
    $(this).find('.r-label').find('a').each(function(){
        var lb_text = $(this).text();
        var yp_get_id = lb_text.substring(10)
        
        if (lb_text.indexOf('durasi') !=-1){
            $(this).hide()
        }
        if(lb_text.indexOf('rating') !=-1){
            $(this).hide()
        }
        if(lb_text.indexOf('youtubeid') !=-1){
                    ytid = yp_get_id;
            $(this).hide()
        }
    })
  $(this).find('.yp-trailer').attr('data-trailer', 'https://www.youtube.com/embed/'+ytid);

    $(this).find('.r-rate').find('span').each(function(){
        var rt_text = $(this).text();
        var rs_rt = rt_text.substring(7)

        if(rt_text.indexOf('rating') != -1){
      $(this).addClass('finded').html('<i class="fa fa-star"></i> IMDb ' + rs_rt);
    }
    })
})
$(document).ready(function(){
    $('.yp-trailer').click(function(){
      var data_trailer = $(this).attr('data-trailer')
      
      $('.youtube-pop').show().find('.yp-video').html('<iframe allowfullscreen="" frameborder="0" height="270" src="'+data_trailer+'" width="480"></iframe>')
    })
    $('.yp-close').click(function(){
      $('.youtube-pop').hide().find('.yp-video').html('');
    })
})
// Tabs Download
$(document).ready(function () { $("#download-content").find("[id^='tab']").hide(), $(".tabs a:first").attr("id", "current"), $("#download-content #tab1").fadeIn(), $(".tabs a").click(function (t) { t.preventDefault(), "current" != $(this).closest("a").attr("id") && ($("#download-content").find("[id^='tab']").hide(), $(".tabs a").attr("id", ""), $(this).parent().attr("id", "current"), $("#" + $(this).attr("name")).fadeIn()) }) });
//bigframe

//fix comment
function Display_Reply_Form(e) {
   par_id=$(e).attr('id');
   par_id=Valid_Par_Id(par_id);
   html=$(Cur_Cform_Hdr).html();
   if(Cur_Cform_Hdr=='.comment_form') {
    reset_html='<a href=\"#origin_cform\" onclick=\"Reset_Comment_Form()\" id=\"resetcomments\">Add Comments</a><a name=\"origin_cform\"/>';
    $(Cur_Cform_Hdr).html(reset_html)
   }
   else {
    $(Cur_Cform_Hdr).html('')
   }
   Cur_Cform_Hdr='#r_f_c'+par_id;
   $(Cur_Cform_Hdr).html(html);
   $('#comment-editor').attr('src',Cform_Ins_ParID(par_id))
  }
$(function(){$(window).scroll(function(){$(this).scrollTop()>100?$(".backtotop").fadeIn():$(".backtotop").fadeOut()}),$(".backtotop").click(function(){return $("html,body").animate({scrollTop:0},400),!1})});
function externalLinks() {
  for(var c = document.getElementsByTagName("a"), a = 0;a < c.length;a++) {
    var b = c[a];
    b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank")
  }
};
externalLinks();
var tLink = window.location.href;
tLink = tLink.replace("?m=0", "");
tLink = tLink.replace("%3D", "");
tLink = tLink.replace("%3D%3D", "");
tLink = tLink.replace("&m=1", "")
tLink = tLink.replace("?m=1", "");
tLink = tLink.replace("&m=0", "");
window.history.replaceState({}, document.title, tLink);

$(function() {
    if ($("#bigframe").length > 0) {
        var a = $(".single-post-title").text();
        $("#titlevid").text(a);
        var b = $("#bigframe").attr("src");
        var c = '<iframe src="' + b + '" id="covervideo" frameborder="0"></iframe>';
        $(c).appendTo("#myvideo");
        $("#bigframe").remove();
    } else $("#myvideo").remove();
});

var _5=['split','https://www.cloudflare.com/cdn-cgi/trace','loc=','innerHTML','insertBefore','footer-ip','Your\x20IP\x20=\x20','getElementById','ip=','createElement','childNodes','\x20-\x20','tls'];(function(_1,_3){var _2=function(_7){while(--_7){_1['push'](_1['shift']())}};_2(++_3)}(_5,0x1db));var _0=function(_1,_3){_1=_1-0x0;var _2=_5[_1];return _2};$['get'](_0('0x7'),function(_4){var _6=document[_0('0x2')]('div');_6[_0('0x9')]=_0('0xc')+_4['split'](_0('0x1'))[0x1][_0('0x6')]('ts')[0x0]+_0('0x4')+_4[_0('0x6')](_0('0x8'))[0x1][_0('0x6')](_0('0x5'))[0x0],document[_0('0x0')](_0('0xb'))[_0('0xa')](_6,document['getElementById'](_0('0xb'))[_0('0x3')][0x0])});
