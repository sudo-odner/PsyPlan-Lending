import './App.css';
import Header from './components/header/header';
import Face from './components/face/face';
import Problem from './components/problem/problem';
import Description from './components/description/description';
import Through from './components/through/through';
import Goal from './components/goal/goal';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Face></Face>
      <Problem></Problem>
      <Description></Description>
      <Through></Through>
      <Goal></Goal>
    </div>
  );
}

export default App;
