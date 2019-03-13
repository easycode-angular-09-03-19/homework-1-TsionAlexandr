abstract class Car {
    protected _mileage: number;
    protected _fuel: number;

    constructor(mileage: number, fuel: number) {
        this._mileage = mileage;
        this._fuel = fuel;
    }

    public abstract drive (value: number): void;

    public abstract refuel(): void;
        
    public abstract get fuel():number;

    public abstract get milege(): number;
    
}      
     
    
class Lamborghini extends Car {
    
    
    constructor(mileage: number, fuel:number) {
        super(mileage, fuel);
    }

    public drive(value: number): void {
        
        if (!value) {
            return console.log("Значение не пердано");
        }
        if(typeof value !== number) {
            return console.log("Передано неверное значение");
        
        this._mileage += value;
        this._fuel--;

        if (this._fuel == 0) {
            return console.log("Необходимо заправиться");
        }
    }


    public refuel(): void {
        this._fuel++;
    }

    public get mileage(): number {
        return this._mileage;
    }

    public get fuel(): number {
        return this._fuel;
    }

}
