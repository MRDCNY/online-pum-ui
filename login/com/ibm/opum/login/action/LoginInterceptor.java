package com.ibm.opum.login.action;

import java.util.Map;

import org.apache.log4j.Logger;

import com.ibm.opum.user.bean.Role;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;

public class LoginInterceptor extends AbstractInterceptor {

    private Logger logger = Logger.getLogger(LoginInterceptor.class);

    private static final long serialVersionUID = 1L;

    @Override
    public String intercept(ActionInvocation invocation) throws Exception {
        Map<String, Object> session = invocation.getInvocationContext().getSession();

        Object isLogin = session.get("isLogin");
        Object role = session.get("role");
        Object isResetSuccessful = session.get("isResetSuccessful");

        if ((isLogin == null || !Boolean.valueOf(isLogin.toString())) && role == null) {

            if (isResetSuccessful != null && Boolean.valueOf(isResetSuccessful.toString())) {
                ActionSupport action = (ActionSupport) invocation.getAction();
                action.addActionError("Successful password reset! Please login to continue.");
                logger.info("action: " + action.getClass());

            }
            return "login";
        }

        String roleString = role.toString();

        return roleString.equals(Role.SYS_ADMIN.toString()) || roleString.equals(Role.ADMIN.toString()) ? "admin"
                : "user";
    }

}
