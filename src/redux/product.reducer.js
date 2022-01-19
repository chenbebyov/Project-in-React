import produce from 'immer';
import createReducer from './utils.reducer';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import image6 from './images/image6.jpg';
import image7 from './images/image7.jpg';
import image8 from './images/image8.jpg';
import image9 from './images/image9.jpg';
import image10 from './images/image10.jpg';
import image11 from './images/image11.jpg';

const initialState={
    productsInCart: [
        { quantity: "", id: "", name:"", price: 0 }
    ],
    productsInStock:[
        {
            quantity:1,
            id: 'image1',
            name: 'קרם חמאה',
            price: 55.93,
            imageUrl:image1
        },
        {
            quantity:1,
            id: 'image2',
            name: 'קרם גוף בשפופרת',
            price: 48.90,
            imageUrl:image2
        },
        {
            quantity:1,
            id: 'image3',
            name: 'קרם ידיים',
            price: 32,
            imageUrl:image3
        },
        {
            quantity:1,
            id: 'image4',
            name: 'קרם מזין לכף הרגל',
            price: 34.85,
            imageUrl:image4
        },
        {
            quantity:1,
            id: 'image5',
            name: 'מגבת רחצה פסים',
            price: 83.95,
            imageUrl:image5
        },
        {
            quantity:1,
            id: 'image6',
            name: 'מגבת ידיים',
            price: 11.18,
            imageUrl:image6
        },
        {
            quantity:1,
            id: 'image7',
            name: 'תיק ספורט ללין לבן',
            price: 97.99,
            imageUrl:image7
        },
        {
            quantity:1,
            id: 'image8',
            name: 'בושם 100 E.D.T מ"ל',
            price: 132.80,
            imageUrl:image8
        },
        {
            quantity:1,
            id: 'image9',
            name: 'דאודורנט ספריי',
            price: 27.54,
            imageUrl:image9
        },
        {
            quantity:1,
            id: 'image10',
            name: 'מפיץ ריח 200 מ"ל',
            price: 76.93,
            imageUrl:image10
        },
        {
            quantity:1,
            id: 'image11',
            name: 'ליפ סקראב',
            price: 31.92,
            imageUrl:image11
        }
    ]
}
const Products = {
    addProduct(state, action) {
        let r= state.productsInCart.find( ({ name }) => name === action.payload.name )
        if(r)
        {
          state.productsInCart.find( ({ name }) => name === action.payload.name ).quantity++
        }
         else 
         {
             let p={quantity:1,id: action.payload.id, name: action.payload.name ,price:action.payload.price}
             state.productsInCart.push(p)
          }
      },
    deleteProduct(state, action) {
        state.productsInCart=state.productsInCart.filter(x=>x.name!=action.payload.name)
      },
    addQuantity(state, action) {
        state.productsInCart.find( ({ name }) => name === action.payload.name ).quantity++
    },
    subQuantity(state, action) {
        if(action.payload.quantity>=2)
        {state.productsInCart.find( ({ name }) => name === action.payload.name ).quantity--}
    },
    changeQuantity(state, action) {
            state.products[action.payload.key].quantity = Number(action.payload.quantity);
    }
}
export default produce((state, action) => createReducer(state, action, Products), initialState);
