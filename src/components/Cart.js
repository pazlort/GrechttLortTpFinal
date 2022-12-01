import { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import Card from 'react-bootstrap/Card';

const Cart = () => {
  const {cartList, removeList, deleteItem, precioTotalPorItem, subtotalCompra, precioTotalCompra} = useContext(CartContext);

  return (
    <>
      <h3 className="titulo">TU CARRITO</h3>
      <Link to={`/`} ><Button variant="outline-primary">Seguir comprando</Button></Link>
      <Button variant="outline-primary" onClick={removeList}>Borrar todo</Button>

        {
          cartList.length === 0
          ? <h5>No hay productos en el carrito</h5>
          : cartList.map(item =>
            <Card className="card-cart" key={item.id}>
                <Card.Img src={item.images} className="img-cart" />
            <Card.Body>
               <Card.Title>{item.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{item.cantidadPedida} item(s) / {item.price} ARS. c/u</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">{precioTotalPorItem(item.id)} ARS.</Card.Subtitle>
            </Card.Body>
             <Button variant="outline-primary" className="delete-product" onClick={() => deleteItem(item.id)}>Borrar</Button>
          </Card>
          )
        }
        {
            cartList.length > 0 &&
          <Card>
          <Card.Header as="h5">RESUMEN DE SU COMPRA</Card.Header>
          <Card.Body>
            <Card.Text>Subtotal: {subtotalCompra()} ARS.</Card.Text>
            <Card.Text>Descuentos: 0 ARS.</Card.Text>
            <Card.Title>Total a pagar: {precioTotalCompra()} ARS.</Card.Title>
            <Button variant="outline-primary">Ir a pagar</Button>
          </Card.Body>
          </Card>
        }

    </>
  );
};

export default Cart;