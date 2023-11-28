

/**
 * this function calculates the total prices 
 * @param {Array} products cartProducts: array of objects
 * @returns {number} total price
 */
export const totalPrice = (products ) => {

    let sum = 0 

    products.forEach(element => {
        sum += element.price * element.quantity
    });
    return sum
}