import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SellerSignUp } from './datatype';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent implements OnInit {
  constructor(private sellerService: SellerService, private router: Router) {}
  ngOnInit(): void {
    this.sellerService.reloadSeller();
  }

  onSubmit(form: NgForm) {
    const data: SellerSignUp = form.value;
    this.sellerService.userSignUp(data);
  }
}
