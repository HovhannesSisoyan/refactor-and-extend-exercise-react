import { useState } from "react";

const validationCredentials = {
  "new york": { years: [[1917, 1997]] },
  "california": { years: [[1998, 2006], [1900, 1910]] },
}

function App() {
  const [year, setYear] = useState('');
  const [state, setState] = useState('');
  const [isValid, setIsValid] = useState();

  const isValidHome = ({ state, year }) => {

    if (isNaN(year)) {
      return false;
    }

    const validState = validationCredentials[state];

    if (validState) {
      const { years } = validState;
      const yearInt = parseInt(year);

      const isYearInInterval = years.some(([from, to]) => (yearInt >= from && yearInt <= to) ? true : false);

      if (isYearInInterval) {
        return true;
      }
    }
    return false;
  };

    return (
      <div className="App">
        <h2>Home Approval System</h2>
        <h3>Current status: {isValid ? "Approved Home" : "Unapproved"}</h3>
        <span>Please enter your home information below.</span>
        <br />
        <label>State:</label>
        <input type="text" name="state" onChange={({ target: { value } }) => setState(value)} />
        <br />
        <label>Year:</label>
        <input type="text" name="year" onChange={({ target: { value } }) => setYear(value)} />
        <br />
        <button onClick={() => setIsValid(isValidHome({ state, year }))}>Validate</button>
      </div>
    );
}

export default App;
