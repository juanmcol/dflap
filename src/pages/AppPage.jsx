import { Link } from 'react-router-dom';

import '../styles/AppPage.css';
import { Display } from '../features/display/display.jsx';
import { TextInput } from '../features/textInput/textInput.jsx';
import { Settings } from '../components/Settings.jsx';

function AppPage() {
  return (
    <>
      <header>
        <div id='info'>
          <h1>DFLAP</h1>
          <p>a digital split-flap display</p>
        </div>
        <h3 id="update-info">*Now with Redux and Routing!*</h3>
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
          <Settings/>
          <TextInput/>
          <Display/>
        </div>
      </main>
      <footer>
        <p>copyright juanmcol</p>
      </footer>
    </>
  )
}

export default AppPage;