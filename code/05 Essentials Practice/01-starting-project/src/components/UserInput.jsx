export default function UserInput({ input, onInputChanged }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={input.initialInvestment}
            onChange={(e) =>
              onInputChanged("initialInvestment", e.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={input.annualInvestment}
            onChange={(e) => onInputChanged("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={input.expectedReturn}
            onChange={(e) => onInputChanged("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={input.duration}
            onChange={(e) => onInputChanged("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
