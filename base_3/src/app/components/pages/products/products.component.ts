import { Component, OnInit } from '@angular/core';
import { ShoeModel } from 'src/app/models/shoe';
import { ShoesService } from 'src/app/services/shoes.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public allShoes: ShoeModel[] =[];
  constructor(private ShoesService: ShoesService) { }
  // public allShoes: ShoeModel[] = [];

  ngOnInit() {
    this.ShoesService.getAllShoes().subscribe(
      (shoes) => (this.allShoes = shoes, console.log(this.allShoes)),
      (err) => alert(err.message)
    );
  }

}