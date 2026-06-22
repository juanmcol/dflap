import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <>
      <header>
        <h1>About Page</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default AboutPage;