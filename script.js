let count = 1;

        function updateDisplay() {
            document.getElementById('count').textContent = `Your Current Count is: ${count}`;
        }

        function increment() {
            count++;
            document.getElementById('error').textContent = ''; // Clear error message
            updateDisplay();
        }

        function decrement() {
            if (count > 0) {
                count--;
                document.getElementById('error').textContent = ''; // Clear error message
            } else {
                document.getElementById('error').textContent = 'Error: Cannot go below 0';
            }
            updateDisplay();
        }

        function clearCount() {
            count = 0;
            document.getElementById('error').textContent = ''; // Clear error message
            updateDisplay();
        }

        updateDisplay();