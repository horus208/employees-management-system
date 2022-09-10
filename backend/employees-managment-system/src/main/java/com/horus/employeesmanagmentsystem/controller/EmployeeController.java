package com.horus.employeesmanagmentsystem.controller;

import com.horus.employeesmanagmentsystem.model.Employee;
import com.horus.employeesmanagmentsystem.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmployeeController {
    @Autowired
    EmployeeService employeeService;

    @GetMapping(path = "/employees")
    public ResponseEntity<List<Employee>> getAllEmployees(Pageable pageable)
    {
        Page<Employee> employeesPage = employeeService.getAllEmployees(pageable);
        return new ResponseEntity<List<Employee>>(employeesPage.toList(), HttpStatus.OK);

    }
    @GetMapping(path = "/employees/{id}")
    public ResponseEntity<Employee> getEmployee(@PathVariable Long id)
    {
        Employee employee = employeeService.getEmployeeById(id);
        return new ResponseEntity<Employee>(employee,HttpStatus.OK);
    }

    @PostMapping(path = "/employees")
    public ResponseEntity<?> addEmployee(@RequestBody Employee employee)
    {
        employeeService.addEmployee(employee);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping("/employees/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable Long id)
    {
        employeeService.deleteEmployee(id);
        return new ResponseEntity<>(HttpStatus.OK);

    }

    @PutMapping ("/employees")
    public ResponseEntity<?> updateEmployee(@RequestBody Employee employee)
    {
        employeeService.updateEmployee(employee);
        return new ResponseEntity<>(HttpStatus.OK);

    }


}
