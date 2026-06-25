const form = document.querySelector('form');

form.addEventListener('submit',function(el){
    el.preventDefault();
    let height = parseInt(document.querySelector('#height').value)
    let weight = parseInt(document.querySelector('#weight').value)
    let result = document.querySelector('#results')

    if(height==="" || height<0 || isNaN(height)){
        result.innerHTML = `please give valid height ${height}`
    }
    else if(weight==="" || weight<0 || isNaN(weight)){
        result.innerHTML = `please give valid weight ${weight}`
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        //result
        result.innerHTML = `<span> your bmi is = ${bmi}</span>`
        result.style.marginTop="30px";
        result.style.marginLeft="70px";
    }
});