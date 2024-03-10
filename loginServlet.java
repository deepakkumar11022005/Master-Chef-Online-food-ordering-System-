package com.dk;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import java.sql.*;
import java.util.List;
import java.io.*;



//import com.mysql.cj.xdevapi.Statement;
 

@WebServlet("/user_login")
public class loginServlet extends HttpServlet {

      
   
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
	 
		String email=request.getParameter("login_email");
		String password=request.getParameter("login_password");
  HttpSession session=request.getSession();
  
  
  daofile dao=new daofile();
		if(dao.check(email, password)) {
//			response.getWriter().print("HELLO success");	
			
			session.setAttribute("email",email);
			session.setAttribute("password", password);
		    try {
		    	 List<Object> userName_phoneNumber=dao.toUsername_phoneNumber(email);
		    	  session.setAttribute("userName", userName_phoneNumber.get(0));
		    	  session.setAttribute("phoneNumber", userName_phoneNumber.get(1));
			} catch (ClassNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		  
			response.sendRedirect("mainjsp.jsp");
//		    response.getWriter().print(session.getAttribute("userName"));
//		    response.getWriter().print(session.getAttribute("phoneNumber"));
			}
		else {
//			response.sendRedirect("login.jsp");
			response.getWriter().print(dao.check(email, password));		
//			response.getWriter().print(email+password);
		}
			
	 
	   
	}

	 

}