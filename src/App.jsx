import Forecast from './components/Forecast/Forecast';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
    return (
        <div className="bg-zinc-100 h-full flex flex-col">
            <Header />
            <Forecast />
            <Footer />
        </div>
    )
}

export default App
