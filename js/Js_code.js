//js for Gallary (filter) 

//All
var all = document.getElementById('all');

//lawn
var lawn = document.getElementById('lawn');

//garden
var garden = document.getElementById('garden');

//planting
var plant = document.getElementById('plant');

//item
var item1 = document.getElementById('item1');
var item2 = document.getElementById('item2');
var item3 = document.getElementById('item3');
var item4 = document.getElementById('item4');
var item5 = document.getElementById('item5');
var item6 = document.getElementById('item6');
var item7 = document.getElementById('item7');
var item8 = document.getElementById('item8');
var item9 = document.getElementById('item9');

//functions 

function All() {
    item1.style.display ='';
    item2.style.display ='';
    item3.style.display ='';
    item4.style.display ='';
    item5.style.display ='';
    item6.style.display ='';
    item7.style.display ='';
    item8.style.display ='';
    item9.style.display ='';

    all.classList.add("active");
    lawn.classList.remove("active");
    garden.classList.remove("active");
    plant.classList.remove("active");
}

function Lawn() {
    item1.style.display ='';
    item2.style.display ='none';
    item3.style.display ='';
    item4.style.display ='none';
    item5.style.display ='none';
    item6.style.display ='';
    item7.style.display ='none';
    item8.style.display ='';
    item9.style.display ='none';

    all.classList.remove("active");
    lawn.classList.add("active");
    garden.classList.remove("active");
    plant.classList.remove("active");
}

function Garden() {
    item1.style.display ='none';
    item2.style.display ='';
    item3.style.display ='none';
    item4.style.display ='none';
    item5.style.display ='';
    item6.style.display ='none';
    item7.style.display ='none';
    item8.style.display ='none';
    item9.style.display ='';

    all.classList.remove("active");
    lawn.classList.remove("active");
    garden.classList.add("active");
    plant.classList.remove("active");

}

function Planting() {
    item1.style.display ='none';
    item2.style.display ='none';
    item3.style.display ='none';
    item4.style.display ='';
    item5.style.display ='none';
    item6.style.display ='none';
    item7.style.display ='';
    item8.style.display ='none';
    item9.style.display ='none';

    all.classList.remov("active");
    lawn.classList.remove("active");
    garden.classList.remove("active");
    plant.classList.add("active");
}