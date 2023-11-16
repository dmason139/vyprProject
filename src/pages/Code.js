import React from 'react';
import "./Submit.css"
import {data} from './dataset'

var Sentiment = require('sentiment');
var sentiment = new Sentiment();
var i = 0;
let inputTotal = [];
var temp = "";
var displayTotal = data;
var globalTotal = {};
var l = data.length;
i= 0;
while (i<l) {
    temp = data[i].toString();
    var result2 = sentiment.analyze(temp);
    inputTotal.push(result2.score);
    i++;
  }

  function Code(){
    return(
    <div>
      <div class="container">
        <div class="center">
          <textarea placeholder='Type Here' id="myText" rows="1" cols="50"></textarea>
          <br/>
          <br/>
          <br/>
          <div class = 'buttons'>
          <button class ='abcde'id='abcde' onClick={viewDatabase}>Click To See The Current Database</button>
          <button class = 'submit' id = 'submit' onClick={submit}>Submit</button>
          <button onClick={Clear}>Clear</button>
          </div>
          <br />
          <label id="label">‎</label>
          <label class='array' id="array">‎</label>
        </div>
      </div>
    </div>
  );
}
  

  function submit() {
    var Sentiment = require('sentiment');
    var sentiment = new Sentiment();
    var userInput = document.getElementById("myText").value;
    var result = sentiment.analyze(userInput);
    inputTotal.push(result.score);
    var total = 0;
    var i = 0;
    var length  = inputTotal.length 
    while (i < length) {
      total = total + inputTotal[i];
      i++;
    }
    globalTotal = total;
    data.push(userInput);
    sentiments();
    save();
    document.getElementById("myText").value = "";
  }
  
  function sentiments() {
    var status;
    var response = document.getElementById("myText").value;
    var result = sentiment.analyze(response);
    if (result.score < 0) {
      status = ("This Is A Negative Statement")
    }
    else if (result.score > 0) {
      status = ("This Is A Positive Statement")
    }
    else {
      status = ("This Is A Neutral Statement  ")
    }
    var label = document.getElementById("label");
    label.innerHTML = status;
  }
  
  function save() {
    var total = globalTotal;
    if (total < 0) {
      var status = ("The Overall Response Was Negative")
    }
    else if (total> 0) {
      status = ("The Overall Response Was Positive")
    }
    else {
      status = ("The Overall Response Was Neutral")
    }
    var label = document.getElementById("array");
    label.innerHTML = status;
  }
  
  function viewDatabase(){
    var replace =document.getElementById("myText")
    replace.value = displayTotal;
  }
  
  function Clear(){
    var replace =document.getElementById("myText")
    replace.value = "";
  }
  
  export default Code;