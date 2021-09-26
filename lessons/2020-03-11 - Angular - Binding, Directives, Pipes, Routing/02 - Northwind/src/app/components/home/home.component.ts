import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public currentDiscount: number;
    public imageWidth: number;
    public isWinter: boolean;
    public vegetables: string[];
    public currentDate: Date;
    public minPrice: number;

    ngOnInit(): void {
        this.currentDiscount = 10;
        setTimeout(() => { this.imageWidth = 300 }, 100); // Update image width & height after 10ms for updating the UI:
        const month = new Date().getMonth() + 1;
        this.isWinter = month >= 11 || month <= 3;
        this.vegetables = ["Onions", "Tomatoes", "Carrots", "Potatoes"];
        this.currentDate = new Date();
        this.minPrice = 200;
    }

    public decreaseImage(): void {
        this.imageWidth -= 10;
    }

    public resetImage(): void {
        this.imageWidth = 300;
    }

    public increaseImage(): void {
        this.imageWidth += 10;
    }



}
