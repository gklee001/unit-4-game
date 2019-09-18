//when document is ready, then load it then all these other things//
$(document).ready(function () {
    //variables
    // selected player
    var player = 0;
    // defender
    var defender = 0;
    // defender name
    var defenderName;
    // fighting status
    var fighting = false;
    // assign chosen character to character variable to increment atk by base
    var character;
    // save base atk value
    var baseAtk;
    // when counter === 3 game over
    var counter = 0;
    // Created variables for each charcter with an array that stores hp, atk power, counter attack. 
    var war = [20, 5, 2];
    var zap = [21, 6, 3];
    var tog = [18, 6, 4];
    var nic = [25, 4, 1];

    console.log(player, defender, fighting, character)
    // When war is clicked move character card to player zone
    $("#war").on("click", function () {
        // if player is empty assign selected charcter to player
        if (player === 0) {
            player = $("#tartortle");
            // console.log(player);
            console.log(player, defender, fighting)
            $("#player").append(player);
            character = war;
            baseAtk = war[1];
            $('#war').hide();
            return;
        }
        // if defender is empty then assign character as defender
        if (defender === 0) {
            //assigning defender to a character
            defender = $("#tartortle");
            // move character into defender section
            $("#defenders").append(defender)
            console.log(defender)
            // defender name to check fighting conditions
            defenderName = 'war'
            fighting = true;
            return;
        }
        // Start the fighting
        if (fighting = true && defenderName === 'war') {
            war[0] -= character[1]
            character[1] += baseAtk;
            $("#warHp").text(war[0]);
            if (war[0] < 0) {
                // move character into defeated section
                $("#defeated").append(defender);
                defender = 0;
                fighting = false;
                counter++;
                // function that checks if counter is = to 3 to end game after character dies
                checkGame();
                // hide button so players cant fight themselves
                $("#war").hide()
            }
        }
    })

    $("#zap").on("click", function () {

        console.log(defender)
        if (player === 0) {
            player = $("#zapados");
            console.log(player)
            $("#player").append(player);
            baseAtk = zap[1];
            character = zap;
            $('#zap').hide();
            return
        }
        if (defender === 0) {
            defender = $("#zapados");
            $("#defenders").append(defender)
            console.log(defender)
            defenderName = 'zap'
            fighting = true;
            return
        }
        if (fighting = true && defenderName === 'zap') {
            zap[0] -= character[1]
            console.log(zap[0])
            character[1] += baseAtk;
            console.log(character[1])
            $("#zapHp").text(zap[0]);
            if (zap[0] < 0) {
                $("#defeated").append(defender);
                defender = 0;
                console.log(defender);
                fighting = false;
                console.log(fighting)
                counter++;
                checkGame();
                $("#zap").hide()
            }


        }
    })

    $("#tog").on("click", function () {
        console.log("clicked")
        if (player === 0) {
            player = $("#togapi");
            console.log(player)
            $("#player").append(player);
            baseAtk = tog[1];
            character = tog;
            $('#tog').hide();
            return
        }
        if (defender === 0) {
            defender = $("#togapi");
            $("#defenders").append(defender)
            console.log(defender)
            defenderName = 'tog'
            fighting = true;
            return
        }
        if (fighting = true && defenderName === 'tog') {
            tog[0] -= character[1]
            console.log(tog[0])
            character[1] += baseAtk;
            console.log(character[1])
            $("#togHp").text(tog[0]);
            if (tog[0] < 0) {
                $("#defeated").append(defender);
                defender = 0;
                console.log(defender);
                fighting = false;
                console.log(fighting)
                counter++;
                checkGame();
                $("#tog").hide()
            }
        }
    })

    $("#nic").on("click", function () {
        console.log("clicked")
        if (player === 0) {
            player = $("#nickiMinaj");
            console.log(player)
            $("#player").append(player);
            baseAtk = nic[1];
            character = nic;
            $('#nic').hide
            return
        }
        if (defender === 0) {
            defender = $("#nickiMinaj");
            $("#defenders").append(defender)
            console.log(defender)
            defenderName = 'nic'
            fighting = true;
            return
        }

        if (fighting = true && defenderName === 'nic') {
            nic[0] -= character[1]
            console.log(nic[0])
            character[1] += baseAtk;
            console.log(character[1])
            $("#nicHp").text(nic[0]);
            if (nic[0] < 0) {
                $("#defeated").append(defender);
                defender = 0;
                console.log(defender);
                fighting = false;
                console.log(fighting)
                counter++;
                checkGame();
                $("#nic").hide()
            }
        }
    })
    function checkGame() {
        if (counter === 3) {
            alert("You are a Pokjamon MAster")
        }
    }
})