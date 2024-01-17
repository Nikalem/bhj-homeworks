const loader = document.querySelector("#loader");
const items = document.querySelector("#items");

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.responseType = "json";
xhr.send();

xhr.addEventListener("readystatechange", function() {
    if(xhr.readyState === xhr.DONE && xhr.status === 200) {
        const valute = this.response.response.Valute;
    
        for(let i in valute) {
            const charCode = valute[i].CharCode;
            const value = valute[i].Value;

            items.insertAdjacentHTML("beforeend",
            `<div class="item">
            <div class="item__code">${charCode}</div>
            <div class="item__value">${value}</div>
            <div class="item__currency">руб.</div>
            </div>`
        );}
    loader.classList.remove("loader_active");
    } 
})