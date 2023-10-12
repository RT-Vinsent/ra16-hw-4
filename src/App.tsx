// import React from 'react';
import './App.css';
import ConverterHexToRgb from './components/task1/ConverterHexToRgb/ConverterHexToRgb';

function App() {
  return (
    <>
      {/* шапка */}
      <header className='header'>
          <h1>Домашнее задание Работа с формами</h1>
          <h2>Задачи расположены последовательно в столбик</h2>
      </header>
      
      {/* Компонент задачи №1 */}
      <ConverterHexToRgb />

      {/* Компонент задачи №2 */}

      {/* Компонент задачи №3 */}
      
      {/* Просто подвал */}
      <footer className='footer'><p>Просто подвал</p></footer>
    </>
  );
}

export default App;
