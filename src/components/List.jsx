import React from 'react';
import ListChild from './ListChild';

export default function List() {
  const dataArr = [
    {
      title: '리액트 공부하기',
      todo: 'state 사용법 익히기',
    },
    {
      title: '코테 문제 풀기',
      todo: 'Lv 0 정복 가즈아',
    },
    {
      title: '한강 가기',
      todo: '경품 타기',
    },
  ];
  return (
    <div>
      <h1>오늘 해야할 일</h1>
      <hr />
      {dataArr.map((el, index) => (
        <ListChild title={el.title} todo={el.todo} key={index} />
      ))}
      {dataArr.map((el, index) => {
        return (
          <div key={index}>
            <h2>{el.title}</h2>
            <p>{el.detail}</p>
            <hr />
          </div>
        );
      })}
      <ListChild title={dataArr[0].title} todo={dataArr[0].todo} />
      <hr />
      <ListChild title={dataArr[1].title} todo={dataArr[1].todo} />
    </div>
  );
}
