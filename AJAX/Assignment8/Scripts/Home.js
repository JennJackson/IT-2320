var Client = {};
Client.BaseURL = "http://localhost:56214";

Client.CallGetPlayerMethod = function ()
{
    var playerNumberInput = $("#player-number-textbox").val();

    $.ajax
    ({
        url: Client.BaseURL + "/Home/GetPlayerInformation",
        data: { PlayerNumber: playerNumberInput },
        success: function (result)
        {
            string = JSON.parse(result);
            $(".output").html("Player Number: " + string.PlayerNumber + "<br> Player Name: " + string.PlayerName);
        }
    })
}


$(document).ready(function ()
{
    $(".player-number-button").click(Client.CallGetPlayerMethod);
});