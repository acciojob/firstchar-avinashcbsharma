function firstChar(text) {
	let str = text.trim();    
    if(str.length) { return str[0];}
    else return '\'\'' ; 
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
