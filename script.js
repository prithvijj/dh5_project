/** References:
 * 1. https://www.youtube.com/watch?v=YeFzkC2awTM&t=863s
 *
 */

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  var removeBagItems = document.getElementsByClassName("btn-danger");
  //console.log(removeBagItems);
  for (var i = 0; i < removeBagItems.length; i++) {
    var removeButton = removeBagItems[i];
    removeButton.addEventListener("click", removeBagItem);
  }

  var quantityInputs = document.getElementsByClassName("bag-quantity-input");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
  }

  var addToBag = document.getElementsByClassName("btn btn-success");
  for (var i = 0; i < addToBag.length; i++) {
    var addToBagButton = addToBag[i];
    addToBagButton.addEventListener('click', addToBagClicked);
    }



}

function addToBagClicked(event){
    var button = event.target
    var buttonParent = button.parentElement
    //console.log(button.parentElement);
    var title = buttonParent.getElementsByClassName("panel-heading")[0].innerText;
    var price = buttonParent.getElementsByClassName("list-item-price")[0].innerText;
    var imageSource = buttonParent.getElementsByClassName("list-item-image")[0].src;
    console.log(title,price,imageSource);
    addItemToBag(title,price,imageSource);
}



function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= -1){
        input.value = 0;
    }
    updateBagTotal();



}


function removeBagItem(event){
    //console.log('clicked');
    var clickedButton = event.target;
    clickedButton.parentElement.parentElement.remove();
    updateBagTotal();
}

updateBagTotal();

function updateBagTotal() {
  //var bagItemContainer = document.getElementsByClassName("bag-table")[0];
  //console.log(bagItemContainer);
  //var bagRows = bagItemContainer.getElementsByClassName("bag-item-row");

  var bagRowPrices = document.getElementsByClassName("bag-item-price");
  var bagRowQuantity = document.getElementsByClassName("bag-quantity-input");
  var totalSum = 0;

  for (var i = 0; i < bagRowPrices.length; i++) {
    var price = parseFloat(bagRowPrices[i].innerText.replace("$",""));
    var quantity_1 = bagRowQuantity[i].value;

    totalSum = totalSum + price * quantity_1;

    console.log(price * quantity_1);

    //console.log(bagRowPrices[i].innerText);
    //console.log(bagRowQuantity[i].value);
  }

  totalSum = Math.round(totalSum * 100) / 100 ;
  document.getElementsByClassName("bag-total-price")[0].innerText =
    "$" + totalSum;

  // for (var i=0; i < bagRows.length ; i++){
  //     var bagRowItems =  bagRows[i];
  //     //alert(bagRows);
  //     var price = bagRowItems.getElementsByClassName("bag-item-price")[0];
  //     var quantity = bagRowItems.getElementsByClassName("bag-quantity-input")[0];
  //     alert(price,quantity);

  // }
}


function purchaseFunction(){
  alert("Thank you for Donating!");


}

