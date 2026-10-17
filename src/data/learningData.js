export const methodsData = [
  {
    id: "if-else",
    title: "1. if/else Statement",
    tag: "JavaScript Basics",
    badge: "Component Level",
    color: "from-blue-500 to-cyan-500",
    bgLight: "bg-blue-50/70 border-blue-200",
    iconName: "Split",
    shortDescription:
      "Use traditional JavaScript if/else statements outside JSX when a component needs to choose between completely different UI return statements.",
    fullDescription:
      "In React components, you can write regular JavaScript statements before the return block. By using an if/else statement or early return, you can return entirely different JSX layouts depending on conditions like authentication, errors, or permissions.",
    code: `function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h2>Welcome Back!</h2>;
  }

  return <h2>Please Login</h2>;
}`,
    keyTakeaway:
      "Best for early returns (like loading or error screens) where returning early avoids rendering the rest of the component.",
    demoType: "greeting"
  },
  {
    id: "ternary",
    title: "2. Ternary Operator (? :)",
    tag: "Inline JSX",
    badge: "Most Popular",
    color: "from-indigo-500 to-purple-500",
    bgLight: "bg-indigo-50/70 border-indigo-200",
    iconName: "Binary",
    shortDescription:
      "The ternary operator is the most concise way to choose between two alternate UI outputs directly inside your JSX markup.",
    fullDescription:
      "Because standard if/else statements cannot be written inside JSX expressions `{ ... }`, JavaScript's ternary operator `condition ? trueJSX : falseJSX` is used instead. It functions as an inline if-else expression that produces a value.",
    code: `function App() {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? <h2>Welcome!</h2> : <h2>Please Login</h2>}
    </div>
  );
}`,
    keyTakeaway:
      "Ideal for binary decisions (Choice A vs Choice B) directly inside JSX elements and attributes.",
    demoType: "ternary"
  },
  {
    id: "logical-and",
    title: "3. Logical AND Operator (&&)",
    tag: "Conditional Inclusion",
    badge: "One-Way Render",
    color: "from-emerald-500 to-teal-500",
    bgLight: "bg-emerald-50/70 border-emerald-200",
    iconName: "CheckCircle2",
    shortDescription:
      "The logical AND (&&) operator renders an element only when a condition is true, rendering nothing at all when it is false.",
    fullDescription:
      "In JavaScript, `true && expression` always evaluates to `expression`, and `false && expression` evaluates to `false`. In JSX, React ignores booleans (it does not render `false`), so the element is displayed only when the condition is true.",
    code: `function App() {
  const hasMessage = true;

  return (
    <div>
      {hasMessage && <p>You have a new message!</p>}
    </div>
  );
}`,
    keyTakeaway:
      "Perfect when you want to show something or show nothing at all (e.g. notifications, warning banners, badges).",
    demoType: "badge"
  },
  {
    id: "use-state",
    title: "4. State-Driven Rendering (useState)",
    tag: "Dynamic Interactivity",
    badge: "Reactive UI",
    color: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50/70 border-amber-200",
    iconName: "ToggleLeft",
    shortDescription:
      "Use the useState Hook to create dynamic conditions that update in real-time as users click buttons, type, or interact.",
    fullDescription:
      "Conditional rendering becomes dynamic when paired with React state. By storing a boolean in useState and updating it with an event handler like onClick, React automatically recalculates the condition and re-renders the updated UI on screen.",
    code: `import { useState } from "react";

function ToggleMessage() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <button onClick={() => setShowMessage(!showMessage)}>
        Toggle Message
      </button>

      {showMessage && <p>Hello! This message is visible.</p>}
    </div>
  );
}

export default ToggleMessage;`,
    keyTakeaway:
      "Enables user-driven interactivity: initial value → user event → state update → React re-renders UI.",
    demoType: "toggle"
  }
];

export const workflowSteps = [
  {
    step: 1,
    title: "1. Define a Condition",
    description:
      "Store a condition in a variable, state (useState), or prop. For example: `const [isLoggedIn, setIsLoggedIn] = useState(false);`",
    icon: "Sliders",
    color: "bg-blue-500"
  },
  {
    step: 2,
    title: "2. Check True or False",
    description:
      "Evaluate the condition using JavaScript operators such as ternary `? :`, logical `&&`, or standard `if/else` checks.",
    icon: "CheckSquare",
    color: "bg-indigo-500"
  },
  {
    step: 3,
    title: "3. Render UI Component",
    description:
      "React renders the appropriate JSX element matching the evaluated condition, omitting or swapping other branches.",
    icon: "LayoutTemplate",
    color: "bg-purple-500"
  },
  {
    step: 4,
    title: "4. Update State & Re-render",
    description:
      "When the user interacts (clicks, types, logs in), the state updater triggers React to instantly re-evaluate and refresh the view.",
    icon: "RefreshCw",
    color: "bg-emerald-500"
  }
];

