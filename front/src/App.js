// App.js
import React from "react";
import ExchangeComponent from "./components/ExchangeComponent";
import "./App.css"; // Import your dark theme CSS
import CurrencyComponent from "./components/CurrencyComponent";
import CoinData from "./components/CoinData";

function App() {
  return (
    <div className="dark-theme"> 
      <h1 className="text-2xl font-bold text-center py-4">Crypto App</h1>
      <ExchangeComponent />
      <CurrencyComponent />
      <CoinData/>
    </div>
  );
}

export default App;
