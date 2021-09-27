
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import University from './components/University/University';


function App() {
  return (
    <div className="mx-5">
      <Header />
      <University />
      <Footer />
    </div>
  );
}

export default App;
