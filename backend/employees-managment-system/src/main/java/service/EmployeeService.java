package service;

import model.Employee;
import org.springframework.data.domain.Page;

import java.util.Optional;

public interface EmployeeService {

    public Page<Employee> getAllEmployees();
    public Optional<Employee> getUsrById(Long id);
    public void deleteEmployee(Long id);
    public void updateEmployee(Employee employee);
}
