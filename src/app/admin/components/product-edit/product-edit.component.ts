import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MyValidators } from './../../../utils/validators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(private formBuilder: FormBuilder,
              private productService: ProductsService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.buildForm();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param: Params) => {
      this.id = param.id;

      console.log(param);
      console.log(this.id);
      this.productService.getProduct(this.id).subscribe(product => {
        // rellena el formulario con los datos del producto
        this.form.patchValue(product);
      });
    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }

  saveProduct(event: Event) {
    event.preventDefault();
    console.log(this.form.valid);
    if (this.form.valid) {
      const product = this.form.value;
      this.productService.updateProduct(this.id, product).subscribe( newProduct => {
        this.router.navigate(['./admin/products']);
      });
    } else {
      console.log(this.form.errors);
    }
    console.log(this.form.value);
  }

  get priceField() {
    return this.form.get('price');
  }

}
