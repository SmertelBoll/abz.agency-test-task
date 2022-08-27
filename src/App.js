import './sass/App.sass';
import Header from './components/Header';
import Info from './components/Info';

function App() {
   return (
      <div className="wrapper">
         <div className="container">
            <Header />
            <Info />
         </div>

      </div>

   );
}

export default App;
