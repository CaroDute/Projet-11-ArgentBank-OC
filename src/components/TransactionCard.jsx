/* eslint-disable react/prop-types */
function TransactionCard({ transactions }) {
  return (
    <div>
      {transactions.map((transaction, index) => (
        <section key={index} className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">{transaction.title}</h3>
            <p className="account-amount">{transaction.solde}</p>
            <p className="account-amount-description">
              {transaction.description}
            </p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">{transaction.text}</button>
          </div>
        </section>
      ))}
    </div>
  );
}

export default TransactionCard;
