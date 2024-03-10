package com.dk;

import java.io.IOException;
import java.time.zone.ZoneRulesException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
 
@WebServlet("/deliveryServlet")
public class deliveryServlet extends HttpServlet {
//	insert into user_order_details values
//	(1,"717822p212@kce.ac.in",sysdate(),520,"fried rice,mutton briyani",null,"46 A ,meiyanndapatty ,hmt,uthangarai,636902","cash on delivery");
	 
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		 response.getWriter().print("Thank you");
		 HttpSession session =request.getSession();
		 String email=(String) session.getAttribute("email");
		 String items=request.getParameter("items_ordered");
		 String itemdeString=request.getParameter("user_description");
		 String addressString=request.getParameter("user_address_to_delivery");
		 String paymentString="UPI";
		 String price = request.getParameter("price");
         
		 
		 response.getWriter().println(price);
		 response.getWriter().println(paymentString);
//		 daofile dao =new daofile();
//		  if( dao.to_delivery_details(email,items,itemdeString,addressString,paymentString,price)) {
//			  response.getWriter().print("Thank you");
//		  }
//		  else {
//			  response.getWriter().print("Error occured");
//			  
//		  }
	}

}
