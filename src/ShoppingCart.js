module.exports = class ShoppingCart {
    constructor() {
        this.arrayOfItems = []
    }

    //getting array of items
    getItems() {
        return this.arrayOfItems
    }

    //adding new item to an array
    addItem(itemName, quantity, price) {
        const newItem = {
            name: itemName,
            quantity: quantity,
            pricePerUnit: price
        }
        this.arrayOfItems.push(newItem)
    }

    //cleaning the array
    clear() {
        this.arrayOfItems = []
    }

    //counting total
    total() {
        return this.arrayOfItems.reduce((result, item) => result + (item.quantity * item.pricePerUnit), 0)
    }
}