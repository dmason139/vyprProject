import './Home.css';
import {data} from './dataset';
import {age} from './dataset';
import {country} from './dataset';
var display = "Responses: "; 
for (var i = 0; i < data.length; i++) {
    display = display + data[i]+ " ";
}
display = display + "\n Age: ";
for (i = 0; i < age.length; i++) {
    display = display + age[i]+ " ";
}
display = display + "\n Country: ";
for (i = 0; i < country.length; i++) {
    display = display + country[i]+ " ";
}
function Home() {
    return (
        <div class = "display">
            <textarea rows = "1" cols="50" class = "myText" id="myText">{display}</textarea>
        </div>
    )
};

export default Home;
