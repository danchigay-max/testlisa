const testData = {
  id: "koshkin-dom",
  title: "Кошкин дом",
  rounds: [
    {
      title: "Раунд 1",
      info: "Вступление к первому раунду будет здесь.",
      audio: "audio/koshkin-dom/round-1.mp3",
      questions: [
        {
          text: "Кто был хозяином красивого дома в сказке?",
          answers: ["Кошка", "Собака", "Лиса", "Лошадь"],
          correctIndex: 0,
          hint: "Главная героиня",
          audio: {
            question: "audio/koshkin-dom/r1q1-question.mp3",
            answers: [
              "audio/koshkin-dom/r1q1-a1.mp3",
              "audio/koshkin-dom/r1q1-a2.mp3",
              "audio/koshkin-dom/r1q1-a3.mp3",
              "audio/koshkin-dom/r1q1-a4.mp3"
            ]
          }
        },
        {
          text: "Кого кошка не пустила в дом?",
          answers: ["Котят", "Соседей", "Гостей", "Птиц"],
          correctIndex: 0,
          hint: "Ее родня",
          audio: {
            question: "audio/koshkin-dom/r1q2-question.mp3",
            answers: [
              "audio/koshkin-dom/r1q2-a1.mp3",
              "audio/koshkin-dom/r1q2-a2.mp3",
              "audio/koshkin-dom/r1q2-a3.mp3",
              "audio/koshkin-dom/r1q2-a4.mp3"
            ]
          }
        },
        {
          text: "Что случилось с домом кошки?",
          answers: ["Сгорел", "Улетел", "Потонул", "Стал больше"],
          correctIndex: 0,
          hint: "Беда из-за огня",
          audio: {
            question: "audio/koshkin-dom/r1q3-question.mp3",
            answers: [
              "audio/koshkin-dom/r1q3-a1.mp3",
              "audio/koshkin-dom/r1q3-a2.mp3",
              "audio/koshkin-dom/r1q3-a3.mp3",
              "audio/koshkin-dom/r1q3-a4.mp3"
            ]
          }
        }
      ]
    },
    {
      title: "Раунд 2",
      info: "Вступление ко второму раунду будет здесь.",
      audio: "audio/koshkin-dom/round-2.mp3",
      questions: [
        {
          text: "Кто первым приютил кошку после пожара?",
          answers: ["Котята", "Козы", "Петух", "Свинья"],
          correctIndex: 0,
          hint: "Те, кого она обидела",
          audio: {
            question: "audio/koshkin-dom/r2q1-question.mp3",
            answers: [
              "audio/koshkin-dom/r2q1-a1.mp3",
              "audio/koshkin-dom/r2q1-a2.mp3",
              "audio/koshkin-dom/r2q1-a3.mp3",
              "audio/koshkin-dom/r2q1-a4.mp3"
            ]
          }
        },
        {
          text: "Какая черта характера изменилась у кошки?",
          answers: ["Стала добрее", "Стала злее", "Стала ленивее", "Стала громче"],
          correctIndex: 0,
          hint: "Про дружбу и заботу",
          audio: {
            question: "audio/koshkin-dom/r2q2-question.mp3",
            answers: [
              "audio/koshkin-dom/r2q2-a1.mp3",
              "audio/koshkin-dom/r2q2-a2.mp3",
              "audio/koshkin-dom/r2q2-a3.mp3",
              "audio/koshkin-dom/r2q2-a4.mp3"
            ]
          }
        },
        {
          text: "Кто помог кошке построить новый дом?",
          answers: ["Котята", "Куры", "Гуси", "Лягушки"],
          correctIndex: 0,
          hint: "Ее семья",
          audio: {
            question: "audio/koshkin-dom/r2q3-question.mp3",
            answers: [
              "audio/koshkin-dom/r2q3-a1.mp3",
              "audio/koshkin-dom/r2q3-a2.mp3",
              "audio/koshkin-dom/r2q3-a3.mp3",
              "audio/koshkin-dom/r2q3-a4.mp3"
            ]
          }
        }
      ]
    },
    {
      title: "Раунд 3",
      info: "Вступление к третьему раунду будет здесь.",
      audio: "audio/koshkin-dom/round-3.mp3",
      questions: [
        {
          text: "Какой урок дает сказка?",
          answers: ["Нужно помогать близким", "Нужно быть самым богатым", "Нужно всегда спорить", "Нужно все прятать"],
          correctIndex: 0,
          hint: "Про доброту",
          audio: {
            question: "audio/koshkin-dom/r3q1-question.mp3",
            answers: [
              "audio/koshkin-dom/r3q1-a1.mp3",
              "audio/koshkin-dom/r3q1-a2.mp3",
              "audio/koshkin-dom/r3q1-a3.mp3",
              "audio/koshkin-dom/r3q1-a4.mp3"
            ]
          }
        },
        {
          text: "Кто остался рядом с кошкой после беды?",
          answers: ["Котята", "Соседи", "Гости", "Слуги"],
          correctIndex: 0,
          hint: "Самые родные",
          audio: {
            question: "audio/koshkin-dom/r3q2-question.mp3",
            answers: [
              "audio/koshkin-dom/r3q2-a1.mp3",
              "audio/koshkin-dom/r3q2-a2.mp3",
              "audio/koshkin-dom/r3q2-a3.mp3",
              "audio/koshkin-dom/r3q2-a4.mp3"
            ]
          }
        },
        {
          text: "Чем заканчивается сказка?",
          answers: ["Все живут дружно", "Все уходят", "Дом остается пустым", "Кошка исчезает"],
          correctIndex: 0,
          hint: "Счастливый конец",
          audio: {
            question: "audio/koshkin-dom/r3q3-question.mp3",
            answers: [
              "audio/koshkin-dom/r3q3-a1.mp3",
              "audio/koshkin-dom/r3q3-a2.mp3",
              "audio/koshkin-dom/r3q3-a3.mp3",
              "audio/koshkin-dom/r3q3-a4.mp3"
            ]
          }
        }
      ]
    }
  ],
  audio: {
    correct: "audio/koshkin-dom/correct.mp3",
    wrong: "audio/koshkin-dom/wrong.mp3",
    complete: "audio/koshkin-dom/complete.mp3"
  }
};

