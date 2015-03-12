# Study events

EventEmitter is a class that provides consistent yet easy to use interface for subscribing and publishing events.
It is widely used in many core libraries as well as in 3rd party projects like `socket.io` or `hapi.js` just to name few.
It may sound a bit hard to understand at the beginning, but once you finish all `study_events` problems, you will be ready to master your next project!

## Goal

You are a manager of NodeSchool chapter in your city. You need to keep track of new students that arrive in order to order a pizza for them.
Instead of standing in front of the doors and waiting for one to arrive, you've asked your friend to call you when somebody comes in.

Before you begin, define and export function with following signature:

```js
// Don't forget to export your method
module.export = function (phone) {

}
```

As mentioned earlier, your phone will `call` you every time there's a new person at the venue.
Subscribe to this event and print message of your choice when this happens.

Each time you run your code, you may receive a different number of attendees, that's fun!

## Hints

The following documentation snippets might be helpful for you:
- https://nodejs.org/api/events.html
- https://nodejs.org/api/events.html#events_emitter_on_event_listener
