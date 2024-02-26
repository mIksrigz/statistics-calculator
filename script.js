const getMean = array => {
    const sum = array.reduce();
};

const calculate = () => {
    const value = document.querySelector('#numbers').value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
};

// test data: 321, 232,     43, 32, 123    , 122