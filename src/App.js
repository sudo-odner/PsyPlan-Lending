import './App.css';
import './components/main.css'
import Header from './components/header/header';
import Problem from './components/problem/problem';
import Description from './components/description/description';
import Small_Description from './components/small_description/small_description';
import Through from './components/through/through';
import Goal from './components/goal/goal';
import About_US from './components/about-us/about-us';


function App() {
  return (
    <div className="App">
        <div className='sd'>
            <Header></Header>
            <Small_Description></Small_Description>
            <Problem></Problem>
            <Description></Description>
            <Through></Through>
            <Goal></Goal>
            <About_US></About_US>
        </div>
    </div>
  );
}

export default App;
