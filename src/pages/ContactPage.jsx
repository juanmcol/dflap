import { Link } from "react-router-dom";

function ContactPage() {
  return (
    <>
      <header>
        <h1>Contact</h1>
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

export default ContactPage;