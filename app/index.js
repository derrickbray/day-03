import 'whatwg-fetch';
import people from './people';

console.log(people[2].name);
console.log(people[0].name);


var acctBalances = [];

for (let i = 0; i < people.length; i++) {
  const person = people[i];
  acctBalances.push(parseInt(person.account_balance));
}


var sum = 0;

for (let i = 0; i < acctBalances.length; i++) {
  console.log(acctBalances[i]);
  sum = sum + acctBalances[i];
}
console.log(sum);

const sumEl = document.createElement('h3');

document.body.appendChild(sumEl);

sumEl.innerHTML = 'Thinking <span class="fa fa-spinner fa-spin"></span>';
window.setTimeout(() => {
  sumEl.innerText = `The total in the bank is $${sum / 100}`;
}, 5000);
