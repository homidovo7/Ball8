import { useState } from 'react';
import './App.css';

const answers = [
  'Да!',
  'Точно да!',
  'Без сомнений!',
  'Скорее да.',
  'Знаки за!',
  'Пока неясно.',
  'Спроси позже.',
  'Не сейчас.',
  'Спроси снова.',
  'Не рассчитывай.',
  'Мой ответ — нет.',
  'Скорее нет.',
  'Вряд ли.',
  'Шансы малы.',
  'Всё возможно!',
  'Удача с тобой!',
  'Ответ — да.',
  'Определённо!',
  'Всё хорошо.',
  'Не надейся.',
];

function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');
  function askBall(event) {
    event.preventDefault();

    if (!question.trim()) {
      setMessage('Сначала введи вопрос.');
      return;
    }

    setMessage('');
    const choices = answers.filter((item) => item !== answer);
    const randomIndex = Math.floor(Math.random() * choices.length);
    setAnswer(choices[randomIndex]);
  }

  return (
    <main className="app">
      <h1>Magic 8 Ball</h1>
      <p className="subtitle">Задавай вопрос — узнай ответ судьбы</p>

      <div className="ball">
        <div className="eight">8</div>
        <div className="triangle">
          <span>{answer}</span>
        </div>
      </div>

      <form onSubmit={askBall}>
        <input
          type="text"
          value={question}
          onChange={(event) => {
            setQuestion(event.target.value);
            setMessage('');
          }}
          placeholder="Введи свой вопрос"
          aria-label="Введи свой вопрос"
        />
        <button type="submit">
          Спросить шар
        </button>
        <p className="message" role="alert">{message}</p>
      </form>
    </main>
  );
}

export default App;
