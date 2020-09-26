/*jshint esversion: 6 */

const dogs = [
    {name: 'Roscoe'},
    {name: 'Sammy'},
    {name: 'Pookie'},
    {name: 'Artichokes'},
];

main();

function main(){
    displayDogs();
}

function displayDogs(){
    for(let dog of dogs){
        addDogToUI(dog);
    }
}

function addDogToUI(dog){
    const dogUI = document.createElement('a');
    dogUI.className = 'list-group-item';
    dogUI.innerText = dog.name;

    document.getElementById('dogs-list').appendChild(dogUI);
}