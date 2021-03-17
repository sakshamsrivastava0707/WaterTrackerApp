const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')


  const updateBigCup = () => {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;

    //depending on no.of cups filled , show the percentage upto which it is filled
    if(fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCups / totalCups * 330}px`;

        percentage.innerText = `${fullCups / totalCups * 100}%`;
    }

    //depending on how much main cup is filled , choose the remaining liters without the styles
    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`;
    }
}

updateBigCup();


  const highlightCups = (idx) => {
   
    // if last cup is full and is clicked , decreament the index ,basicall used for logic to 
    // to unhighlight the cup which is clicked again 
    if (idx===7 && smallCups[idx].classList.contains("full")) idx--;


    else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--;
    }
    // logic , when cup is clicked , the previous cup gets filled or get removes
    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    })

    updateBigCup();
}

// if any cup is clicked 
smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx));
})



