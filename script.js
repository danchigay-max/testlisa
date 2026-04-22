const testData = {
  id: "koshkin-dom",
  title: "Кошкин дом",
  heroes: {
    quiz: [
      "images/макаримушка.png",
      "images/кролик.png",
      "images/макаримушка машет.png",
      "images/кролик 2.png"
    ]
  },
  intro: {
    text: "Всем привет! Я — Макаримушка. Я всё на свете знаю про сказки! А я — кролик Ириска! Мы попали в волшебную страну, где живёт Кошка из сказки Самуила Маршака! Готовы? Тогда ушки на макушке! Погнали!",
    audio: "audio/koshkin-dom/привет. слово.mp3"
  },
  rounds: [
    {
      title: "Раунд 1",
      subtitle: "«Кто есть кто?»",
      info: "В этом раунде нужно отгадать персонажа по описанию.",
      audio: "audio/koshkin-dom/1 раунд.mp3",
      questions: [
        {
          text: "Этот герой ходит в сапожках, носит серьги, и платье.",
          answers: ["Кот Василий", "Кошка", "Коза"],
          correctIndex: 1,
          audio: {
            question: "audio/koshkin-dom/1 вопрос.mp3",
            answers: [
              "audio/koshkin-dom/кот василий 1 вопр 1 ответ.mp3",
              "audio/koshkin-dom/кошка 2 отв 1 вопр.mp3",
              "audio/koshkin-dom/коза 1 вопр 3 отв.mp3"
            ]
          }
        },
        {
          text: "Боевой гость, который любит петь по утрам. У него есть жена-наседка.",
          answers: ["Петух", "Попугай", "Кот Василий"],
          correctIndex: 0,
          audio: {
            question: "audio/koshkin-dom/2 вопрос.mp3",
            answers: [
              "audio/koshkin-dom/петух 2 вопр 2 ответ.mp3",
              "audio/koshkin-dom/попугай 2 вопр 1 ответ.mp3",
              "audio/koshkin-dom/кот василий 1 вопр 1 ответ.mp3"
            ]
          }
        },
        {
          text: "Двое родственников, которые стучались под окно богатой тёти, чтобы их пустили переночевать.",
          answers: ["Цыплята", "Поросята", "Котята"],
          correctIndex: 2,
          audio: {
            question: "audio/koshkin-dom/3 вопрос.mp3",
            answers: [
              "audio/koshkin-dom/цыплята 3 вопр 1 отв.mp3",
              "audio/koshkin-dom/поросята 3 вопр 2 отв.mp3",
              "audio/koshkin-dom/котята 3 вопр 3 отв.mp3"
            ]
          }
        }
      ]
    },
    {
      title: "Раунд 2",
      subtitle: "«Кто это сказал?»",
      info: "Ведущий зачитывает фразу из сказки. Задача — вспомнить, кто её произнёс.",
      audio: "audio/koshkin-dom/раунд 2.mp3",
      questions: [
        {
          text: "«Какой позор! Была сама котёнком я когда-то.»",
          answers: ["Коза", "Кошка", "Корова"],
          correctIndex: 1,
          audio: {
            question: "audio/koshkin-dom/2 раунд 1 вопрос.mp3",
            answers: [
              "audio/koshkin-dom/коза 2 раунд 1 вопр 1 отв.mp3",
              "audio/koshkin-dom/кошка 2 отв 1 вопр.mp3",
              "audio/koshkin-dom/корова 2 раунд 1 вопр 2 отв.mp3"
            ]
          }
        },
        {
          text: "«Вот это стол — на нём сидят!..»",
          answers: ["Кошка", "Мышка", "Хрюшка"],
          correctIndex: 2,
          audio: {
            question: "audio/koshkin-dom/2 раунд 2 вопр.mp3",
            answers: [
              "audio/koshkin-dom/кошка 2 раунд 2 вопр 1 отв.mp3",
              "audio/koshkin-dom/мышка 2 раунд 2 вопр 2 отв.mp3",
              "audio/koshkin-dom/хрюшка 2 раунд 2 вопр 3 отв.mp3"
            ]
          }
        },
        {
          text: "«Борода твоя долга, да не выросли рога».",
          answers: ["Коза", "Корова", "Лошадка"],
          correctIndex: 0,
          audio: {
            question: "audio/koshkin-dom/2 раунд 3 вопр.mp3",
            answers: [
              "audio/koshkin-dom/коза 2 раунд 3 вопр 1 отв.mp3",
              "audio/koshkin-dom/корова 2 раунд 1 вопр 2 отв.mp3",
              "audio/koshkin-dom/лошадка 2 раунд 3 вопр 2 отв.mp3"
            ]
          }
        }
      ]
    },
    {
      title: "Раунд 3",
      subtitle: "«Что в сундучке?»",
      info: "Вопросы о предметах, которые встречаются в сказке.",
      audio: "audio/koshkin-dom/3 раунд.mp3",
      questions: [
        {
          text: "Какое музыкальное «чудо» купила кошка у одного осла?",
          answers: ["Пианино", "Барабан", "Гитару"],
          correctIndex: 2,
          audio: {
            question: "audio/koshkin-dom/3 раунд 1 вопр.mp3",
            answers: [
              "audio/koshkin-dom/пианино 3 раунд 1 вопр 1 отв.mp3",
              "audio/koshkin-dom/барабан 3 раунд 1 вопр 2 отв.mp3",
              "audio/koshkin-dom/гитара 3 раунд 1 вопр 3 отв.mp3"
            ]
          }
        },
        {
          text: "Чем был украшен ковёр на лестнице в доме кошки?",
          answers: ["Цветами", "Золотым узором", "Рыбками"],
          correctIndex: 1,
          audio: {
            question: "audio/koshkin-dom/3 раунд 2 вопр.mp3",
            answers: [
              "audio/koshkin-dom/цветы 3 раунд 2 вопр 1 отв.mp3",
              "audio/koshkin-dom/золотой узор 3 раунд 2 вопр 2 отв.mp3",
              "audio/koshkin-dom/рыбки 3 раунд 2 вопр 3 отв.mp3"
            ]
          }
        },
        {
          text: "Сколько поросят было у свиньи?",
          answers: ["7", "3", "10"],
          correctIndex: 2,
          audio: {
            question: "audio/koshkin-dom/3 раунд 3 вопр.mp3",
            answers: [
              "audio/koshkin-dom/7 3 раунд 3 вопр 1 отв.mp3",
              "audio/koshkin-dom/3 3 раунд 3 вопр 2 отв.mp3",
              "audio/koshkin-dom/10 3 раунд 3 вопр 3 отв.mp3"
            ]
          }
        }
      ]
    }
  ],
  outro: {
    text: "Вот и всё, друзья. Сказка закончилась, но не уходит далеко. Вы сегодня были молодцы — слушали, отвечали, не боялись ошибаться. Кошка с котятами теперь живут дружно, а мы прощаемся… до новой сказки!",
    audio: "audio/koshkin-dom/заключение.mp3"
  }
};

