import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Ragister from './Ragister'
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <h1>Ecommerce Project</h1>
      <Routes>
        <Route path="/login" element={<Login/>}>
        </Route>
      </Routes>
      <Routes>
        <Route path="/add" element={<AddProduct/>}>
        </Route>
      </Routes>
      <Routes>
        <Route path="/update" element={<UpdateProduct/>}>
        </Route>
      </Routes>
      <Routes>
        <Route path="/Ragister" element={<Ragister/>}>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
