const aboutPage = () => {
    const content = document.getElementById("content");

    const p1 = document.createElement("p");
    p1.textContent =
        "Welcome to out restaurant, serving delectable dishes since 2010.";

    const p2 = document.createElement("p");
    p2.textContent = "Contact Us: 123-456-7890";

    const p3 = document.createElement("p");
    p3.textContent = "Location: Lorem, Ipsum";

    content.appendChild(p1);
    content.appendChild(p2);
    content.appendChild(p3);
};

export default aboutPage;
