import { html, css, LitElement, } from 'lit';
import Style from './styles.scss'
import { darken, lighten, transparentize } from 'color2k';
import CardType from './utils/CardType';
import Format from './utils/Format';
export class CreditCardPreview extends LitElement {
    static get properties() {
        return {
            card: { type: Object, attribute: false },
            color: { type: String }
        }
    }
    constructor(
    ) {
        super();
        this.card = {}
        this.flipped = false
    }

    static styles = [Style, css`
        .card-preview-front {
        background: var(--bg-color);
  
        color: var(--bg-color-text);
        text-shadow: 1px 1px 1px  var(--bg-color-shadow);
        }
        .card-preview-back{
            background: var(--bg-color-dark);
        }
        .card-band{
            background: var(--bg-color-deep-dark);
        }
        .card-cvc{
            background: var(--bg-color-light);
        }
        .card-preview-front,
        .card-preview-back {
            box-shadow: 0 4px 8px 0 var(--bg-color-shadow);
        }
        .card-logo {
            background:  var(--bg-color-transparent-light)
        }
    `]

    updated() {
        console.log(this.flipped)
        this.style = ""
        this.updateColors()
    }


    render() {
        const type = CardType.getImg(this.card?.number)
        return html`
        ${this.flipped}
        <div class="card-preview ${this.flipped ? 'flipped' : ''}">
            <div class="card-preview-inner">
                <div class="card-preview-front">
                    <div class="card-num">${Format.cardFormat(this.card?.number) || '#### #### #### ####'}</div>
                    <div class="card-exp">
                        <div>
                            <em>
                            <b>VALID</b>
                            <b>THRU</b>
                            </em>
                        </div>
                        ${this.card?.month || '##'}/${this.card?.year || '##'}
                    </div>
                    <div class="card-logo">
                        <img src="${type.url}" alt="${type.name}"/>
                    </div>
                </div>
                <div class="card-preview-back">
                    <div class="card-band"></div>
                    <div class="card-cvc">${this.card?.cvc || '###'}</div>
                </div>
            </div>
        </div>
        `;
    }

    updateColors() {
        const colors = {
            '--bg-color': this.color,
            '--bg-color-dark': darken(this.color, 0.1),
            '--bg-color-light': lighten(this.color, 0.7),
            '--bg-color-transparent-light': transparentize(lighten(this.color, 0.7), 0.7),
            '--bg-color-deep-dark': darken(this.color, 0.2),
            '--bg-color-text': lighten(this.color, 0.6),
            '--bg-color-shadow': darken(transparentize(this.color, 0.6), 0.5)
        }
        Object.entries(colors).forEach((el) => this.style.setProperty(el[0], el[1]))
    }

    


}

window.customElements.define('credit-card-preview', CreditCardPreview);