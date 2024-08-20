const languages = document.getElementById('lenguage');
const listLanguage = document.getElementById('lenguages');

// Toggle lista idiomas
languages.addEventListener('click',()=>{
    listLanguage.classList.toggle('toggle');
});



const langButtons = document.querySelectorAll("[data-language]");
const textsToChange = document.querySelectorAll("[data-section]");

langButtons.forEach((button) => {
    button.addEventListener("click", () => {
        fetch(`../languages/${button.dataset.language}.json`)
            .then(res => res.json())
            .then(data => {
                textsToChange.forEach((el) => {
                    const section = el.dataset.section;
                    const value = el.dataset.value;

                    el.innerHTML = data[section][value];
                })
            })
    })
})

