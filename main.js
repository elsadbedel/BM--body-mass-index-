$(document).ready(function () {

    $("#male").click(function () {
        _male = $(this).val();
        $(this).addClass("active");
        console.log(_male);
        calculate()

    });

    function calculate(_age, _height, _weight, _male) {
        $("#Calculate").click(function () {
            _age = $("#Age").val();
            console.log(_age);


            _height = $("#Height").val();
            console.log(_height);

            _weight = $("#Weight").val();
            console.log(_weight);

            let result = _weight / (_height * _height);
            result = Number(result.toFixed(1));
            $("p").text(result);
            console.log(result);


            if ((0 < result) && (result <= 18.4)) {
                $("#ariq").show();
                $("h6").text("Ariqsiz");


            } else if ((18.4 < result) && (result <= 24.9)) {
                $("#normal").show();

                $("h6").text("normal Kilo");
            } else if ((24.9 < result) && (result <= 29.9)) {
                $("#artiqKilolu").show();

                $("h6").text(" Artiq kilolu");


            } else if ((29.9 < result) && (result <= 39.9)) {
                $("#ObezBir").show();

                $("h6").text(" 'Kök' və birinci dereceli 'Obez-siz' ");
            } else if ((39.9 < result) && (result <= 49.9)) {
                $("#Obezİki").show();

                $("h6").text(" 'Kök' və ikinci dereceli 'Morbiz Obez-siz'");
            } else if (result > 49.9) {
                $("#ObezUc").show();

                $("h6").text(" 'Kök' və üçüncü (ağır) dereceli 'Süper Obez-siz' ");
            }
        });


    }

    $("#Back1").click(function () {
        $("#ariq").hide();
    });
    $("#Back2").click(function () {
        $("#normal").hide();
    });
    $("#Back3").click(function () {
        $("#artiqKilolu").hide();
    });
    $("#Back4").click(function () {
        $("#ObezBir").hide();
    });
    $("#Back5").click(function () {
        $("#Obezİki").hide();
    });
    $("#Back6").click(function () {
        $("#ObezUc").hide();
    });
});