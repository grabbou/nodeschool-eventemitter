module.exports = function(phone) {

  phone.on('call', function onCall() {
    console.log('Ma phone is calling!');
  });

};