let state = {
  roundIndex: 0,
  questionIndex: 0,
  answers: {},
  autoNextTimer: null,
  countdownInterval: null
};

let animEnabled = true;
let autoAudio = true;
let audioUnlocked = false;
let currentAudio = null;
const settingsStorageKey = "koshkinDomA11ySettings";

const defaultA11ySettings = {
  fontScale: 100,
  spacing: "normal",
  uiScale: "100",
  theme: "blue"
};

const screenHome = document.getElementById("screenHome");
const screenIntro = document.getElementById("screenIntro");
const screenRound = document.getElementById("screenRound");
const screenQuiz = document.getElementById("screenQuiz");
const screenResult = document.getElementById("screenResult");

const questionText = document.getElementById("questionText");
const answersEl = document.getElementById("answers");
const counter = document.getElementById("counter");
const progressBar = document.getElementById("progressBar");
const feedback = document.getElementById("feedback");
const liveRegion = document.getElementById("liveRegion");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const speakQuestionBtn = document.getElementById("speakQuestionBtn");
const toggleAnim = document.getElementById("toggleAnim");
const audioToggle = document.getElementById("audioToggle");

const testKoshkin = document.getElementById("testKoshkin");
const roundTitle = document.getElementById("roundTitle");
const roundSubtitle = document.getElementById("roundSubtitle");
const roundInfo = document.getElementById("roundInfo");
const roundStartBtn = document.getElementById("roundStartBtn");
const introText = document.getElementById("introText");
const introStartBtn = document.getElementById("introStartBtn");

