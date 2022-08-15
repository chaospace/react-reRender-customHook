import React, { useState } from "react";
import { Price, PriceWithPersistent } from "./components/Price";
import "./styles.css";

const prices = [100, 200, 300, 400, 500, 600, 700];
/**
 * 리액트 re-render 학습
 *  - 관리하는 상태가 변경되면 이를 사용하는 host컴포넌트는 re-render가 발생.
 *    - 이때 사용되는 훅 안에서 관리하는 상태가 있다면 이 상태의 변경 역시 re-render의 원인이 된다.
 *      => 리액트 컴포넌트는 함수라는 것을 항상 기억하고 변경의 원인이 되는 요소들은 묶어서 하나의 함수로 관리해 해당변경이 상위에 영향을 못 미치게 하는게 중요.
 */
export default function App() {
  const [price, setPrice] = useState(100);
  const onPriceChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setPrice(Number(e.target.value));

  const [name, setName] = useState("");
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <div className="App">
      <div>
        <input type="text" value={name} onChange={onChangeName} />
      </div>
      <select value={price} onChange={onPriceChange}>
        {prices.map((price) => (
          <option key={price} value={price}>
            {price}$
          </option>
        ))}
      </select>
      <Price price={price} />
      <h3> PriceWithPersistent </h3>
      <PriceWithPersistent price={price} />
    </div>
  );
}
