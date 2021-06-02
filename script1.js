var div1 = document.createElement('div');
div1.style.backgroundColor = '#00FF7F';
div1.style.borderColor = 'blue';
div1.style.height = '50%';

document.body.style.backgroundColor = '#FFFFCC';

var h3 = document.createElement('h3');
h3.style.textAlign = 'center';
h3.innerHTML = "Enter Your Mobile Number and view your mobile details";

var table = document.createElement('table');
table.style.border = '2px solid black';
table.style.borderCollapse = 'collapse';
table.style.backgroundColor = '#00FF7F';
table.style.color = 'black';
table.style.marginLeft = 'auto';
table.style.marginRight = 'auto';
table.style.position = 'absolute';
table.style.top = '20%';
table.style.left = '30%';
table.style.width = "40%";



var tbody = document.createElement('tbody');

//table.style.width = "100%";

var button = document.createElement('button');
button.innerHTML = 'Click Here To enter your mobile Number';
button.onclick = MobileNumber;
button.style.borderColor = 'blue';
button.style.backgroundColor = '#00FF7F';
button.style.position = 'absolute';
button.style.top = '10%';
button.style.left = '42%';
div1.append(h3,button);
document.body.append(div1);

function MobileNumber(){
tbody.innerHTML = '';
var num = prompt('Enter your  phone number along with country code');
phoneDetails(num);
}

function phoneDetails(num){
fetch("https://phonevalidation.abstractapi.com/v1/?api_key=ce410f9d41514f17a2beeae8425c45a5&phone="+num) //14152007986
.then((result)=>{
    return result.json();
})
.then((data)=>{
    function createtrtd(element,value=""){
        var element = document.createElement(element);
        element.innerHTML = value;
        element.style.border = '2px solid black';
        element.style.padding = '10px';
        return element;
    }

    var tr1 = createtrtd('tr');
    var td1 = createtrtd('td','Phone Number');
    var td2 = createtrtd('td',data.phone);

    var tr2 = createtrtd('tr');
    var td3 = createtrtd('td','Type');
    var td4 = createtrtd('td',data.type);

    var tr3 = createtrtd('tr');
    var td5 = createtrtd('td','Country');
    var td6 = createtrtd('td',data.country.name);

    var tr4 = createtrtd('tr');
    var td7 = createtrtd('td','Location');
    var td8 = createtrtd('td',data.location);

    var tr5 = createtrtd('tr');
    var td9 = createtrtd('td','Carrier');
    var td10 = createtrtd('td',data.carrier);

    var tr6 = createtrtd('tr');
    var td11 = createtrtd('td','Valid');
    var td12 = createtrtd('td',data.valid);
    

    tr1.append(td1,td2);
    tr2.append(td3,td4);
    tr3.append(td5,td6);
    tr4.append(td7,td8);
    tr5.append(td9,td10);
    tr6.append(td11,td12);

    tbody.append(tr1,tr2,tr3,tr4,tr5,tr6);
    table.append(tbody);
    div1.append(table);
    document.body.append(div1);
   console.log(data);       
}).catch((error)=>{
    document.body.append(error);
})
}
