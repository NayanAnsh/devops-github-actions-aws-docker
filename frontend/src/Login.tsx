import axios from 'axios';
import './css/Login.css';

function Login() {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
  
    // Get the form values
    const username = e.target.username.value;
    const password = e.target.password.value;
    
    try {
   //
      // Post the username and password to the backend
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/secrect`, { username, password });
       
      // Check the response and display the success message
      if (response.data.success) {
        alert(response.data.message);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form" action="#" method="post">
        <h2>Login</h2>
        <input type="text" name="username" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
        <div className="options">
          <label>
            <input type="checkbox" name="remember" />
            Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
