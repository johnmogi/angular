import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root" // צור אובייקט אחד ויחיד ממחלקת השירות הזו עבור כל האתר
})
export class MathService {
    public getAverage(arr: number[]): number {
        let sum = 0;
        for(const item of arr) {
            sum += item;
        }
        return sum / arr.length;
    }
}