const restartBtn = document.getElementById("restartBtn");
const homeBtn = document.getElementById("homeBtn");

const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");
const loaderWrap = document.getElementById("loaderWrap");
const loaderCountdown = document.getElementById("loaderCountdown");
const confettiContainer = document.getElementById("confettiContainer");
const quizHero = document.getElementById("quizHero");
const answersRow = document.getElementById("answersRow");
const fontRange = document.getElementById("fontRange");
const fontRangeValue = document.getElementById("fontRangeValue");
const spaceNormal = document.getElementById("spaceNormal");
const spaceWide = document.getElementById("spaceWide");
const spaceWidest = document.getElementById("spaceWidest");
const scale95 = document.getElementById("scale95");
const scale100 = document.getElementById("scale100");
const scale110 = document.getElementById("scale110");
const themeBlue = document.getElementById("themeBlue");
const themeLightDark = document.getElementById("themeLightDark");
const themeDarkLight = document.getElementById("themeDarkLight");
const themeBook = document.getElementById("themeBook");
const themeBrownGreen = document.getElementById("themeBrownGreen");

function showScreen(screen) {
  [screenHome, screenIntro, screenRound, screenQuiz, screenResult].forEach((el) => {
    el.classList.add("hidden");
  });
  screen.classList.remove("hidden");
}

function setActiveButton(buttons, activeButton) {
  buttons.forEach((btn) => {
    btn.classList.toggle("is-active", btn === activeButton);
    btn.setAttribute("aria-pressed", String(btn === activeButton));
  });
}

function saveA11ySettings() {
  const payload = {
    fontScale: Number(fontRange.value) || defaultA11ySettings.fontScale,
    spacing: document.body.dataset.spacing || defaultA11ySettings.spacing,
    uiScale: document.body.dataset.uiScale || defaultA11ySettings.uiScale,
    theme: document.body.dataset.theme || defaultA11ySettings.theme
  };
  localStorage.setItem(settingsStorageKey, JSON.stringify(payload));
}

function applyA11ySettings(settings) {
  const parsedScale = Number(settings.fontScale);
  const safeScale = Number.isFinite(parsedScale) ? Math.min(130, Math.max(85, parsedScale)) : defaultA11ySettings.fontScale;

  document.body.dataset.spacing = settings.spacing;
  document.body.dataset.uiScale = settings.uiScale;
  document.body.dataset.theme = settings.theme;
  document.documentElement.style.setProperty("--font-scale", String(safeScale / 100));
  fontRange.value = String(safeScale);
  fontRangeValue.textContent = `${safeScale}%`;

  setActiveButton([spaceNormal, spaceWide, spaceWidest], settings.spacing === "wide" ? spaceWide : settings.spacing === "widest" ? spaceWidest : spaceNormal);
  setActiveButton([scale95, scale100, scale110], settings.uiScale === "95" ? scale95 : settings.uiScale === "110" ? scale110 : scale100);
  setActiveButton([themeBlue, themeLightDark, themeDarkLight, themeBook, themeBrownGreen],
    settings.theme === "blue" ? themeBlue :
    settings.theme === "light-dark" ? themeLightDark :
    settings.theme === "dark-light" ? themeDarkLight :
      settings.theme === "book" ? themeBook :
        settings.theme === "brown-green" ? themeBrownGreen : themeBlue);
}

