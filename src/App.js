import './css/App.css';
import News from './component/pages/News';
import Home from './component/pages/Home';
import Ktta from './component/about/KTTA';
import Draws from './component/draws/Draws';
import Photos from './component/pages/Photos';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import Players from './component/pages/Players';
import Contact from './component/pages/Contact';
import { BrowserRouter, Route } from 'react-router-dom';
import OfficeBearers from './component/about/officebearers/OfficeBearers';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Route path="/ktta" component={Ktta} />
                <Route path="/news" component={News} />
                <Route path="/draws" component={Draws} />
                <Route exact path="/" component={Home} />
                <Route path="/photos" component={Photos} />
                <Route path="/players" component={Players} />
                <Route path="/contact" component={Contact} />
                <Route path="/officebearers" component={OfficeBearers} />
                <Footer text="" />
            </div>
        </BrowserRouter>
    );
};

export default App;
