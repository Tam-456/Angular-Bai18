import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer';

@Component({
  selector: 'app-group-customer',
  standalone: false,
  templateUrl: './group-customer.html',
  styleUrls: ['./group-customer.css'],
})
export class GroupCustomerComponent implements OnInit {
  customerGroups: any[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getGroupCustomers().subscribe({
      next: (data) => {
        this.customerGroups = data;
      },
      error: (err) => console.error(err),
    });
  }
}