document.getElementById('iconMore').addEventListener('click', function() {
    document.getElementById('custom').style.visibility = 'visible';
});

document.getElementById('closeCustom').addEventListener('click', function() {
    document.getElementById('custom').style.visibility = 'hidden';
});

document.querySelector('#combobox-sort .combobox-item').addEventListener('click', function() {
    document.querySelector('#combobox-sort .combobox-result').style.visibility = 'visible';
});

document.querySelectorAll('#combobox-sort .combobox-result-item').forEach(el => el.addEventListener('click', function(event) {
    const seleted = event.target.getAttribute('label');
    document.querySelector('#combobox-sort .combobox-selected').innerHTML = seleted;
    document.querySelector('#combobox-sort .combobox-result').style.visibility = 'hidden';
}));




var menu_navbar = document.querySelectorAll("#dropdown > li");

menu_navbar.forEach((el, i) => {
    el.addEventListener('click', function(){
        var menu = document.querySelectorAll("#dropdown > li > ul");
        for (var j = 0;j < menu.length;j++){
            menu[j].style.display = "none";
        }
        var currentMenu = el.querySelector("ul").style.display = 'inline-block';
    });
});

