import './styles.css';
import './scssStyles.scss';
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
                <div id='stars-container'>
                    <div id='stars'></div>
                    <div id='stars2'></div>
                    <div id='stars3'></div>
                </div>
                <Routes />
            </Router>
        </AppState>
    );
}

export default App;
