import './styles.css';
import AppState from './context/AppState';
import Navbar from './components/Navbar';
import Search from './components/Search';
import ProfileHeader from './components/ProfileHeader';

function App() {
    return (
        <AppState>
            <Navbar />
            <Search />
            <ProfileHeader />
        </AppState>
    );
}

export default App;
