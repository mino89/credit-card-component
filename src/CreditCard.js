import { html, css, LitElement, } from 'lit';

import Validate from './utils/Validation';

import './CreditCardPreview.js'
const validate = new Validate()
export class CreditCard extends LitElement {

  static get styles() {
    return css`
      .error input:invalid{border: 1px solid red}

    `
  }
  static get properties() {
    return {
      card: { type: Object, attribute:true },
      color: { type: String },
      flipped: { type: Boolean },
      cardHint: { name: 'card-hint', type: String },
      monthHint: { name: 'month-hint', type: String },
      yearHint: { name: 'year-hint', type: String },
      cvcHint: { name: 'cvc-hint', type: String }
    }
  }
  constructor(
  ) {
    super();
    this.card = {
      number: '',
      year: '',
      month: '',
      cvc: '',
    }
    this.errors = validate.getErrors()
    this.flipped = false
    this.cardHint = "Your card number format is wrong"
    this.monthHint = "Your month format is wrong"
    this.yearHint = "Your year format is wrong"
    this.cvcHint = "Your cvc format is wrong"
  }
  render() {
    return html`
      <credit-card-preview  .card="${this.card}" .flipped="${this.flipped}" color="${this.color}"></credit-card-preview>
      <form 
      @input="${this.inputHandler}" 
      @submit="${this.submitEventHandler}" 
      novalidate>
        <fieldset>
          <input name="number" 
          .value="${this.card.number}"
          minlength="14"
          maxlength="16" 
          pattern="^[0-9]*$"
          @blur="${this.validateCardHandler}" 
          aria-describedby="cardHint"
          required>
          <p ?hidden=${!this.errors.includes('number')} class="hint" id="cardHint">${this.cardHint}</p>
        </fieldset>
        <fieldset>
          <input name="month" 
          .value="${this.card.month}"
          maxlength="2"
          pattern="^[0-9]{2}$" 
          @blur="${this.checkSingle}" 
          aria-describedby="monthHint"
          required>
          <p ?hidden=${!this.errors.includes('month')} class="hint" id="monthHint">${this.monthHint}</p>
        </fieldset>
        <fieldset>
          <input name="year" 
          .value="${this.card.year}" 
          maxlength="2"
          pattern="^[0-9]{2}$" 
          aria-describedby="yearHint"
          @blur="${this.checkSingle}" 
          required>
          <p ?hidden=${!this.errors.includes('year')}  class="hint" id="yearHint">${this.yearHint}</p>
        </fieldset>
        <fieldset>
          <input 
          name="cvc" 
          .value="${this.card.cvc}" 
          maxlength="3"
          pattern="^[0-9]{3}$" 
          @focus="${this.flipCard}"
          @blur="${this.flipCard}"
          aria-describedby="cvcHint"
          required>
          <p ?hidden=${!this.errors.includes('cvc')} class="hint" id="cvcHint">${this.cvcHint}</p>
        </fieldset>
        <button type="submit"> submit </button>
      </form>
    `;
  }

  updated() {
    this.shadowRoot.querySelector('credit-card-preview').requestUpdate()
  }

  flipCard(e) {
    this.checkSingle(e)
    this.flipped = !this.flipped
  }

  checkSingle(e) {
    validate.checkField(e.target)
    this.requestUpdate()
  }

  inputHandler(e) {
    this.card[e.target.name] = e.target.value
    this.requestUpdate()
  }

  validateCardHandler(e) {
    validate.validateCardLength(e)
    this.inputHandler(e)
  }

  resetCard() {
    Object.keys(this.card).forEach(el => this.card[el] = "")
  }

  submitEventHandler(e) {
    if (validate.validateData(e)) {
      this.dispatchEvent(new CustomEvent('card-data', {
        composed: true,
        bubbles: true,
        detail: this.card
      }));
      this.resetCard()
      e.target.reset()
    }
    this.requestUpdate()
  }
}


window.customElements.define('credit-card', CreditCard);
