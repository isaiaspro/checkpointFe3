import React, { useState } from 'react';
import styles from './app.module.css';
import CardList from './CardList';
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [colors, setColors] = useState([]);
  const [inputValues, setInputValues] = useState({ name: '', hexCode: '' });
  const [errorMessage, setErrorMessage] = useState('');


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (inputValues.name.trim() !== '' && inputValues.name.length >= 3 && inputValues.hexCode.length >= 6) {
      setColors([...colors, inputValues]);
      setInputValues({ name: '', hexCode: '' });
      setErrorMessage('');
    } else {
      setErrorMessage('Por favor, verifique os dados inseridos no formulário.');
    }
  };


  return (
    <>
    <main className={styles.main}>

    
      <div className={styles.App}>

      
        <h1 className={styles.title}>ADICIONAR NOVA COR</h1>

        <form className={styles.form} onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Nome da Cor"
            name="name"
            value={inputValues.name}
            onChange={handleInputChange}
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Código Hexadecimal"
            name="hexCode"
            value={inputValues.hexCode}
            onChange={handleInputChange}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>ADICIONAR</button>
        </form>

        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      </div>
      <div className={styles.cardsContainer}>
        <h1 className={styles.title}>CORES FAVORITAS</h1>

      <CardList colors={colors} />
      </div>
      </main>
    </>
  );
}

export default App;