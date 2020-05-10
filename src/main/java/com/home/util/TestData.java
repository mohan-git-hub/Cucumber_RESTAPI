package com.home.util;

import java.io.FileInputStream;
import java.util.*;

import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;


import org.json.JSONException;
import org.json.simple.JSONObject;


public class TestData {
	
	public static LinkedHashMap<String,String> getAPIData(String FileName, String SheetName, String TestCaseID){
		LinkedHashMap<String,String> TestDataMap = new LinkedHashMap<String,String>();
		try {
		FileInputStream FIS = new FileInputStream(FileName);
		XSSFWorkbook workbook = new XSSFWorkbook(FIS);
		XSSFSheet TestDataSheet = workbook.getSheet(SheetName);
		
		
		
		int LastRowNum = TestDataSheet.getLastRowNum();
		int LastColNum = TestDataSheet.getRow(0).getLastCellNum();
		
		System.out.println("Last Row Num " + LastRowNum);
		System.out.println("Last Column Num " + LastColNum);
		
		for(int rn=1;rn<=LastRowNum;rn++) {
			if(TestDataSheet.getRow(rn).getCell(0).getStringCellValue().trim().equalsIgnoreCase(TestCaseID)){
				int TestDataIndex = TestDataSheet.getRow(rn).getRowNum();
				for(int i=TestDataIndex;i<=TestDataIndex;i++) {
					for(int j=1;j<LastColNum;j++) {
						TestDataMap.put(TestDataSheet.getRow(0).getCell(j).toString(), TestDataSheet.getRow(i).getCell(j).toString());
					}
				}
				break;
			}
		}
		}
		catch(Exception e) {
			
		}
		return TestDataMap;
	}
	
	//Below Method is for Test Purpose
	public static void main(String[] args) {
		TestData td = new TestData();
		String FileName = "G:\\Mohan\\Selenium_Software\\WorkSpace\\Cucumber.REST_API\\CORE_API_TestData.xlsx";
		LinkedHashMap<String,String> TestDataMap = td.getAPIData(FileName, "Users", "TC006");
		System.out.println(td.getAPIData(FileName, "Users", "TC006"));
		System.out.println(TestDataMap.keySet());
		System.out.println(TestDataMap.entrySet());

		JSONObject reqparam = new JSONObject();		
		Set<String> keyset = TestDataMap.keySet();
		
		Iterator it1 = keyset.iterator();
		
		while(it1.hasNext()) {
			//System.out.println(it1.next());
			String KeyValue = it1.next().toString();
			//System.out.println("Key Values are " + KeyValue);
			reqparam.put(KeyValue, TestDataMap.get(KeyValue));
			
		}
		System.out.println("Req Params are " + reqparam.toJSONString());
	}

}

