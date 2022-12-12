class Counter{
    constructor() {
        this.counter = 0;
    }

    increase(runIftTimes){
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 == 0){
            runIftTimes(this.counter);
        }
    }
}

const coolCounter = new Counter();
function printSomething(num){
    console.log(`${num} yo!`);
}
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);