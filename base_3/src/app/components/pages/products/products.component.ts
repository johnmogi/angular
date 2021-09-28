import { Component, OnInit } from '@angular/core';
import { ShoeModel } from 'src/app/models/shoe';
import { ShoesService } from 'src/app/services/shoes.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private ShoesService: ShoesService) { }
  // public allShoes: ShoeModel[] = [];
  public allShoes: ShoeModel[]; 
  ngOnInit(): void {
    this.ShoesService.getAllShoes()
    .subscribe(res => {
      res.map(shoe => {
console.log(shoe);

 });
    }, err => alert(err.message));
}


   
  }

