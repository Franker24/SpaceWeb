// eslint-disable-next-line no-unused-vars
import { useState } from "react"
import './Footer.css'


const Footer = () => {
  const [inputValue, setInputValue] = useState(''); 
  const manejarClick = () => {
    if (inputValue.trim() !== '') {
      const query = encodeURIComponent(inputValue); 
      window.location.href = `https://www.google.com/search?q=${query}`;
            alert('Buscando...');
    } else {
      alert('Introduzca Algo');
    }
  };
  
  return (
    <>
     <footer>
      <div className="footer">
        <input
          placeholder="Search something here...."
          className="input"
          name="text"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} 
        />
        <button onClick={manejarClick}>Enviar</button>
      </div>
    </footer>
    </>
  )
}

export default Footer
