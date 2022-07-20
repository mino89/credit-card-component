import { html, css, LitElement, } from 'lit';

import Validate from './utils/Validation';

import './CreditCardPreview.js'

export class CreditCard extends LitElement {

  static get styles() {
    return css`
      .error:invalid{border: 1px solid red}
    `
  }
  static get properties() {
    return {
      card: { type: Object },
      color: { type: String },
      flipped: { type: Boolean }
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
    this.flipped = false
  }

  updated() {
    this.shadowRoot.querySelector('credit-card-preview').requestUpdate()
  }
  
  render() {
    return html`
      <credit-card-preview .card="${this.card}" .flipped="${this.flipped}" color="${this.color}"></credit-card-preview>
      <form 
      @submit="${this._submitEventHandler}" 
      novalidate>
        <input name="number" 
        .value="${this.card.number}"
        minlength="14"
        maxlength="16" 
        pattern="^[0-9]*$"
        @input="${this._validateCardHandler}" 
        required>
        <input name="month" 
        .value="${this.card.month}"
        minlength="2"
        maxlength="2"
        pattern="^[0-9]*$" 
        @input="${this._inputHandler}"
        required>
        <input name="year" .value="${this.card.year}" 
        minlength="2"
        maxlength="2"
        pattern="^[0-9]*$"
        @input="${this._inputHandler}" 
        required>
        <input 
        name="cvc" 
        .value="${this.card.cvc}" 
        minlength="3"
        maxlength="3"
        pattern="^[0-9]*$"
        @input="${this._inputHandler}" 
        @focus="${this.flipCard}"
        @blur="${this.flipCard}"
        required>
        <button type="submit"> submit </button>
      </form>
    `;
  }
  flipCard(e){
    this.flipped = !this.flipped
  }
  _inputHandler(e) {
    this.card[e.target.name] = e.target.value
    this.requestUpdate()
  }
  _validateCardHandler(e){
    Validate.validateCardLength(e)
    this._inputHandler(e)
  }
  _submitEventHandler(e) {
    if(Validate.validateData(e))
    this.dispatchEvent(new CustomEvent('card-data', {
        composed: true,
        bubbles: true,
        detail: this.card
    }));
  }
}


window.customElements.define('credit-card', CreditCard);
