package com.horus.employeesmanagmentsystem.service;

import com.horus.employeesmanagmentsystem.model.Employee;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface EmployeeService {

    public Page<Employee> getAllEmployees(Pageable pageable);

    public Employee getEmployeeById(Long id);

     public void addEmployee(Employee employee);

    public void deleteEmployee(Long id);

    public void updateEmployee(Employee employee);
}
