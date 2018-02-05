function getSessionCookie() {
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++)
          {
          var c = ca[i].trim();
          if (c.indexOf("sessionId=")==0) return c.substring(name.length,c.length);
          }
    return "";
}
var sessionCookie = getSessionCookie();
