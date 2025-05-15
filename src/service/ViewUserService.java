package service;

import java.util.TreeMap;

import jakarta.servlet.ServletContext;

import domain.UserData;
import repository.UserFileManager;
import repository.UserMap;

public class ViewUserService {
	
	public ServiceResult viewUserExecute(ServletContext context) {
		try {
			UserMap userMap = UserFileManager.loadMap(context);
			TreeMap<Integer,UserData> existUserMap = userMap.viewUser();
			return new ServiceResult("view" , 0 , "---" , true,"以上です",existUserMap);
		}catch(Exception e) {
			return new ServiceResult("view" , 0 , "---" ,false,"エラーが発生しました。" + e.getMessage(),null);
		}
	}
}
