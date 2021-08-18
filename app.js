// // // // update Product number // // // //

function updateProductNumber(product, isIncreasing){
    const productInput = document.getElementById( product+'-number')
    var productNumber = productInput.value

    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1
    }else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1
    }
    productInput.value = productNumber

    // update case total
    const productTotal = document.getElementById( product + '-total')

    if(product == 'case'){
        productTotal.innerText = productNumber * 59
    }else if(product == 'phone'){
        productTotal.innerText = productNumber * 1219
    }
}

// // // case plus // // //
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case',true)
})

// // // case minus // // //
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case')
})

// // // // // phone // // // // //

// // // phone plus // // //
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone' , true)
})

// // // phone minus // // //
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone')
})