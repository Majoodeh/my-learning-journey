# useContext Hook in React

| Code / Concept        | What it says in plain English                                       |
| --------------------- | ------------------------------------------------------------------- |
| `createContext()`     | “I am making a new category of data.”                               |
| `<Context.Provider>`  | “Every component inside these tags has permission to see the data.” |
| `value={...}`         | “This is the specific information I am sending down.”               |
| `useContext(Context)` | “Look at the nearest Provider and tell me what the value is.”       |

---

How the 3 parts connect (The System Diagram)
Here is the step-by-step logic of how they talk to each other:

1. Define the Label (createContext): You do this in a separate file so both the Parent and the Child can see it. It is the "Meeting Point."

2. The Parent (Provider): The Parent says: "For the ThemeContext label, the value is now 'Dark'."

3. The Child (useContext): The Child says: "I want to see the value for the ThemeContext label."

The rule of ThemeContext is to act as the ID Card. It tells React exactly which data-stream the Child is trying to listen to. Without it, useContext() wouldn't know what to look for "in the air."

---

## How do we handel data in React?

- one of the things that React does is to handle reactions and thats why its called React.

-Reactions happen by 2 main ways:

1. Props: Parent to Child communication.
2. State: Local component data management.

but props and state have their limitations:

- Props can only send data from Parent to Child. (Top to Bottom) and cant go back from Child to Parent. and it generate a problem of "Prop Drilling" when we have many nested components.
- State is local to the component. (cannot be shared between components)

## So to solve these problems another concept is introduced called Context API.

its idea is to create a global data that can be shared between components without the need of props drilling. and all components that need this data can access it directly.

- Context API has 3 main parts:

1. createContext(): to create a context object.
2. Provider: to provide the data to the components that need it.
3. useContext(): to consume the data from the context.
