module.exports = function(nodeschool) {

  nodeschool.on('newStudent', function onNewStudent() {
    console.log('New student has arrived!');
  });

};
