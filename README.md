# What is this repo?
- This repo shows useMemo in combination with useEffect inside App.js

## Installation
- `npm install`
- `npm start`

## Testing
- Open up the app in the browser then play with the width of the screen with the console open. Go back and forth around 767px to see the value of isMobile change on the screen!

## Why?
- Need an event listener for the specific event: Window has gone from above 767 to below it, or vice versa

- The event listener is attached to the mediaQuery object that only triggers an event when the window crosses the width threshold (767px)

- We only want to add the event listener on mount (once) so it is placed inside a useEffect. The useEffects cleanup function removes the event listener.

- Since we don't want to redefine the "mediaQuery" object on every render that checks a mediaQuery, we memoize this value on mount and use it as our useEffect's dependency

- If you have any more questions, please ask Michael Dismatsek