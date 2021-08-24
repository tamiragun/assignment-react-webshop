import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

const CalculatorForm = () => {
  // get the history object here
  const history = useHistory();

  // obtaining user input from the form
  const totalInputRef = useRef();
  const monthsInputRef = useRef();

  // handler function for form submit
  const onCalculateHandler = (e) => {
    e.preventDefault();

    //convert user input into a url parameter
    const totalQuery = new URLSearchParams({
      total: totalInputRef.current.value,
    }).toString();

    const monthsQuery = new URLSearchParams({
      months: monthsInputRef.current.value,
    }).toString();

    // imperatively redirect to the page with those parameters
    history.push(`/results?${totalQuery}&${monthsQuery}`);
  };

  return (
    <section className="calculator-page">
      <h2>Prefer to pay in instalments?</h2>
      {/*call handler upon submit*/}
      <form onSubmit={onCalculateHandler} className="calculator-form">
        <label htmlFor="total">Shopping total:</label> <br></br>
        {/*get user input*/}
        <input
          type="number"
          className="total"
          id="total"
          ref={totalInputRef}
          min="1"
          required
        />
        <br></br>
        <br></br>
        <label htmlFor="months">Number of months:</label>
        <br></br>
        {/*get user input*/}
        <input
          type="number"
          className="months"
          id="months"
          ref={monthsInputRef}
          min="1"
          required
        />
        <br></br>
        <br></br>
        <input type="submit" value="Calculate" className="calculate-button" />
      </form>
    </section>
  );
};

export default CalculatorForm;
