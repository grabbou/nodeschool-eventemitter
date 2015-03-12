module.exports = function(phone, maximumNumberOfPizzas) {

  // Counter goes here
  var counter = 0;

  // Define your callback method here so you can
  // use it in on and removeListener at the same time
  function onNewStudent() {

    // Increase counter and print message
    counter++;

    if (counter > maximumNumberOfPizzas) {
      console.log('Maximum number of pizzas reached');
      phone.removeListener('call', onNewStudent);
    } else {
      console.log('Ordering pizza...');
    }

  }

  phone.on('call', onNewStudent);

};
