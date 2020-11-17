import 'bootstrap/dist/css/bootstrap.min.css';
// Make sure to place css after bootstrap
import './App.css';
import 'font-awesome/css/font-awesome.css'
import Header from './components/Header';

// import Categories from './components/Categories';
// import Process from './components/Process';
// import Browse from './components/Browse';
// import Money from './components/Money';
// import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      {/* <Categories />
      <Process />
      <Browse />
      <Money />
      <Footer /> */}
    </div>
  );
}

export default App;
