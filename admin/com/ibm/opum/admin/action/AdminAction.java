package com.ibm.opum.admin.action;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import org.apache.log4j.Logger;
import org.apache.struts2.ServletActionContext;

import com.ibm.opum.admin.bean.JavaToJsonUtil;
import com.ibm.opum.admin.bean.JsonToJavaUtil;
import com.ibm.opum.admin.bean.PUMYear;
import com.ibm.opum.admin.bean.PUMYearList;
import com.ibm.opum.user.bean.ResetPassword;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;

public class AdminAction extends ActionSupport {

	private Logger logger = Logger.getLogger(AdminAction.class);

	private static final long serialVersionUID = 1L;
	private PUMYearList pumYearList;
	private String year;
	
	public String home(){
		ActionContext.getContext().getSession().put("role", "admin");
		
		return "adminHome";
	}
	
	public String uploadCSV(){
		return "uploadCSVLink";
	}
	
	public String projectEngagement(){
		return "projectEngagementLink";
	}
	
	public String downloadPUM(){
		return "downloadPUMLink";
	}
	
	public String definePUMYear(){
		return "definePUMYearLink";
	}
	
	public String viewPUMYear(){
		return "viewPUMYearLink";
	}
	
	public String viewAllPUMYear(){
		
		String jsonData = null;
		
		try {
			URL url = new URL("http://localhost:8080/online-pum-rest/webapi/opum/yearList");
			HttpURLConnection connection = (HttpURLConnection) url.openConnection();
			connection.setRequestMethod("GET");
			connection.setRequestProperty("Accept", "application/json");
			connection.setRequestProperty("username", ActionContext.getContext().getSession().get("username") +"");
			connection.setRequestProperty("password", ActionContext.getContext().getSession().get("password") +"");
			if (connection.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + connection.getResponseCode());
			}
			BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));

			while ((jsonData = in.readLine()) != null) {
				logger.info("Jason Data: " + jsonData);
				pumYearList = JsonToJavaUtil.JsonToJava(jsonData, PUMYearList.class);

			}
			for(PUMYear pumyear: pumYearList.getPumYearList()){
				logger.info("PUMYear:"+pumyear.getPumYear());
				logger.info("Start Date: "+pumyear.getStart());
				logger.info("End Date:"+pumyear.getEnd());
			}

			logger.info("\nCrunchify REST Service Invoked Successfully..");
			in.close();
			connection.disconnect();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return "viewAllPUMYearLink";
	}
	
	public String viewSpecificYearDate() {
		try {
			URL url = new URL("http://localhost:9090/onlinePUM/webapi/opum/yeardate/" + year);
			HttpURLConnection connection = (HttpURLConnection) url.openConnection();
			connection.setRequestMethod("GET");
			connection.setRequestProperty("Accept", "application/json");
			connection.setRequestProperty("username", ActionContext.getContext().getSession().get("username") +"");
			connection.setRequestProperty("password", ActionContext.getContext().getSession().get("password") +"");
			return "";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "";
	}
	
	public String defineHolidays(){
		return "defineHolidaysLink";
	}
	
	public String searchEmployee(){
		return "searchEmployeeLink";
	}
	public String searchHoliday(){
		return "searchHolidayLink";
	}

	public String resetPassword(){
		ResetPassword resetPassword = new ResetPassword();
		resetPassword.setEmail(ServletActionContext.getRequest().getParameter("email"));
		resetPassword.setToken(ServletActionContext.getRequest().getParameter("token"));
		
		Client client = Client.create();
		WebResource webResource = client.resource("http://localhost:8080/online-pum-rest/webapi/resetPassword/validateToken");
		ClientResponse response = webResource.type("application/json").post(ClientResponse.class, JavaToJsonUtil.javaToJson(resetPassword));

		if (response.getStatus() != 200) {
			throw new RuntimeException("Failed : HTTP error code : "
			     + response.getStatus());
		}
		return "resetPasswordLink";
	}
	
	public PUMYearList getPumYearList() {
		return pumYearList;
	}

	public void setPumYearList(PUMYearList pumYearList) {
		this.pumYearList = pumYearList;
	}

	public String getYear() {
		return year;
	}

	public void setYear(String year) {
		this.year = year;
	}

}