module.exports = function(phone) {

  phone.on('call', function onNewStudent() {
    console.log('New student has arrived!');
  });

};
