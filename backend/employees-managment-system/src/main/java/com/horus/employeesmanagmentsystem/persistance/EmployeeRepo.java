package com.horus.employeesmanagmentsystem.persistance;

import com.horus.employeesmanagmentsystem.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee,Long> {


    @Query("update Employee e set e.name = ?1,e.email = ?2,e.jobTitle = ?3,e.imageUrl = ?4 where e.id = ?5")
    public void updateById(String name,String email,String jobTitle,String imageUrl,Long id);
}
