Commonly Used React Hooks (with simple explanation)
1️⃣ useState

Allows a component to store and update values (state).

const [count, setCount] = useState(0);

2️⃣ useEffect

Runs code when the component mounts, updates, or unmounts.
Useful for API calls, timers, subscriptions, etc.

useEffect(() => {
  console.log("Component mounted");
}, []); // empty array → run once

3️⃣ useRef

Creates a reference to DOM elements or stores mutable values.

const inputRef = useRef();

4️⃣ useContext

Allows a component to access values from React Context.

const theme = useContext(ThemeContext);

5️⃣ useMemo

Memoizes (caches) expensive computations.

const result = useMemo(() => slowFunction(a, b), [a, b]);

6️⃣ useCallback

Memoizes a function to prevent unnecessary re-renders.

const handleClick = useCallback(() => {
  console.log("clicked");
}, []);

7️⃣ useReducer

More powerful alternative to useState — used for complex state logic.

const [state, dispatch] = useReducer(reducer, initialState);

⚡ Summary in One Line

React Hooks let you use state, lifecycle methods, and other React features inside functional components — without needing classes.