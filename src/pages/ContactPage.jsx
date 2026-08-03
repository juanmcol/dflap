import { Link } from "react-router-dom";

function ContactPage() {
  return (
    <>
      <header>
        <h1>Contact</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>Name: Juan Colina</h2>
        <h3>github: juanmcol</h3>
        <div id="bio">
          <></>
        </div>
      </main>
      <footer>
        <p>copyright juanmcol</p>
      </footer>
    </>
  )
}

export default ContactPage;