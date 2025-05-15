<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="java.util.TreeMap, domain.UserData" %>
<%-- ↑当然importは必要。eclipseはやってくれない。--%>

<%
	TreeMap<Integer,UserData> resultMap = (TreeMap<Integer, UserData>) request.getAttribute("resultMap");
	//mapを受け取りたいからattribute
	//ここがスクリプトレット。変数とかをrequestから開封して準備しよう！
	//これを使ってforループとかは下で書くんだって。
%>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="css/style-view-result.css">
		<title>ユーザー一覧</title>
	</head>
	<body>
	    <header>
	        <div class="inner">
	            <h1>ユーザー管理するよ！</h1>
	        </div>
    	</header>
		<main>
			<div class="inner">
				<%-- forEach itemsは対象 varは処理中のものが入る変数名。$つきは計算式が入るイメージ。itemsも初期化していると思えば。--%>
				<%--<p>resultMap: <c:out value="${resultMap}" /></p> --%>
				<c:choose>
					<c:when test="${not empty resultMap}">
						<table class="user-list">
							<tr>
								<th>ユーザーID</th>
								<th>名前</th>
								<th>メールアドレス</th>
							</tr>
							<c:forEach items="${resultMap}" var="entry">
								<tr>
									<td><c:out value="${entry.key}" /></td>
									<td><c:out value="${entry.value.name}" /></td>
									<td><c:out value="${entry.value.email}" /></td>
								</tr>
							</c:forEach>
						</table>
					</c:when>
					<c:otherwise>
						<p class="message-NO-USER">有効なユーザーデータがありません。</p>
					</c:otherwise>
				</c:choose>
			</div>
		</main>
	</body>
</html>