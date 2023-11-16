  import React from 'react';
  import "./Filter.css"


  const Filters = ()=> {
    return (
      <div class="container3">
          <div class="center3">
            <br/>
            <button onClick={filterByChild}>Filter By Child</button>
            <button onClick={filterByAdult}>Filter By Adult</button>
            <button onClick={filterBySenior}>Filter By Senior</button>
            <br/>
            <button onClick={displayGood}>Filter By Positive Responses</button>
            <button onClick={displayNeutral}>Filter By Neutral Responses</button>
            <button onClick={displayBad}>Filter By Negative Responses</button>
            <br/>
            <button onClick={filterByEngland}>Filter By England's Responses</button>
            <button onClick={filterByScotland}>Filter By Scotland's Responses </button>
            <button onClick={filterByWales}>Filter By Wales's Responses </button>
            <br/>
            <button>‎</button>
            <button onClick={remove}>Remove Filter</button>
            <button>‎</button>
          </div>
          <label class = "label2" id="label">{filter} Filter Applied</label>
        </div>
    );
  }
  var filter = "None";

    function remove(){
      filter = "None"
      var label = document.getElementById("label");
      label.innerHTML = "No Filter Applied";
    }

    function filterByChild(){
      filter = "child";
      var label = document.getElementById("label");
      label.innerHTML = filter + " Filter Applied";
    }
    
    function filterByAdult(){
      filter = "adult";
      var label = document.getElementById("label");
      label.innerHTML = filter + " Filter Applied";
    }
    
    function filterBySenior(){
      filter = "senior";
      var label = document.getElementById("label");
      label.innerHTML = filter + " Filter Applied";
    }
    
    function displayGood(){
      filter = "good";
      var label = document.getElementById("label");
      label.innerHTML = filter + " Filter Applied";
    }
    function displayBad(){
      filter = "bad";
      var label = document.getElementById("label");
      label.innerHTML = filter + " Filter Applied";
    }
    function displayNeutral(){
      filter = "neutral";
      var label = document.getElementById("label");
      label.innerHTML = filter + " Filter Applied";
    }
    
    function filterByEngland(){
      filter = "england";
      var label = document.getElementById("label");
      label.innerHTML = filter + " Filter Applied";
    }

    function filterByScotland(){
      filter = "scotland";
      var label = document.getElementById("label");
      label.innerHTML = filter + " Filter Applied";
    }
    function filterByWales(){
      filter = "wales";
      var label = document.getElementById("label");
      label.innerHTML = filter + " Filter Applied";
    }
  
  export{filter};
  export default Filters; 