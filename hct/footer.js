class Footer extends HTMLElement {
  constructor() {
    super();
  }


  connectedCallback() {
    this.innerHTML = `

 <div class="pagelayer-copyright">
	<a href="/index.html">&#169; 2020/2021 Highland Central Stake </a><div style="float:right"><a href="/index.html">This website is not affiliated with the Church of Jesus Christ of Latter-day Saints.</a></div>
	
 </div>
 </br></br></br></br></br></br></br></br></br></br>
 <!--<p align="right"><cr><script language="javascript">var today = new Date();document.write(today);</script></cr></p>-->


    `;
  }
}

customElements.define('footer-component', Footer);