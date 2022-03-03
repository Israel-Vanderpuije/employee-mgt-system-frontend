import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];
  isDeleteEmployee: boolean = false;
  showModal: boolean = false
  deleteEmployee!: Employee

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  updateEmployee(id: number){                
    this.router.navigate(['update-employee'], {queryParams: {id: id}})
  }

  onDeleteEmployee(id: number){
    console.log(id)    
      this.employeeService.deleteEmployee(id).subscribe(data => {
        console.log(data)
        this.getEmployees()
      })
    
  }

  employeeDetails(id: number){
    this.router.navigate(['employee-details'], {queryParams: {id: id}})
  }

  public onOpenModal(employee: Employee): void {
    this.deleteEmployee = employee
  }

}
