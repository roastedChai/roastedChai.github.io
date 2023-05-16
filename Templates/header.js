//CUSTOM ELEMENTS - Inherit from basic HTML elements (this case, we want to reuse HTML header)

class Header extends HTMLElement { //Creates class called Header, declares component 
  constructor() {
    super() //Calls the constructor of thhe super class (parent of children)
  }

  //Adds custom element to DOM
  connectedCallback() {
    this.innerHTML =
      `  
    <link rel="stylesheet" href="style.css">
    <header id = "navContainer">
    <img id = "chaiLogo" src="Assets/Logo/logo_text.png" alt="">
    <nav>
      <ul>
       <li><a href="index.html">Home</a></li>
       <li><a href="gallery.html">Gallery</a></li>
       <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
    </header>
    `;
  }
}
//Registers custom element
customElements.define('header-component', Header);
