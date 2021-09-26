import './App.css';
import Header from './components/Header/Header';
import PeopleContainer from './components/PeopleContainer/PeopleContainer';

function App() {
  return (
    <div className="App">
      {/* this is heade componenets  */}
      <Header></Header>
      {/* this is people data components */}
      <PeopleContainer></PeopleContainer>
    </div>
  );
}

export default App;
