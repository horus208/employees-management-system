package com.horus.employeesmanagmentsystem.service;

import com.horus.employeesmanagmentsystem.exception.ResourceNotFoundException;
import com.horus.employeesmanagmentsystem.model.Employee;
import com.horus.employeesmanagmentsystem.persistance.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    EmployeeRepo employeeRepo;
    @Override
    public Page<Employee> getAllEmployees(Pageable pageable) {
        return employeeRepo.findAll(pageable);
    }

    @Override
    public Employee getEmployeeById(Long id)
    {
        Optional<Employee> employee = employeeRepo.findById(id);
        if (!employee.isPresent())
            throw new ResourceNotFoundException(id);

        return employee.get();
    }

    @Override
    public void addEmployee(Employee employee) {
        employeeRepo.save(employee);
    }

    @Override
    //this could throw Exception also so do not forget to handle all possible exceptions
    public void deleteEmployee(Long id)
    {
        employeeRepo.deleteById(id);

    }

    @Override
    public void updateEmployee(Employee employee)
    {
        employeeRepo.updateById(employee.getName(),employee.getEmail(),
                employee.getJobTitle(),employee.getImageUrl(), employee.getId());

    }
}
