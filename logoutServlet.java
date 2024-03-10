package com.dk;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class logoutServlet
 */
@WebServlet("/logoutServlet")
public class logoutServlet extends HttpServlet {
	  
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		  HttpSession session=request.getSession();
		  session.removeAttribute("email");
		  session.removeAttribute("password");
		  session.removeAttribute("username");
		  session.removeAttribute("phoneNumber");
		  session.invalidate();
		  response.sendRedirect("login.jsp");
	}

	 
	 

}
