let is_running = true;

setTimeout(() => (is_running = false), 1);
process.nextTick(() => console.log('Next tick 1'));

function set_immediate_promice() {
    return new Promise((resolve, reject) => {
        setImmediate(() => resolve()); // brake the infinite loop
        // resolve(); // stay on infinite loop
    });
}

async function main() {
    while (is_running) {
        console.log('Still running...');
        await set_immediate_promice();
    }
}

main();
