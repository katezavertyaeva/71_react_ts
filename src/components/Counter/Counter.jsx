// Шаг 1 - импорт хука
import { useState } from "react";

import Button from "../Button/Button";
import "./styles.css";

function Counter() {
  // Шаг 2 - вызов хука
  // В вызов хука необходимо передать значение по умолчанию (любой тип данных)
  // Выхов хука возвращает массив из двух элементов
  // 1-й - значение (актуальное) стейта
  // 2-й - это функция, которая может изменить стейт (так как только она может изменять состояние)
  // const state = useState(0);
  // const counter = state[0]

  const [counter, setCounter] = useState(0);
  console.log(counter);

  // Шаг 3 - создаём функции, которые будем передавать кнопкам, а внутри этих функций
  // мы должны вызывать функцию setCounter, в которой пропишем логику изменения состояния
  const onMinusClick = () => {
    // Мы можем использовать функцию setCounter двумя способами
    // 1 - просто передавая новое значение (если новое значение не зависит от предыдущего)
    // 2 - перевать функцию callback, внутри которой мы можем получить предыдущее состояние,
    // изменить его, !вернуть его
    // 1- setCounter(counter++)
    setCounter((prevState) => prevState - 1);
  };

  const onPlusClick = () => {
    setCounter((prevState) => prevState + 1);
  };

  return (
    <div className="counter-wrapper">
      <div className="button-wrapper">
        <Button name="-" onClick={onMinusClick} />
      </div>
      <div className="result-container">{counter}</div>
      <div className="button-wrapper">
        <Button name="+" onClick={onPlusClick} />
      </div>
    </div>
  );
}

export default Counter;
