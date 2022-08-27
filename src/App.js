import './sass/App.sass';
import Header from './components/Header';
import Info from './components/Info';
import GetRequest from './components/GetRequest';

function App() {
   return (
      <div className="wrapper">
         <Header />
         <div className="container">
            <Info />
            <GetRequest />
         </div>

      </div>

   );
}

export default App;
