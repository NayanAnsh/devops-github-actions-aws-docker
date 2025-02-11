import { Link } from 'react-router'
import './css/App.css'

function App() {

  return (
    <>
      <div className="container">
    <h1>Welcome!</h1>
    <p>
      We're delighted to have you here. Explore the page and enjoy your stay.
      Your journey begins now.
    </p>
    <Link to="/login" className="btn">Login</Link>
  </div>
    </>
  )
}

export default App
