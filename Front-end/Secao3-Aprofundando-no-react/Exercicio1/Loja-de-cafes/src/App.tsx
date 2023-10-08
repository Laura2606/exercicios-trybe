
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CoffeeList from './pages/CoffeeList';
import Coffee from './pages/Coffee';
import NavBar from './components/NavBar';


function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/coffees" element={ <CoffeeList /> } />
      <Route path="/coffee" element={ <Coffee /> } />
    </Routes>
    </>
  )
}

export default App;


