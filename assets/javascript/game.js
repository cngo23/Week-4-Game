$(document).ready(function () {

    var characters = [
        RyuObject = {
            name: 'Ryu',
            health: 160,
            attack: 20,
            imageUrl: "assets/images/Ryu.gif",
            counterAttack: 30,
            Ryu: $("#Ryu"),
            RyuPlayer: $("#RyuPlayer"),
            RyuChallenger: $("#RyuChallenger"),
            RyuDead: $("#RyuDead"),
            picked: false
        },
        ChunLiObject = {
            name: "Chun-Li",
            health: 140,
            attack: 15,
            imageUrl: "assets/images/Chun_Li.gif",
            counterAttack: 25,
            ChunLi: $("#Chun-Li"),
            ChunLiPlayer: $("#Chun-LiPlayer"),
            ChunLiChallenger: $("#Chun-LiChallenger"),
            ChunLiDead: $("#Chun-LiDead"),
            picked: false
        },
        BisonObject = {
            name: 'Bison',
            health: 200,
            attack: 25,
            imageUrl: "assets/images/Bison.gif",
            counterAttack: 35,
            Bison: $("#Bison"),
            BisonPlayer: $("#BisonPlayer"),
            BisonChallenger: $("#BisonChallenger"),
            BisonDead: $("#BisonDead"),
            picked: false
        },
        SagatObject = {
            name: 'Sagat',
            health: 180,
            attack: 18,
            imageUrl: "assets/images/Sagat.gif",
            counterAttack: 32,
            Sagat: $("#Sagat"),
            SagatPlayer: $("#SagatPlayer"),
            SagatChallenger: $("#SagatChallenger"),
            SagatDead: $("#SagatDead"),
            picked: false
        },
        BlankaObject = {
            name: 'Blanka',
            health: 120,
            attack: 10,
            imageUrl: "assets/images/Blanka.gif",
            counterAttack: 20,
            Blanka: $("#Blanka"),
            BlankaPlayer: $("#BlankaPlayer"),
            BlankaChallenger: $("#BlankaChallenger"),
            BlankaDead: $("#BlankaDead"),
            picked: false
        },
    ];

    var myPlayer = "";
    var challenger = "";

    function startGame() {
        //hides dead characters
        RyuObject.RyuDead.hide();
        ChunLiObject.ChunLiDead.hide();
        BisonObject.BisonDead.hide();
        SagatObject.SagatDead.hide();
        BlankaObject.BlankaDead.hide();

        //hides challengers
        RyuObject.RyuChallenger.hide();
        ChunLiObject.ChunLiChallenger.hide();
        BisonObject.BisonChallenger.hide();
        SagatObject.SagatChallenger.hide();
        BlankaObject.BlankaChallenger.hide();

        //hide myPlayer
        RyuObject.RyuPlayer.hide();
        ChunLiObject.ChunLiPlayer.hide();
        BisonObject.BisonPlayer.hide();
        SagatObject.SagatPlayer.hide();
        BlankaObject.BlankaPlayer.hide();

    }
    startGame();


    $(RyuObject.Ryu).click(function () {
        if (myPlayer === "") {
            myPlayer = RyuObject.RyuPlayer;
            RyuObject.RyuPlayer.show();
            RyuObject.Ryu.hide();
        } else if (myPlayer !== ""){
            $(RyuObject.RyuChallenger).show();
            $(RyuObject.Ryu).hide();
            challenger = RyuObject.RyuChallenger;
            
        } 

    });

    $(ChunLiObject.ChunLi).click(function () {
        if (myPlayer === "") { 
            ChunLiObject.ChunLiPlayer.show();
            ChunLiObject.ChunLi.hide();
            myPlayer = ChunLiObject.ChunLiPlayer;
        } else if (myPlayer !== ""){
            $(ChunLiObject.ChunLiChallenger).show();
            $(ChunLiObject.ChunLi).hide();
            challenger = ChunLiObject.ChunLiChallenger;
        }

    });


    $(BisonObject.Bison).click(function () {
        if (myPlayer === "") {
            myPlayer = BisonObject.BisonPlayer;
            BisonObject.BisonPlayer.show();
            BisonObject.Bison.hide();
        } else if (myPlayer !== ""){
            $(BisonObject.BisonChallenger).show();
            $(BisonObject.Bison).hide();
            challenger = BisonObject.BisonChallenger;
        }

    });

    $(SagatObject.Sagat).click(function () {
        if (myPlayer === "") {
            myPlayer = SagatObject.SagatPlayer;
            SagatObject.SagatPlayer.show();
            SagatObject.Sagat.hide();
        } else if (myPlayer !== ""){
            $(SagatObject.SagatChallenger).show();
            $(SagatObject.Sagat).hide();
            challenger = SagatObject.SagatChallenger;
        }

    });

    $(BlankaObject.Blanka).click(function () {
        if (myPlayer === "") {
            myPlayer = BlankaObject.BlankaPlayer;
            BlankaObject.BlankaPlayer.show();
            BlankaObject.Blanka.hide();
        } else if (myPlayer !== ""){
            $(BlankaObject.BlankaChallenger).show();
            $(BlankaObject.Blanka).hide();
            challenger = BlankaObject.BlankaChallenger;
        }

    });























});

