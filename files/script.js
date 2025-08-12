const regForm = document.getElementById('regForm');
const storeDataDiv = document.getElementById('storeData');
const clearBTN = document.getElementById('clearHistory');

const regHistory = JSON.parse(localStorage.getItem("regHistory")) || [];


function renderHistory(){
    if(regHistory.length === 0){
        storeDataDiv.innerHTML = "<p>No Registration History Yet....</p>";

        clearBTN.style.display = "none"
        return
    }

    storeDataDiv.innerHTML = "<strong>Registration History:</strong><br>——————————<br>" +
        regHistory.map((entry, index) => 
            `${index+1}. <strong>${entry.name}</strong> --- ${entry.email}`
        ).join('<br>');

        clearBTN.style.display = "block"

}

renderHistory()

regForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value.trim()
    const name = document.getElementById('name').value.trim()

    if(email && name){
        const entry = { email, name}
        regHistory.push(entry);

        localStorage.setItem("regHistory", JSON.stringify(regHistory))
        renderHistory()


        alert(`Welcome, ${name}`)
        regForm.reset();
    }
})




clearBTN.addEventListener('click', () => {
    localStorage.removeItem("regHistory")
    regHistory.length = 0
    renderHistory()
})


