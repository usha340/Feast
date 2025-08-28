

document.getElementById("loginForm").addEventListener("submit", async function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      try {
        const response = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
          alert("Login successful!");
          localStorage.setItem("token", data.token); // Store JWT token
          window.location.href = "dashboard.html"; // Redirect to a new page
        } else {
          alert(data.message || "Login failed.");
        }
      } catch (err) {
        alert("Server error. Try again later.");
        console.error(err);
      }
    });
