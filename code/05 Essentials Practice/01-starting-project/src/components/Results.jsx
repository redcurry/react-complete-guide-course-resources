import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ investmentInput }) {
  const isValidInput = investmentInput.duration > 0;

  if (!isValidInput) {
    return <p className="center">Please enter valid input.</p>;
  }

  const annualData = calculateInvestmentResults(investmentInput);
  const initialInvestment =
    annualData[0].valueEndOfYear -
    annualData[0].interest -
    annualData[0].annualInvestment;

  return (
    <table id="result">
      {}
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((annualRow) => {
          const totalInterest =
            annualRow.valueEndOfYear -
            annualRow.annualInvestment * annualRow.year -
            initialInvestment;
          const totalAmountInvested = annualRow.valueEndOfYear - totalInterest;
          return (
            <tr key={annualRow.year}>
              <td>{annualRow.year}</td>
              <td>{formatter.format(annualRow.valueEndOfYear)}</td>
              <td>{formatter.format(annualRow.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
