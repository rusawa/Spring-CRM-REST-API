package com.crm.crmdemo.Controller;

import com.crm.crmdemo.Exception.CustomerNotFoundException;
import com.crm.crmdemo.Model.Customer;
import com.crm.crmdemo.Repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/CRM")
@CrossOrigin("http://localhost:5173")
public class CustomerController {
    @Autowired
    private CustomerRepository customerRepository;


    @GetMapping("/")
    public List<Customer> home(){
        return customerRepository.findAll();
    }

    @PostMapping("/add")
    public String add(@RequestBody Customer customer){
        customerRepository.save(customer);
        return "Customer added";
    }

    @GetMapping("/customer/{id}")
    public Customer getCustomerById(@PathVariable int id){
        return customerRepository.findById(id).orElseThrow(()-> new CustomerNotFoundException(id));
    }

    @PutMapping("/customer/{id}")
    public Customer updateCustomer(@RequestBody Customer updatedCustomer, @PathVariable int id){
        return customerRepository.findById(id).map(customer -> {
            customer.setFirstName(updatedCustomer.getFirstName());
            customer.setLastName(updatedCustomer.getLastName());
            customer.setEmail(updatedCustomer.getEmail());
            return customerRepository.save(customer);
        }).orElseThrow(()-> new CustomerNotFoundException(id));
    }

    @DeleteMapping("/customer/{id}")
    public String deleteCustomer(@PathVariable int id){
        if(!customerRepository.existsById(id)){
            throw new CustomerNotFoundException(id);
        }
        customerRepository.deleteById(id);
        return "Customer with id " + id + " has been deleted";
    }
}
