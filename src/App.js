import 'bootstrap/dist/css/bootstrap.min.css';
// Make sure to place css after bootstrap
import './App.css';
import 'font-awesome/css/font-awesome.css'
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
