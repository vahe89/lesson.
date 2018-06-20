//1
function myFunc() {
    var x = document.getElementById("sell").value;
    alert("You selected: " + x);
}


//2
function Functionrb1() {
   var x = document.getElementById("radio1").value;
   alert(x)
}
function Functionrb2() {
   var x = document.getElementById("radio2").value;
   alert(x)
}


//3
function check(){
  var chk1=document.getElementById("ch1");
  var text = document.getElementById("demo");
  var chk2=document.getElementById("ck2");
  var text1 = document.getElementById("demo1");
  var chk3=document.getElementById("box3");
  var text2 = document.getElementById("demo2");
   if (chk1.checked == true){
       text.style.display = "block";
   } else {
      text.style.display = "none";
        }
     if (chk2.checked == true){
       text1.style.display = "block";
   } else {
      text1.style.display = "none";
             }
     if (chk3.checked == true){
       text2.style.display = "block";
   } else {
      text2.style.display = "none";
      }
            }


//4
function inp(){
var input=document.getElementById("in").value;
var p = document.getElementById("inp");
p.innerHTML=input;
}


//5
function showhide()
     {
           var div = document.getElementById("newpost");
    if (div.style.display !== "none") {
        div.style.display = "none";
    }
    else {
        div.style.display = "block";
    }
        }
	 
	 
//6
function changeText3(){
	var oldHTML = document.getElementById('para').innerHTML;
	var newHTML = "<span style='color:red'>" + oldHTML + "</span>";
	document.getElementById('para').innerHTML = newHTML;
}


//7
$(function() {
  $('input').focusout(function() {
     this.value = this.value.toLocaleUpperCase();
    });
});


//8
function showMe (it, box) {
  var vis = (box.checked) ? "block" : "none";
  document.getElementById(it).style.display = vis;
}
