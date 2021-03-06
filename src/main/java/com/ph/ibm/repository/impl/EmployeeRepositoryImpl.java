package com.ph.ibm.repository.impl;

import java.sql.BatchUpdateException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.ph.ibm.model.Employee;
import com.ph.ibm.model.EmployeeUpdate;
import com.ph.ibm.repository.EmployeeRepository;
import com.ph.ibm.resources.ConnectionPool;
import com.ph.ibm.util.OpumConstants;

public class EmployeeRepositoryImpl implements EmployeeRepository {

	private ConnectionPool connectionPool = ConnectionPool.getInstance();
	
	private void closeConnection(Connection connection, PreparedStatement preparedStatement, ResultSet resultSet) {
		try { if (resultSet != null) resultSet.close();} catch (Exception e) {}
		try { if (preparedStatement != null) preparedStatement.close();} catch (Exception e) {}
		try { if (connection != null)connection.close();} catch (Exception e) {}
	}

	@Override
	public boolean addData(Employee employee) throws SQLException, BatchUpdateException {
		Connection connection = connectionPool.getConnection();
		PreparedStatement preparedStatement = null;
		try {
			connection.setAutoCommit(false);
			String query = "INSERT INTO EMPLOYEE (" + "EMPLOYEE_ID_NUMBER,EMAIL,FULLNAME,CREATEDATE,CREATEDBY) "
					+ "VALUES (?,?,?,?,?); ";
			preparedStatement = connection.prepareStatement(query);
			preparedStatement.setString(1, employee.getEmployeeIdNumber());
			preparedStatement.setString(2, employee.getEmail());
			preparedStatement.setString(3, employee.getFullName());
			preparedStatement.setString(4, employee.getCreateDate());
			preparedStatement.setString(5, OpumConstants.ADMIN);
			preparedStatement.addBatch();
			preparedStatement.executeBatch();
			connection.commit();
			System.out.println(OpumConstants.INSERTED_SUCCESS);
			preparedStatement.close();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try { if(preparedStatement != null) preparedStatement.close();} catch(Exception e) { }
			try { if(connection != null) connection.close(); } catch(Exception e) { }
		}
		return true;
	}

	@Override
	public boolean registerEmployee(Employee employee) throws SQLException {
		Connection connection = connectionPool.getConnection();
		PreparedStatement preparedStatement = null;
		try {
			connection.setAutoCommit(false);
			String query = "UPDATE EMPLOYEE SET PASSWORD = ?, UPDATEDBY = ? WHERE EMPLOYEE_ID_NUMBER = ? AND EMAIL = ?;";
			preparedStatement = connection.prepareStatement(query);
			preparedStatement.setString(1, employee.getPassword());
			preparedStatement.setString(2, employee.getEmail());
			preparedStatement.setString(3, employee.getEmployeeIdNumber());
			preparedStatement.setString(4, employee.getEmail());
			preparedStatement.executeUpdate();
			connection.commit();
			System.out.println(OpumConstants.UPDATED_SUCCESS);
			return true;
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try { if(preparedStatement != null) preparedStatement.close();} catch(Exception e) { }
			try { if(connection != null) connection.close(); } catch(Exception e) { }
		}
		return false;
	}

	@Override
	public String viewEmployee(String employeeIdNumber) throws SQLException {
		Connection connection = connectionPool.getConnection();
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;
		String employeeId = null;
		try {
			String query = "SELECT EMPLOYEE_ID FROM EMPLOYEE WHERE EMPLOYEE_ID_NUMBER = ?";
			preparedStatement = connection.prepareStatement(query);
			preparedStatement.setString(1, employeeIdNumber);
			resultSet = preparedStatement.executeQuery();
			while (resultSet.next()) {
				employeeId = resultSet.getString(1);
			}
			resultSet.close();
			preparedStatement.close();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			closeConnection(connection, preparedStatement, resultSet);
		}
		return employeeId;
	}

	@Override
	public Employee loginAdmin(String username, String hashed) throws SQLException {
		Connection connection = connectionPool.getConnection();
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;
		Employee employee=null;
		try {
			String query = "SELECT EMPLOYEE_ID, EMPLOYEE_ID_NUMBER, EMAIL, ISADMIN FROM EMPLOYEE WHERE EMAIL = ? AND PASSWORD = ? AND ISADMIN = 1";
			preparedStatement = connection.prepareStatement(query);
			preparedStatement.setString(1, username);
			preparedStatement.setString(2, hashed);
			resultSet = preparedStatement.executeQuery();
			if (resultSet.next()) {
				employee = new Employee();
				employee.setEmployeeId(resultSet.getInt(1));
				employee.setEmployeeIdNumber(resultSet.getString(2));
				employee.setEmail(resultSet.getString(3));
				employee.setAdmin(resultSet.getBoolean(4));
			} 
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			closeConnection(connection, preparedStatement, resultSet);
		}
		return employee;
	}

