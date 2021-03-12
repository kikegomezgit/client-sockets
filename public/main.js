var socket = io('http://localhost:5000/', {secure: true,    rejectUnauthorized: false});
let counter = document.getElementById('counter');

socket.emit('create', 'room1');


socket.on('updateCounter', data => {
    counter.innerHTML = `<p>${data} Guides created today</p>`
  });

socket.on('getActualCounter', data => {
   counter.innerHTML = `<p>${data} Guides created today</p>`
});
