var theArray = [];
function handleGoButtonClick(event) {
		alert( );

		domTextOutput(addElm());

		domTextOutput2(addElm2());

		domTextOutput3(theArray.toString());


	}
function addElm(newval) {
	var input1 = document.getElementById("input1Id");
	if (newval !== undefined && newval !== "" ) {
		input1.value = newval;
		theArray.push(newval);
		console.log(theArray.toString());
		document.getElementById("input1Id").value = '';
	}
  return input1.value;
	return theArray;
}
function addElm2(newval) {
	var input2 = document.getElementById("input2Id");
	if (newval !== undefined && newval !== "") {
		input2.value = newval;
		theArray.unshift(newval);
		console.log(theArray.toString());
		document.getElementById("input2Id").value = '';

	}
return input2.value;
return theArray;
}


function domTextOutput(newval) {
	var textOutputReference = document.getElementById("textOutputId");
	if(newval !== undefined && newval !== "") {
		textOutputReference.innerHTML = newval;
		return addElm(newval);
		return theArray;
		console.log(addElm());
	}
}
function domTextOutput2(newval) {
	var textOutputReference = document.getElementById("textOutputId");
	if(newval !== undefined && newval !== "") {
		textOutputReference.innerHTML = newval;
		return addElm2(newval);
		return theArray;
	}
}

function domTextOutput3(theArray) {
	var textOutputReference = document.getElementById("textOutputId");

		textOutputReference.innerHTML = theArray;
		return theArray.toString();

}

(function() {
	document.getElementById("goBtnId").onclick = handleGoButtonClick;
}());
