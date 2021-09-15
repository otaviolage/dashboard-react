// import { BrowserRouter as Router} from 'react-router-dom'
// import Routes from './routes/index';
// import "./app.css"
import Topbar from "./components/topbar/Topbar"
import Admin from "./pages/admin/Admin"
import { BrowserRouter as Router} from 'react-router-dom'
import Routes from './routes/index';

function App() {
  return (
    <body>
      <Router>
        <Routes/>
      </Router>
    </body>
  );
}

export default App;
