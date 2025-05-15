package controller;

import java.io.IOException;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import service.ServiceResult;
import service.ViewUserService;

@WebServlet("/view")

public class ViewUserServlet extends HttpServlet {

	@Override
	protected void doPost(HttpServletRequest request,HttpServletResponse response) throws ServletException, IOException {
		
		ServiceResult result = new ViewUserService().viewUserExecute(getServletContext());
		
		System.out.println(result.getResultMap());
		
		request.setAttribute("resultMap", result.getResultMap());
		//setParameterっていうと文字列を送ることになるよ！
		
		RequestDispatcher dispatcher = request.getRequestDispatcher("ViewUser.jsp");
		dispatcher.forward(request, response);
		
	}
}