import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product-model';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor() { }

    public getAllProductsAsync(): Promise<ProductModel[]> {
        return new Promise<ProductModel[]>((resolve, reject) => {
            fetch("http://localhost:3000/products")
                .then(response => response.json())
                .then(products => resolve(products))
                .catch(err => reject(err));
        });
    }

}
