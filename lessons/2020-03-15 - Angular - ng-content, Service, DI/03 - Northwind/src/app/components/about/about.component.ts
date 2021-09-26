import { Component, OnInit } from '@angular/core';
import { MathService } from 'src/app/services/math.service';
import { CalcService } from 'src/app/services/calc.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    // providers: [MathService] // צור אובייקט מהמחלקת השירות הזו אך ורק עבור הקומפוננט הזה
})
export class AboutComponent implements OnInit {

    // private myMathService: MathService;
    // private myCalcService: CalcService
    // constructor(myMathService: MathService, myCalcService: CalcService) {
    //     this.myMathService = myMathService;
    //     this.myCalcService = myCalcService;
    // }

    // קיצור לקוד הנ"ל
    constructor(private myMathService: MathService, private myCalcService: CalcService) { }

    ngOnInit(): void {
    }

    public testMathService(): void {
        const grades = [90, 80, 89, 87, 95];
        const avg = this.myMathService.getAverage(grades);
        alert("Average: " + avg);
    }

    public testCalcService(): void {
        const addResult = this.myCalcService.add(10, 20);
        const subResult = this.myCalcService.sub(10, 20);
        const mulResult = this.myCalcService.mul(10, 20);
        const divResult = this.myCalcService.div(10, 20);
        alert(
`10 + 20 = ${addResult}
10 - 20 = ${subResult}
10 * 20 = ${mulResult}
10 / 20 = ${divResult}`);
    }

}
