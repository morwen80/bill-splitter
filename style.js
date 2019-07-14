

const splitting = () => {
  const total = document.querySelector('#total').value
  const people = document.querySelector('#people').value
  // if PERCENTAGE is present {calcolo}
  // else if CUSTOM is present {calcolo}
  //else   const result = total / people

  if(tipPercent.value.length > 0) {
    addPercentageToTotal()
  }

  else {
    const result = total / people;
    document.querySelector('#perPerson').innerHTML = result.toFixed(2);
  }
 }

const addPercentageToTotal = () => {
  const tipPercent = parseInt(document.querySelector('#tipPercent').value)
  const total = parseInt(document.querySelector('#total').value)
  const totalWithTip = total + (tipPercent * total) / 100
  const people = document.querySelector('#people').value
  // const result = total + tipToAdd
  document.querySelector('#perPerson').innerHTML = (totalWithTip / people).toFixed(2);
}

const btn = document.querySelector('#submit')
btn.addEventListener('click', function(e) {
  e.preventDefault();
  splitting()
})


 const switchTip = () => {
   const tipPercent = document.querySelector('#tipPercent');
   const tipCustom = document.querySelector('#tipCustom');
   const switchBtn = document.querySelector('#switchTip')

   if(tipPercent.style.display = "none") {
     tipPercent.style.display = "none";
     tipCustom.style.display = "block";
     switchBtn.innerHTML = "percentage?"
   }
   // else {
   //   tipCustom.style.display = "none";
   //   tipPercent.style.display = "block";
   //   switchBtn.innerHTML = "prefer a custom tip?"
   // }
 }

 document.querySelector('#switchTip').addEventListener('click', function(e){
   e.preventDefault();
   switchTip();
 })
