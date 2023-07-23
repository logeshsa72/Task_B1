import {Routes ,Route} from "react-router-dom";
import RegisterPage from "./pages/Registerpage";
import Register from "./pages/Register";
function App() {
  return (
    <div className="App">
<Routes>
  <Route path ='/' element={<RegisterPage />}></Route>
  <Route path ='/Register' element={<Register />}></Route>

</Routes>
    </div>
  );
}

export default App;
