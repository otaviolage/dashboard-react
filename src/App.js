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