let state = {
  roundIndex: 0,
  questionIndex: 0,
  answers: {}
};

let animEnabled = true;
let autoAudio = true;
let audioUnlocked = false;
let currentAudio = null;

const screenHome = document.getElementById("screenHome");
const screenRound = document.getElementById("screenRound");
const screenQuiz = document.getElementById("screenQuiz");
const screenResult = document.getElementById("screenResult");

const questionText = document.getElementById("questionText");
const answersEl = document.getElementById("answers");
const counter = document.getElementById("counter");
const progressBar = document.getElementById("progressBar");
const pool = document.getElementById("pool");
const hintEl = document.getElementById("hint");
const feedback = document.getElementById("feedback");
const liveRegion = document.getElementById("liveRegion");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const speakQuestionBtn = document.getElementById("speakQuestionBtn");
const speakAnswersBtn = document.getElementById("speakAnswersBtn");
const toggleAnim = document.getElementById("toggleAnim");
const audioToggle = document.getElementById("audioToggle");

const testKoshkin = document.getElementById("testKoshkin");
const roundTitle = document.getElementById("roundTitle");
const roundInfo = document.getElementById("roundInfo");
const roundStartBtn = document.getElementById("roundStartBtn");

const restartBtn = document.getElementById("restartBtn");
const homeBtn = document.getElementById("homeBtn");

function showScreen(screen) {
  [screenHome, screenRound, screenQuiz, screenResult].forEach((el) => {
    el.classList.add("hidden");
  });
  screen.classList.remove("hidden");
}

function announce(text) {
  liveRegion.textContent = "";
  setTimeout(() => {
    liveRegion.textContent = text;
  }, 20);
}

function stopAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
}

function playAudio(src) {
  if (!src) return;
  stopAudio();
  currentAudio = new Audio(src);
  currentAudio.play().then(() => {
    audioUnlocked = true;
  }).catch(() => {
    // Автовоспроизведение может быть запрещено.
  });
}

function playSequence(srcList = []) {
  if (!srcList.length) return;
  stopAudio();
  let index = 0;
  const playNext = () => {
    if (index >= srcList.length) return;
    currentAudio = new Audio(srcList[index]);
    currentAudio.play().then(() => {
      audioUnlocked = true;
    }).catch(() => {
      // Игнорируем блокировку автозвука.
    });
    currentAudio.addEventListener("ended", () => {
      index += 1;
      playNext();
    });
  };
  playNext();
}

function totalQuestions() {
  return testData.rounds.reduce((sum, round) => sum + round.questions.length, 0);
}

function flatIndex(roundIndex, questionIndex) {
  let idx = 0;
  for (let r = 0; r < roundIndex; r += 1) {
    idx += testData.rounds[r].questions.length;
  }
  return idx + questionIndex;
}

function currentQuestion() {
  return testData.rounds[state.roundIndex].questions[state.questionIndex];
}

function answerKey(roundIndex, questionIndex) {
  return `${roundIndex}-${questionIndex}`;
}

function renderPool() {
  pool.innerHTML = "";
  testData.rounds.forEach((round, rIndex) => {
    round.questions.forEach((q, qIndex) => {
      const li = document.createElement("li");
      li.textContent = `${round.title}: ${q.text}`;
      li.dataset.key = answerKey(rIndex, qIndex);
      pool.appendChild(li);
    });
  });
}

function renderRoundScreen() {
  const round = testData.rounds[state.roundIndex];
  roundTitle.textContent = `${round.title}`;
  roundInfo.textContent = round.info;
  showScreen(screenRound);
  announce(`${round.title}. ${round.info}`);
  if (autoAudio) playAudio(round.audio);
}

