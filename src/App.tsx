// import React from 'react';
import './App.css';
import ConverterHexToRgb from './components/task1/ConverterHexToRgb/ConverterHexToRgb';
import TrainingTracker from './components/task2/TrainingTracker/TrainingTracker';
import Gallery from './components/task3/Gallery/Gallery';

document.documentElement.lang = 'en-US';

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
      <TrainingTracker />

      {/* Компонент задачи №3 */}
      <Gallery />
      
      {/* Просто подвал */}
      <footer className='footer'><p>Просто подвал</p></footer>
    </>
  );
}

export default App;
