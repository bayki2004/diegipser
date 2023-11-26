// script.js

document.addEventListener('DOMContentLoaded', function () {
    const mainListItems = document.querySelectorAll('.main-list > li');

    mainListItems.forEach(item => {
        item.addEventListener('click', function () {
            const sublist = this.querySelector('.sublist');

            // Close all other sublists
            mainListItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherSublist = otherItem.querySelector('.sublist');
                    if (otherSublist) {
                        otherSublist.style.display = 'none';
                    }
                }
            });

            // Toggle the visibility of the clicked sublist
            if (sublist) {
                sublist.style.display = (sublist.style.display === 'none' || sublist.style.display === '') ? 'block' : 'none';
            }
        });
    });
});
