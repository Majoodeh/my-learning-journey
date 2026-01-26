# Custom Hooks

There are several things to keep in mind when creating custom hooks in React:

- Hooks run each time the component renders. - So if you have a hook that fetches data, it will run every time the component re-renders.
- Use basic hooks as much as possible to build your custom hooks.

## Building a Custom Hook:

we will do it by applying an example on that.

Idea of the Example:

- Users can play different games that involve rolling dice.
- Some games require a single dice, while others may require multiple dice.
- The number of dice used in a game can change dynamically.

### We are going to build useGameDice custom hook for that.

useGameDice Features:

- It can be setup with 2 initial parameters:
  - number of dice being used in the game.
  - initial value for each dice.
- A function that detrmines rge number of dice being used.
- A function that roles the dice and return a number between 1 and 6 for each dice.
- A function that resets the dice to their initial value.

### Setting up the hook:

- Declaration: custom hooks are defined as an arrow function.
- `use` Prefix: custom hooks must start with the word `use` to follow React's hook naming convention.
- Importing Basic Hooks: we need to import the basic hooks we will use from React.
  ```jsx
  import { useState, useEffect, useRef } from "react";
  ```

The custom hook can be initialized with a number of dice being used and an initial value

- `initialNumberOfDice`: number of dice being used in the game.
- `initialDiceValue`: initial value for each dice, and reset value after rolling.
  both variables have default value of 1.

```jsx
import { useState, useMemo, useCallback, useEffect } from "react";

export const useGameDice = (initialNumberOfDice = 1, initialDiceValue = 1) => {
  /* We’ll be adding code here in order */
};
```

### Adding states and memoized values:

first we need to setup our states.

we will use 2 states:

- `numberOfDice`: to keep track of the number of dice being used. so it detrmines how many dice to roll. or also the size of the diceValues array.
- `diceValues`: to keep track of the current values of each dice. array which size is defined by numberOfDice and holds value for each dice
