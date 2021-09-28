export class ShoeModel {
    public constructor(
        public code?:string,
        public model?:string,
        public price?:number,
        public imageFile?:string | File
    ){}
}