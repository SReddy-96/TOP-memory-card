# The Odin Project - Memory Card

## Notes

https://dog.ceo/api/breeds/image/random/6

Using a Dog API to randomly get pictures of dogs then keep track of th ID number in state to check whether the user has clicked on it before. take the JSON that returns and set the state as the id. can actually call up to 50 image at once. stored in an array in `message` which could then map over and place into the image tag. means styling the tiles it a lot easier.

when the user clicks on the tile some sort of animation would be good for the user interaction 

State to keep track of current score to be updated when the user clicks on a card.
state to keep track of the high score this can be update if the current score is greater than the high score.
using `useEffect` to fetch from the API
the score will change so may need to be a dependency 
The State keeping track of the images that have been clicked but needs to be cleared when the user fails
I need a `handleclick` function that will be attached to the image that will first check whether the dataset or id is the same as one in state so will have to map through the state and if the if is there, it need to set the state of the clicked to an empty array, and reset the current score. 
Also, need to keep track of the high score when the image is click, so another if statement to see if the current score is greater than the high score. 
Should have a little instructional pop up 
Can also do mobile version as 2x2 grid
Should say when the user has losts, showing a screen when the ID is found 