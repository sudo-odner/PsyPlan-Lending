import './App.css';
import './components/main.css'
import Header from './components/header/header';
import Small_Described from './components/small_described/small_described';


function App() {
  return (
    <div className="App">
        <div className='sd'>
            <Header></Header>
            <Small_Described></Small_Described>
        </div>
    </div>
  );
}

export default App;
