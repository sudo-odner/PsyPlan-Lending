import './App.css';
import Face from './components/face/face';
import Header from './components/header/header';
import Problem from './components/problem/problem';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Face></Face>
      <Problem></Problem>
    </div>
  );
}

export default App;
