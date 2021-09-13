import './styles.css';
import AppState from './context/AppState';
import Navbar from './components/Navbar';

// Routes
import Routes from './components/routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <AppState>
            <Router>
                <Navbar />
                <Routes />
            </Router>
        </AppState>
    );
}

export default App;
