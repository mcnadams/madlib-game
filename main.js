function makeSoup() {

    var str1 = "Let's make a ";
    var adj1 = document.getElementById('adj1').value;
    console.log(adj1);
    var str2 = " pot of soup. We need to add ";
    var noun1 = document.getElementById('noun1').value;
    str7 = ", "
    var noun2 = document.getElementById('noun2').value;
    str3 = ", and ";
    var noun3 = document.getElementById('noun3').value;
    var str4 = ". It needs to ";
    var verb1 = document.getElementById('verb1').value;
    var str5 = " for " 
    var num1 = document.getElementById('num1').value;
    var str6 = " minutes. Serve with ";
    var noun4 = document.getElementById('noun4').value;

    var madLib = str1 + adj1 + str2 + noun1 + str7 + noun2 + str3 + noun3 + str4 + verb1 + str5 + num1 + str6 + noun4 + ".";

    var display = document.getElementById('output');
    display.textContent = madLib;

}