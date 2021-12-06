"use strict"
let quotes=[["The purpose of our lives is to be happy." , "Dalai Lama"],
            ["Life is what happens when you’re busy making other plans.","John Lennon"],
            ["Get busy living or get busy dying.","Stephen King"],
            ["You only live once, but if you do it right, once is enough","Mae West"],
            ["Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.","Steve Jobs"],
            ["Never let the fear of striking out keep you from playing the game","Babe Ruth"],
            ["If life were predictable it would cease to be life, and be without flavor.","Eleanor Roosevelt"],
        ["In order to write about life first you must live it.","Ernest Hemingway"],
        ["The big lesson in life, baby, is never be scared of anyone or anything."," Frank Sinatra"],
        ["Life is not a problem to be solved, but a reality to be experienced.","Soren Kierkegaard"]]

        let RandomColors =["burlywood","#395247","#282f4a","#97bf7280","#441402e3","black","#b56a6a9e","#031722d4","#363135","#04010cf2"]
function generateRandom(){
     let randomNumber = Math.round((Math.random()* 9));
    // document.getElementsByClassName("quote").innerHTML = "google boy";
    document.getElementById('writer').innerHTML = quotes[randomNumber][1];
    // alert("My button is working");
        document.getElementById('quote').innerHTML = quotes[randomNumber][0];
        document.body.style.backgroundColor = RandomColors[randomNumber];
        document.getElementById('quote-box').style.backgroundColor = RandomColors[randomNumber-1]

    
}        

