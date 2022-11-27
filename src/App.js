import React, { useState } from 'react';
import './App.css';
import Histogram from './components/Histogram';

function App() {
  const [freqData, setFreqData] = useState([[0], [0]]);

  // Function to clean the data
  const cleanData = (txt) => {
    txt = txt.replace(/[(),.@_:/"?!><;\-\n]/g, ' ');
    var words = txt.toLowerCase().split(' ');
    return words
  }

  const onSubmitBtn = (e) => {
    e.preventDefault();

    fetch("https://www.terriblytinytales.com/test.txt")
    .then(response => response.text())
    .then(data => {
      var words = cleanData(data);
      var wordMap = {};
      words.forEach((w) => {
          if (!wordMap[w]) {
              wordMap[w] = 0;
          }
          wordMap[w] += 1;
      });
      var top20 = Object.entries(wordMap)
                        .sort((a, b) => b[1] - a[1])
                        .slice(1, 21);

      var keys = top20.map(i => i[0]);
      var vals = top20.map(i => i[1]);

      setFreqData([keys, vals]);
    })
  }
  return (
    <div className="container">
      <button className="mainbtn" type="submit" onClick={(e) => {onSubmitBtn(e)}}>Submit</button>
      <Histogram freqData={freqData} />
    </div>
  );
}

export default App;
