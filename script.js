//Toggle search input
const searchIcon=document.getElementById('searchIcon');
const headerSearchForm=document.getElementById('headerSearchForm');
const searchInput=document.getElementById('searchInput');

function toggleSearchBar(){
    searchIcon.classList.toggle('hide');
    headerSearchForm.classList.toggle('hide');
    searchInput.focus();
}

searchIcon.addEventListener('click',toggleSearchBar);

searchInput.addEventListener('blur',toggleSearchBar);