let sortedCountries = countries_data.sort()
let ekleme = 0
const btn = document.getElementById("button")
const title = document.querySelector(".total-pop")

// Bootstrap için tanımlan element
const card = document.getElementById("card")
card.classList.add("row", "row-cols-1", "row-cols-md-4", "g-4", "p-4")
const select = document.getElementById("select")

function calcWorldPop() {
    let toplam = 0
    sortedCountries.forEach(country => {
        toplam += country.population
    })
    return toplam
}
select.addEventListener("change", () => {
    ekleme = 0
})

btn.addEventListener("click", () => {

    if (ekleme < 1) {
        let sirala = select.value

        if (sirala == "population") {
            sortedCountries = countries_data.sort((a, b) => b.population - a.population)
        } else if (sirala == "name") {
            sortedCountries = countries_data.sort()
        }

        sortedCountries.forEach(country => {

            // Bootstrap için tanımlan element
            const card_col = document.createElement("div")
            card_col.classList.add("col")
            const card_h100 = document.createElement("div")
            card_h100.classList.add("card", "h-100")
            const card_flag = document.createElement("img")
            card_flag.classList.add("card-img-top")
            const card_body = document.createElement("div")
            card_body.classList.add("card-body")
            const card_title = document.createElement("h5")
            card_title.classList.add("card-title")
            const card_capital = document.createElement("h6")
            card_capital.classList.add("card-title")
            const card_pop = document.createElement("p")
            card_pop.classList.add("card-text")
            const card_text = document.createElement("p")
            card_text.classList.add("card-text")
            const card_footer = document.createElement("div")
            card_footer.classList.add("card-footer", "d-flex", "justify-content-center")
            const card_btn = document.createElement("a")
            card_btn.classList.add("btn", "btn-primary")

            let percent = parseFloat(((country.population / calcWorldPop()) * 100))
            let percent1

            if (percent >= 1) {
                percent1 = percent.toFixed(2)
            } else {
                percent1 = percent
            }

            // Bootstrap için tanımlan element
            card_title.innerHTML = country.name
            card_capital.innerHTML = country.capital
            card_flag.setAttribute("src", country.flag)
            card_pop.innerHTML = country.population
            card_text.textContent = `${country.name} Ülkesinin nüfüsunun Dünya nüfüsuna oranı: ${percent1}`
            card_btn.innerHTML = country.name
            card_btn.href = `https://www.google.com/search?q=${country.name}`
            card_btn.target = "_blank"
            card_btn.classList.add("btn", "btn-primary")

            percent >= 3 ? card_text.style.color = "red" : card_text.style.color = "green"

            title.textContent = `Toplamda ${sortedCountries.length} ülke var. toplam nüfus: ${calcWorldPop()}`

            // Bootstrap için tanımlan element
            card.appendChild(card_col)
            card_col.appendChild(card_h100)
            card_h100.appendChild(card_flag)
            card_h100.appendChild(card_body)
            card_body.appendChild(card_title)
            card_body.appendChild(card_capital)
            card_body.appendChild(card_pop)
            card_body.appendChild(card_text)
            card_h100.appendChild(card_footer)
            card_footer.appendChild(card_btn)
        })
    }
    ekleme++

})