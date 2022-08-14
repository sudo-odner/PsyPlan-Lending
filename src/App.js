import './App.css';
import Header from './components/header/header';
import Face from './components/face/face';
import Problem from './components/problem/problem';
import Description from './components/description/description';
import Through from './components/through/through';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Face></Face>
      <Problem></Problem>
      <Description></Description>
      <Through></Through>
    </div>
  );
}

export default App;
