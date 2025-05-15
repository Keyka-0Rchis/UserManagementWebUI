package controller;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import repository.LogWriter;
import service.DeleteUserService;
import service.ServiceResult;

@WebServlet("/delete")
//@は;いらないっぽい

public class DeleteUserServlet extends HttpServlet{
	@Override
	
	protected void doPost(HttpServletRequest request,HttpServletResponse response)throws ServletException, IOException {
		//FormDataは確かStringしか入らなかったはず。ここから数値に直すよ。
		final String deleteIdStr = request.getParameter("deleteUserId");
		final Integer deleteId = Integer.parseInt(deleteIdStr);
		
		ServiceResult result = new DeleteUserService(deleteId).deleteUserExecute(getServletContext());
		
		LogWriter.logWrite(result,getServletContext());
		
	    // 文字エンコーディング指定（重要）
	    response.setContentType("application/json");
	    response.setCharacterEncoding("UTF-8");

	    // メッセージをJSON形式で返す
	    String jsonResponse = "{\"message\": \"" + result.getResultMessage() + "\"}";
	    response.getWriter().write(jsonResponse);
	
	}

}