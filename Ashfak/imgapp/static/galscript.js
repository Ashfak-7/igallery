gal.js

function openModal(element) {
            var modal = document.getElementById("modal");
            var modalImg = document.getElementById("modalImage");
            modal.style.display = "block";
            modalImg.src = element.querySelector("img").src;
}

function closeModal() {
            document.getElementById("modal").style.display = "none";
}