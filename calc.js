var entries = [];
var total = 0;
var temp = '';



// loop through available button and assign onclick event listener and pass button value as argument
var buttons = document.getElementsByTagName('button');
for (var i=0 ; i < buttons.length ; i++){
  (function(index){
    buttons[index].onclick = function(){
     // alert("I am button " + buttons[index].value);
        calculator(buttons[index].value)
    };
  })(i)
}

function calculator(val) {

    var answer = document.getElementById("answer");

    // Got a number, add to temp
    if (!isNaN(val) || val === '.') {
        temp += val;
        //console.log(temp);
        
        // pass temp to the calculator input field
        answer.value = temp.substring(0, 10);
    
        // if AC pressed => clear everything
    } else if (val === 'AC') {
        entries = [];
        temp = '';
        total = 0;
        answer.value = '';
    

        // Clear last entry
    } else if (val == 'CE') {
        temp = '';
        answer.value = '';
    
        // if multiply is pressed
        //store input field and the multiply symbol   
    } else if (val === 'x') {
        entries.push(temp);
        entries.push('*');
        temp = '';

        // if divide pressed
        // store input field and divide symbol
    } else if (val === '/') {
        entries.push(temp);
        entries.push('/');
        temp = '';
    
        // Got equals sign pressed
    } else if (val === '=') {
        entries.push(temp);
        var nt = Number(entries[0]);

        for (var i = 1; i < entries.length; i++) {
            var nextNum = Number(entries[i + 1]);
            var symbol = entries[i];

            if (symbol === '+') {
                nt += nextNum;
                console.log(nt)
            } else if (symbol === '-') {
                nt -= nextNum;
            } else if (symbol === '*') {
                nt *= nextNum; 
            } else if (symbol === '/') {
                nt /= nextNum;
            }
            i++;
        }
        // swap the '-' symbol for input field
        if (nt < 0) {
            nt = Math.abs(nt) + '-';
        }

        answer.value = nt;
        console.log(nt)
        entries = [];
        temp = '';

    } else {
        entries.push(temp);
        entries.push(val);
        temp = '';
    }
    
    }




