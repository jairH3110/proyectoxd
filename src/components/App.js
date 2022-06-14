import React, { Component } from 'react';
import CreateRaza from './Createraza';
import Header from './Header';
import RazaList from './RazaList';
import { Route, Routes } from 'react-router-dom';


/*class App extends Component {
  render() {
    return <CreateRaza />;
  }
}*/

const App = () => {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/raza" element={<RazaList/>} />
          <Route
            path="/create"
            element={<CreateRaza/>}
          />
        </Routes>
      </div>
    </div>
  );
};
export default App;