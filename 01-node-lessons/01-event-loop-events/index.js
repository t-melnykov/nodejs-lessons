import fs from 'fs';
import dns from 'dns';


console.log("Program start");


const info = (text) => {
    console.log(text, performance.now());
}


// Timeouts
setTimeout(() => info("Timer 1"), 0);
setTimeout(() => info("Timer 2"), 10);


// Close events
fs.writeFile('./test.txt', 'Hello World!', (err) => {
    info("File written");
});

// Next tick
process.nextTick(() => {
    info("Next Tick 1");
});

// Intervals
let i = 0;
const int_id = setInterval(() => {
    info(`Interval 1 - ${i++}`)
    if (i > 5) {
        clearInterval(int_id);
    }
}, 1);

// I/O Events
dns.lookup('localhost', (err, address, family) => {
    info(`DNS lookup, ${address}, ${family}`);
    Promise.resolve().then(async () => {
        info("Promise from DNS");
    });
    process.nextTick(() => {
        info("Next Tick from DNS")
    });
});


// Promises
Promise.resolve().then(async () => {
    info("Promise 1");
});

// setImmediate (Check)
setImmediate(() => {
    info("Immediate 1")
});



console.log("Program end");