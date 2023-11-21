import Cards from './Component/Cards';
import './App.css';
import reviews from './data';


function App() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <Cards reviews = {reviews}/>
    </div>
  );
}

export default App;