function renderQuestion({ silent = false } = {}) {
  const q = currentQuestion();
  const key = answerKey(state.roundIndex, state.questionIndex);
  const saved = state.answers[key] || { selectedIndex: null, correct: false, wrongIndexes: [] };

  questionText.textContent = q.text;
  hintEl.textContent = `Подсказка: ${q.hint}`;
  feedback.textContent = saved.feedback || "";

  const indexInTest = flatIndex(state.roundIndex, state.questionIndex) + 1;
  counter.textContent = `Вопрос ${indexInTest} из ${totalQuestions()}`;
  progressBar.style.width = `${(indexInTest / totalQuestions()) * 100}%`;

  answersEl.innerHTML = "";
  q.answers.forEach((answer, idx) => {
    const btn = document.createElement("button");
    btn.className = "answer";
    btn.type = "button";
    btn.textContent = answer;
    btn.addEventListener("click", () => selectAnswer(idx));

    if (saved.selectedIndex === idx) {
      btn.classList.add("selected");
      if (saved.correct) btn.classList.add("correct");
    }
    if (saved.wrongIndexes.includes(idx)) {
      btn.classList.add("wrong");
    }

    answersEl.appendChild(btn);
  });

  nextBtn.disabled = !saved.correct;
  prevBtn.disabled = state.roundIndex === 0 && state.questionIndex === 0;

  showScreen(screenQuiz);
  if (!silent) {
    announce(q.text);
    if (autoAudio) playAudio(q.audio.question);
  }
}

function selectAnswer(index) {
  const q = currentQuestion();
  const key = answerKey(state.roundIndex, state.questionIndex);
  const saved = state.answers[key] || { selectedIndex: null, correct: false, wrongIndexes: [] };

  saved.selectedIndex = index;

  if (index === q.correctIndex) {
    saved.correct = true;
    saved.feedback = "Правильно!";
    announce("Правильно");
    if (autoAudio) playAudio(testData.audio.correct);
  } else {
    saved.correct = false;
    if (!saved.wrongIndexes.includes(index)) {
      saved.wrongIndexes.push(index);
    }
    saved.feedback = "Неверно. Попробуй еще раз.";
    announce("Неверно. Попробуй еще раз.");
    if (autoAudio) playAudio(testData.audio.wrong);
  }

  state.answers[key] = saved;
  renderQuestion({ silent: true });
}

function goNext() {
  const round = testData.rounds[state.roundIndex];
  if (state.questionIndex < round.questions.length - 1) {
    state.questionIndex += 1;
    renderQuestion();
    return;
  }

  if (state.roundIndex < testData.rounds.length - 1) {
    state.roundIndex += 1;
    state.questionIndex = 0;
    renderRoundScreen();
    return;
  }

  showScreen(screenResult);
  announce("Поздравляем! Ты прошел тест.");
  if (autoAudio) playAudio(testData.audio.complete);
}

function goPrev() {
  if (state.questionIndex > 0) {
    state.questionIndex -= 1;
  } else if (state.roundIndex > 0) {
    state.roundIndex -= 1;
    const prevRound = testData.rounds[state.roundIndex];
    state.questionIndex = prevRound.questions.length - 1;
  }
  renderQuestion();
}

function startTest() {
  state = { roundIndex: 0, questionIndex: 0, answers: {} };
  renderRoundScreen();
}

function startRound() {
  renderQuestion();
}

function toggleAnimations() {
  animEnabled = !animEnabled;
  document.body.classList.toggle("anim", animEnabled);
  toggleAnim.textContent = animEnabled ? "Анимации: вкл" : "Анимации: выкл";
  toggleAnim.setAttribute("aria-pressed", String(animEnabled));
}

function toggleAudioMode() {
  autoAudio = !autoAudio;
  audioToggle.textContent = autoAudio ? "Озвучка: авто" : "Озвучка: по кнопке";
  audioToggle.setAttribute("aria-pressed", String(autoAudio));
}

function speakQuestion() {
  const q = currentQuestion();
  playAudio(q.audio.question);
}

function speakAnswers() {
  const q = currentQuestion();
  playSequence(q.audio.answers);
}

function unlockAudio() {
  audioUnlocked = true;
}

function goHome() {
  showScreen(screenHome);
}

function restartTest() {
  startTest();
}

testKoshkin.addEventListener("click", () => {
  unlockAudio();
  startTest();
});

roundStartBtn.addEventListener("click", () => {
  unlockAudio();
  startRound();
});

nextBtn.addEventListener("click", goNext);
prevBtn.addEventListener("click", goPrev);

speakQuestionBtn.addEventListener("click", speakQuestion);
speakAnswersBtn.addEventListener("click", speakAnswers);

toggleAnim.addEventListener("click", toggleAnimations);
audioToggle.addEventListener("click", toggleAudioMode);

restartBtn.addEventListener("click", restartTest);
homeBtn.addEventListener("click", goHome);

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") goNext();
  if (event.key === "ArrowLeft") goPrev();
});

document.body.classList.add("anim");
toggleAnim.setAttribute("aria-pressed", "true");
audioToggle.setAttribute("aria-pressed", "true");
showScreen(screenHome);
renderPool();
