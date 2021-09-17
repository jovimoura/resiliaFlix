const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('title');
console.log(myParam)