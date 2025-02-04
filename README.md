# React useEffect Cleanup Function Error
This example demonstrates a common error in React's `useEffect` hook where a cleanup function is incorrectly used. The `doSomethingThatReturnsNothing` function doesn't return a cleanup function, but the component tries to use it as one, leading to an error.

## Problem
The issue stems from using the return value of `doSomethingThatReturnsNothing` as if it were a function that needs to be called during cleanup.  Since the function does not return anything, this results in an error.

## Solution
The solution ensures the `useEffect` hook returns a proper cleanup function only when necessary. If no cleanup is needed, the return statement can be omitted. If an external function is used for cleanup, ensure it returns a function that can be called.