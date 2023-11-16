import React from 'react';
import {data} from './dataset'
import {age} from './dataset'
import {country} from './dataset'
import "./View.css"
import { filter } from './Filter';

var Sentiment = require('sentiment');
var sentiment = new Sentiment();
let newData = data;
let i = 0;
var numOfPeople = age.length;
let seniors = [];
let adults = [];
let children = [];
let location = [];
let good = [];
let neutral = [];
let bad = [];
let england = [];
let scotland = [];
let wales = [];
let people = []

const View = ()=> {
  return (
    <div class="container2">
        <div class="center2">
          <textarea placeholder='Type Here' id="myText" rows="1" cols="50"></textarea>
          <br/>
          <button onClick={responsePercentage}>Response Percentages</button>
          <button onClick={displayGood}>Positive Responses</button>
          <button onClick={displayNeutral}>Neutral Responses</button>
          <button onClick={displayBad}>Negative Responses</button>
          <br/>
          <br/>
          <button onClick={words}>Frequency Of Words</button>
          <button onClick={filterByChild}>Child Responses</button>
          <button onClick={filterByAdult}>Adult Responses</button>
          <button onClick={filterBySenior}>Senior Responses</button>
          <br/>
          <br/>
          <button onClick={countryResponses}>Countries Responses</button>
          <button onClick={filterByEngland}>England's Responses</button>
          <button onClick={filterByScotland}>Scotland's Responses </button>
          <button onClick={filterByWales}>Wales's Responses </button>
        </div>
        <div class = "labels">
        <label id = "label" class = "label">Current Filter Is: {filter}</label>
        </div>
      </div>
  );
}

function filterFilter(){
  if(filter === "child" || filter === "adult" || filter === "senior"){
    ageFilter();
  }
  else if(filter === "good" || filter === "neutral" || filter === "bad"){
    sentimentFilter();
  }
  else if(filter === "england" || filter === "wales" || filter === "scotland"){
    locationFilter();
  }
  else{
    newData = data;
  }
}

function ageFilter(){
  if(filter === "child"){
    ageResponse()
    newData = children;
  }
  else if(filter === "adult"){
    ageResponse()
    newData = adults;
  }
  else if(filter === "senior"){
    ageResponse()
    newData = seniors;
  }
  else{
    newData = data;
  }
}
function sentimentFilter(){
  if(filter === "good"){
    Categorise();
    newData = good;
  }
  else if(filter === "neutral"){
    Categorise();
    newData = neutral;
    }
  else if(filter === "bad"){
    Categorise();
    newData = bad;
  }
  else{
    newData = data;
  }
  console.log(newData);
}
function locationFilter(){
  if(filter === "england"){
    countryFilter();
    newData = england;
  }
  else if(filter === "wales"){
    countryFilter();
    newData = wales;
  }
  else if(filter === "scotland"){
    countryFilter();
    newData = scotland;
  }
  else{
    newData = data;
  }
}

function ageResponse(){
    sentimentFilter();
    i = 0;
    people = [];
    seniors = [];
    adults = [];
    children = [];
    while (i < numOfPeople){
      if (data[i] === newData[i]){
        if (age[i] < 18) {
          people.push(1);
          children.push(data[i]);
        }
        else if (age[i] < 65) {
          people.push(2); 
          adults.push(data[i]);
        }
        else {
          people.push(3);
          seniors.push(data[i]);
        }
        i++;
      }
      else{
        i++;
      }
    }
}
    
function filterByChild(){
    ageResponse();
    var peopleTotal = [];
    i=0;
    while(i<numOfPeople){
      if(people[i]===1){
        peopleTotal.push(i)
      } 
      else{
        peopleTotal.push(null)
      }
      i++;
    }
    i=0;
    var childScore = 0;
    while (i < peopleTotal.length){
      var g = newData[peopleTotal[i]];
      g = sentiment.analyze(g);
      childScore = childScore + (g.score);
      i++;
    }
    var childStatus = "";
    if(childScore > 0){ 
      childStatus = "The children are happy"
    }
    else if(childScore < 0){
      childStatus = "The children are unhappy"
    }
    else{
      childStatus = "The children are neutral"
    }
    var replace = document.getElementById("label")
    replace.innerHTML = childStatus;
    var output = document.getElementById("myText");
    output.value = children;
}
  
