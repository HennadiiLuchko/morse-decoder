const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
    
    const lengthLetter = 10;

    let res = [];

    for(let i = 0; i < expr.length; i = i+lengthLetter){
    	res.push(expr.slice(i, (i+lengthLetter)));
    } 


    for(let index in res){

        res[index] = res[index].slice(res[index].indexOf('1'))
        				   .replaceAll('10',".")
       					   .replaceAll('11',"-")
        				   .replaceAll('*'," ");

	if(res[index] === " ") {
            res[index] = res[index] 
    			
    	} else {
            res[index] = res[index].replace(res[index], MORSE_TABLE[res[index]])
        }
    }

    let result = res.join('');
    return result;

}

module.exports = {
    decode
}
