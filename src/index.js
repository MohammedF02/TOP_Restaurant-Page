import createHomePage from "./homePage";
import createMenuPage from "./menuPage";
import createAboutPage from "./aboutPage";

const content = document.getElementById("content");
const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const aboutBtn = document.getElementById("aboutBtn");

const clearContent = () => {
    content.innerHTML = "";
};

const switchToHomePage = () => {
    clearContent();
    const homePage = createHomePage();
    content.appendChild(homePage);
};

const switchToMenuPage = () => {
    clearContent();
    const menuPage = createMenuPage();
    content.appendChild(menuPage);
};

const switchToAboutPage = () => {
    clearContent();
    const aboutPage = createAboutPage();
    content.appendChild(aboutPage);
};

homeBtn.addEventListener("click", switchToHomePage);
menuBtn.addEventListener("click", switchToMenuPage);
aboutBtn.addEventListener("click", switchToAboutPage);
