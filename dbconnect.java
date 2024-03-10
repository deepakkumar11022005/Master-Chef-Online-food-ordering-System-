package com.dk;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class dbconnect {
	static String url="jdbc:mysql://localhost:3306/restaurant";
	static String username="root";
	static String password="Deep2005@";
	public static void main(String[] args) throws SQLException, ClassNotFoundException {
		String query = "insert into user_login values(?,?,?,?)";
		Class.forName("com.mysql.jdbc.Driver");
		Connection con = DriverManager.getConnection(url, username, password);
		PreparedStatement st = con.prepareStatement(query);
		st.setString(1, "pathu");
		st.setString(2, "717822p238@kce.ac.in");
		st.setString(3, "p238");
		st.setInt(4, 123);
		int rs = st.executeUpdate(query);
		System.out.println(rs);
		 
	}
}
