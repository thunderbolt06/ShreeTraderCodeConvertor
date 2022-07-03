let input = document.getElementById('input'); //set this attribute in Html file
let ouput = document.getElementById('output');
button = document.querySelector('button');
let screenValue = '';

function numberrtoletter(a) {
    if ( a == '1' ) {
            return 'K'
        }
    if ( a == '2' ) {
            return 'I'
        }
    if ( a == '3' ) {
            return 'N'
        }
    if ( a == '4' ) {
            return 'G'
        }
    if ( a == '5' ) {
            return 'F'
        }
    if ( a == '6' ) {
            return 'A'
        }
    if ( a == '7' ) {
            return 'T'
        }
    if ( a == '8' ) {
            return 'H'
        }
    if ( a == '9' ) {
            return 'E'
        }
    if ( a == '0' ) {
            return 'R'
        }

}


function lettertonumber(a) {
if ( a == 'K' ) {
        return '1'
    }
if ( a == 'I' ) {
        return '2'
    }
if ( a == 'N' ) {
        return '3'
    }
if ( a == 'G' ) {
        return '4'
    }
if ( a == 'F' ) {
        return '5'
    }
if ( a == 'A' ) {
        return '6'
    }
if ( a == 'T' ) {
        return '7'
    }
if ( a == 'H' ) {
        return '8'
    }
if ( a == 'E' ) {
        return '9'
    }
if ( a == 'R' ) {
        return '0'
        
    }
if ( a == 'k' ) {
        return '1'
    }
if ( a == 'i' ) {
        return '2'
    }
if ( a == 'n' ) {
        return '3'
    }
if ( a == 'g' ) {
        return '4'
    }
if ( a == 'f' ) {
        return '5'
    }
if ( a == 'a' ) {
        return '6'
    }
if ( a == 't' ) {
        return '7'
    }
if ( a == 'h' ) {
        return '8'
    }
if ( a == 'e' ) {
        return '9'
    }
if ( a == 'r' ) {
        return '0'
}
}
function tocode(x) {
    var ans = '';
    for ( var i =0; i<x.length; i++){
        ans += numberrtoletter(x.charAt(i));
    }
    return ans;

    
}

function tonumber(x) {
    var ans = '';
    for ( var i =0; i<x.length; i++){
        ans += lettertonumber(x.charAt(i));
    }
    return ans;
}

button.addEventListener('click', (e) => {
    let word = input.value
    var out = '';
    if (isNaN(word.charAt(0)) ) {
        out = tonumber(word);
    }
    else {
        out = tocode(word);
    }

    output.value = out;
      
    
    // console.log(input.value)
})
