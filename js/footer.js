document.addEventListener('DOMContentLoaded', function() {
    var yearElement = document.getElementById('currentYear');
    var currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
});