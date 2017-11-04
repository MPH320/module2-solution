(function (){
	'use strict';
	
	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);
	
	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	
	function ToBuyController (ShoppingListCheckOffService){
		var itemBuyer = this;
		
		itemBuyer.items = ShoppingListCheckOffService.getBuy();
		
		
		itemBuyer.buyItem = function(itemIndex) {
			ShoppingListCheckOffService.boughtItem(itemIndex);
		}

	};
	
	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	
	function AlreadyBoughtController (ShoppingListCheckOffService){
		
		var boughtList = this;
		boughtList.items = ShoppingListCheckOffService.getBought();
	
	};
	
	function ShoppingListCheckOffService() {
		var service = this;
		
		var toBuy = [{ name: "cupcakes", quantity: 15 },{ name: "twinkies", quantity: 10 },{ name: "donuts", quantity: 5 },{ name: "chocolates", quantity: 8 },{ name: "candies", quantity: 7 }];
		var bought = [];
		
		service.boughtItem = function(itemIndex) {
			bought.push(toBuy[itemIndex]);
			toBuy.splice(itemIndex, 1);
		}
		
		service.getBought = function() {
			return bought;
		}
		
		service.getBuy = function() {
			return toBuy;
		}
		
	}
	

	
})();