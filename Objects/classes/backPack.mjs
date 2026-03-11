export class backPack {
    constructor(
        marks,
        size,
        vol,
        contain_led,
        ledOpen,
        strapLengthL,
        strapLengthR
    ){
        this.marks = marks;
        this.size = size;
        this.vol = vol;
        this.contain_led = contain_led;
        this.ledOpen = ledOpen;
        this.strapLengthL = strapLengthL;
        this.strapLengthR = strapLengthR;
    }
    toggleLed(ledStatus){
        this.ledOpen = ledStatus; 
    }
    newStrapLength(l,r){
        this.strapLengthL = l;
        this.strapLengthR = r;
    }
}
export default backPack;