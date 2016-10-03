var Home = {};

PieceClicked = false;
firstCell = "";
secondCell = "";

function WireClickedPiece (sender)
{   
    if (!PieceClicked) //if a piece has not been clicked yet
    {     
        firstCell = sender;
        firstCell.addClass("highlighted");
        PieceClicked = true;           
        return;        
    }
    else //if a piece was already clicked
    {
        secondCell = sender;
        if (firstCell.hasClass(secondCell.attr("class")))
        {
            firstCell.removeClass("highlighted");
            PieceClicked = false;
            return;
        }
        else
        {
            firstCell.removeClass("highlighted");
            secondCell.removeClass(secondCell.attr("class"));
            secondCell.addClass(firstCell.attr("class"));
            firstCell.removeClass("piece red black");
    
            firstCell.unbind();
            secondCell.unbind();
    
            secondCell.click(function ()
            {
                WireClickedPiece($(this));
            })
    
            firstCell.click(function ()
            {
                WireClickedCell($(this));
            })
    
            PieceClicked = false;
            return;
        }            
    }    
}

function WireClickedCell (sender)
{
    if(!PieceClicked)
    {
        return;
    }
    if(sender.hasClass("piece"))
    {
        return;
    }
    else
    {
        secondCell = sender;
        
        firstCell.removeClass("highlighted");
        secondCell.removeClass(secondCell.attr("class"));
        secondCell.addClass(firstCell.attr("class"));
        firstCell.removeClass("piece red black");

        firstCell.unbind();
        secondCell.unbind();

        secondCell.click(function ()
        {
            WireClickedPiece($(this));
        })

        firstCell.click(function ()
        {
            WireClickedCell($(this));
        })

        PieceClicked = false;
        return;
    }
}    

$(document).ready(function ()
{
    var cells = $(".cell");
    var colorCount = 0;

    for (var i = 0; i < cells.length; i++)
    {
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0;
        var isNextRow = (i + 1) % 8 == 0;
        colorCount += isNextRow ? 2 : 1;
        cell.css("background-color", isDark ? "navy" : "white");
    }
    
    $(".piece").click(function()
    {
        WireClickedPiece($(this));
    })

    $(".cell").click(function()
    {
        WireClickedCell($(this));
    })   
    
});