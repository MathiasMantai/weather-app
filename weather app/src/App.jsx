import './App.css';
import Forecast from './components/Forecast/Forecast';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
    return (
        <div className="App bg-zinc-300">
            <Header />
            <Forecast />
            <Footer />
        </div>
    )
}

export default App
