import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../product.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product;
  @Output() productClicked: EventEmitter<string> = new EventEmitter();

  constructor(private cartService: CartService) {

  }

  today = new Date();

  addCart() {
    console.log('añadir al carrito');
    // this.productClicked.emit(this.product.id);
    this.cartService.addCart(this.product);
  }
}
