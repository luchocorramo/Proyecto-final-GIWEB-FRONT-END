class Cards extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = "<div>a</div>";
        this.style.backgroundColor = "blue";
    }
}

customElements.define("app-cards",Cards);