import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 items;
 checkoutForm;
 clearCart() {
    this.cartService.clearCart(); 
     window.alert('Your cart is clear!'); 
  }
  constructor(
     private cartService: CartService,
     private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
   }
ngOnInit() {
    this.items = this.cartService.getItems();

  }
   onSubmit(customerData) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    window.alert('Your order has been submitted', customerData);
  }

}