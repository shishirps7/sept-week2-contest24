let x = document.querySelector("#email");
            let y = document.querySelector("#pass");
            let z = document.querySelector("#formm");
            let successMessage = document.querySelector(".inp2");
            let emailMessage = document.querySelector(".inp1");
            let count=0

            z.addEventListener("submit", onSubmit);

            function onSubmit(e) {
                e.preventDefault();
                
                // Clear previous messages
                successMessage.textContent = '';
                x.classList.remove('error');
                y.classList.remove('error');

                // Email validation
                const email = x.value;
                if (email.length <= 3 || !email.includes('@') || !email.includes('a')) {
                    x.classList.add('error');
                    emailMessage.textContent = 'Email must be more than 3 characters, contain @, and include an a.';
                    emailMessage.style.color = 'red';
                    count++
                    return;
                }

                // Password validation
                const password = y.value;
                if (password.length <= 9) {
                    y.classList.add('error');
                    successMessage.textContent = 'Password must be more than 8 characters.';
                    successMessage.style.color = 'red';
                    return;
                }

                // If both validations pass
                emailMessage.textContent=""
                successMessage.textContent = 'All good to go';
                successMessage.style.color = 'green';
            }
