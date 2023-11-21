import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { SellerService } from './services/seller.service';

export const canActivate = (sellerService: SellerService): CanActivateFn => {
  return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return !!(
      sellerService.isSellerLoggedIn.value || localStorage.getItem('seller')
    );
  };
};
