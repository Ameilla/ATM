
function verify()
{
  var x=document.getElementById("cardnum").value;
  var n=12;
  var pin=document.getElementById("p").value;
  if((isNaN(x) ||x.length==n))
  {
    if(pin.length==4||isNaN(pin))
    {
      alert("Sucess");
      window.location.assign("page2.html");
    }
    else
    {
      alert("Check the pin");
    }  
  }
  else
  {
    alert("Check the card number");
  }
}

function select()
{
  var x=document.getElementById("sel").value;
  var tamt=50000;
  var amt=document.getElementById("amount").value;
  amt=Number(amt);
  var bal;
  if(x=="3.Balance")
  {
    alert("Balance "+tamt);
  }
  else if(x=="1.Withdraw")
  {
    if(amt>=0 && amt<=tamt)
    {
        bal=tamt-amt;
        alert("Withdrawa sucessful");
        alert("Balance amt: "+bal);
    }
  }
}

