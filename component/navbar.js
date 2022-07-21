function navbar(){
    return ` <div id="logo"><a href="./index.html">
    <img
      src="data:image/png;base64,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"
      alt="logo"
    /></a>
  </div>
  <div>
    <ul>
      <li><a href="#">TOOLS</a></li>
      <li><a href="#">PRICING</a></li>
      <li><a href="#">SOLUTION</a></li>
      <li><a href="#">PARTENERS</a></li>
      <li><a href="./Apps.html">APPS</a></li>
      <li><a href="#">BLOG</a></li>
      <li><a href="#">SUPPORT</a></li>
    </ul>
  </div>
  <div>
    <button><a href="#">START FOR FREE</a></button>
    <p>
      <a href="login.html"><i class="fa-solid fa-user"></i> LOG IN</a>
    </p>
    <p>
      <a href="#"> <i class="fa-solid fa-earth-asia"></i> EN</a>
    </p>
  </div>`
};

export default navbar;