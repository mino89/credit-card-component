import { LitElement, html, css } from "lit";
import "./CreditCard.js";
import Inputs from './inputs.scss'
// import hljs from 'highlight.js';
// import GitHub from '../node_modules/highlight.js/styles/github-dark-dimmed.css'
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
        // GitHub,
        Inputs,
        css`
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
        .card{
            margin-top: 17.5vh;
            min-width: 25vw;
        }
        .badge{
            display: flex;
            justify-content: center;
        }
        .settings{
            justify-content: space-between
        }
        h3{
            color: white;
        }
        .color-container{
            display:flex;
        }
        pre {
            white-space: pre-line;
            background-color: #2b2a2a;
            color: white;
            padding: 1rem;
            margin-bottom: 0;
            width: calc(100% - 2rem);
        }
    `]
    render() {
        return html` 
        <div class="grid">
            <div class="column settings">
                <form class="card" @input=${this.handleInput}>
                    <fieldset>
                        <h1>${`<credit-card>`}</h1>
                        <h2>Customize your component</h2>
                    </fieldset>
                    <fieldset>
                        <input type="text" name="cardHint" placeholder="custom card hint">
                    </fieldset>
                    <fieldset>
                        <input type="text" name="monthHint" placeholder="custom month hint">
                    </fieldset>
                    <fieldset>
                        <input type="text" name="yearHint" placeholder="custom year hint">
                    </fieldset>
                    <fieldset>
                        <input type="text" name="cvcHint"  placeholder="custom cvc hint">
                    </fieldset>
                    <fieldset class="color-container">
                        <label>Change Color</label>
                        <input type="color" name="color" .value="${this.color}" @input="${this.changeColorHandler}" id="colorPicker">
                    </fieldset>
                    <a class="badge" href="https://github.com/mino89/credit-card-component">
                        <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&amp;logo=github&amp;logoColor=white" alt="github-link">
                    </a>  
                </form>
                <pre><code>${this.renderPreviewProps()}</code></pre>
            </div>
            <div class="column" style="background:${this.color}">
                <h3>Watch in action</h3>
                <credit-card id="credit-card"
                    .color="${this.color}">
                </credit-card>
            </div>
        </div>
        `
    }

    // updateHighlight(){
        
    //         hljs.highlightElement(this.shadowRoot.querySelector('pre code'));
     
    // }

    firstUpdated() {
        this.shadowRoot.querySelectorAll('input').forEach(el => {
            this.cardHintsBackup[el.name] = this.shadowRoot.querySelector('credit-card')[el.name]
        })
        // this.updateHighlight()
    }
    updated() {
        this.shadowRoot.querySelector('credit-card').requestUpdate()
    }

    renderPreviewProps() {
        console.log()
        const values = [
            `<credit-card \n`,
            `color="${this.color}"> \n`,
            `</credit-card>\n`
        ]
        Object.values(this.previewProps).forEach(value => values.splice(1, 0, value + '\n'))
        let string = values.join('').toString()
        console.log(string)
        return string
    }

    handleInput(e) {
        const card = this.shadowRoot.querySelector('credit-card')
        const target = e.target
        const preview = this.previewProps
        if (target.value) {
            card[target.name] = target.value
            if(target.name != 'color') preview[target.name] = `${target.name}="${target.value}"`
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