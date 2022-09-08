package com.horus.employeesmanagmentsystem.exception;

public class ResourceNotFoundException extends RuntimeException {

   public ResourceNotFoundException(Long resourceId)
    {
        super("requested resource with id = "  + resourceId.toString() + " is not found");

    }

}
