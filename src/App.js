//This application demonstrates basic react with redux
//The application is a simple car list with a search and total cost
//Features: data submission, list rendering, search, and total cost

import CarForm from './components/CarForm';
import CarList from './components/CarList';
import CarSearch from './components/CarSearch';
import CarValue from './components/CarValue';


function App() {
  return (
    <div className="container is-fluid">
        <CarForm/>
        <CarSearch/>
        <CarList/>
        <CarValue/>
    </div>
  );
}

export default App;