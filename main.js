const btns = document.querySelectorAll(".categorybtn");
const menuItems = document.querySelectorAll(".menu-item");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const category = btn.getAttribute("data-category");
        menuItems.forEach((item) => {
            if (item.getAttribute("data-category") === category || category === "all") {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        });
    });
});