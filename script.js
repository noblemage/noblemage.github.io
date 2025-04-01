let isToggled = false; 
document.querySelector(".profile-picture").style.display = "hidden";

function flipCard() {
  if (isToggled) {
    document.getElementById("bio").innerHTML = "learning web development; python.";
    document.querySelector(".profile-picture").style.visibility = "hidden";
    document.getElementById("links").innerHTML = `
        <a style="font-size: 1.3rem;">⤷</a><a href="https://github.com/noblemage">github</a> <br>
        <a style="font-size: 1.3rem;">⤷</a><a href="https://instagram.com/nblj.ig">instagram</a> <br>
        <a style="font-size: 1.3rem;">⤷</a><a href="discordapp.com/users/880789514723950652">discord</a> <br>
    `
    isToggled = false;
  } else {
    document.getElementById("bio").innerHTML = "";
    document.querySelector(".profile-picture").style.visibility = "visible";
    document.getElementById("links").innerHTML = `
    building simple, minimal experiences.
    <ul>
        <li><a href="#">placeholder</a></li>
    </ul>
    `;
    isToggled = true;
  }
}
