import './style.css';

const PACKAGE = require('./../../package.json');

export const defineElements: () => void = () => {
    // TODO: create custom element
    // customElements.define(name, constructor);
}

function createHeader(bodyElement: HTMLElement): HTMLElement {
    const headerElement = document.createElement('header');
    headerElement.style.display = 'flex';
    headerElement.style.margin = '10px';
    return headerElement;
}

function createFooter(): HTMLElement {
    const footerElememnt = document.createElement('footer');
    footerElememnt.textContent = `version ${PACKAGE.version}`;
    return footerElememnt;
}

function createBody(): HTMLElement {
    const bodyElement = document.createElement('div');
    bodyElement.style.flex = "1 1 auto";
    bodyElement.style.display = "flex";
    return bodyElement;
}

export const createElement: () => HTMLElement = () => {
    const mainElement = document.createElement('div');
    mainElement.style.display = 'flex';
    mainElement.style.flex = '1 1 auto';
    mainElement.style.flexDirection = 'column';
    mainElement.style.justifyContent = 'space-between';

    const body = createBody();
    mainElement.appendChild(createHeader(body));
    mainElement.appendChild(body);
    mainElement.appendChild(createFooter());

    return mainElement;
}
