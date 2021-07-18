class Footer extends HTMLElement {
  constructor() {
    super();
  }


  connectedCallback() {
    this.innerHTML = `

 <div class="pagelayer-copyright">
	<a href="/index.html">&#169; 2021 Troy Mace </a><div style="float:right"><a href="/index.html">7/18/21 8:38am</a></div>
	
 </div>

 <!--<p align="right"><cr><script language="javascript">var today = new Date();document.write(today);</script></cr></p>-->


    `;
  }
}

customElements.define('footer-component', Footer);