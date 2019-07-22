const splitting = () => {
  let total = parseInt(document.querySelector('#total').value);
  const people = parseInt(document.querySelector('#people').value);
  const tipPercent = document.querySelector('#tipPercent')

  if(tipPercent.value.length > 0) {
   let calcPercent = parseInt(tipPercent.value)
    const totalWithTip = total + (calcPercent * total) / 100;
    document.querySelector('#perPerson').innerHTML = (totalWithTip / people).toFixed(2);
  }

  else {
    const result = total / people;
    document.querySelector('#perPerson').innerHTML = result.toFixed(2);
  }
 }

const splitBtn = document.querySelector('#splitBtn')
  splitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    splitting()
})

document.querySelector('#resetBtn').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.insert').reset();
  tipCustom.disabled = false;
  tipPercent.disabled = false;
  document.querySelector('#perPerson').innerHTML = "0"
})

 document.querySelector('#addTip').addEventListener('click', (e) => {
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

 const disableCustomTip = () => {
   document.querySelector('#tipCustom').disabled = true
   document.querySelector('#tipPercent').disabled = false
 }

 const disablePercentTip = () => {
   document.querySelector('#tipPercent').disabled = true
   document.querySelector('#tipCustom').disabled = false
 }
