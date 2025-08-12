const loginForm = document.getElementById('loginForm');
const storeDataDiv = document.getElementById('storeData');


const loginHistory = JSON.parse(localStorage.getItem("loginHistory")) || [];


function renderHistory(){
    if(loginHistory.length === 0){
        storeDataDiv.innerHtml = "<p>No login history available.</p>";
        return
    }

    storeDataDiv.innerHTML = "<strong>Login History:</strong> <br>" +
        


}






loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value.trim()
    const password = document.getElementById('password').value.trim()




})


























































