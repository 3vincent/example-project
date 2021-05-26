const Person = require('./person.js')


const ben = new Person('Ben', 'ben@someemail.com', 29, null, 'Leipzig');
const armagan = new Person('Armagan', 'armagan@someemail.com', 29, null, 'Berlin');

const bensOffer = ben.createOffer('My old pillbox hat', '04277', 'Clothing' );
const bensOffer2 = ben.createOffer('Wash dishes', '04277', 'Services');

armagan.createOffer('Dish Washer', '11231', 'Electrical Devices');
armagan.likeOffer(bensOffer);
armagan.likeOffer(bensOffer2);

ben.likeOffer(bensOffer);

console.log(ben);
console.log(armagan);

console.log(ben.profile);

console.log('Bens Offers Liked by output:', ben.offers[0].likedBy);