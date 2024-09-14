'use client'
import Image from "next/image";
import food01 from '/public/food0.png';
import { useState } from "react";

export default function List() {
  let products = ['Tomatoes', 'Pasta', 'Coconut']
  let [cnt, addCount] = useState(0)

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {
        products.map((x, i)=>{
          return (
            <div className="food" key={i}>
              <img src={`food${i}.png`} className="food-img"/>
              <h4>{x} 40$</h4>
              <span>{cnt}</span>
              <button onClick={()=>{addCount(cnt + 1)}}>+</button>
            </div>
          )
        })
      }
    </div>
  );
}
