

const splitting = () => {
  let total = parseInt(document.querySelector('#total').value)
  const people = parseInt(document.querySelector('#people').value)


  if(tipPercent.value.length > 0) {
    const tipPercent = parseInt(document.querySelector('#tipPercent').value)
    const totalWithTip = total + (tipPercent * total) / 100;
    document.querySelector('#perPerson').innerHTML = (totalWithTip / people).toFixed(2);
  }
    else if (tipCustom.value.length > 0) {
      const tipCustom = parseInt(document.querySelector('#tipCustom').value);
      total = total + tipCustom
      document.querySelector('#perPerson').innerHTML = (total / people).toFixed(2);
  }
  else {
    const result = total / people;
    document.querySelector('#perPerson').innerHTML = result.toFixed(2);
  }
 }


const splitBtn = document.querySelector('#splitBtn')
  splitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    splitting()
})

document.querySelector('#resetBtn').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.insert').reset();
  document.querySelector('#perPerson').innerHTML = "0"
})

 const switchTip = () => {
   const tipPercent = document.querySelector('#tipPercent');
   const tipCustom = document.querySelector('#tipCustom');
   const switchBtn = document.querySelector('#switchTip')

   if(tipPercent.style.display = "block") {
     tipPercent.style.display = "none";
     tipCustom.style.display = "block";
     switchBtn.innerHTML = "add a percentage of the total instead"
   }
   else {
     tipCustom.style.display = "none";
     tipPercent.style.display = "block";
     switchBtn.innerHTML = "prefer a custom tip?"
   }

 }

 document.querySelector('#switchTip').addEventListener('click', function(e){
   e.preventDefault();
   switchTip();
 })
