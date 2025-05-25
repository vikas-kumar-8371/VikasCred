document.addEventListener("DOMContentLoaded", function() {
    console.log("Welcome to Vikas' Portfolio!");

    // Add hover effect on certificate items
    let certItems = document.querySelectorAll(".cert-item");
    certItems.forEach(item => {
        item.addEventListener("mouseover", function() {
            this.style.backgroundColor = "#ccc";
        });

        item.addEventListener("mouseout", function() {
            this.style.backgroundColor = "#ddd";
        });

        item.addEventListener("click", function() {
            alert("Opening certificate: " + this.textContent);
        });
    });
});