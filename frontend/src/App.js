import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Chatpage from './Pages/Chatpage';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
    </BrowserRouter>
    </div>
  );
}

export default App;
