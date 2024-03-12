# calculator-odin

Gotchas: watch out for and fix these bugs if they show up in your code:

- Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, 12 + 7 - 5 * 3 = should yield 42. An example of the behavior we’re looking for would be this student solution.

- Your calculator should not evaluate more than a single pair of numbers at a time. Example: you press a number button (12), followed by an operator button (+), a second number button (7), and finally a second operator button (-). Your calculator should then do the following: first, evaluate the first pair of numbers (12 + 7), second, display the result of that calculation (19), and finally, use that result (19) as the first number in your new calculation, along with the next operator (-).

- Pressing = before entering all of the numbers or an operator could cause problems!

- Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!
