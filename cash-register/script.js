let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

const currencyUnit = {
  'PENNY': 0.01,
  'NICKEL': 0.05,
  'DIME': 0.1,
  'QUARTER': 0.25,
  'ONE': 1,
  'FIVE': 5,
  'TEN': 10,
  'TWENTY': 20,
  'ONE HUNDRED': 100
};

document.getElementById('purchase-btn').addEventListener('click', () => {
  const cashInput = parseFloat(document.getElementById('cash').value);
  const changeDueDiv = document.getElementById('change-due');

  if (isNaN(cashInput)) {
    alert("Please enter a valid cash amount.");
    return;
  }

  if (cashInput < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  if (cashInput === price) {
    changeDueDiv.innerText = "No change due - customer paid with exact cash";
    return;
  }

  let changeDue = parseFloat((cashInput - price).toFixed(2));
  const totalCID = parseFloat(cid.reduce((sum, [_, amount]) => sum + amount, 0).toFixed(2));

  const changeArray = [];
  const cidCopy = JSON.parse(JSON.stringify(cid)).reverse();

  for (let [unit, amountAvailable] of cidCopy) {
    let unitValue = currencyUnit[unit];
    let amountToReturn = 0;

    while (changeDue >= unitValue && amountAvailable >= unitValue) {
      changeDue = parseFloat((changeDue - unitValue).toFixed(2));
      amountAvailable = parseFloat((amountAvailable - unitValue).toFixed(2));
      amountToReturn = parseFloat((amountToReturn + unitValue).toFixed(2));
    }

    if (amountToReturn > 0) {
      changeArray.push([unit, amountToReturn]);
    }
  }

  const totalChangeGiven = parseFloat(changeArray.reduce((sum, [_, amt]) => sum + amt, 0).toFixed(2));

  if (changeDue > 0) {
    changeDueDiv.innerText = "Status: INSUFFICIENT_FUNDS";
  } else if (totalChangeGiven === totalCID) {
    // CLOSED condition
    let output = "Status: CLOSED";
    changeArray.reverse().forEach(([unit, amount]) => {
      output += ` ${unit}: $${amount}`;
    });
    changeDueDiv.innerText = output;
  } else {
    // OPEN condition
    let output = "Status: OPEN";
    changeArray.forEach(([unit, amount]) => {
      output += ` ${unit}: $${amount}`;
    });
    changeDueDiv.innerText = output;
  }
});

