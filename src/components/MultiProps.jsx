import React from "react";

export default function MultiProps({ text, href, userID }) {
  return (
    <div>
      <h1>{userID}님 반갑습니다.</h1>
      <a href={href}>{text}</a>
    </div>
  );
}
