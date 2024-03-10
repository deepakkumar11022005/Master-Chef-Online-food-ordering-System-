package com.dk;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
 
@WebServlet("/tableBookingServlet")
public class tableBookingServlet extends HttpServlet {
 
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		 insert into book_table values(?,?,?,?,?);
		 HttpSession session =request.getSession();
		 String email=(String) session.getAttribute("email");
		String  userNameString=request.getParameter("reservation_name");
		String dateString =request.getParameter("reservation_date");
		String timeString=request.getParameter("reservation_time");
		int  people_count=Integer.parseInt(request.getParameter("reservation_count"));
		String user_reqString=request.getParameter("reservation_req");
		 session.setAttribute("table_book_status",0);
		daofile dao=new daofile();
		if(dao.bookTable(email,userNameString,dateString,timeString,people_count,user_reqString)) {
			 response.sendRedirect("mainjsp.jsp");
		}
		else {
			 response.getWriter().print("error");
		}
		
	}

}
