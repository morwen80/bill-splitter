

const splitting = () => {
  const total = parseInt(document.querySelector('#total').value)
  const people = document.querySelector('#people').value


  if(tipPercent.value.length > 0) {
    const tipPercent = parseInt(document.querySelector('#tipPercent').value)
    const totalWithTip = total + (tipPercent * total) / 100;
    document.querySelector('#perPerson').innerHTML = (totalWithTip / people).toFixed(2);
  }
    else if (tipCustom.value.length > 0) {
      const tipCustom = parseInt(document.querySelector('#tipCustom').value);
      document.querySelector('#perPerson').innerHTML = (total + tipCustom / people).toFixed(2);
  }
  else {
    const result = total / people;
    document.querySelector('#perPerson').innerHTML = result.toFixed(2);
  }
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
     switchBtn.innerHTML = "add a percentage of the total instead"
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
