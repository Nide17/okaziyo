import 'bootstrap/dist/css/bootstrap.min.css';
// Make sure to place css after bootstrap
import './App.css';
import Header from './components/Header';
import Categories from './components/Categories';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Categories />
    </div>
  );
}

export default App;
