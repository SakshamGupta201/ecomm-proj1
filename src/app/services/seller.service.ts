import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SellerSignUp } from '../seller-auth/datatype';
@Injectable({
  providedIn: 'root',
})
export class SellerService {
  constructor(private httpClient: HttpClient) {}

  userSignUp(seller: SellerSignUp) {
    return this.httpClient.post('http://localhost:3000/seller', seller);
  }
}
