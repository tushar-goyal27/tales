# Tales Word Histogram

This project is developed for Terribly Tiny Tales(TTT) using ReactJS.

Hosted on: https://tushar-goyal27.github.io/tales/

## Dependencies
-ReactJS

-npm

## Code Explanation
### App.js
This is the main file for the React App. It contains the function to fetch data from the website, to clean it and sort to get top 20 most frequently used words.

cleanData() is used to clean the data fetched from the website. It removes any special characters present and all the carriage returns. It returns an array of words from the cleaned text.

onSubmitBtn() is called when the submit button is clicked. It calls the cleanData() function, counts the occurence of each word and sets the state with top 20 most occuring words

### Histogram Component
This is built without using any external libraries or plugins. Frequency data is passed to the component using props from App component. 

It displays the data as divs with height relative to the occurence of each word in the data.

The useEffect is used to toggle the histogram's display on the condition that if the data is present in the props or not.