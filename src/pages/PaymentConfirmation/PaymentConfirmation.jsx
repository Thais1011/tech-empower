import React, { useState } from "react";

const PaymentConfirmation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    paymentMethod: "boleto",
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Confirmação de Dados e Pagamento</h2>
      <form>
        <label>
          Nome:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Método de Pagamento:
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="boleto">Boleto</option>
            <option value="cartao">Cartão de Crédito</option>
          </select>
        </label>
        <br />

        {formData.paymentMethod === "cartao" && (
          <div>
            <label>
              Número do Cartão:
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
              />
            </label>
            <br />

            <label>
              Data de Expiração:
              <input
                type="text"
                name="cardExpiry"
                value={formData.cardExpiry}
                onChange={handleChange}
              />
            </label>
            <br />

            <label>
              CVC:
              <input
                type="text"
                name="cardCVC"
                value={formData.cardCVC}
                onChange={handleChange}
              />
            </label>
            <br />
          </div>
        )}

        <button type="submit">Confirmar Pagamento</button>
      </form>
    </div>
  );
};

export default PaymentConfirmation;
