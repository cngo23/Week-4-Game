$(document).ready(function () {
   let characters = {
       "Ryu":{
        name: 'Ryu',
        health: 160,
        attack: 20,
        imageUrl: "assets/images/Ryu.gif",
        counterAttack: 30
       },
       "Chun-Li":{
        name: 'Chun-Li',
        health: 140,
        attack: 15,
        imageUrl: "assets/images/Chun_Li.gif",
        counterAttack: 25
       },
       "Bison":{
        name: 'Bison',
        health: 200,
        attack: 25,
        imageUrl: "assets/images/Bison.gif",
        counterAttack: 35
       },
       "Sagat":{
        name: 'Sagat',
        health: 180,
        attack: 18,
        imageUrl: "assets/images/Sagat.gif",
        counterAttack: 32
       },
       "Blanka":{
        name: 'Blanka',
        health: 120,
        attack: 10,
        imageUrl: "assets/images/Blanka.gif",
        counterAttack: 20
       }
   }
   $( "#Ryu" ).click(function() {
    alert( "Handler for .click() called." );

   
  }); 
   
});