package com.dk;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.List;

import javax.security.auth.message.callback.PrivateKeyCallback.Request;
import javax.servlet.http.HttpSession;
import javax.swing.text.StyledEditorKit.BoldAction;

import com.mysql.cj.Session;

public class daofile {

	String url = "jdbc:mysql://localhost:3306/restaurant";
	String username = "root";
	String password = "Deep2005@";
	public ResultSet to_return_order_history(String email) {
		try {
			String query = "select * from user_order_details WHERE email=?";
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection(url, username, password);
			PreparedStatement st = con.prepareStatement(query);
			st.setString(1, email);

			ResultSet rs = st.executeQuery();
			rs.next();
			System.out.print(rs.getInt(1));
			return rs;
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
		
	
		
	}
	
	
	
	
	public boolean bookTable(String email, String userNameString, String dateString, String timeString, int people_count, String user_reqString) {
		try {
//			insert into user_order_details values(1,"717822p212@kce.ac.in",sysdate(),520,"fried rice,mutton briyani",null,"46 A ,meiyanndapatty ,hmt,uthangarai,636902","cash on delivery");
			String queryString = " insert into book_table values(?,?,?,?,?,?);";
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection(url, username, password);
			PreparedStatement st = con.prepareStatement(queryString);
			st.setString(1, email);
			st.setString(2, userNameString);
			st.setString(3,dateString);
			st.setString(4,  timeString);
			st.setInt(5, people_count);
			st.setString(6,user_reqString);
			
			int rs = st.executeUpdate();
//			System.out.println(rs + ".............");
			if (rs > 0) {
				return true;
			} else {
//				System.out.println(email + userName + password1 + phoneNumber);
				return false;
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}
	
	public boolean to_delivery_details(String email, String items, String itemdeString, String addressString, String paymentString, String price) {
		try {
//			insert into user_order_details values(1,"717822p212@kce.ac.in",sysdate(),520,"fried rice,mutton briyani",null,"46 A ,meiyanndapatty ,hmt,uthangarai,636902","cash on delivery");
			String queryString = " insert into user_order_details values(?,sysdate(),?,?,?,?,?);";
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection(url, username, password);
			PreparedStatement st = con.prepareStatement(queryString);
			st.setString(1, email);
			st.setString(2, price);
			st.setString(3,items);
			st.setString(4, itemdeString);
			st.setString(5, addressString);
			st.setString(6, paymentString);
			
			int rs = st.executeUpdate();
//			System.out.println(rs + ".............");
			if (rs > 0) {
				return true;
			} else {
//				System.out.println(email + userName + password1 + phoneNumber);
				return false;
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return false;
		
		
	}
	public String returnUserName(String email) throws ClassNotFoundException, SQLException {
		String query = "select userName from user_login where email=?";
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection con = DriverManager.getConnection(url, username, password);
		PreparedStatement st = con.prepareStatement(query);
		st.setString(1, email);

		ResultSet rs = st.executeQuery();
		rs.next();
		return rs.getString(1);
		
	}

	public boolean update_account_info(String email, String userName, String password1, int phoneNumber) {
		try {
			String queryString = "update user_login set userName=?,password=?,phoneNumber=? where email=?;";
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection(url, username, password);
			PreparedStatement st = con.prepareStatement(queryString);
			st.setString(1, userName);
			st.setString(2, password1);
			st.setInt(3, phoneNumber);
			st.setString(4, email);
			int rs = st.executeUpdate();
//			System.out.println(rs + ".............");
			if (rs != 0) {
				return true;
			} else {
//				System.out.println(email + userName + password1 + phoneNumber);
				return false;
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;

//		return false;
	}

	public boolean check(String email, String pwd) {
		try {
			String query = "select * from user_login where email=? and password=?";
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection(url, username, password);
			PreparedStatement st = con.prepareStatement(query);
			st.setString(1, email);
			st.setString(2, pwd);
			ResultSet rs = st.executeQuery();

			if (rs.next()) {
				return true;
			} else {
				return false;
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return false;

	}

	public List<Object> toUsername_phoneNumber(String email) throws ClassNotFoundException, SQLException {

		String query = "select userName,phoneNumber from user_login where email=?";
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection con = DriverManager.getConnection(url, username, password);
		PreparedStatement st = con.prepareStatement(query);
		st.setString(1, email);

		ResultSet rs = st.executeQuery();
		rs.next();

		return Arrays.asList(rs.getString(1), rs.getInt(2));

	}

	public boolean create_database(String uname, String email, String pwd, int phoneNumber) {
		String query = "insert into user_login(userName,email,password,phoneNumber) values(?,?,?,?);";
		String query1 = "select email,password from user_login where email=? and password=?";
		try {

			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection(url, username, password);
			PreparedStatement st1 = con.prepareStatement(query1);
			st1.setString(1, email);
			st1.setString(2, pwd);
			ResultSet rs1 = st1.executeQuery();
			if (rs1.next()) {

				return false;

			} else {

				PreparedStatement st = con.prepareStatement(query);
				st.setString(1, uname);
				st.setString(2, email);
				st.setString(3, pwd);
				st.setInt(4, phoneNumber);
				int rs = st.executeUpdate();
				if (rs > 0) {
					return true;
				} else {
					return false;
				}
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return false;

	}

}
