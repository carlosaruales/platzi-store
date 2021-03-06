import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute,
              private productService: ProductsService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      console.log(id);
      this.productService.getProduct(id).subscribe((product: Product) => {
        this.product = product;
      });
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'Esto es un producto CAR',
      image: 'assets/images/banner-1.jpg',
      price: 1,
      description: 'prueba'
    };

    this.productService.createProduct(newProduct)
    .subscribe((product: Product) => {
      console.log(product);
    });
  }

  updateProduct() {
    this.productService.updateProduct('222' , {
      title: 'Actualice el producto CAR',
      price: 10000
    }).subscribe ((product: Product) => {
      console.log(product);
    });
  }

  deleteProduct() {
    this.productService.deleteProduct('222').subscribe((rta) => {
      console.log(rta);
    });
  }

}
