

const form = document.querySelector("form")

form.addEventListener('submit', function (e) {
    // Specially use in form it stops the default behaviour of browswer. Page doesn't reload 
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")

    // lets make some condition 
    if (height === '' || height < 0 || isNaN(height)) {
        results.textContent = `Please try a Valid height ${height}`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.textContent = `Please try a Valid weight ${weight}`;
    }
    else{
        let bmiValue = (weight / ((height * height) / 10000))
        let bmi = bmiValue.toFixed(2)

        // show results
        if (bmiValue < 18.6) {
            results.innerHTML = `<span>${bmi} Under Weight</span>`;
        }
        else if (bmiValue > 18.6 && bmiValue < 24.9) {
            results.innerHTML = `<span>${bmi}</span> Normal Range`;
        }
        else{
            results.innerHTML = `<span>${bmi}</span> Over weight`;
        }
    }

})