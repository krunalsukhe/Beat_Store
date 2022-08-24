function signup(){
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    // console.log(email,password);
    signupAPI(email,password);
}



const signupAPI = async (email,password) => {
    const myBody={
        "email":email,
        "password":password
      }; 
    const response = await fetch('http://localhost:8000/api/signup', {
      
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
        // document.getElementById("message").innerHTML=error;
        window.alert(error);
    }
    else{
        // console.log(token);
        document.getElementById("message").innerHTML="User SignedUp ";
        window.location.href = "/login";
    }
  }