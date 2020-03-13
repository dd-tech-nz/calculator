var entries = [];
var total = 0;
var temp = '';

// loop through available button and assign onclick event listener and pass button value as argument to calculator
var buttons = document.getElementsByTagName('button');
for (var i=0 ; i < buttons.length ; i++){
  (function(index){
    buttons[index].onclick = function(){
    calculator(buttons[index].value)
    };
  })(i)
}

function calculator(val) {
    var answer = document.getElementById("answer");
    // Got a number, add to temp
    // if (!isNaN(val) || val === '.') {
    if (!isNaN(val)) {
        updateDisplay(val, answer)
        // if '.' pressed check to see whether there is a decimal point, if not add '.' to input string
    } else if (val == '.') {
        addDecimal(val, answer)
        // if AC pressed => clear everything     
    } else if (val === 'AC') {
        clearAll(answer)
        // Bckspace function
    } else if (val == 'CE') {
        backSpace(answer)
    } else if (val == '%') {
        calculatePercent(val, answer)
    // Got equals sign pressed
    } else if (val === '=') {
        getAnswer(answer)
    } else {
        storeInput(val)
    }
   
}
    
function getAnswer(answer) {
    entries.push(temp);
    var nt = parseFloat(entries[0]);
    for (var i = 1; i < entries.length; i++) {
        var nextNum = parseFloat(entries.slice(-1)[0] );
        var symbol = entries[i];
        if (symbol === '+') {
            nt += nextNum;
        } else if (symbol === '-') {
            nt -= nextNum;
        } else if (symbol === '*') {
            nt *= nextNum;
        } else if (symbol === '/') {
            nt /= nextNum;
        }
        i++;
    }
    updateMemory(nt, answer)
}

function storeInput(val) {
    entries.push(temp);
    if (entries.indexOf('+') || entries.indexOf('-') || entries.indexOf('*') || entries.indexOf('/')) {
        entries[1] = val;
        
    } else {
        entries.push(val)
    }
    temp = '';
}

function calculatePercent(val, answer) {
    var percent = parseInt(temp, 10) / 100;
        answer.value = percent;
        entries.push(percent);
        entries.push(val);
        temp = '';
}

function backSpace(answer) {
        temp = temp.slice(0, temp.length - 1);
        answer.value = temp;
        entries.unshift()
}

function clearAll(answer) {
    entries = [];
    temp = '';
    total = 0;
    answer.value = '';
}

function addDecimal(val, answer) {
    
    if (temp.indexOf('.') == -1) {
        temp += val;
        answer.value = parseFloat(temp)
    } else {
        val = ''
    }
}

function updateDisplay(val, answer) {
    temp += val;
    // pass temp to the calculator input field
    answer.value = temp.toString();
}

function updateMemory(nt, answer) {
    answer.value = parseFloat(nt.toFixed(10));
    entries.pop()
    entries.shift()
    entries.unshift(nt);
}
