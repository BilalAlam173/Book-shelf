/**
 * Created by Hp on 4/20/2017.
 */

$(document).ready(function(){
    console.log('document-initiated');
    $('#register-form').hide();
    $('#logo').addClass('animated fadeInDown');
    $("input:text:visible:first").focus();

    $('#username').focus(function () {
        $('label[for="username"]').addClass('selected');
    });
    $('#username').blur(function () {
        $('label[for="username"]').removeClass('selected');
    });
    $('#password').focus(function () {
        $('label[for="password"]').addClass('selected');
    });
    $('#password').blur(function () {
        $('label[for="password"]').removeClass('selected');
    });
    $('#register-btn').click(function () {
        $('.login-box').hide();
        $('#register-form').show();
    });
    $('#login-btn').click(function () {

        $('.login-box').show();
        $('#register-form').hide();
    });
});
