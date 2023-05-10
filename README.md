# Minimal Project to visualize an animation glitch

[formkit/auto-animate](https://github.com/formkit/auto-animate)

Occurs when the last element at the bottom of a page is deleted

1) Add elements by adding + until they move out of the screen
2) Scroll down
3) Click the lowest element to delete it

Expected result: Smooth animation

Actual result: Jumping of the screen / button

The glitching does not occur if there is enough space underneath the deleted element (see at the end of the component)

_Besides that edge case, a really nice animation helper_

