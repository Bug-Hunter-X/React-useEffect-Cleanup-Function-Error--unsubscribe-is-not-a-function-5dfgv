```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let unsubscribe;
    const doSomething = () => {
      // Perform operations needing cleanup
       // ...
      // return a cleanup function if needed.
      return () => {
          // cleanup logic here
        console.log('Cleaning up...')
      };
    }
    unsubscribe = doSomething();
    return () => {
       //Only if unsubscribe is a function
      if(typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```