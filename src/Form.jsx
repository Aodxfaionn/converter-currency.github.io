import React from "react";

const Modal = ({ open, setOpen }) => (
  <div className="modal">
    <svg
      height="200"
      viewBox="0 0 200 200"
      width="200"
      onClick={() => setOpen(false)}
    >
      <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
    </svg>
    <h3>Укажите ваши данные:</h3>
    <form>
      <input type="text" placeholder="Ваше имя" required />
      <input type="email" placeholder="Ваша почта" required />
      <p>Хочу узнавать об изменении:</p>
      <input type="checkbox" name="currency" id="usd" />
      <label for="usd">USD</label>
      <input type="checkbox" name="currency" id="eur" />
      <label for="eur">EUR</label>
      <p>
        <button type="submit">Отправить</button>
      </p>
    </form>
  </div>
);

const Form = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <button className="form" onClick={() => setOpen(true)}>
        Хочу получать оповещения об изменении валюты!
      </button>
      {open && <Modal open={open} setOpen={setOpen} />}
    </div>
  );
};

export default Form;
