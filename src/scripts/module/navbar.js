const menuDropdown = () => {
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', () => {
        const nav = document.getElementById("myTopnav");
        if (nav.className === "topnav") {
          nav.className += " responsive";
        } else {
          nav.className = "topnav";
        }
    })
}
export default menuDropdown