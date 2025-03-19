# The Odin Project - Memory Card

## Summary

Another great Odin project that is a small game of memory cards, having to make sure not to click on the same card twice, using state and effect to handle the re-renders and storage of data.

## Model

### Index

|  Desktop                                                                    | Mobile                                                                   |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| ![Desktop](./src/assets/images/desktop-memory-game-ezgif.com-optimize.gif) | ![Mobile](./src/assets/images/mobile-memory-card-ezgif.com-optimize.gif) |

## Project Highlights:

- Calling the Dog API inside a `useEffect` to gather the dog images for the cards. Using the `clicked` state as a dependency.
- Giving the user a how to guide, using things like `absolute` to bring it off the UI.
- Clearly showing the current score and high score.
- Using `display: grid;` to neatly show the UI and make the app more responsive to the users screen.
- Having a simple design and colour throughout to showcase the apps functionality.

## Challenges Overcome:

- What to use as the dependency in the `useEffect` and what not to use.
- How to make the app responsive to the user.
- How to fetch the data and handling the data correctly with a `try...catch`
- Handling when a user loses and how to display this.
- Keeping track of the score and handling when the card is clicked and spreading state and creating a new piece of data.

## New Skills Acquired:

- The correct usage of `useEffect`.
- What is best to use as a dependency.
- Lifting state and handling props correctly.
- Mutating state and creating new pieces of data.
- Using the method `.includes` to find a cards ID instead of mapping over the whole array to save space and time.

## Technologies Used:

- HTML
- CSS
- JavaScript
- React
- Vite

## Notes

https://dog.ceo/api/breeds/image/random/6

Using a Dog API to randomly get pictures of dogs then keep track of th ID number in state to check whether the user has clicked on it before. take the JSON that returns and set the state as the id. can actually call up to 50 image at once. stored in an array in `message` which could then map over and place into the image tag. means styling the tiles it a lot easier.

when the user clicks on the tile some sort of animation would be good for the user interaction

State to keep track of current score to be updated when the user clicks on a card.
state to keep track of the high score this can be update if the current score is greater than the high score.
using `useEffect` to fetch from the API
the score will change so may need to be a dependency
The State keeping track of the images that have been clicked but needs to be cleared when the user fails
I need a `handleClick` function that will be attached to the image that will first check whether the dataset or id is the same as one in state so will have to map through the state and if the if is there, it need to set the state of the clicked to an empty array, and reset the current score.
Also, need to keep track of the high score when the image is click, so another if statement to see if the current score is greater than the high score.
Should have a little instructional pop up
Can also do mobile version as 2x2 grid
Should say when the user has lost, showing a screen when the ID is found
