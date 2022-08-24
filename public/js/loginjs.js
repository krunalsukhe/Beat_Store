function signin(){
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    // console.log(email,password);
    signinAPI(email,password);
}



const signinAPI = async (email,password) => {
    const myBody={
        "email":email,
        "password":password
      }; 
    const response = await fetch('http://localhost:8000/api/signin', {
      
      method: 'POST',
      body: JSON.stringify(myBody), // string or object
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    if(response.status!=200){
        var error=myJson.error;
        document.getElementById("message").innerHTML=error;
    }
    else{
        var token = myJson.token;
        console.log(token);
        localStorage.setItem("token",token);
        document.getElementById("message").innerHTML="User SignedIn ";
        window.location.href = "/";
    }
  }