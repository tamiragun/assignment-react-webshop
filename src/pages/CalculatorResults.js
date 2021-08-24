import React, { useMemo } from "react";
import { useLocation, useHistory } from "react-router";

const CalculatorResults = () => {
  // Get the search value from useLocation()
  const { search } = useLocation();
  //Get the parameters from the search value
  const queryParams = useMemo(() => {
    return new URLSearchParams(search);
  }, [search]);
  //Get the desired parameters from the parameters and save them
  const total = queryParams.get("total");
  const months = queryParams.get("months");
  //Calculate the amounts to pay and save them in variables
  const finalAmount = Math.round(calculateFinalAmount(total, months));
  const monthlyAmount = Math.round(finalAmount / months);

  // get the history object from useHistory()
  const history = useHistory();
  // create handler function for button click
  const goBack = () => {
    // Go back to the last visisted page
    history.goBack();
  };

  //Display the results
  return (
    <section className="calculator-results">
      <h2>Your monthly payment plan:</h2>
      <p>Total amount to pay: R{finalAmount}</p>
      <p>Monthly amount to pay: R{monthlyAmount}</p>
      <button className="back-button" onClick={goBack}>
        Go back
      </button>
    </section>
  );
};

export default CalculatorResults;

//Helper function to calculate the owed amount with interest
const calculateFinalAmount = (total, months) => {
  const interest = (total * 0.2 * months) / 12;
  //multiply by 1.0 to get an int/float
  const finalAmount = total * 1.0 + interest;
  return finalAmount;
};
