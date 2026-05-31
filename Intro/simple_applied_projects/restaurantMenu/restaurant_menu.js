const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

//Fisr iterate through breakfastMenue
// using map method
/**
 * (method) Array<string>.map<string>(callbackfn: (value: string, index: number, array: string[]) => string, thisArg?: any): string[]
Calls a defined callback function on each element of an array, and returns an array that contains the results.

@param callbackfn — A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

@param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
*/
const breakfastMenuItemHTML = breakfastMenu.map((item, index)=>
    `<p>Item ${index+1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemHTML;                       

//Iterate on maincourseMenue using forEach loop
/**
 * (method) Array<string>.forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void
Performs the specified action for each element in an array.

@param callbackfn — A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

@param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
*/
let mainCourseItem = '';
mainCourseMenu.forEach(
    (item, index)=>{
        mainCourseItem+= `<p>Item ${index +1}: ${item}</p>`;
    }
);
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;


// iterate through desertMenue by for loop
let dessertItem = '';
for(let i=0; i < dessertMenu.length; i++){
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;