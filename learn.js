//News styling
const newsLink = document.getElementById('NewsID');
const newsDropDown = document.getElementById('newsDropdown');
newsLink.addEventListener('mouseover', function () {
    newsDropDown.style.display = 'block';
});

newsLink.addEventListener('mouseout', function () {
    newsDropDown.style.display = 'none';
});

//Courses styling
const devslink = document.getElementById('sft');
const devstext = document.getElementById('cardtext');
devslink.addEventListener('click', function () {
    devstext.style.display = 'flex';
    devstext1.style.display = 'none';
    devstext2.style.display = 'none';
    devstext3.style.display = 'none';
    devstext4.style.display = 'none';
});

//styling cardtext1
const devslink1 = document.getElementById('dt');
const devstext1 = document.getElementById('cardtext1');
devslink1.addEventListener('click', function () {

    devstext1.style.display = 'flex';
    devstext2.style.display = 'none';
    devstext3.style.display = 'none';
    devstext4.style.display = 'none';
    devstext.style.display = 'none';
});

//styling cardtext 2
const devslink2 = document.getElementById('ui');
const devstext2 = document.getElementById('cardtext2')
devslink2.addEventListener('click', function () {

    devstext2.style.display = 'flex';
    devstext3.style.display = 'none';
    devstext4.style.display = 'none';
    devstext.style.display = 'none';
    devstext1.style.display = 'none';

});
//styling card text 3
const devslink3 = document.getElementById('devops');
const devstext3 = document.getElementById('cardtext3')
devslink3.addEventListener('click', function () {

    devstext3.style.display = 'flex';
    devstext4.style.display = 'none';
    devstext.style.display = 'none';
    devstext1.style.display = 'none';
    devstext2.style.display = 'none';

});
//styling card text 4
const devslink4 = document.getElementById('cyber');
const devstext4 = document.getElementById('cardtext4')
devslink4.addEventListener('click', function () {
    
    devstext.style.display = 'none';
    devstext1.style.display = 'none';
    devstext2.style.display = 'none';
    devstext3.style.display = 'none';
    devstext4.style.display = 'flex';


});
