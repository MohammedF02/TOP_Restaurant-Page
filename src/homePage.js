const homePage = () => {
    const content = document.getElementById("content");

    const p = document.createElement("p");
    p.textContent = "Welcome to our restaurant page";

    content.appendChild(p);
};

export default homePage;
