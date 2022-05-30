var objPeople = [
	{
		username: "Jaikab",
		password: "jaikab090"
	}

]

if ("userStatus" in localStorage) {
  console.log("localStorage exists");
} else {
  localStorage.setItem("userStatus", "notLogged");
}

const locationBack = window.location.href;

function check() {
  let userStatus = localStorage.getItem("userStatus");
  var liveLocation = window.location.href;

  if(userStatus == 'logged' && liveLocation == 'http://127.0.0.1:5500/auth/'){
    window.location.href = '/index.html';
  }
  
  if (userStatus == 'logged'){
    console.log("logged!");
  }else if (userStatus == 'logged' && liveLocation == 'http://127.0.0.1:5500/auth/'){
    window.location.href = '/index.html';
  }else if (userStatus == 'notLogged' && liveLocation == 'http://127.0.0.1:5500/auth/'){
    console.log("login")
  }else if (userStatus == 'notLogged' && liveLocation != 'http://127.0.0.1:5500/auth/'){
    window.location.href = '/auth';
  }
}

    function signIn(){
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
      for(var i = 0; i < objPeople.length; i++) {
        if(username == '' || password == ''){
         if(username == ''){
           alert("Enter your Username");
           return;
          }else{
            alert("Enter your Password");
            return;
         }
          
        }
        if(username != '' && password != ''){
          if(username == objPeople[i].username && password == objPeople[i].password) {
            
            console.log(username + " user logged in");
            window.location.href = '/index.html';
            window.location.href="/index.html";
            localStorage.clear
            localStorage.setItem("userStatus", "logged")
            return;
          }
        }alert("incorrect username or password")
	  }
	    
    }


// function check(){
//   localStorage.setItem('userStatus', 'notLogged');
//   let userStatus = localStorage.getItem("userStatus");
  
//   if(userStatus == 'Logged'){
//     console.log("logged!")
//   }
//   else{
//     window.location.href = "/auth.html"
//     for(var i = 0; i < objPeople.length; i++) {
//       if(username == objPeople[i].username && password == objPeople[i].password) {
//         window.location.href = locationBack;
//         localStorage.setItem('userStatus', 'Logged');
//         return;
//     }
//   }
//   }
//     alert("Incorrect Username or Password");
// }