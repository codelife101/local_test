
function remove(){
  var redeem = document.getElementById("redeem");
  var voucher = document.getElementById("voucher");
  redeem.parentNode.removeChild(redeem);
  voucher.style.display="block";
}