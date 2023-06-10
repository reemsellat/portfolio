import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path="/portfolio" element={<Home></Home>}></Route>
</Routes>
</BrowserRouter>
    </div>
  )
 
}

export default App;
