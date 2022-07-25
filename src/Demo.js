import { LitElement, html } from "lit";
import "./CreditCard.js";

export class Demo extends LitElement {
    static get properties() {
        return {
          color: { type: String, attribute:false }
        }
      }
    constructor(){
        super();
        this.color = '#32a4dc'
    }

    render() {
        return html` 
            ${this.color}
            <input type="color" .value="${this.color}" @input="${this.changeColorHandler}"  id="colorPicker">
            <credit-card id="credit-card" title="title" .color="${this.color}">
            </credit-card>
        `
    }

    updated(){
        this.shadowRoot.querySelector('credit-card').requestUpdate()
    }

    changeColorHandler(e){
        this.color = e.target.value
        this.requestUpdate()
    }
}


window.customElements.define('demo-view', Demo);