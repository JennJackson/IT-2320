var Client = {};
Client.BaseURL = "http://localhost:52025";

Client.CallLogin = function () {
    var usernameInput = $("#ExistingUsername").val();
    var passwordInput = $("#ExistingPassword").val();

    $.ajax
    ({
        url: Client.BaseURL + "/Home/Login",
        data:
            {
                Username: usernameInput,
                Password: passwordInput
            },
        success: function (result) {
            string = JSON.parse(result);
            //TODO after seeing all cases in action, parse the message so it looks friendly
            alert(result);
            //$(".output").html("Player Number: " + string.PlayerNumber + "<br> Player Name: " + string.PlayerName);
        }
    })
}

Client.CallCreateAccount = function () {
    var usernameInput = $("#CAUsername").val();
    var passwordInput = $("#CAPassword").val();
    var emailInput = $("#CAEmail").val();
    var emailInput2 = $("#CAEmail2").val();

    $.ajax
    ({
        url: Client.BaseURL + "/Home/CreateAccount",
        data:
            {
                Username: usernameInput,
                Password: passwordInput,
                EmailAdd: emailInput,
                EmailCon: emailInput2
            },
        success: function (result) {
            string = JSON.parse(result);
            //TODO after seeing all cases in action, parse the message so it looks friendly
            alert(result);
        }
    })
}


$(document).ready(function () {
    $("#LoginButtonDiv").click(Client.CallLogin);
    $("#CAButtonDiv").click(Client.CallCreateAccount);
});