function loadA11ySettings() {
  try {
    const raw = localStorage.getItem(settingsStorageKey);
    if (!raw) return defaultA11ySettings;
    const parsed = JSON.parse(raw);
    const loaded = { ...defaultA11ySettings, ...parsed };
    if (Object.prototype.hasOwnProperty.call(parsed, "fontSize") && !Object.prototype.hasOwnProperty.call(parsed, "fontScale")) {
      loaded.theme = "blue";
    }
    loaded.fontScale = Number(loaded.fontScale) || defaultA11ySettings.fontScale;
    return loaded;
  } catch (error) {
    return defaultA11ySettings;
  }
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

function playAudio(src, onEnd) {
  if (!src) return;
  stopAudio();
  currentAudio = new Audio(src);
  currentAudio.play().then(() => {
    audioUnlocked = true;
  }).catch(() => {});
  if (onEnd) {
    currentAudio.addEventListener("ended", () => {
      onEnd();
    }, { once: true });
  }
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

function clearAutoNext() {
  if (state.autoNextTimer) {
    clearTimeout(state.autoNextTimer);
    state.autoNextTimer = null;
  }
  if (state.countdownInterval) {
    clearInterval(state.countdownInterval);
    state.countdownInterval = null;
  }
  hideLoader();
}

function showLoader(text) {
  loaderWrap.classList.remove("hidden");
  loaderCountdown.textContent = text || "";
  loaderCountdown.classList.remove("countdown-number");
}

function hideLoader() {
  loaderWrap.classList.add("hidden");
  loaderCountdown.textContent = "";
}

function showCountdown(seconds, callback) {
  let count = seconds;
  loaderCountdown.textContent = count;
  loaderCountdown.classList.add("countdown-number");
  loaderWrap.classList.remove("hidden");
  state.countdownInterval = setInterval(() => {
    count--;
    if (count <= 0) {
      clearInterval(state.countdownInterval);
      state.countdownInterval = null;
      loaderCountdown.textContent = "";
      callback();
    } else {
      loaderCountdown.textContent = count;
    }
  }, 1000);
}

function setQuizHero(questionGlobalIndex) {
  const heroIndex = questionGlobalIndex % testData.heroes.quiz.length;
  quizHero.src = testData.heroes.quiz[heroIndex];
  quizHero.alt = "";

  // Чередование: чётные — герой слева, нечётные — справа
  if (questionGlobalIndex % 2 === 0) {
    answersRow.classList.remove("hero-right");
    answersRow.classList.add("hero-left");
  } else {
    answersRow.classList.remove("hero-left");
    answersRow.classList.add("hero-right");
  }
}

function launchConfetti() {
  confettiContainer.innerHTML = "";
  const colors = ["#1565c0", "#42a5f5", "#0d47a1", "#1e88e5", "#64b5f6", "#ffc107", "#ff9800"];
  const shapes = ["■", "●", "▲", "★", "♦", "✦"];
  for (let i = 0; i < 60; i++) {
    const el = document.createElement("span");
    el.className = "confetti";
    el.textContent = shapes[Math.floor(Math.random() * shapes.length)];
    el.style.color = colors[Math.floor(Math.random() * colors.length)];
    el.style.left = Math.random() * 100 + "%";
    el.style.animationDelay = Math.random() * 2 + "s";
    el.style.animationDuration = (2 + Math.random() * 3) + "s";
    el.style.fontSize = (12 + Math.random() * 18) + "px";
    confettiContainer.appendChild(el);
  }
  setTimeout(() => {
    confettiContainer.innerHTML = "";
  }, 6000);
}

function renderRoundScreen() {
  clearAutoNext();
  const round = testData.rounds[state.roundIndex];
  roundTitle.textContent = round.title;
  roundSubtitle.textContent = round.subtitle;
  roundInfo.textContent = round.info;
  showScreen(screenRound);
  announce(`${round.title}. ${round.subtitle}. ${round.info}`);
  if (autoAudio) playAudio(round.audio);
}

function renderQuestion({ silent = false } = {}) {
  clearAutoNext();
  const q = currentQuestion();
  const key = answerKey(state.roundIndex, state.questionIndex);
  const saved = state.answers[key] || { selectedIndex: null, correct: false, wrongIndexes: [] };

  const indexInTest = flatIndex(state.roundIndex, state.questionIndex) + 1;

  // Герой вопроса
  setQuizHero(indexInTest - 1);

  questionText.textContent = q.text;
  feedback.textContent = saved.feedback || "";
  feedback.className = "feedback";

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

  if (saved.correct) return;

  saved.selectedIndex = index;

  if (index === q.correctIndex) {
    saved.correct = true;
    saved.feedback = "Правильно! Молодец!";
    announce("Правильно! Молодец!");

    const isLastQuestion = (state.roundIndex === testData.rounds.length - 1) &&
                           (state.questionIndex === testData.rounds[state.roundIndex].questions.length - 1);

    if (autoAudio) {
      playAudio(q.audio.answers[index], () => {
        if (isLastQuestion) {
          showCountdown(3, () => {
            goNext();
          });
        } else {
          showLoader("Следующий вопрос через…");
          state.autoNextTimer = setTimeout(() => {
            goNext();
          }, 3000);
        }
      });
    } else {
      if (isLastQuestion) {
        showCountdown(3, () => {
          goNext();
        });
      } else {
        showLoader("Следующий вопрос через…");
        state.autoNextTimer = setTimeout(() => {
          goNext();
        }, 3000);
      }
    }
  } else {
    saved.correct = false;
    if (!saved.wrongIndexes.includes(index)) {
      saved.wrongIndexes.push(index);
    }
    saved.feedback = "Неверно. Попробуй ещё раз!";
    announce("Неверно. Попробуй ещё раз!");
    if (autoAudio) playAudio(q.audio.answers[index]);
  }

  state.answers[key] = saved;
  renderQuestion({ silent: true });
}

function goNext() {
  clearAutoNext();
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

  renderResultScreen();
}

function goPrev() {
  clearAutoNext();
  if (state.questionIndex > 0) {
    state.questionIndex -= 1;
  } else if (state.roundIndex > 0) {
    state.roundIndex -= 1;
    const prevRound = testData.rounds[state.roundIndex];
    state.questionIndex = prevRound.questions.length - 1;
  }
  renderQuestion();
}

function renderResultScreen() {
  clearAutoNext();
  resultTitle.textContent = "Поздравляем!";
  resultText.textContent = testData.outro.text;
  showScreen(screenResult);
  announce("Поздравляем! Ты прошёл тест по сказке Кошкин дом!");
  launchConfetti();
  if (autoAudio) playAudio(testData.outro.audio);
}

function startTest() {
  state = { roundIndex: 0, questionIndex: 0, answers: {} };
  renderIntroScreen();
}

function renderIntroScreen() {
  introText.textContent = testData.intro.text;
  showScreen(screenIntro);
  announce(testData.intro.text);
  if (autoAudio) playAudio(testData.intro.audio);
}

function startQuizFromIntro() {
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

function unlockAudio() {
  audioUnlocked = true;
}

function goHome() {
  clearAutoNext();
  confettiContainer.innerHTML = "";
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

introStartBtn.addEventListener("click", () => {
  unlockAudio();
  startQuizFromIntro();
});

nextBtn.addEventListener("click", goNext);
prevBtn.addEventListener("click", goPrev);

speakQuestionBtn.addEventListener("click", speakQuestion);

toggleAnim.addEventListener("click", toggleAnimations);
audioToggle.addEventListener("click", toggleAudioMode);

restartBtn.addEventListener("click", restartTest);
homeBtn.addEventListener("click", goHome);

fontRange.addEventListener("input", () => {
  applyA11ySettings({
    fontScale: Number(fontRange.value),
    spacing: document.body.dataset.spacing,
    uiScale: document.body.dataset.uiScale,
    theme: document.body.dataset.theme
  });
  saveA11ySettings();
});

spaceNormal.addEventListener("click", () => {
  applyA11ySettings({
    fontScale: Number(fontRange.value),
    spacing: "normal",
    uiScale: document.body.dataset.uiScale,
    theme: document.body.dataset.theme
  });
  saveA11ySettings();
});

spaceWide.addEventListener("click", () => {
  applyA11ySettings({
    fontScale: Number(fontRange.value),
    spacing: "wide",
    uiScale: document.body.dataset.uiScale,
    theme: document.body.dataset.theme
  });
  saveA11ySettings();
});

spaceWidest.addEventListener("click", () => {
  applyA11ySettings({
    fontScale: Number(fontRange.value),
    spacing: "widest",
    uiScale: document.body.dataset.uiScale,
    theme: document.body.dataset.theme
  });
  saveA11ySettings();
});

scale95.addEventListener("click", () => {
  applyA11ySettings({
    fontScale: Number(fontRange.value),
    spacing: document.body.dataset.spacing,
    uiScale: "95",
    theme: document.body.dataset.theme
  });
  saveA11ySettings();
});

scale100.addEventListener("click", () => {
  applyA11ySettings({
    fontScale: Number(fontRange.value),
    spacing: document.body.dataset.spacing,
    uiScale: "100",
    theme: document.body.dataset.theme
  });
  saveA11ySettings();
});

scale110.addEventListener("click", () => {
  applyA11ySettings({
    fontScale: Number(fontRange.value),
    spacing: document.body.dataset.spacing,
    uiScale: "110",
    theme: document.body.dataset.theme
  });
  saveA11ySettings();
});

themeBlue.addEventListener("click", () => {
  applyA11ySettings({
    fontScale: Number(fontRange.value),
    spacing: document.body.dataset.spacing,
    uiScale: document.body.dataset.uiScale,
    theme: "blue"
  });
  saveA11ySettings();
});

themeLightDark.addEventListener("click", () => {
  applyA11ySettings({
    fontScale: Number(fontRange.value),
    spacing: document.body.dataset.spacing,
    uiScale: document.body.dataset.uiScale,
    theme: "light-dark"
  });
  saveA11ySettings();
});

themeDarkLight.addEventListener("click", () => {
  applyA11ySettings({
    fontScale: Number(fontRange.value),
    spacing: document.body.dataset.spacing,
    uiScale: document.body.dataset.uiScale,
    theme: "dark-light"
  });
  saveA11ySettings();
});

themeBook.addEventListener("click", () => {
  applyA11ySettings({
    fontScale: Number(fontRange.value),
    spacing: document.body.dataset.spacing,
    uiScale: document.body.dataset.uiScale,
    theme: "book"
  });
  saveA11ySettings();
});

themeBrownGreen.addEventListener("click", () => {
  applyA11ySettings({
    fontScale: Number(fontRange.value),
    spacing: document.body.dataset.spacing,
    uiScale: document.body.dataset.uiScale,
    theme: "brown-green"
  });
  saveA11ySettings();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") goNext();
  if (event.key === "ArrowLeft") goPrev();
});

document.body.classList.add("anim");
toggleAnim.setAttribute("aria-pressed", "true");
audioToggle.setAttribute("aria-pressed", "true");
applyA11ySettings(loadA11ySettings());
showScreen(screenHome);
