import './styles.css';
import AppState from './context/AppState';
import Search from './components/Search';

function App() {
    return (
        <AppState>
            <Search />
        </AppState>
    );
}

export default App;
