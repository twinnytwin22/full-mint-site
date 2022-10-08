import { useState } from 'react';
import './App.css';
import Minter from './Minter';
import NavBar from './NavBar';

function App() {
  const [accounts, setAccounts] = useState([]);
  return (
    <div className="App">
    <NavBar accounts={accounts} setAccounts={setAccounts} />
    <Minter accounts={accounts} setAccounts={setAccounts} />
    </div>
  );
}

export default App;
