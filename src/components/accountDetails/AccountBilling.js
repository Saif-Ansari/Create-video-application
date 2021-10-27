import React from "react";
import { billingData } from "../../constants/userAccountData";
import invoiceImg from "../../assets/images/invoice.png";
const AccountBilling = () => {
  return (
    <div className="billingTable">
      <table>
        <thead>
          <tr>
            <th>ReferEnce ID</th>
            <th>DATE</th>
            <th>AMOUNT</th>
            <th>INVOICE</th>
          </tr>
        </thead>
        <tbody>
          {billingData.map(({ id, date, amount }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{date}</td>
              <td>{amount}</td>
              <td>
                <img src={invoiceImg} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountBilling;
