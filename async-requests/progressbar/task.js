const progress = document.querySelector("#progress");
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    const formData = new FormData(form);
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
    xhr.upload.addEventListener("progress", (e) => {
        progress.value = (e.loaded / e.total).toFixed(2);
    })
    xhr.send(formData);
})