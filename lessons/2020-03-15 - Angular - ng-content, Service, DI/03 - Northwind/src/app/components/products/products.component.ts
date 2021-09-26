import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ProductModel } from 'src/app/models/product-model';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    public products: ProductModel[];

    constructor(private myProductsService: ProductsService) { }

    async ngOnInit() {
        try {
            this.products = await this.myProductsService.getAllProductsAsync();
            console.log(this.products);
        }
        catch (err) {
            alert("Error: " + err.message);
        }
    }

}
