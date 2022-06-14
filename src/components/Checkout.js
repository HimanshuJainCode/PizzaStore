import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Checkout(props) {
  const details= localStorage.getItem('details')

  const Proceed = styled(NavLink)`

  `
  return (
    
    <div>
      <label>
     BASIL quantity: {JSON.parse(details).basil}
     Tomato quantity: {JSON.parse(details).tomato}
     Mushroom quantity: {JSON.parse(details).olive}
     Olive quantity: {JSON.parse(details).mushroom}
      </label>
      <lable>
        PRICE = {localStorage.getItem('price')}
      </lable>
      <div>
      <Proceed  to="/login">BUY</Proceed>
      </div>
    </div>
  );
}