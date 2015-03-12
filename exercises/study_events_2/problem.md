# Not enough money for pizzas!

Well done manager! You've did a great job. You have been promoted and now you are heading the main NodeSchool
chapter that takes place in the capitol city of your country.

Unfortunately, one hour before the event, one of the sponsors had called you to say they have founds to cover
only `maximumNumber` of pizzas today.

As you are known for being a great problem-solver, they believe you will sort that out!

## Goal

Given following function

```js
// Don't forget to export your method
module.exports = function (phone, maximumNumberOfPizzas) {

}
```

stop ordering pizzas when number of students that arrived is larger than what you can afford.

## Hint
- Re-use your `on('call')` method from previous problem
- Consider keeping counter somewhere in your code to keep track of students
- https://nodejs.org/api/events.html#events_emitter_removelistener_event_listener
- Note that you don't have to define your function inside `on`. You can just pass reference, which will allow you to use the method above.
