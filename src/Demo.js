import { LitElement, html, css } from "lit";

import "./CreditCard.js";


export class Demo extends LitElement {
    static get properties() {
        return {
            color: { type: String, attribute: false },
            previewProps: { type: Array, state: true }
        }
    }
    constructor() {
        super();
        this.color = '#32a4dc'
        this.cardHintsBackup = {}
        this.previewProps = {

        }
    }
    static styles = [
        css`
        @import url("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/default.min.css");
        .grid{
            display: grid;
            grid-template-columns: 1fr 1fr;
            min-height: 100vh
        }

        .column{
            align-items: center;
            justify-content: center;
            display: flex;
            flex-direction: column;
        }
        pre {
            white-space: pre-line;
        }
    `]

    render() {
        return html` 
        <div class="grid">
            <div class="column">
                <form @input=${this.handleInput}>
                    <fieldset>
                        <input type="text" id="cardHint" name="cardHint" placeholder="custom card hint">
                    </fieldset>
                    <fieldset>
                        <input type="text" id="monthHint" name="monthHint" placeholder="custom month hint">
                    </fieldset>
                    <fieldset>
                        <input type="text" id="yearHint" name="yearHint" placeholder="custom year hint">
                    </fieldset>
                    <fieldset>
                        <input type="text" id="cvcHint" name="cvcHint"  placeholder="custom cvc hint">
                    </fieldset>
                    <fieldset>
                        <input type="color" .value="${this.color}" @input="${this.changeColorHandler}" id="colorPicker">
                    </fieldset>
                </form>
                <pre><code class="language-html">${this.renderPreviewProps()}</code></pre>
            </div>
            <div class="column" style="background:${this.color}">
                <credit-card id="credit-card"
                    .color="${this.color}">
                </credit-card>
            </div>
        </div>
        `
    }



    updated() {
        this.shadowRoot.querySelector('credit-card').requestUpdate()
    }

    renderPreviewProps() {
        const values = [
            `<credit-card \n`,
            `color="${this.color}"> \n`,
            `</credit-card>\n`
        ]
        Object.values(this.previewProps).forEach(value => values.splice(1, 0, value + '\n'))
        console.log(values)
        return values
    }
    firstUpdated() {
        this.shadowRoot.querySelectorAll('input').forEach(el => {
            this.cardHintsBackup[el.name] = this.shadowRoot.querySelector('credit-card')[el.name]
        })
    }

    handleInput(e) {
        const card = this.shadowRoot.querySelector('credit-card')
        const target = e.target
        const preview = this.previewProps
        if (target.value) {
            card[target.name] = target.value
            if(target.name != 'color')preview[target.name] = `${target.name}="${target.value}"`
        } else {
            card[target.name] = this.cardHintsBackup[target.name]
            delete preview[target.name]
        }
        this.requestUpdate()
    }

    changeColorHandler(e) {
        this.color = e.target.value
        this.requestUpdate()
    }
}


window.customElements.define('demo-view', Demo);