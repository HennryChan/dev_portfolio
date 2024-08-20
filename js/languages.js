/* Se encarga del cambio de idioma y del desplegue del menú */

const languages = document.getElementById('lenguage');
const listLanguage = document.getElementById('lenguages');
const langButtons = document.querySelectorAll("[data-language]");
const textsToChange = document.querySelectorAll("[data-section]");

// Toggle lista idiomas
languages.addEventListener('click',()=>{
    listLanguage.classList.toggle('toggle');
});

//Realiza el cambio de idioma
langButtons.forEach((button) => {
    button.addEventListener("click", () => {

        //Realiza el efecto de ocultar el menú despues del clic
        listLanguage.classList.toggle('toggle');        
        
        //Realiza el reoorrido y remplaza el idioma
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

