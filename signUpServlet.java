package com.dk;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionEvent;

 
@WebServlet("/signup")
public class signUpServlet extends HttpServlet {
 
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		 String username=request.getParameter("signUp_username");
		 String email=request.getParameter("signUp_email");
		 String password=request.getParameter("signUp_password");
		int  phoneNumber=Integer.parseInt(request.getParameter("signUp_phoneNumber"));
		HttpSession session=request.getSession();
		 daofile dao=new daofile();
		 
		 if(dao.create_database(username, email, password,phoneNumber)) {
			 response.sendRedirect("mainjsp.jsp");
			 session.setAttribute("username", username);
			 session.setAttribute("email", email);
			 session.setAttribute("password", password);
			 session.setAttribute("phoneNumber", phoneNumber);
			 
		 }
		 else {
			 response.sendRedirect("login.jsp");
			 session.setAttribute("error", "hasalready");
//			 response.getWriter().print(username+" "+email+" "+password+" "+phoneNumber);
		 }
	}

}
