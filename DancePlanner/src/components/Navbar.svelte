<script>
  window.onscroll = function() {myFunction()};

  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }
</script>


<div class="navbar">
  <ul>
    <a href="#"><img id="logo"src="DanceLogo.svg" alt="Logo" height=32px></a>
    <li><a href="https://t.me/Dance_Event_Planning_Bot" id="navbar-button">Telegram</a></li>
    <li><a href="#all-dances" id="navbar-button">Alle Tanzevents</a></li>
    <li><a href="#big-map" id="navbar-button">Karte</a></li>
    <div class="progress-container">
      <div class="progress-bar" id="myBar"></div>
    </div> 
</div>

<style>
  .navbar {
    overflow: hidden;
    top: 0;
    position: fixed;
    width: 100%;
    z-index: 100;
    background-color: #000000;
    } 
  ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      background-color: #000000;
    }    
  li {
      display: inline;
      display: block;
      float: right;
  }
  #navbar-button {
    display: inline-block;
    padding: 10px;
    color: white;
  }

  li a:hover {
    background-color: darkgray;
  }

  #logo{
    margin-left: 2em;
    margin-top: 5px;
    overflow: visible;
  }
.progress-container {
  width: 100%;
  height: 8px;
  background: #ccc;
}

.progress-bar {
  height: 8px;
  background: linear-gradient(90deg, rgba(149,65,131) 0%, rgba(191,166,227) 25%, rgba(125,185,241) 75%, rgba(68,109,137) 100%);
  width: 0%;
}
</style>