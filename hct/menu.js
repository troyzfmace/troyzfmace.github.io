class Menu extends HTMLElement {
  constructor() {
    super();
  }


  connectedCallback() {
    this.innerHTML = `
<!--START MENU-->
<div class="header" id="myHeader">
  <div>
  <div class="note"><center>The information contained on this webside may contain privileged and confidential information. It is intended only for technology purposes and may not be reused, republished, or reprinted without consent.</center></div>
    <h2><a href="/index.html">Highland Central Stake Technology</a></h2>
  </div> 

 <div class="navbar">
  <div class="dropdown">
	<a class="dropbtnH" href="index.html" target="_self" style="line-height: 150%;">&nbsp;&nbsp;&nbsp;&nbsp;HOME&nbsp;&nbsp;&nbsp;&nbsp;</a>
  </div> 
  
  <div class="dropdown">
	<a class="dropbtnT" href="tech.html" target="_self" style="line-height: 150%;">&nbsp;&nbsp;&nbsp;&nbsp;TECH&nbsp;&nbsp;&nbsp;&nbsp;</a>
  </div>

<!--  <div class="dropdown">
	<a class="dropbtnV" href="http://mywebcast.churchofjesuschrist.org/highlandutahcentralstake" style="line-height: 150%;">&nbsp;Broadcasts&nbsp;</a>
  </div>-->

  <div class="dropdown">
    <a class="dropbtnD" href="docs.html" target="_self"style="line-height: 150%;">&nbsp;&nbsp;&nbsp;&nbsp;DOCs&nbsp;&nbsp;&nbsp;&nbsp;</a>
  </div>
  
  <div class="dropdown">
	<a class="dropbtnW" href="attendance.html" target="_self" style="line-height: 150%;">&nbsp;Bishoprics&nbsp;</a>
  </div>
  
  <div class="dropdown">
	<a class="dropbtnA" href="about.html" target="_self" style="line-height: 150%;">&nbsp;&nbsp;&nbsp;ABOUT&nbsp;&nbsp;&nbsp;</a>
  </div>
  <div class="dropdown" style="min-width: 50%; ">&nbsp;</div>
 </div class="navbar">   
</div class="header">
	<script>
	//copy buttons;
	function myCopyFunctionE() {
	  var copyText = document.getElementById("myEInput");
	  copyText.select();
	  document.execCommand("copy");
	//  alert("Copied the text: " + copyText.value);
	}
	function myCopyFunctionB() {
	  var copyText = document.getElementById("myBInput");
	  copyText.select();
	  document.execCommand("copy");
	//  alert("Copied the text: " + copyText.value);
	}
	</script>
	<script type="text/javascript">
	//button sounds
	a=new AudioContext()
	function beep(vol, freq, duration){
	 v=a.createOscillator()
	 u=a.createGain()
	 v.connect(u)
	 v.frequency.value=freq
	 v.type="square"
	 u.connect(a.destination)
	 u.gain.value=vol*0.01
	 v.start(a.currentTime)
	 v.stop(a.currentTime+duration*0.001)
	}
	</script>
	<script>
	//scroll header- not used
	window.onscroll = function() {myFunction()};
	 var header = document.getElementById("myHeader");
	 var sticky = header.offsetTop;
	function myFunction() {
	  if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
	  } else {
		header.classList.remove("sticky");
	  }
	}
	</script>

<!--END MENU-->
    `;
  }
}

customElements.define('menu-component', Menu);