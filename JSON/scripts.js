function displayOrders(order)
{
	var htmlText = "";
	var orderTotal = 0;

	for (orderStuff of order.currentOrders)
	{
		htmlText += "<b>Order Number:</b> " + orderStuff.orderNumber + " <br> <b>Customer Name: </b>" + orderStuff.customerName + "<br>";
		
		for(orderLineItem of orderStuff.orderItems)
		{
			htmlText += "<b>Item: </b>" + orderLineItem.itemName + "<br> <b>Price: $</b>" + orderLineItem.itemPrice + "<br>";
			orderTotal += orderLineItem.itemPrice;
		}
		htmlText += "-------------------------------- <br> <b>Order Total: $</b>" + orderTotal + "<br> =================== <br>";
	}
	
	$("#OrderDiv").html(htmlText);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function DisplayOrders()
{
	return {
		"currentOrders" : [
			{
				"orderNumber" : 01,
				"customerName" : "Mary",
				"orderItems" : 
				[		
					{
						"itemName" : "Microwave",
						"itemPrice" : 150.00
					},
		
					{
						"itemName" : "Chest Freezer",
						"itemPrice" : 500.00
					}
				]
			},
			
			{
				"orderNumber" : 02,
				"customerName" : "Mark",
				"orderItems" : [
		
					{
						"itemName" : "Gas Range",
						"itemPrice" : 1200.00
					},
		
					{
						"itemName" : "Convection Microwave Oven",
						"itemPrice" : 900.00
					},
		
					{
						"itemName" : "Dryer Vent",
						"itemPrice" : 12.00
					}
				]
			}		
		]
	};
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function()
{
	$("#ShowOrdersButton").click(function()
	{
		var order = DisplayOrders();
		displayOrders(order);
	});
});