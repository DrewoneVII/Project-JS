"use strict";

console.log('arr' + "- object");

console.log(4 + +"5");

let incr = 10,
    decr= 10;

/* incr ++; postfix
decr--; */

/* ++incr; //presfix
--decr; */

console.log(--decr);
console.log(incr++); //return first value after that increse + 
console.log(decr--);

console.log(5%2);

console.log(2 * 4 == 8);

console.log(2* 4 === '8');

// && - работает только тогда когда существует два правдивых выржения тоесть и это "правда" и  это"правда"
// || - "или" два правдивых значения или это "правда" или это "правда"

const isChecked = false,
        isClosed = false;

console.log(isChecked || !isClosed );

console.log (2 + 2 * 2 != 8);