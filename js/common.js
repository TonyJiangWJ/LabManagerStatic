/**
 * Created by TonyJiang on 2017/6/7.
 */

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start !== -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end === -1) c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
}

function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays === null) ? "" : ";expires=" + exdate.toGMTString())
}

function checkCookie() {
    userCode = getCookie('userCode');
    if (userCode !== null && userCode !== "") {
        // alert('Welcome again '+username+'!')
        console.log(userCode);
        return true;
    } else {
        // alert("请登录");
        return false;
    }
}

function getUserCode() {
    var userCode = getCookie("userCode");
    if (userCode === null || userCode === "") {
        // alert("请重新登录");
        return null;
    }
    return userCode;
}

function clearCookie() {
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
        for (var i = keys.length; i--;) {
            document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
        }
    }
}

function isLogin() {
    if (getUserCode() === null) {
        return false;
    } else {
        return true;
    }
}


function goToStudentListView(studentInfos) {
    localStorage.setItem("studentList", JSON.stringify(studentInfos));
    window.location.href = "studentList.html";
}

function goTOStudentInfoView(studentId) {
    localStorage.setItem("studentId", studentId);
    window.location.href = "studentInfo.html";
}