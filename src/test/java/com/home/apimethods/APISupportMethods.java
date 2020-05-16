package com.home.apimethods;

import java.util.*;

import org.json.simple.JSONObject;

import com.home.util.APIBase;
public class APISupportMethods extends APIBase {

	String EndPoint;
	
	public String SetEndPoint(String InputEndPoint) {
		return EndPoint = props.getProperty(InputEndPoint);
	}
	
	public LinkedHashMap<String,String> setHeaders(LinkedHashMap<String,String> HeadersMap){
		HeadersMap = new LinkedHashMap<String,String>();
		
		
		return HeadersMap;
	}
	
	public JSONObject BuildPostRequest(LinkedHashMap<String,String> TestDataMap) {
		JSONObject reqParams = new JSONObject();
		Set<String> KeySet = TestDataMap.keySet();
		Iterator<String> it1 = KeySet.iterator();
		String KeyValue;
		while(it1.hasNext()) {
			KeyValue = it1.next().toString();
			reqParams.put(KeyValue, TestDataMap.get(KeyValue));
		}
		return reqParams;
	}
	
	

}
