import React, { useContext } from "react";
import { carritoContext } from "../../context/CartContext";

const Cart = () => {
  const { carrito, setCarrito } = useContext(carritoContext);

  const totalAPagar = () => {
    let total = 0;
    carrito.forEach((producto) => {
      total = total + producto.price * producto.quantity;
    });
    return total;
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <div className="container pt-3">
      <div className="row g-5">
        <h2>CheckOut</h2>
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="text-primary">Carrito</h4>
          <ul className="list-group mb-3">
            {carrito.map((producto) => {
              return (
                <li
                  className="list-group-item d-flex justify-content-between lh-sm"
                  key={producto.id}
                >
                  <div>
                    <h6 className="my-0">{producto.title}</h6>
                    <small className="text-muted">
                      Cantidad: {producto.quantity}
                    </small>
                  </div>
                  <span className="text-muted">
                    ${producto.price * producto.quantity}
                  </span>
                </li>
              );
            })}

            <li className="list-group-item d-flex justify-content-between mb-2">
              <span>Total (USD)</span>
              <strong>${totalAPagar()}</strong>
            </li>
            <button className="btn btn-primary" onClick={() => vaciarCarrito()}>
              Vaciar carrito
            </button>
          </ul>
        </div>
        <div className="col-md-7 col-lg-8">
          <form className="needs-validation was-validated" noValidate="">
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder=""
                  required=""
                ></input>
              </div>

              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder=""
                  required=""
                ></input>
              </div>

              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email <span className="text-muted">(Opcional)</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="ejemplo@ejemplo.com"
                ></input>
              </div>

              <div className="col-md-9">
                <label htmlFor="address" className="form-label">
                  Dirección
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Rivadavia 1234"
                  required=""
                ></input>
              </div>

              <div className="col-md-3">
                <label htmlFor="zip" className="form-label">
                  CP
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  placeholder=""
                  required=""
                ></input>
              </div>
            </div>

            <hr className="my-4" />

            <h4 className="mb-3">Método de pago</h4>

            <div className="my-3">
              <div className="form-check">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  required=""
                ></input>
                <label className="form-check-label" htmlFor="credit">
                  Tarjeta de crédito
                </label>
              </div>
              <div className="form-check">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  required=""
                ></input>
                <label className="form-check-label" htmlFor="debit">
                  Tarjeta de débito
                </label>
              </div>
            </div>

            <div className="row gy-3">
              <div className="col-md-6">
                <label htmlFor="cc-name" className="form-label">
                  Titular de tarjeta
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-name"
                  placeholder=""
                  required=""
                ></input>
                <small className="text-muted">
                  Nombre completo como figura en la tarjeta
                </small>
              </div>

              <div className="col-md-6">
                <label htmlFor="cc-number" className="form-label">
                  Número de tarjeta
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-number"
                  placeholder=""
                  required=""
                ></input>
              </div>

              <div className="col-md-3">
                <label htmlFor="cc-expiration" className="form-label">
                  Expiración
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-expiration"
                  placeholder=""
                  required=""
                ></input>
              </div>

              <div className="col-md-3">
                <label htmlFor="cc-cvv" className="form-label">
                  CVV
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-cvv"
                  placeholder=""
                  required=""
                ></input>
              </div>
            </div>

            <hr className="my-4" />

            <button className="w-100 btn btn-primary btn-lg mb-4">
              Comprar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cart;
