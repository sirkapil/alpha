

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*10000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        alert("Welcome Back ! " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
           setCookie("username", user, 30);
       }
    }
}

function Get_Cookie(name) {
   var start = document.cookie.indexOf(name+”=”);
   var len = start+name.length+1;
   if ((!start) && (name != document.cookie.substring(0,name.length))) return null;
   if (start == -1) return null;
   var end = document.cookie.indexOf(“;”,len);
   if (end == -1) end = document.cookie.length;
   return unescape(document.cookie.substring(len,end));
}

function Set_Cookie(name,value,expires,path,domain,secure) {
    var cookieString = name + “=” +escape(value) +
       ( (expires) ? “;expires=” + expires.toGMTString() : “”) +
       ( (path) ? “;path=” + path : “”) +
       ( (domain) ? “;domain=” + domain : “”) +
       ( (secure) ? “;secure” : “”);
    document.cookie = cookieString;
}

function Delete_Cookie(name,path,domain) {
   if (Get_Cookie(name)) document.cookie = name + “=” +
      ( (path) ? “;path=” + path : “”) +
      ( (domain) ? “;domain=” + domain : “”) +
      “;expires=Thu, 01-Jan-70 00:00:01 GMT”;
}

var today = new Date();
var zero_date = new Date(0,0,0);
today.setTime(today.getTime() – zero_date.getTime());
var cookie_expire_date = new Date(today.getTime() + (8 * 7 * 86400000));

function setVisitorID() {
   if (Get_Cookie(‘VisitorID’)) {
       var VisitorID = Get_Cookie(‘VisitorID’);
   }else{
       Set_Cookie(‘VisitorID’,Math.random(),cookie_expire_date);
   }
}

function setSessionID() {
   if (!Get_Cookie(‘SessionID’))
       Set_Cookie(‘SessionID’,Math.random());
}

var loaded_script = true;

//This line could be used to set a cookie manually
//Set_Cookie( “key” , “val” , cookie_expire_date , “/stuff” , false );

//This line is used to set a visitor ID, which is easier
setVisitorID();



// create a cookie that expires after one hour
Cookies.set('theme', 'clean', {path : '/'});

Cookies.set('language', 'en-IN', {expiry : new Date(2030, 1, 1)}, {path : '/'});
