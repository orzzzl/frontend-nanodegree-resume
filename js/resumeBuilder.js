
$("#main").append(["zeleng zhuang","eaoe"]);
var aw = "I am Zeleng Zhuang, and I am awesome.";
console.log(aw);
var fun = aw.replace("awesome", "fun");
$("#main").append(fun); 

var formattedName = HTMLheaderName.replace("%data%", "Zeleng Zhuang");
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").prepend(formattedRole);


var education = {
    "schools": [
        {
            "name": "Shanghai Jiao Tong University",
            "city": "Shanghai",
            "degree": "BA",
            "major": "Micro-Electronics"
        },
        {
            "name": "New York University",
            "city": "New York",
            "degree": "MS",
            "major": "Computer Science"
        }
    ],
    
    "online courses": [
        "introduction to computer science", "javascript basic"]
}


var bio = {
    "name":"Zeleng Zhuang",
    "age":22,
    "gender":"male",
    "nationality":"China"
}

var ii=0;

$(document).click(function(locyy) {
  // your code goes here!
  var x = locyy.pageX;

  var y = locyy.pageY;
  
  logClicks (x, y);
});

function inName (name) {
    return name[0] + ii;

}


$("#main").append (internationalizeButton);
$("#main").append ("<h1>Ineaoeaize</h1>");

$("#mapDiv").append (googleMap);



