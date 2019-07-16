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
  tipCustom.disabled = false;
  tipPercent.disabled = false;
  document.querySelector('#perPerson').innerHTML = "0"
})

 document.querySelector('#addTip').addEventListener('click', function(e){
   e.preventDefault();
   showTipButtons();
   selectTip();
})


 const showTipButtons = () => {
   const tipBtns = document.querySelector('#tipButtons')
   if(tipBtns.style.display === "block") {
     tipBtns.style.display = "none"
   } else {
     tipBtns.style.display = "block"
   }
 }

const selectTip = () => {
  const tipPercent = document.querySelector('#tipPercent');
  const tipCustom = document.querySelector('#tipCustom');

  tipPercent.addEventListener('click', function(e) {
    e.preventDefault();
    tipCustom.disabled = true;
  });

  tipCustom.addEventListener('click', function(e) {
    e.preventDefault();
    tipPercent.disabled = true;
  });
 }
