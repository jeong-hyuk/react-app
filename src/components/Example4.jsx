import React from 'react';
import Example4Props from './Example4Props';

export default function Example4() {
  const items = [
    {
      item: 'PS5',
      price: '685,000원',
    },
    {
      item: '에어 프라이어',
      price: '50,000원',
    },
    {
      item: '사세 치킨윙',
      price: '11,500원',
    },
  ];
  return (
    <div>
      {items.map((el, index) => {
        return <Example4Props item={el.item} price={el.price} key={index} />;
      })}

      {items.map((el, index) => {
        return (
          <div key={index}>
            <h1>품목명 : {el.item}</h1>
            <br />
            <p>가격 : {el.price}</p>
          </div>
        );
      })}

      <Example4Props item={items[0].item} price={items[0].price} />
      <Example4Props item={items[1].item} price={items[1].price} />
      <Example4Props item={items[2].item} price={items[2].price} />
    </div>
  );
}
