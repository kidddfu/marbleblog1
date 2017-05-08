/**
 * Created by king on 16-1-16.
 */
/*
 * on document ready
 */
$(document).ready(function() {
    /*
     * init procedure
     */
    init_userinfo();
    /*
     * page load
     */
    onPageLoad();
});
/*
 * init userinfo
 */
function init_userinfo() {
    var i, v_id, i_id = 10000;
    var no = 0;
    /*var user = {};
    user.id = '10001';
    user.userid = 'king';
    user.pwd = '123456';
    user.pwdmd5 = $.md5('123456');
    user.name = 'Martin King';
    user.level = 'admin';
    user.reserved = "1";
    localStorage.setItem(user.id, JSON.stringify(user));
    //localStorage.removeItem('00001');
    var user = {};
    user.id = '10002';
    user.userid = 'messi';
    user.pwd = '123456';
    user.pwdmd5 = $.md5('123456');
    user.name = 'Leo Messi';
    user.level = 'user';
    user.reserved = "2";
    localStorage.setItem(user.id, JSON.stringify(user));
    //localStorage.removeItem('00002');
    var user = {};
    user.id = '10003';
    user.userid = 'guest';
    user.pwd = '123456';
    user.pwdmd5 = $.md5('123456');
    user.name = 'Tour Guest';
    user.level = 'guest';
    user.reserved = "3";
    localStorage.setItem(user.id, JSON.stringify(user));
    //localStorage.removeItem('00003');*/
    //localStorage.clear();
    for(i=localStorage.length-1; i>=0; i--) {
        var data = JSON.parse(localStorage.getItem(localStorage.key(i)));
        //var v_reserved = data.reserved;
        //if(v_reserved == "1") {
            /*var edit_id = data.id;
            var delete_id = data.id;
            no += 1;
            document.getElementById("id-userinfo").innerHTML +=
                "<tr>" +
                "<td>" + no + "</td>" +
                "<td>" + data.id + "</td>" +
                "<td>" + data.userid + "</td>" +
                "<td>" + data.name + "</td>" +
                "<td>" + data.pwd + "</td>" +
                "<td>" + data.level + "</td>" +
                "<td class='actions'>" +
                "<a href='#id-insert-forminfo'><button class='btn btn-sm btn-primary'>Insert</button></a>" + "&nbsp;" +
                "<a href='#id-edit-forminfo'><button class='btn btn-sm btn-primary' onclick='load_edit_userinfo(" + edit_id + ");'>Edit</button></a>" + "&nbsp;" +
                "<a href='#id-browser-forminfo'><button class='btn btn-sm btn-primary' onclick='delete_userinfo(" + delete_id + ");'>Delete</button></a>" + "&nbsp;" +
                "</td>" +
                "</tr>";
            v_id = data.id;
            i_id = parseInt(v_id) + 1;
            $("#id-form-insert-id").val(i_id.toString());*/
        //} else if(v_reserved == "0") {
            /*no += 1;
            document.getElementById("id-userinfo").innerHTML +=
                "<tr>" +
                "<td>" + no + "</td>" +
                "<td>" + data.id + "</td>" +
                "<td>" + data.userid + "</td>" +
                "<td>" + data.name + "</td>" +
                "<td>" + data.pwd + "</td>" +
                "<td>" + data.level + "</td>" +
                "<td class='actions'>" +
                "<a href='#id-insert-forminfo'><button class='btn btn-sm btn-primary'>Insert</button></a>" + "&nbsp;" +
                "<a href='#id-edit-forminfo'><button class='btn btn-sm btn-primary' onclick='load_edit_userinfo(" + edit_id + ");'>Edit</button></a>" + "&nbsp;" +
                "<a href='#id-browser-forminfo'><button class='btn btn-sm btn-primary' onclick='delete_userinfo(" + delete_id + ");'>Delete</button></a>" + "&nbsp;" +
                "</td>" +
                "</tr>";*/
        //} else {}
        var edit_id = data.id;
        var delete_id = data.id;
        no += 1;
        document.getElementById("id-userinfo").innerHTML +=
            "<tr>" +
            "<td>" + no + "</td>" +
            "<td>" + data.id + "</td>" +
            "<td>" + data.userid + "</td>" +
            "<td>" + data.name + "</td>" +
            "<td>" + data.pwd + "</td>" +
            "<td>" + data.level + "</td>" +
            "<td class='actions'>" +
            "<a href='#id-insert-forminfo'><button class='btn btn-sm btn-primary'>Insert</button></a>" + "&nbsp;" +
            "<a href='#id-edit-forminfo'><button class='btn btn-sm btn-primary' onclick='load_edit_userinfo(" + edit_id + ");'>Edit</button></a>" + "&nbsp;" +
            "<a href='#id-browser-forminfo'><button class='btn btn-sm btn-primary' onclick='delete_userinfo(" + delete_id + ");'>Delete</button></a>" + "&nbsp;" +
            "</td>" +
            "</tr>";
        v_id = data.id;
        if(i_id < parseInt(v_id)) {
            i_id = parseInt(v_id);
        }
    }
    i_id += 1;
    $("#id-form-insert-id").val(i_id.toString());
}
/*
 * GetQueryString
 */
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return (r[2]); return null;
}
/*
 * onPageLoad
 */
