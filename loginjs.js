window.onload=function(){
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
signInButton.addEventListener("click", handler);
}
// var form = new FormData(document.getElementById('form'));


// signUpButton.addEventListener('click', () => {
// 	container.classList.add("right-panel-active");
// });
// function setCookie(cname, cvalue, exdays) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exdays*24*60*60*1000));
//     let expires = "expires="+ d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=file://";
//   }
//   function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for(let i = 0; i <ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
//   }
//   function setCookie(name, value, daysToLive = undefined) {
//     // Encode value in order to escape semicolons, commas, and whitespace
//     var cookie = name + "=" + encodeURIComponent(value);
    
//     if (typeof daysToLive === "number") {
//         /* Sets the max-age attribute so that the cookie expires
//         after the specified number of days */
//         cookie += "; max-age=" + (daysToLive*24*60*60);
//     }
        
//     document.cookie = cookie;
// }
// signInButton.addEventListener('click', () => {
//     // var email = form.get('email');
//     // var password = form.get('password');
  
// });

// function setCookie(name,value,days) {
// 	if (days) {
// 		var date = new Date();
// 		date.setTime(date.getTime()+(days*24*60*60*1000));
// 		var expires = "; expires="+date.toGMTString();
// 	}
// 	else var expires = "";
// 	document.cookie = name+"="+value+expires+"; path=file://";
// }
function handler() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
   // alert(email+password)
    localStorage.setItem(email, password);
    //document.cookie =email +":"+password;

	container.classList.remove("right-panel-active");
}