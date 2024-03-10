<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="logincss.css">
</head>
<body>
     <div >  <%String error=(String)session.getAttribute("error"); %> 
         <% if(error!=null){ %>
         <div class="error">
        You  already has Account !
    </div>
    <% session.removeAttribute("error"); %>
         <%} %>
      </div>
      
    <div id="form_body">
        <div id="login_page">
            <div id="first_div">
                <!-- <span id="login_display_none_icon_id">&#10006;</span> -->
            </div>
            <div id="second_div">
                <span id="login_div">Login</span>/
                <span id="sign_div">Sign up</span>
            </div>
            <form action="user_login" id="login_from" method="get">
                <div id="third_div">
                    <div class="email_num_input_div">
                        <input type="email" required name="login_email">
                        <div class="input_underline">


                        </div>
                        <label for="">Email</label>
                    </div>
                    <div id="phone_number_div">
                        <input type="password" required name="login_password">
                        <div class="input_underline"  >
                        </div>
                        <label for="">Password</label>
                    </div>
                </div>
                <div id="termsandconditions">
                    <span>By continuing,</span> Terms of Use agree to
                    RedChilli's <span> <a href="">Terms of
                            Use</a> and <a href="">Privacy Policy</a>.</span>
                </div>
                <div id="four_div">
                    <button id="login_submit_btn">Order now </button>
                </div>
            </form>
            <form action="signup" id="sign_up_form" method="post">
                <div id="username_input_div">
                    <input type="text" required name="signUp_username">
                    <div class="input_underline">
                    </div>
                    <label for="">Username</label>
                </div>
                <div id="email_div">
                    <input type="email" required name="signUp_email">
                    <div class="input_underline"  >
                    </div>
                    <label for="">Email</label>
                </div>
                <div id="email_pass_input_div">
                    <input type="password" required name="signUp_password" >
                    <div class="input_underline">


                    </div>
                    <label for="">Password</label>
                </div>
                <div id="email_pass_confirm_input_div">
                    <input type="number" required name="signUp_phoneNumber" >
                    <div class="input_underline" type="Password" >
                    </div>
                    <label for=""> Phone Number</label>
                </div>
                <div id="sign_up_termsandconditions">
                    <span>By continuing,</span> Terms of Use agree to
                    RedChilli's <span> <a href="">Terms of
                            Use</a> and <a href="">Privacy Policy</a>.</span>
                </div>
                <div id="four_div">
                    <button id="sign_up_submit_btn">Order now </button>
                </div>
            </form>

            
        </div>
        
      
    </div>

    <script src="loginjs.js"></script>
</body>
</html>