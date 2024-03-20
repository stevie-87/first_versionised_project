// Event Listener starting the request to fetch for pokemon the second the page is visited
document.addEventListener('DOMContentLoaded', () => {
    const pokemonInput = document.getElementById('pokemonInput');
    const fetchBtn = document.getElementById('fetchPokemon');

    fetchBtn.addEventListener('click', () => {
        fetchThePoke(pokemonInput.value)
    })
})

// function to fetch the pokemon
function fetchThePoke(valueOfInputField) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${valueOfInputField.toLowerCase()}`)
        .then(response => response.json())
        .then(data => displayPokemon(data))
        .catch(error => {
            console.error('Pokemon Not Found:', error)
            alert('Pokemon does not Exist!', error)
        })
}

// function to display the pokemon
function displayPokemon(pokemon) {
    const display = document.getElementById('pokemon-display')
    display.innerHTML = `
        <div class = "text-center">
            <img src = ${pokemon.sprites.front_default}>
            <h3>${pokemon.name.toUpperCase()}</h3>
        </div
    `
}



//Parameters are simply containers for the value that will come in the future when we use the function
function test(PartyType, Participants, Amount, Fee) {
    // Combining the Parameters with text to make sense
    console.log("the party is a: ", PartyType);
    console.log("There are", Participants, "People invited to the party");
    console.log("We will need", Amount, "Pizzas's");
    console.log("The Entry Donation is: ", Fee, "Euros");
}

// Populating the parameters
test("Pizza Party", 8, 20, 5);

const contactForm = doocument.getElementById('contactForm');


contactForm.addEventListener('submit', (networkEvent) => {
    networkEvent.preventDefault();

    const serviceID = "service_xpmv8xq"
    const templateID = "template_nc96n9e";
    const piblicKEY = "-5_yixG_vJr8Qa0dJ";

    emailjs.sendForm(serviceID, templateID, contactForm, publicKey)
    .then(() => {
        Swal.fire({
            title: 'Success!',
            text: 'Successfuly sent the contact fotm',
            icon: 'success'
        }) 
    } )

})

.catch(error=> Swal.fire({
    title: 'error',
    text: 'Did not successfully send the contact form',
    icon: 'error'
}, console.log(error)
)