function filterByAdult(){
    ageResponse();
    var peopleTotal = [];
    i=0;
    while(i<numOfPeople){
      if(people[i]===2  ){
        peopleTotal.push(i)
      } 
      else{
        peopleTotal.push(null)
      }
      i++;
    }
    i=0;
    var adultScore = 0;
    while (i < peopleTotal.length){
      var g = newData[peopleTotal[i]];
      g = sentiment.analyze(g);
      adultScore = adultScore + (g.score);
      i++;
    }
    var adultStatus = "";
    if(adultScore > 0){ 
      adultStatus = "The adults are happy"
    }
    else if(adultScore < 0){
      adultStatus = "The adults are unhappy"
    }
    else{
      adultStatus = "The adults are neutral"
    }
    var replace = document.getElementById("label")
    replace.innerHTML = adultStatus;
    var output = document.getElementById("myText");
    output.value = adults;
}
  
function filterBySenior(){
    ageResponse();
    var peopleTotal = [];
    i=0;
    while(i<numOfPeople){
      if(people[i]===3){
        peopleTotal.push(i)
      } 
      else{
        peopleTotal.push(null)
      }
      i++;
    }
    i=0;
    var seniorScore = 0;
    while (i < peopleTotal.length){
      var g = newData[peopleTotal[i]];
      g = sentiment.analyze(g);
      seniorScore = seniorScore + (g.score);
      i++;
    }
    var seniorStatus = "";
    if(seniorScore > 0){ 
      seniorStatus = "The seniors are happy"
    }
    else if(seniorScore < 0){
      seniorStatus = "The seniors are unhappy"
    }
    else{
      seniorStatus = "The seniors are neutral"
    }
    var replace = document.getElementById("label")
    replace.innerHTML = seniorStatus;
    var output = document.getElementById("myText");
    output.value = seniors;
}
  
function Categorise(){
    ageFilter();
    neutral = [];
    good = [];
    bad = [];
    var displayData = [];
    i = 0;
    while(i< newData.length){
      displayData[i] = newData[i];
      i++;
    }
    var displaySentiment = [];
    i = 0;
    while(i< displayData.length){
      var temp = displayData[i].toString();
      var result = sentiment.analyze(temp);
      displaySentiment[i] = result.score;
      i++;
    }
    i = 0;
    while (i< displayData.length){
      if(displaySentiment[i] > 0){
        good.push(displayData[i]);
      }
      else if(displaySentiment[i] < 0){
        bad.push(displayData[i]); 
      }
      else{
        neutral.push(displayData[i]);
      }
      i++;
    }
    clear();
}
  
function displayGood(){
    Categorise();
    var replace = document.getElementById("myText")
    replace.value = good;
}
function displayBad(){
    Categorise();
    var replace = document.getElementById("myText")
    replace.value = bad;
}
function displayNeutral(){
    Categorise();
    var replace = document.getElementById("myText")
    replace.value = neutral;
}
  
function responsePercentage(){
    Categorise();
    var g=good.length;
    var b=bad.length;
    var n=neutral.length;
    var t=g+b+n;
    var percentageG=((g/t)*100).toPrecision(3);
    var percentageB=((b/t)*100).toPrecision(3);
    var percentageN=((n/t)*100).toPrecision(3);
    var percentage=("Good = "+percentageG.toString()+"% Neutral = "+percentageN.toString()+"% Bad = "+percentageB.toString()+"%");
    var replace = document.getElementById("myText")
    replace.value = percentage;
    var status = "";
    if(percentageG>percentageB){
      status = "The overall response is positive";
    }
    else if(percentageB>percentageG){
      status = "The overall response is negative";
    }
    else{
      status = "The overall response is neutral";
    } 
    var output = document.getElementById("label");
    output.innerHTML = status;
}
  