function onPageLoad() {
    var v_name = "null";
    var v_level = "null";
    for(var i=0; i<localStorage.length; i++) {
        var data = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if(GetQueryString("userid") == data.userid) {
            v_name = data.name;
            v_level = data.level;
            break;
        } else {
            v_name = "null";
            v_level = "null";
        }
    }
    document.getElementById("id-a-name").innerHTML = v_name;
    document.getElementById("id-a-level").innerHTML = v_level;
}
/*
 * insert userinfo
 */
function insert_userinfo() {
    var user = {};
    user.id = $("#id-form-insert-id").val();
    user.userid = $("#id-form-insert-userid").val();
    var v_pwd = $("#id-form-insert-pwd").val();
    user.pwd = v_pwd;
    user.pwdmd5 = $.md5(v_pwd);
    user.name = $("#id-form-insert-name").val();
    user.level = $("#id-form-insert-level").val();
    user.reserved = $("#id-form-insert-reserved").val();
    localStorage.setItem(user.id, JSON.stringify(user));
}
/*
 * load edit userinfo
 */
function load_edit_userinfo(editid) {
    var data = JSON.parse(localStorage.getItem(editid));
    $("#id-form-edit-id").val(data.id);
    $("#id-form-edit-userid").val(data.userid);
    $("#id-form-edit-pwd").val(data.pwd);
    $("#id-form-edit-name").val(data.name);
    $("#id-form-edit-level").val(data.level);
    $("#id-form-edit-reserved").val(data.reserved);
}
/*
 * edit userinfo
 */
function edit_userinfo() {
    var user = {};
    user.id = $("#id-form-edit-id").val();
    user.userid = $("#id-form-edit-userid").val();
    var v_pwd = $("#id-form-edit-pwd").val();
    user.pwd = v_pwd;
    user.pwdmd5 = $.md5(v_pwd);
    user.name = $("#id-form-edit-name").val();
    user.level = $("#id-form-edit-level").val();
    user.reserved = $("#id-form-edit-reserved").val();
    localStorage.setItem(user.id, JSON.stringify(user));
}
/*
 * delete userinfo
 */
function delete_userinfo(deleteid) {
    var data = JSON.parse(localStorage.getItem(deleteid));
    var user = {};
    user.id = data.id;
    localStorage.removeItem(user.id);
    window.location.reload();
}










/*
//localStorage 存值永久有效
function set_item() {
    var user = {};
    localStorage.setItem(user.id, JSON.stringify(user));
    user.id = '00001';
    user.userid = 'king';
    user.pwd = 'king';
    user.pwdmd5 = $.md5('king');
    user.name = 'King Wang';
    user.level = 'admin';
    user.email = 'kingwjz@msn.com';
    localStorage.setItem(user.id, JSON.stringify(user));
}
//localStorage取值
function get_item() {
    var data = JSON.parse(localStorage.getItem('00001'));
    document.getElementById("id-div-userinfo").innerHTML =
        "id:" + data.id + "\r userid:" + data.userid + "\r pwd:" + data.pwd + "\r name:" + data.name + "\r age:" + data.age;
}
//localStorage删除指定键对应的值
function delete_item() {
    localStorage.removeItem('00001');
    alert(localStorage.getItem('00001'));
}
//全部清除localStorage
function clear_all_item() {
    localStorage.clear();
}
//遍历localStorage键值
function index_all_item() {
    for(var i=localStorage.length-1; i>=0; i--) {
        console.log('第'+ (i+1) +'条数据的键值为：' + localStorage.key(i) +'，数据为：' + localStorage.getItem(localStorage.key(i)));
    }
}
*/