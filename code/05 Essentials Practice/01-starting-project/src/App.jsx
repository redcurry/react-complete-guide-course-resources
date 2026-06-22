import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [investmentInput, setInvestmentInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 6.0,
    duration: 10,
  });

  function onInputChanged(inputId, newValue) {
    setInvestmentInput((prevInvestmentInput) => {
      const newInvestmentInput = {
        ...prevInvestmentInput,
        [inputId]: +newValue,
      };
      return newInvestmentInput;
    });
  }

  return (
    <>
      <Header />
      <main>
        <UserInput input={investmentInput} onInputChanged={onInputChanged} />
        <Results investmentInput={investmentInput} />
      </main>
    </>
  );
}

export default App;
