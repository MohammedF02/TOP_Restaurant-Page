const menuPage = () => {
    const content = document.getElementById("content");
    const foodList = document.createElement("ul");

    const foods = ["Pizza", "Burger", "Salad", "Sushi", "Pasta"];

    foods.forEach((food) => {
        const listItem = document.createElement("li");
        listItem.textContent = food;
        foodList.appendChild(listItem);
    });

    content.appendChild(foodList);
};

export default menuPage;
