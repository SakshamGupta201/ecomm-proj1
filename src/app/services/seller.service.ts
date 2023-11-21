import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SellerSignUp } from '../seller-auth/datatype';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient, private router: Router) {}

  userSignUp(seller: SellerSignUp) {
    return this.httpClient
      .post('http://localhost:3000/seller', seller, { observe: 'response' })
      .subscribe((result) => {
        localStorage.setItem('seller', JSON.stringify(result.body));
        this.isSellerLoggedIn.next(true);
        this.router.navigate(['seller-home']);
      });
  }

  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }
}