export const commonMistakes = [
  {
    id: "assignment-vs-comparison",
    title: "Using Assignment (=) Instead of Comparison (===)",
    explanation:
      "Using a single equals sign (`=`) assigns a value rather than comparing it. In JavaScript, an assignment like `user = 'guest'` evaluates as truthy, so the condition always executes!",
    wrongCode: `// ❌ WRONG: Assignment causes bug and always evaluates true!
if (status = 'admin') {
  return <AdminPanel />;
}`,
    correctCode: `// ✅ CORRECT: Strict equality check (===)
if (status === 'admin') {
  return <AdminPanel />;
}`,
    tip: "Always use strict equality `===` or inequality `!==` to prevent unintended assignments."
  },
  {
    id: "missing-return-jsx",
    title: "Forgetting to Return JSX Inside an if Statement",
    explanation:
      "In functional components, if statements outside JSX must explicitly use the `return` keyword. Forgetting it results in `undefined` being returned.",
    wrongCode: `// ❌ WRONG: Forgot return statement inside if block
function Alert({ isError }) {
  if (isError) {
    <p>Something went wrong!</p>; // Missing return!
  }
  return <p>Everything is good.</p>;
}`,
    correctCode: `// ✅ CORRECT: Explicit return returns the JSX
function Alert({ isError }) {
  if (isError) {
    return <p>Something went wrong!</p>;
  }
  return <p>Everything is good.</p>;
}`,
    tip: "Remember that JavaScript requires an explicit `return` keyword to output JSX from inside an if block."
  },
  {
    id: "zero-with-logical-and",
    title: "Using && with Numbers that Can Be 0",
    explanation:
      "When using `&&`, if the left side evaluates to the number `0`, JavaScript considers `0` falsy and React renders the literal `0` on your screen instead of hiding the component!",
    wrongCode: `// ❌ WRONG: If messages.length is 0, React renders "0" on the screen!
const messages = [];

return (
  <div>
    {messages.length && <Badge count={messages.length} />}
  </div>
);`,
    correctCode: `// ✅ CORRECT: Convert to boolean with comparison or Boolean()
const messages = [];

return (
  <div>
    {messages.length > 0 && <Badge count={messages.length} />}
    {/* Or: {Boolean(messages.length) && <Badge count={messages.length} />} */}
  </div>
);`,
    tip: "When checking array lengths, always write `array.length > 0 && ...` so the condition is explicitly boolean."
  },
  {
    id: "mutating-state-directly",
    title: "Mutating State Directly Instead of Using Updater",
    explanation:
      "Directly reassigning state variables (e.g. `isLoggedIn = true`) does not notify React of a change. React will not re-render the component and your conditional UI will remain unchanged.",
    wrongCode: `// ❌ WRONG: Direct mutation does NOT trigger re-rendering
const [isOpen, setIsOpen] = useState(false);

function handleOpen() {
  isOpen = true; // React has no idea this changed!
}`,
    correctCode: `// ✅ CORRECT: Always use the state setter function
const [isOpen, setIsOpen] = useState(false);

function handleOpen() {
  setIsOpen(true); // Triggers re-render with new conditional state
}`,
    tip: "Treat React state as immutable. Always use `setIsOpen(...)` to trigger updates."
  },
  {
    id: "props-origin-confusion",
    title: "Trying to Modify Props Received from Parents",
    explanation:
      "Props are read-only! A child component cannot mutate a prop to change a condition. Instead, pass a callback function from the parent to update the parent's state.",
    wrongCode: `// ❌ WRONG: Attempting to modify a read-only prop
function Child({ isLoggedIn }) {
  return (
    <button onClick={() => { isLoggedIn = false; }}>
      Log Out
    </button>
  );
}`,
    correctCode: `// ✅ CORRECT: Pass a callback function from parent
function Parent() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return <Child isLoggedIn={isLoggedIn} onLogout={() => setIsLoggedIn(false)} />;
}

function Child({ isLoggedIn, onLogout }) {
  return (
    <button onClick={onLogout}>
      Log Out
    </button>
  );
}`,
    tip: "Props flow downwards (parent to child). To update parent state from a child, pass down an event callback function."
  }
];

export const searchIndex = [
  {
    title: "Definition: What is Conditional Rendering?",
    type: "Concept",
    path: "/#definition",
    keywords: "definition what is conditional rendering meaning basics concept"
  },
  {
    title: "How Conditional Rendering Works (4-Step Workflow)",
    type: "Workflow",
    path: "/#how-it-works",
    keywords: "how it works flow steps condition evaluate render update state"
  },
  {
    title: "if/else Statement Method",
    type: "Method",
    path: "/learn#if-else",
    keywords: "if else statements javascript early return branches"
  },
  {
    title: "Ternary Operator (? : ) Method",
    type: "Method",
    path: "/learn#ternary",
    keywords: "ternary operator inline jsx condition question mark colon either or"
  },
  {
    title: "Logical AND (&&) Operator Method",
    type: "Method",
    path: "/learn#logical-and",
    keywords: "logical and operator ampersand show hide condition truthy falsy"
  },
  {
    title: "State-Driven Rendering with useState",
    type: "Method",
    path: "/learn#use-state",
    keywords: "state usestate hooks toggle click dynamic interactive button"
  },
  {
    title: "Login and Logout Status Example",
    type: "Example",
    path: "/examples/login-logout",
    keywords: "login logout auth authentication alex welcome dashboard ternary"
  },
  {
    title: "Show and Hide Password Example",
    type: "Example",
    path: "/examples/show-hide-password",
    keywords: "password show hide eye visibility input text toggle security"
  },
  {
    title: "Loading and Data Display Example",
    type: "Example",
    path: "/examples/loading-data",
    keywords: "loading spinner data fetch async simulated api status user profile"
  },
  {
    title: "Common Mistakes: = vs ===",
    type: "Mistake",
    path: "/#mistakes",
    keywords: "mistakes bugs assignment comparison equality strict"
  },
  {
    title: "Common Mistakes: 0 && <Element />",
    type: "Mistake",
    path: "/#mistakes",
    keywords: "mistakes zero numbers array length logical and bugs"
  },
  {
    title: "React Hooks, Props, and Routes Guide",
    type: "Guide",
    path: "/#hooks-props-routes",
    keywords: "hooks props routes react router dom usestate components navigation"
  }
];
