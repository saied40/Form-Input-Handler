import './App.css';

export default function App() {
  const handleChange = (e) => {
    document.querySelector('.'+e.target.name).innerText = e.target.value;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let temp = e.target.children[0].children;
    alert(`First Name: ${temp[0].value}\nLast Name: ${temp[1].value}\nEmail: ${temp[2].value}`);
    [...temp].map(ele => ele.value = "");
    [...e.target.children[1].children].map(ele => ele.innerText = "");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="inputs">
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="E-mail"
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className="outputs">
        <p className="firstName">first-name</p>
        <p className="lastName">last-name</p>
        <p className="email">email</p>
      </div>
      <input type="submit" />
    </form>
  );
};
