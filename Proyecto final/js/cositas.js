class Cards extends HTMLElement{
    constructor(){
        super();
        this.nomIl = this.getAttribute('nomIl');
        this.imag = this.getAttribute('imag');
        this.linkIl = this.getAttribute('linkIl');
    }


    getTemplate(){
        const template = document.createElement("template");
        template.innerHTML =  `
        <a href="${this.linkIl}" class="cards">

            <img class="imagen" src="${this.imag}"> 
            <div class="tittleCard">Ilustración: ${this.nomIl}</div>
        
        </a>
        `;
        
        return template;
    }

    connectedCallback(){
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }
}

customElements.define("app-cards",Cards);