const arr = [];
const counts = {};



const input = document.getElementById('x');
const btn = document.getElementById('btn');

btn.addEventListener('click', function (event) {
    event.preventDefault();
    newElement = input.value;
    arr.push(newElement);
    console.log(arr)

    for (const num of arr) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
      }
      console.log(counts);
    
})

