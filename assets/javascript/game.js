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
        Chun_LiObject = {
            name: 'Chun-Li',
            health: 140,
            attack: 15,
            imageUrl: "assets/images/Chun_Li.gif",
            counterAttack: 25,
            Chun_Li: $("#Chun-Li"),
            Chun_LiPlayer: $("#Chun-LiPlayer"),
            Chun_LiChallenger: $("#Chun-LiChallenger"),
            Chun_LiDead: $("#Chun-LiDead"),
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

    var myPlayer;
    var challenger;

    function startGame() {
        //hides dead characters
        RyuObject.RyuDead.hide();
        Chun_LiObject.Chun_LiDead.hide();
        BisonObject.BisonDead.hide();
        SagatObject.SagatDead.hide();
        BlankaObject.BlankaDead.hide();

        //hides challengers
        RyuObject.RyuChallenger.hide();
        Chun_LiObject.Chun_LiChallenger.hide();
        BisonObject.BisonChallenger.hide();
        SagatObject.SagatChallenger.hide();
        BlankaObject.BlankaChallenger.hide();

        //hide myPlayer
        RyuObject.RyuPlayer.hide();
        Chun_LiObject.Chun_LiPlayer.hide();
        BisonObject.BisonPlayer.hide();
        SagatObject.SagatPlayer.hide();
        BlankaObject.BlankaPlayer.hide();

    }
    startGame();


    $(RyuObject.Ryu).click(function () {
        if (RyuObject.picked === false) {
            myPlayer = RyuPlayer;
            RyuObject.RyuPlayer.show();
            RyuObject.Ryu.hide();
        }

    });


    $(Chun_LiObject.Chun_Li).click(function () {
        if (Chun_LiObject.picked === false) {
            myPlayer = Chun_Li;
            Chun_LiObject.Chun_LiPlayer.show();
            Chun_LiObject.Chun_Li.hide();
        }
    })

    $(BisonObject.Bison).click(function () {
        if (BisonObject.picked === false) {
            myPlayer = BisonPlayer;
            BisonObject.BisonPlayer.show();
            BisonObject.Bison.hide();
        }

    });

    $(SagatObject.Sagat).click(function () {
        if (SagatObject.picked === false) {
            myPlayer = SagatPlayer;
            SagatObject.SagatPlayer.show();
            SagatObject.Sagat.hide();
        }

    });

    $(BlankaObject.Blanka).click(function () {
        if (BlankaObject.picked === false) {
            myPlayer = BlankaPlayer;
            BlankaObject.BlankaPlayer.show();
            BlankaObject.Blanka.hide();
        }

    });



















});

