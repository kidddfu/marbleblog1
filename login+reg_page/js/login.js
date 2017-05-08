/**
 * Created by KING on 2016/1/23.
 */
/*
 * 定义全局变量
 */
var g_userid, g_pwd, g_reserved;
var v_validata_userid = false;
var v_validata_pwd = false;
/*
 * 遍历localStorage键值
 */
function index_item_userid() {
    var v_userid = document.getElementById('userid').value;
    for(var i=0; i<localStorage.length; i++) {
        var data = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if(v_userid == data.userid) {
            userid = v_userid;
            v_validata_userid = true;
            break;
        } else {
            v_validata_userid = false;
        }
    }
    return v_validata_userid;
}
/*
 * 验证用户id
 */
function on_userid_blur() {
    var v_userid = document.getElementById('userid').value;
    if(v_userid == "") {
        document.getElementById('id-span-userid').innerHTML = "Please enter your userid.";
    } else {
        if(index_item_userid()) {
            document.getElementById('id-span-userid').innerHTML = "It is a right userid.";
        } else {
            document.getElementById('userid').value = '';
            document.getElementById('id-span-userid').innerHTML = "Please check your userid, and retry.";
        }
    }
    validateSubmit();
}
/*
 * 遍历localStorage键值
 */
function index_item_pwd() {
    var v_userid = document.getElementById('userid').value;
    var v_password = document.getElementById('password').value;
    var md5_password = $.md5(v_password);
    for(var i=0; i<localStorage.length; i++) {
        var data = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if((v_userid == data.userid) && (md5_password == data.pwdmd5)) {
            g_userid = data.userid;
            g_pwd = data.pwdmd5;
            g_reserved = data.reserved;
            v_validata_pwd = true;
            break;
        } else {
            v_validata_pwd = false;
        }
    }
    return v_validata_pwd;
}
/*
 * 验证用户密码
 */
function on_pwd_blur() {
    var v_password = document.getElementById('password').value;
    var md5_password = $.md5(v_password);
    if(v_password == "") {
        document.getElementById('id-span-password').innerHTML = "Please enter your password.";
    } else {
        if(index_item_pwd()) {
            document.getElementById('id-span-password').innerHTML = "It is a right password.";
            document.getElementById('password').value = md5_password;
        } else {
            document.getElementById('password').value = '';
            document.getElementById('id-span-password').innerHTML = "Please check your password, and retry.";
        }
    }
    validateSubmit();
}
/*
 * 验证登录
 */
function validateSubmit() {
    if(v_validata_userid && v_validata_pwd) {
        $("#id-submit").attr("disabled", false);
    } else {
        $("#id-submit").attr("disabled", true);
    }
}
/*
 * 页面跳转
 */
function onLoginSubmit() {
    if(g_reserved == "1") {
        document.location.href = "admin.html?userid=" + g_userid + "&password=" + g_pwd;
    } else if(g_reserved == "2") {
        document.location.href = "main.html?userid=" + g_userid + "&password=" + g_pwd;
    } else if(g_reserved == "3") {
        document.location.href = "tour.html?userid=" + g_userid + "&password=" + g_pwd;
    } else{
        document.location.href = "404.html";
    }

    return false;
}