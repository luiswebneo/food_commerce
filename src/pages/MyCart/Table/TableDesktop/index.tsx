import { FaTrashAlt } from 'react-icons/fa'
import { currencyFormat } from "../../../../helpers/currencyFormat";
import { useCart } from "../../../../hooks/useCart";
import { Container } from "./styles";

import minusImg from '../../../../assets/circle-minus.svg'
import plusImg from '../../../../assets/circle-plus.svg'

export function TableDesktop() {
  const { cart, removeSnackFromCart } = useCart();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Lanche</th>
            <th>Qtd</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={`${item.snack}-${item.id}`}>
              <td>
                <img src={item.image} alt={item.name} />
              </td>
              <td>
                <h4>{item.name}</h4>
                <span>{currencyFormat(item.price)}</span>
              </td>
              <div>
                <button type="button" onClick={() => console.log(`decremetar snack`, item)}>
                    <img src={minusImg} alt="Remover quantidade" />
                </button>
                <span>{`{item.quantity}`.padStart(2, '0')}</span>
                <button type="button" onClick={() => console.log(`decremetar snack`, item)}>
                    <img src={plusImg} alt="Adicionar quantidade" />
                </button>
              </div>
              <td>
                <h5>{currencyFormat(item.subtotal)}</h5>
              </td>
              <td>
                <button type='button' onClick={() => removeSnackFromCart(item)}>
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
