import { Link } from 'react-router-dom';

import '../styles/AppPage.css';
import { Display } from '../features/display/display.jsx';
import { TextInput } from '../features/textInput/textInput.jsx';

function AppPage() {
  return (
    <>
      <header>
        <h1>DFLAP</h1>
        <p>a digital split-flap display</p>
        <p>*Now with Redux and Routing!*</p>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <div id="dflap">
          <TextInput/>
          <Display/>
        </div>
      </main>
      <footer>
      </footer>
    </>
  )
}

export default AppPage;