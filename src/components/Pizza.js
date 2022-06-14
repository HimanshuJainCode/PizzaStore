import React from 'react';
import './PizzaStyle.css';
import styled from 'styled-components';
import { NavLink} from 'react-router-dom';

const Proceed = styled(NavLink)`

`
const Check = styled(NavLink)`

`
export default class Pizza extends React.Component {
constructor(props){
super(props)
this.state = {
    basil: 0,
    tomato: 0,
    olive: 0,
    mushroom: 0,}
}
    
// componentDidMount(){
//     this.setState({
//     })
// }

addRemoveIngredient = (action, ingredient) => {
        let {
            basil,
            tomato,
            olive,
            mushroom} = this.state;
        let stateValue;
        switch(ingredient){
            case 'basil':{
                stateValue = basil;
                break;
            }
            case 'tomato':{
                stateValue = tomato;
                break;
            }
            case 'olive':{
                stateValue = olive;
                break;
            }
            case 'mushroom':{
                stateValue = mushroom;
                break;
            }
            default: break;
        }
        if(action === 'add'){
            stateValue = stateValue + 1;
        }else{
            stateValue = stateValue - 1;
        }
        this.setState({
            [ingredient]: stateValue >= 0 ? stateValue : 0
        });
    }

    pizzaContent = () => {
        let {
            basil,
            tomato,
            olive,
            mushroom} = this.state;
        let pizza = [];

        // outputting the basil
        for (let i = 0; i < basil; i++){
            pizza.push(<div key={pizza.length} className="basil"></div>);
        }
        // outputting the tomato
        for (let i = 0; i < tomato; i++){
            pizza.push(<div key={pizza.length} className="tomato"></div>);
        }
        // outputting the olive
        for (let i = 0; i < olive; i++){
            pizza.push(<div key={pizza.length} className="olive"></div>);
        }
        // outputting the mushroom
        for (let i = 0; i < mushroom; i++){
            pizza.push(<div key={pizza.length} className="mushroom"></div>);
        }
        if(pizza.length === 0)
        pizza.push(<p key="0">Please start adding ingredients!</p>);
        return pizza;
    }
    
calcost=()=>{
   let {
            basil,
            tomato,
            olive,
            mushroom
        } = this.state;
    let totalcost = 0;
    let basecost = 200;
    totalcost = (basecost + basil*20 + tomato*40 + olive *50+ mushroom*50);
    localStorage.setItem('price' , totalcost);
    var desc = this.state;
    localStorage.setItem('details', JSON.stringify(desc));
   return totalcost;
}

render(){
        let {
            basil,
            tomato,
            olive,
            mushroom} = this.state;

        return (
            <>
                <div className="pizzaIngredients">
                <div className="bottomSide"></div>
                <div className="topSide"></div>
                {this.pizzaContent()}
                    
                </div>
                <div className="ingredientsBlock">
                    <p>BASIL:20rs  {basil}</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','basil')}>Add</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','basil')}>Remove</button>
                    </div>
                    <p>TOMATO:40rs  {tomato}</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','tomato')}>Add</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','tomato')}>Remove</button>
                    </div>
                    <p>OLIVE:50rs  {olive}</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','olive')}>Add</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','olive')}>Remove</button>
                    </div>
                    <p>MUSHROOM:50rs  {mushroom}</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','mushroom')}>Add</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','mushroom')}>Remove</button>
                    </div>
                </div>
                <div>
                    <label>
                        Base Cost : 200 rs
                    </label>
                    <label>
                        Total Cost : {this.calcost()}
                    </label>
                </div>
               
                <div>
                   <Check to="/checkout">CART</Check>
                </div>
                <div>
                    <Proceed  to="/login">Login</Proceed>
                </div>
    </>);}
}