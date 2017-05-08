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
    var i, v_id, i_id;
    var no = 0;
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
        no += 1;
        document.getElementById("id-userinfo").innerHTML +=
            "<tr>" +
            "<td>" + no + "</td>" +
            "<td>" + data.id + "</td>" +
            "<td>" + data.userid + "</td>" +
            "<td>" + data.name + "</td>" +
            "<td>" + data.pwd + "</td>" +
            "<td>" + data.level + "</td>" +
            "</tr>";
    }
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