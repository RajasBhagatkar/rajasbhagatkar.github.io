// this is question not project realated 
class ParkingLot{
    constructor(slots){
        this.slots = slots;
        this.arr = Array(this.slots).fill(null)
    }

    park(carId){
        for (let index = 0; index < this.arr.length; index++) {
            if(this.arr[index] === null){
                this.arr[index] = carId;
                return true;
            }
            
        }
        return false;
    }

    getSlots(){
        const output = [];
        for (let index = 0; index < this.arr.length; index++) {
            const element = this.arr[index];
            
        }
        return output
    }
    remove(carId){
        for (let index = 0; index < this.arr.length; index++) {
            if(this.arr[index]==carId){
                this.arr[index] = undefined;
                return true;
            }
        }
        return false;

    }

}

const paking = new ParkingLot(6);
paking.park(1);
paking.park(2);
paking.park(3);
paking.park(4);
paking.park(5);
console.log(paking.park(6))
console.log(paking.park(7))
paking.remove(6)
console.log(paking.park(7))

console.log(paking.getSlots())