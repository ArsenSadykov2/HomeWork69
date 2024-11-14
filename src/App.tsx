import './App.css'
import Counter from "./containers/Counter/Counter.tsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowSerialInfo from "./containers/Counter/showSerialInfo.tsx";

const App = () => {

  return (
      <>
          <Router>
              <div className="container">
                  <Counter/>
                  <Routes>
                      <Route path="/shows/:id" element={<ShowSerialInfo/>}/>
                  </Routes>
              </div>
          </Router>
      </>
  )
};

export default App
