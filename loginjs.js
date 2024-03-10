
  document.getElementById("sign_div").addEventListener("click",()=>{
     document.getElementById("login_from").style.display = "none" ; 
     document.getElementById("sign_up_form").style.display="flex";
     document.getElementById("sign_up_form").style.height="85%"
    //  document.getElementById("sign_up_form").style.backgroundColor="aqua"
     document.getElementById("login_page").style.height="75vh";
     document.getElementById("four_div").style.marginTop="12px"
     // document.getElementById("login_page").style.position= "absolute";
     document.getElementById("login_page").style.top="10vh"
 document.getElementById("sign_up_termsandconditions").style.marginTop="25px"
 
  
  })
  document.getElementById("login_div").addEventListener("click",()=>{
     document.getElementById("login_from").style.display = "flex" ; 
    //  document.getElementById("login_from").style.backgroundColor="aqua"
     document.getElementById("sign_up_form").style.display="none";
     document.getElementById("login_from").style.marginTop="20px"
     document.getElementById("login_page").style.height="60vh";
     document.getElementById("login_page").style.top="20vh" 
     document.getElementById("login_from").style.height="65%"
    //  document.getElementById("login_page").style.height
  })
 