function Unitcovert() {
    var input = $("#text").val();
    var ans = $("#ans");
    var unit1 = $("#drop1");
    var unit2 = $("#drop2");
    var calc = false;

    if (input > 0){
        calc = true;
    }else{
        alert("You can only input numbers greater than 0");
        calc = false;
        ans.attr("placeholder", "Does Not Compute")
    }
    if (calc === true){
        if (unit1.val() == "copper"){
            if (unit2.val() == "copper"){
                ans.attr("placeholder", input);
            }
            if (unit2.val() == "silver"){
                ans.attr("placeholder", Math.floor(input / 10) + " with " + Math.round(((Math.floor(input / 10)) - input / 10) * -10) + " Copper Left");
            }
            if (unit2.val() == "electrum"){
                ans.attr("placeholder", Math.floor(input / 50) + " with " + ((((Math.floor(input / 50)) * 50) - input) * -1) + " Copper Left");
            }
            if (unit2.val() == "gold"){
                ans.attr("placeholder", Math.floor(input / 100) + " with " + Math.round(((Math.floor(input / 100)) - input / 100) * -100) + " Copper Left");
            }
            if (unit2.val() == "platinum"){
                ans.attr("placeholder", Math.floor(input / 1000) + " with " + Math.round(((Math.floor(input / 1000)) - input / 1000) * -1000) + " Copper Left");
            }
        }
        if (unit1.val() == "silver"){
            if (unit2.val() == "copper"){
                ans.attr("placeholder", Math.floor(input * 10));
            }
            if (unit2.val() == "silver"){
                ans.attr("placeholder", input);
            }
            if (unit2.val() == "electrum"){
                ans.attr("placeholder", Math.floor(input / 5) + " with " + ((((Math.floor(input / 5)) * 5) - input) * -1) + " Silver Left");
            }
            if (unit2.val() == "gold"){
                ans.attr("placeholder", Math.floor(input / 100) + " with " + Math.round(((Math.floor(input / 10)) - input / 10) * -10) + " Silver Left");
            }
            if (unit2.val() == "platinum"){
                ans.attr("placeholder", Math.floor(input / 1000) + " with " + Math.round(((Math.floor(input / 100)) - input / 100) * -100) + " Silver Left");
            }
        }
        if (unit1.val() == "electrum"){
            if (unit2.val() == "copper"){
                ans.attr("placeholder", (input * 50));
            }
            if (unit2.val() == "silver"){
                ans.attr("placeholder", (input * 5));
            }
            if (unit2.val() == "electrum"){
                ans.attr("placeholder", input);
            }
            if (unit2.val() == "gold"){
                ans.attr("placeholder", Math.floor(input / 2) + " with " + ((((Math.floor(input / 2)) * 2) - input) * -1) + " Electrum Left");
            }
            if (unit2.val() == "platinum"){
                ans.attr("placeholder", Math.floor(input / 20) + " with " + ((((Math.floor(input / 20)) * 20) - input) * -1) + " Electrum Left");
            }
        }
        if (unit1.val() == "gold"){
            if (unit2.val() == "copper"){
                ans.attr("placeholder", input * 100);
            }
            if (unit2.val() == "silver"){
                ans.attr("placeholder", input * 10);
            }
            if (unit2.val() == "electrum"){
                ans.attr("placeholder", input * 2);
            }
            if (unit2.val() == "gold"){
                ans.attr("placeholder", input);
            }
            if (unit2.val() == "platinum"){
                ans.attr("placeholder", Math.floor(input / 10) + " with " + Math.round(((Math.floor(input / 10)) - input / 10) * -10) + " Gold Left");
            }
        }
        if (unit1.val() == "platinum"){
            if (unit2.val() == "copper"){
                ans.attr("placeholder", input) * 1000;
            }
            if (unit2.val() == "silver"){
                ans.attr("placeholder", input * 100);
            }
            if (unit2.val() == "electrum"){
                ans.attr("placeholder", input * 20);
            }
            if (unit2.val() == "gold"){
                ans.attr("placeholder", input * 10);
            }
            if (unit2.val() == "platinum"){
                ans.attr("placeholder", input);
            }
        }
    }
}
onkeypress ()