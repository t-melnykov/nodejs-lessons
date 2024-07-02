let is_running = true;

setTimeout(() => is_running = false, 10);

while (is_running) {
    console.log('Still running...');
}