function words(){
    filterFilter()
    countryFilter()
    let map = {};
    for (i = 0; i < newData.length; i++) {
        let item = newData[i];
        map[item] = (map[item] + 1) || 1;
    }
    var keys = Object.keys(map);
    var values = Object.values(map);
    var list = "";  
    for (i = 0; i < keys.length; i++) {
      list = list + keys[i] + ":" + values[i] + "\n";
    }
    var replace = document.getElementById("myText")
    replace.value = list;
    clear();
}
function countryFilter(){
    let t = 0;
    for (i=0; i<data.length; i++){
      for (var j = 0; j < newData.length; j++) {
        if (newData[j] === data[i]){
          location[t] = country[i];
          t++;
        }
        else{}
      }
    }
}
function countryResponses(){
    filterFilter();
    countryFilter();
    let map = {};
    for (i=0; i<newData.length; i++){
      let item = location[i];
      map[item] = (map[item] + 1) || 1;
    }
    var keys = Object.keys(map);
    var values = Object.values(map);
    var list = "";
    for (i = 0; i < keys.length; i++) {
      list = list + keys[i] + ":" + values[i] + "\n";
    }
    var replace = document.getElementById("myText")
    replace.value = list;
    clear();
}
  
function filterByEngland(){
    filterFilter();
    countryFilter();
    i=0;
    while(i<newData.length){
      if(location[i] === "england"){
        england.push(newData[i]);
      }
      i++;
    } 
    var englandScore=0;
    for (i=0; i<england.length; i++){
      var temp = england[i];
      temp = sentiment.analyze(temp);
      englandScore = englandScore + (temp.score);
    }
    var englandSentiment = "";
    if(englandScore > 0){
      englandSentiment = "The English are happy"
    }
    else if(englandScore < 0){
      englandSentiment = "The English are unhappy"
    }
    else{
      englandSentiment = "The English are neutral"
    }
    var replace = document.getElementById("myText")
    replace.value = england;
    var output = document.getElementById("label");
    output.innerHTML = englandSentiment;
    england = [];
}

function filterByScotland(){
    filterFilter();
    countryFilter();
    i=0;
    while(i<newData.length){
      if(location[i] === "scotland"){
        scotland.push(newData[i]);
      }
      i++;
    } 
    var scotlandScore=0;
    for (i=0; i<scotland.length; i++){
      var temp = scotland[i];
      temp = sentiment.analyze(temp);
      scotlandScore = scotlandScore + (temp.score);
    }
    var scotlandSentiment = "";
    if(scotlandScore > 0){
      scotlandSentiment = "The Scottish are happy"
    }
    else if(scotlandScore < 0){
      scotlandSentiment = "The Scottish are unhappy"
    }
    else{
      scotlandSentiment = "The Scottish are neutral"
    }
    var replace = document.getElementById("myText")
    replace.value = scotland;
    var output = document.getElementById("label");
    output.innerHTML = scotlandSentiment;
    scotland = [];
}

function filterByWales(){
    filterFilter();
    countryFilter();
    i=0;
    while(i<newData.length){
      if(location[i] === "wales"){
        wales.push(newData[i]);
      }
      i++;
    } 
    var walesScore=0;
    for (i=0; i<wales.length; i++){
      var temp = wales[i];
      temp = sentiment.analyze(temp);
      walesScore = walesScore + (temp.score);
    }
    var walesSentiment = "";
    if(walesScore > 0){
      walesSentiment = "The Welsh are happy"
    }
    else if(walesScore < 0){
      walesSentiment = "The Welsh are unhappy"
    }
    else{
      walesSentiment = "The Welsh are neutral"
    }
    var replace = document.getElementById("myText")
    replace.value = wales;
    var output = document.getElementById("label");
    output.innerHTML = walesSentiment;
    wales = [];
}

function clear(){
    var replace = document.getElementById("label")
    replace.innerHTML = "";
}
  
export default View; 