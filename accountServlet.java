package com.dk;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

 
@WebServlet("/accountServlet")
public class accountServlet extends HttpServlet {
 
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		 
		String userName=request.getParameter("account_info_userName");
		String email=request.getParameter("account_info_email");
		String password=request.getParameter("account_info_password");
		int phoneNumber=Integer.parseInt(request.getParameter("account_info_phoneNumber"));
//		response.getWriter().print(userName+" "+email+" "+password+" "+phoneNumber);
		daofile dao=new daofile();
		HttpSession session=request.getSession();
	
		if(dao.update_account_info(email, userName, password, phoneNumber)) {
			session.setAttribute("userName", userName);
			session.setAttribute("password", password);
			session.setAttribute("phoneNumber", phoneNumber);
			response.sendRedirect("mainjsp.jsp");
//			response.getWriter().print(dao.update_account_info(email, userName, password, password));
		}
		else {
			response.getWriter().print("Something went wrong");
//			response.getWriter().print(dao.update_account_info(email, userName, password, phoneNumber));
		}
		
		
	}

}
