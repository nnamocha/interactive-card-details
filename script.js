document.addEventListener('DOMContentLoaded',()=>{

    form()
})

const form = ()=>{

    const cardNo = document.querySelector('.cardNo')
    const cardName = document.querySelector('.cardName')
    const cardMonth = document.querySelector('.mm')
    const cardYear = document.querySelector('.yy')
    const cvcCard = document.querySelector('.cvcCard')
    const nameValue = document.querySelector('#name')
    const numberValue = document.querySelector('#number')
    const monthValue = document.querySelector('#mm')
    const yearValue = document.querySelector('#yy')
    const cvcValue = document.querySelector('#cvc')
    const numberError = document.querySelector('.numberError')
    const NaNError = document.querySelector('.NaNError')
    const nameError = document.querySelector('.nameError')
    const expError = document.querySelector('.expError')
    const cvcError = document.querySelector('.cvcError')
    const confirmBtn = document.querySelector('.confirm')
    const form = document.querySelector('.form')
    const completed = document.querySelector('.completed')
    const continueBtn = document.querySelector('.continue')

    const updateCard = ()=>{
        setTimeout( ()=>{
            if(nameValue.value.trim()=== ''){
                cardName.textContent ='JANE APPLESEED'
            }
            else{
                cardName.textContent = nameValue.value
            }

            if(numberValue.value.trim() === ''){
                cardNo.textContent = '0000 0000 0000 0000';
            }
            else{
                cardNo.textContent = numberValue.value
            }
            if(cvcValue.value=== '') {
                cvcCard.textContent='000'
            }
            else{
                cvcCard.textContent= cvcValue.value
            }
            if(monthValue.value === '' ){
                cardMonth.textContent ='00'
            }
            else{
                cardMonth.textContent = monthValue.value
            }
            if(yearValue.value === ''){
                cardYear.textContent ='00'
            }
            else{
                cardYear.textContent = yearValue.value
            }
        updateCard()
        },50)


      confirmBtn.addEventListener('click', ()=>{
        let isComplete = true

        if(!nameValue.value){
            nameError.style.display='flex'
            nameValue.style.border='1.5px solid #f00'
        }
        else{
            nameError.style.display= 'none'
            nameValue.style.border='1.5px solid #acb4be'
        }
        if(!numberValue.value){
            numberError.style.display='flex'
            numberValue.style.border='1.5px solid #f00'
        }
        else{
            numberError.style.display='none'
            numberValue.style.border='1.5px solid #acb4be'
        }
        if(!cvcValue.value){
            cvcError.style.display='flex'
            cvcValue.style.border='1.5px solid #f00'
        }
        else{
            cvcError.style.display='none'
            cvcValue.style.border='1.5px solid #acb4be'
        }
        if(!yearValue.value){
            expError.style.display='flex'
            yearValue.style.border= '1.5px solid #f00'
        }
        else{
            expError.style.display = 'none'
            yearValue.style.border ='1.5px solid #acb4be'
        }
        if(!monthValue.value){
            expError.style.display='flex'
            monthValue.style.border= '1.5px solid #f00'
        }
        else{
            expError.style.display = 'none'
            monthValue.style.border ='1.5px solid #acb4be'
        }

        if(!monthValue.value || !yearValue.value || !cvcValue.value || !numberValue.value || !nameValue.value){
            isComplete = false
        }

        if(isComplete === true){
            form.style.display=' none'
            completed.style.display='flex'
        }


      })



    }
    updateCard()
}