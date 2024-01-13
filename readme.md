# Interview Questions

1. define `useMemo` and `useCallback` . How do they differ. Explain with code
2. What is forwardRef and why is it used
3. What is the purpose of useRef hook
4. Polyfill for `Array.prototype.map()`
5. Cookies and their uses
6. Session and local storage
7. jwt based authentication
8. nodejs libraries used
9. how to create APIs
10. how to restart backend once it has crashed.

## Cancel all setTimeouts

**You are given a series of setTimeouts that execute after 10 seconds, write a `cancelAlltimeout()` function that can cancel all the setTimeouts when called**

```javascript
const createTimeoutManager = () => {
  const timeoutIds = [];

  const setTimeout = (callback, delay) => {
    const timeoutId = setTimeout(() => {
      timeoutIds.splice(timeoutIds.indexOf(timeoutId), 1);
      callback();
    }, delay);

    timeoutIds.push(timeoutId);

    return timeoutId;
  };

  const cancelAllTimeouts = () => {
    timeoutIds.forEach(id => clearTimeout(id));
    timeoutIds.length = 0;
  };

  return { setTimeout, cancelAllTimeouts };
};

// Example usage:
const { setTimeout, cancelAllTimeouts } = createTimeoutManager();

setTimeout(()=> console.log("Task One"), 10000)
setTimeout(()=> console.log("Task Two"), 10000)
setTimeout(()=> console.log("Task Three"), 10000)
setTimeout(()=> console.log("Task Four"), 10000)
cancelAllTimeouts();

```

## Currying 

```javascript
const add = curry((a,b,c)=>a+b+c);
```

**Write a function `curry()` such that all the following add() function calls are valid :**

```javascript
add(1,2)(3) // output : 6
add(1)(2,3) // output : 6
add(1)(2)(3) // output : 6
add(1,2,3) // output : 6
```

## Flatten a nested object

Given a nested object, return a flattened object with depth = 1,

*Note: the nested object can be of any depth possible*

Example :

```javascript
let nestedObject = {
    name: "John Doe",
    age: 30,
    address: {
        permanent: {
            street: "123 Main St",
            city: "Mumbai",
            state: "Maharashtra",
            zip: "12345"
        }
    },
    hobbies: [
        {
            name: "Reading",
            type: "Leisure"
        },
        {
            name: "Coding",
            type: "Professional"
        }
    ]
};

flattenedObject = {
    name: "John Doe",
    age: 30,
    permanent_address_street: "123 Main St",
    permanent_address_city: "Mumbai",
    permanent_address_state: "Maharashtra",
    permanent_address__zip: "12345"
    hobbies: [
        {
            name: "Reading",
            type: "Leisure"
        },
        {
            name: "Coding",
            type: "Professional"
        }
    ]
}
```
