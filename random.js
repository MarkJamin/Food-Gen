var restaurant = [
  'IN-N-OUT',
  'MCDONALDS',
  'CHICK-FIL-A',
  'POPEYES',
  'ARBY\'S',
  'DQ',
  'BURGER KING',
  'WENDYS',
  'FIVE GUYS',
  'TACO'
]

function newFast() {
  var randomNumber = Math.floor(Math.random() * (restaurant.length));
  document.getElementById('displayFood').innerHTML = restaurant[randomNumber];
}