	@Override
	public Employee loginUser(String username, String hashed) throws SQLException {
		Connection connection = connectionPool.getConnection();
		Employee employee=null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;
		try {
			String query = "SELECT EMPLOYEE_ID, EMPLOYEE_ID_NUMBER, EMAIL, ISADMIN, FULLNAME FROM EMPLOYEE WHERE EMAIL = ? AND PASSWORD = ?";
			preparedStatement = connection.prepareStatement(query);
			preparedStatement.setString(1, username);
			preparedStatement.setString(2, hashed);
			resultSet = preparedStatement.executeQuery();
			if (resultSet.next()) {
				employee = new Employee();
				employee.setEmployeeId(resultSet.getInt(1));
				employee.setEmployeeIdNumber(resultSet.getString(2));
				employee.setEmail(resultSet.getString(3));
				employee.setAdmin(resultSet.getBoolean(4));
				employee.setFullName(resultSet.getString(5));
			} 
			return employee;
		} catch (SQLException e) {
			e.printStackTrace();
			return null;
		} finally {
			closeConnection(connection, preparedStatement, resultSet);
		}
	}

	@Override
	public boolean doesEmployeeExist(String employeeIdNumber, String email) throws SQLException {
		Connection connection = connectionPool.getConnection();
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;
		try {
			String query = "SELECT EMPLOYEE_ID FROM EMPLOYEE WHERE EMPLOYEE_ID_NUMBER = ? AND EMAIL = ?";
			preparedStatement = connection.prepareStatement(query);
			preparedStatement.setString(1, employeeIdNumber);
			preparedStatement.setString(2, email);
			resultSet = preparedStatement.executeQuery();
			if (resultSet.next()) {
				return true;
			} else {
				return false;
			}
		} catch (SQLException e) {
			e.printStackTrace();
			return false;
		} finally {
			closeConnection(connection, preparedStatement, resultSet);
		}
	}

	@Override
	public EmployeeUpdate searchEmployee(String employeeIdNumber) throws SQLException{
		Connection connection = connectionPool.getConnection();
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;
		EmployeeUpdate employee = null;
		try {
			String query ="SELECT EMPLOYEE.FULLNAME, EMPLOYEE.EMAIL, PROJECT.NAME, PROJECT_ENGAGEMENT.START, PROJECT_ENGAGEMENT.END, EMPLOYEE.ISACTIVE "
					+ "FROM EMPLOYEE "
					+ "JOIN PROJECT_ENGAGEMENT ON EMPLOYEE.EMPLOYEE_ID=PROJECT_ENGAGEMENT.EMPLOYEE_ID "
					+ "JOIN PROJECT ON PROJECT_ENGAGEMENT.PROJECT_ID=PROJECT.PROJECT_ID "
					+ "WHERE EMPLOYEE.EMPLOYEE_ID_NUMBER = ?";
			
			preparedStatement = connection.prepareStatement(query);
			preparedStatement.setString(1, employeeIdNumber);
			resultSet = preparedStatement.executeQuery();
			
			if (resultSet.next()){
				employee = new EmployeeUpdate();
				employee.setEmployeeIdNumber(employeeIdNumber);
				employee.setFullName(resultSet.getString(1));
				employee.setEmail(resultSet.getString(2));
				employee.setProjectName(resultSet.getString(3));
				employee.setStartDate(resultSet.getString(4));
				employee.setEndDate(resultSet.getString(5));
				employee.setActive(resultSet.getBoolean(6));
			}
			return employee;
			} catch (SQLException e){
				e.printStackTrace();
				return null;
			} finally {
				closeConnection(connection, preparedStatement, resultSet);
			}
		}

	@Override
	public boolean updateEmployee(EmployeeUpdate employeeUpdate) throws SQLException, BatchUpdateException {
		Connection connection = connectionPool.getConnection();
		PreparedStatement preparedStatement = null;
		try {
			connection.setAutoCommit(false);
			String query = "UPDATE EMPLOYEE "
					+ "JOIN PROJECT_ENGAGEMENT ON EMPLOYEE.EMPLOYEE_ID = PROJECT_ENGAGEMENT.EMPLOYEE_ID "
					+ "JOIN PROJECT ON PROJECT_ENGAGEMENT.PROJECT_ID = PROJECT.PROJECT_ID "
					+ "SET EMPLOYEE.FULLNAME = ?,"
					+ "EMPLOYEE.EMAIL = ?,"
					+ "PROJECT.NAME = ?, "
					+ "PROJECT_ENGAGEMENT.START = ?,"
					+ "PROJECT_ENGAGEMENT.END = ?,"
					+ "EMPLOYEE.ISACTIVE = ?"
					+ " WHERE EMPLOYEE.EMPLOYEE_ID_NUMBER = ?";
			
			preparedStatement = connection.prepareStatement(query);
			preparedStatement.setString(1, employeeUpdate.getFullName());
			preparedStatement.setString(2, employeeUpdate.getEmail());
			preparedStatement.setString(3, employeeUpdate.getProjectName());
			preparedStatement.setString(4, employeeUpdate.getStartDate());
			preparedStatement.setString(5, employeeUpdate.getEndDate());
			preparedStatement.setBoolean(6, employeeUpdate.isActive());
			preparedStatement.setString(7, employeeUpdate.getEmployeeIdNumber());
			preparedStatement.executeUpdate();
			connection.commit();
			System.out.println(OpumConstants.UPDATED_SUCCESS);
			preparedStatement.close();
			return true;
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try { if(preparedStatement != null) preparedStatement.close();} catch(Exception e) { }
			try { if(connection != null) connection.close(); } catch(Exception e) { }
		}
		return false;
	}

}
