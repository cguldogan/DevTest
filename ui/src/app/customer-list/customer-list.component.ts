import { Component, OnInit } from '@angular/core';
import { CustomerModel } from '../models/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers: CustomerModel[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.GetCustomers().subscribe(customers => this.customers = customers);
    this.customerService.newCustomerAdded.subscribe(x => {
      this.customerService.GetCustomers().subscribe(customers => this.customers = customers);
    });
  }

}
