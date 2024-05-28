import React, { useState } from 'react';
import '/src/App.css';

const Index = () => {
  const questions = [
    {
      question: 'Siapa nama asli Gotchard?',
      options: ['Houtarou Ichinose', 'Takeshi Hongo', 'Kazami Shiro', 'Kenzaki Kazuma'],
      correctAnswer: 'Houtarou Ichinose'
    },
    {
      question: 'Form Terkuat Gotchard adalah?',
      options: ['Fire Gotchard', 'Iron Gotchard', 'Water Gotchard', 'Rainbow Gotchard'],
      correctAnswer: 'Rainbow Gotchard'
    },
    {
      question: 'Efek Samping Iron Gotchard?',
      options: ['Pengguna menjadi Lemah Secara bertahap', 'Meningkatkan Kekuatan Sementara', 'Mengurangi Kecepatan', 'Menambah Pertahanan'],
      correctAnswer: 'Pengguna menjadi Lemah Secara bertahap'
    },
    {
      question: 'Platina gotchard adalah form yang memadukan antara kedua chemy yaitu?',
      options: ['CrossHopper dan TenLiner', 'FireHopper dan AquaLiner', 'IronHopper dan WindLiner', 'EarthHopper dan SkyLiner'],
      correctAnswer: 'CrossHopper dan TenLiner'
    },
    {
      question: 'Nama Form Basic Gotchard adalah?',
      options: ['SteamHopper', 'FireHopper', 'WaterHopper', 'EarthHopper'],
      correctAnswer: 'SteamHopper'
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption('');
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <p>Selamat, Anda berhasil menjawab {score} dari {questions.length} pertanyaan dengan benar!</p>
          <button className='back-btn'>
            <a href="/">Kembali ke Menu Awal</a>
          </button>
        </div>
      ) : (
        <div className="question-section">
          <h3 className="question-text">{questions[currentQuestion].question}</h3>
          <div className="options-section">
            {questions[currentQuestion].options.map((option, index) => (
              <label key={index} className="option-label">
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                  className="option-input"
                />
                {option}
              </label>
            ))}
          </div>
          <button onClick={handleSubmit} className="submit-btn">Submit</button>
        </div>
      )}
    </div>
  );
};

export default Index;
