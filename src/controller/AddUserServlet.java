package controller;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import domain.UserData;
import repository.LogWriter;
import service.AddUserService;
import service.ServiceResult;

@WebServlet("/add")

public class AddUserServlet extends HttpServlet {

	@Override
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//doGETもdoPOSTもないよ！doGet,doPost。js側の表記に惑わされないで！
		final String addUserName = request.getParameter("userName");
		final String addUserEmail = request.getParameter("email");
		
		System.out.println(addUserName);
		
		UserData newUserData = new UserData(addUserName,addUserEmail,true);
		
		ServiceResult result = new AddUserService(newUserData).addUserExecute(getServletContext());
		LogWriter.logWrite(result,getServletContext());
		//request.setAttribute("resultMessage", result.getResultMessage());
		//うん？ここからどう送ればいいんだ？
		
		//レスポンスを作っていく
	    // 文字エンコーディング指定（重要）
	    response.setContentType("application/json");
	    response.setCharacterEncoding("UTF-8");

	    // メッセージをJSON形式で返す
	    String jsonResponse = "{\"message\": \"" + result.getResultMessage() + "\"}";
	    response.getWriter().write(jsonResponse);
    }
}
