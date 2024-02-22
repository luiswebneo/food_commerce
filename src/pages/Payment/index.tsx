import { Head } from "../../components/Head";
import { PayOrder } from "../../components/OderCloseAction/PayOrder";
import { OrderHeader } from "../../components/OrderHeader";
import { Container, Inner, Form } from "./styles";

export default function Payment() {
  return (
    <Container>
      <Head title="Pagamento" />
      <OrderHeader />
      <Inner>
        <Form>
          <h4>Informações pessoais</h4>

          <div className="field">
            <label htmlFor="full-name">Nome e Sobrenome</label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              autoComplete="name"
            />
          </div>

          <div className="grouped">
            <div className="field">
              <label htmlFor="full-name">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
              />
            </div>

            <div className="field">
              <label htmlFor="full-name">Celular</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                autoComplete="phone"
              />
            </div>
            <div className="field">
              <label htmlFor="document">CPF / CNPJ</label>
              <input type="text" id="document" name="document" />
            </div>
          </div>
          <h4>Endereço de entrega</h4>

          <div className="field">
            <label htmlFor="zipcode">CEP</label>
            <input
              type="text"
              id="zipcode"
              name="zipcode"
              autoComplete="postal-code"
              style={{ width: "120px" }}
            />
          </div>

          <div className="field">
            <label htmlFor="street">Endereço</label>
            <input type="text" id="street" name="street" />
          </div>

          <div className="field">
            <label htmlFor="number">Número</label>
            <input type="text" id="number" name="number" />
          </div>

          <div className="field">
            <label htmlFor="complement">Complemento</label>
            <input type="text" id="complement" name="complement" />
          </div>

          <div className="grouped">
            <div className="field">
              <label htmlFor="neighbordhood">Bairo</label>
              <input type="text" id="neighborhood" name="nighbordhood" />
            </div>
            <div className="field">
              <label htmlFor="city">Cidade</label>
              <input type="text" id="city" name="city" />
            </div>

            <div className="field">
              <label htmlFor="state">Estado</label>
              <select id="state" name="state">
                <option value="">Selecione</option>
                <option value="AC">Acre</option>
                <option value="Al">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceara</option>
                <option value="ES">Bahia</option>
                <option value="GO">Ceará</option>
                <option value="MA">Espirito Santo</option>
                <option value="MT">Goiás</option>
                <option value="MS">Maranhão</option>
                <option value="MG">Mato Grosso</option>
                <option value="PA">Mato Grosso do Sul</option>
                <option value="PB">Minas Gerais</option>
                <option value="PR">Pará</option>
                <option value="PE">Paraiba</option>
                <option value="PI">Parana</option>
                <option value="RJ">Pernanbuco</option>
                <option value="RN">Piaui</option>
                <option value="RS">Rio de Janeiro</option>
                <option value="RO">Rio Grande do Norte</option>
                <option value="RR">Rio Grande do Sul</option>
                <option value="SC">Rondônia</option>
                <option value="SP">Roraima</option>
                <option value="SE">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantis</option>
                <option value="DF">Destrito Federal</option>
              </select>
            </div>
          </div>

          <h4>Pagamento</h4>

          <div className="field">
            <label htmlFor="credit-card-number">Número do Cartão</label>
            <input
              type="text"
              id="credit-card-number"
              name="credit-card-number"
              autoComplete="cc-number"
            />
          </div>

          <div className="field">
            <label htmlFor="credit-card-hold-name">
              Nome impresso no Cartão
            </label>
            <input
              type="text"
              id="credit-card-hold-name"
              name="credit-card-holder-name"
              autoComplete="cc-name"
            />
          </div>
          <div className="grouped">
            <div className="field">
              <label htmlFor="credit-card-expiration">Validade (MM/AA)</label>
              <input
                type="text"
                id="credit-card-expiration"
                name="credit-card-expiration"
                autoComplete="cc-exp"
              />
            </div>
            <div className="field">
              <label htmlFor="credit-card-code">Codigo de segurança (CW)</label>
              <input
                type="text"
                id="credit-card-code"
                name="credit-card-code"
                autoComplete="cc-csc"
              />
            </div>
          </div>
        </Form>
        <PayOrder />
      </Inner>
    </Container>
  );
}
