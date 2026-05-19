import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Heart, Volume2, Turtle, Camera, Sparkles, CheckCircle2, LockKeyhole, RotateCcw } from "lucide-react";

const photos = [
  "/images/clock.jpg",
  "/images/vietnam.jpg",
  "/images/street.jpg",
  "/images/warm.jpg",
  "/images/city.jpg",
  "/images/photo6.jpg",
  "/images/photo7.jpg",
  "/images/photo8.jpg",
  "/images/photo9.jpg",
  "/images/photo10.jpg",
  "/images/photo11.jpg",
  "/images/photo12.jpg",
];

const lessons = [
  {
    title: "Words Jim already knows",
    subtitle: "A warm little start",
    photo: photos[0],
    phrases: [
      { pl: "Dobrze", en: "Good / okay", pron: "DOH-bzheh", slow: "DOH… bzheh" },
      { pl: "Dzień dobry", en: "Good morning / good afternoon", pron: "jen DOH-brih", slow: "jen… DOH… brih" },
      { pl: "Do widzenia", en: "Goodbye", pron: "doh vee-DZEN-yah", slow: "doh… vee… DZEN… yah" },
      { pl: "Kawa", en: "Coffee", pron: "KAH-vah", slow: "KAH… vah" },
      { pl: "Dobranoc", en: "Good night", pron: "doh-BRAH-nohts", slow: "doh… BRAH… nohts" },
      { pl: "Kocham cię", en: "I love you", pron: "KOH-ham chyeh", slow: "KOH… ham… chyeh" },
    ],
  },
  {
    title: "For my girlfriend",
    subtitle: "Romantic Polish he can actually use",
    photo: photos[3],
    phrases: [
      { pl: "Tęsknię za tobą", en: "I miss you", pron: "TESK-nyeh zah TOH-boh", slow: "TESK… nyeh… zah… TOH… boh" },
      { pl: "Jesteś piękna", en: "You are beautiful", pron: "YES-tesh PYENK-nah", slow: "YES… tesh… PYENK… nah" },
      { pl: "Myślę o tobie", en: "I’m thinking about you", pron: "MISH-leh oh TOH-byeh", slow: "MISH… leh… oh… TOH… byeh" },
      { pl: "Chcę cię zobaczyć", en: "I want to see you", pron: "htseh chyeh zoh-BAH-chitch", slow: "htseh… chyeh… zoh… BAH… chitch" },
      { pl: "Jesteś moja", en: "You are mine", pron: "YES-tesh MOH-yah", slow: "YES… tesh… MOH… yah" },
      { pl: "Moje serce", en: "My heart", pron: "MOH-yeh SEHR-tseh", slow: "MOH… yeh… SEHR… tseh" },
    ],
  },
  {
    title: "Text me in Polish",
    subtitle: "Tiny messages for everyday love",
    photo: photos[4],
    phrases: [
      { pl: "Co robisz?", en: "What are you doing?", pron: "tsoh ROH-beesh", slow: "tsoh… ROH… beesh" },
      { pl: "Dobrego dnia", en: "Have a good day", pron: "doh-BREH-goh dnyah", slow: "doh… BREH… goh… dnyah" },
      { pl: "Śpij dobrze", en: "Sleep well", pron: "shpeey DOH-bzheh", slow: "shpeey… DOH… bzheh" },
      { pl: "Buziaki", en: "Kisses", pron: "boo-ZYAH-kee", slow: "boo… ZYAH… kee" },
      { pl: "Już tęsknię", en: "I already miss you", pron: "yoosh TESK-nyeh", slow: "yoosh… TESK… nyeh" },
    ],
  },
  {
    title: "Everyday Polish",
    subtitle: "Small phrases for real life",
    photo: photos[2],
    phrases: [
      { pl: "Jak się masz?", en: "How are you?", pron: "yahk shyeh mahsh", slow: "yahk… shyeh… mahsh" },
      { pl: "Nie rozumiem", en: "I don’t understand", pron: "nyeh roh-ZOO-myem", slow: "nyeh… roh… ZOO… myem" },
      { pl: "Proszę", en: "Please / here you go", pron: "PROH-sheh", slow: "PROH… sheh" },
      { pl: "Dziękuję", en: "Thank you", pron: "jen-KOO-yeh", slow: "jen… KOO… yeh" },
      { pl: "Przepraszam", en: "Sorry / excuse me", pron: "psheh-PRAH-sham", slow: "psheh… PRAH… sham" },
      { pl: "Jeszcze raz", en: "One more time", pron: "YESH-cheh rahz", slow: "YESH… cheh… rahz" },
    ],
  },
  {
    title: "Coffee date Polish",
    subtitle: "Because he already knows kawa",
    photo: photos[1],
    phrases: [
      { pl: "Chcę kawę", en: "I want coffee", pron: "htseh KAH-veh", slow: "htseh… KAH… veh" },
      { pl: "Poproszę kawę", en: "Coffee, please", pron: "poh-PROH-sheh KAH-veh", slow: "poh… PROH… sheh… KAH… veh" },
      { pl: "To jest pyszne", en: "This is delicious", pron: "toh yest PISH-neh", slow: "toh… yest… PISH… neh" },
      { pl: "Rachunek poproszę", en: "The bill, please", pron: "rah-HOO-nek poh-PROH-sheh", slow: "rah… HOO… nek… poh… PROH… sheh" },
      { pl: "Na zdrowie", en: "Cheers / bless you", pron: "nah ZDROH-vyeh", slow: "nah… ZDROH… vyeh" },
    ],
  },
];

const flashcards = [
  { pl: "Tak", en: "Yes", pron: "tahk" },
  { pl: "Nie", en: "No", pron: "nyeh" },
  { pl: "Cześć", en: "Hi / bye", pron: "cheshch" },
  { pl: "Dzień dobry", en: "Good morning / good afternoon", pron: "jen DOH-brih" },
  { pl: "Dobry wieczór", en: "Good evening", pron: "DOH-brih VYEH-choor" },
  { pl: "Dobranoc", en: "Good night", pron: "doh-BRAH-nohts" },
  { pl: "Do widzenia", en: "Goodbye", pron: "doh vee-DZEN-yah" },
  { pl: "Proszę", en: "Please / here you go", pron: "PROH-sheh" },
  { pl: "Dziękuję", en: "Thank you", pron: "jen-KOO-yeh" },
  { pl: "Przepraszam", en: "Sorry / excuse me", pron: "psheh-PRAH-sham" },
  { pl: "Jak się masz?", en: "How are you?", pron: "yahk shyeh mahsh" },
  { pl: "Dobrze", en: "Good / okay", pron: "DOH-bzheh" },
  { pl: "Nie rozumiem", en: "I don’t understand", pron: "nyeh roh-ZOO-myem" },
  { pl: "Powtórz proszę", en: "Repeat, please", pron: "pov-TOOSH PROH-sheh" },
  { pl: "Mów wolniej", en: "Speak slower", pron: "moov VOL-nyeh" },
  { pl: "Ile to kosztuje?", en: "How much does it cost?", pron: "EE-leh toh kohs-TOO-yeh" },
  { pl: "Gdzie jest toaleta?", en: "Where is the bathroom?", pron: "gjeh yest toh-ah-LEH-tah" },
  { pl: "Chcę kawę", en: "I want coffee", pron: "htseh KAH-veh" },
  { pl: "Kocham cię", en: "I love you", pron: "KOH-ham chyeh" },
  { pl: "Tęsknię za tobą", en: "I miss you", pron: "TESK-nyeh zah TOH-boh" },
];

const dailyPhrases = [
  { pl: "Kocham cię", en: "I love you", pron: "KOH-ham chyeh" },
  { pl: "Tęsknię za tobą", en: "I miss you", pron: "TESK-nyeh zah TOH-boh" },
  { pl: "Jesteś piękna", en: "You are beautiful", pron: "YES-tesh PYENK-nah" },
  { pl: "Dobrego dnia", en: "Have a good day", pron: "doh-BREH-goh dnyah" },
  { pl: "Śpij dobrze", en: "Sleep well", pron: "shpeey DOH-bzheh" },
  { pl: "Myślę o tobie", en: "I’m thinking about you", pron: "MISH-leh oh TOH-byeh" },
  { pl: "Buziaki", en: "Kisses", pron: "boo-ZYAH-kee" },
];

const secretQuizQuestions = [
  { question: "Which Polish phrase means “I love you”?", answer: "Kocham cię", options: ["Kocham cię", "Dobranoc", "Kawa"] },
  { question: "Which Polish phrase means “I miss you”?", answer: "Tęsknię za tobą", options: ["Tęsknię za tobą", "Dziękuję", "Do widzenia"] },
  { question: "Which Polish word means “coffee”?", answer: "Kawa", options: ["Kawa", "Dobrze", "Buziaki"] },
  { question: "Which Polish phrase means “Good night”?", answer: "Dobranoc", options: ["Dzień dobry", "Dobranoc", "Przepraszam"] },
  { question: "Which Polish phrase means “You are beautiful”?", answer: "Jesteś piękna", options: ["Jesteś piękna", "Nie rozumiem", "Do widzenia"] },
  { question: "Which Polish phrase means “Thank you”?", answer: "Dziękuję", options: ["Proszę", "Dziękuję", "Jeszcze raz"] },
  { question: "Which Polish phrase means “I don’t understand”?", answer: "Nie rozumiem", options: ["Nie rozumiem", "Jak się masz?", "Na zdrowie"] },
  { question: "Which Polish word means “Kisses”?", answer: "Buziaki", options: ["Buziaki", "Kawa", "Dobrze"] },
  { question: "Which Polish phrase means “Have a good day”?", answer: "Dobrego dnia", options: ["Dobrego dnia", "Śpij dobrze", "Co robisz?"] },
  { question: "Which Polish phrase means “I’m thinking about you”?", answer: "Myślę o tobie", options: ["Myślę o tobie", "Chcę kawę", "Do widzenia"] },
];

const quizQuestions = [
  { question: "Which Polish phrase means “I miss you”?", answer: "Tęsknię za tobą", options: ["Dzień dobry", "Tęsknię za tobą", "Kawa"] },
  { question: "Which Polish phrase means “Good night”?", answer: "Dobranoc", options: ["Dobranoc", "Do widzenia", "Dobrze"] },
  { question: "Which Polish phrase means “Thank you”?", answer: "Dziękuję", options: ["Proszę", "Przepraszam", "Dziękuję"] },
  { question: "Which Polish phrase means “You are beautiful”?", answer: "Jesteś piękna", options: ["Jesteś piękna", "Nie rozumiem", "Co robisz?"] },
  { question: "Which Polish phrase means “Coffee, please”?", answer: "Poproszę kawę", options: ["Chcę kawę", "Poproszę kawę", "Na zdrowie"] },
];

function speak(text, slow = false) {
  if (!window.speechSynthesis) return;

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(
    slow
      ? text.split(" ").join(" ... ")
      : text
  );

  utterance.lang = "pl-PL";

  const voices = window.speechSynthesis.getVoices();
  const polishVoice = voices.find(
    voice => voice.lang?.toLowerCase().startsWith("pl")
  );

  if (polishVoice) {
    utterance.voice = polishVoice;
  }

  utterance.rate = slow ? 0.15 : 0.9;
  utterance.pitch = 0.95;

  window.speechSynthesis.speak(utterance);
}

function PhraseCard({ phrase, onLearn }) {
  const [learned, setLearned] = useState(false);

  function markLearned() {
    if (!learned) onLearn();
    setLearned(true);
  }

  return (
    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="phrase-card">
      <div className="card-top">
        <div>
          <h3>{phrase.pl}</h3>
          <p>{phrase.en}</p>
        </div>
        <Heart className="heart" />
      </div>
      <div className="pron-box">
        <p><span>Pronunciation:</span> {phrase.pron}</p>
        <p><span>Slow:</span> {phrase.slow}</p>
      </div>
      <div className="button-row">
        <button onClick={() => speak(phrase.pl, false)} className="btn cyan"><Volume2 size={17} /> Normal</button>
        <button onClick={() => speak(phrase.pl, true)} className="btn orange"><Turtle size={17} /> Slow</button>
      </div>
      <button onClick={markLearned} className={learned ? "learned learned-on" : "learned"}>
        {learned ? "Learned ❤️" : "Mark as learned"}
      </button>
    </motion.div>
  );
}

function Flashcards() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = flashcards[index];

  function nextCard() {
    setFlipped(false);
    setIndex((index + 1) % flashcards.length);
  }

  function previousCard() {
    setFlipped(false);
    setIndex((index - 1 + flashcards.length) % flashcards.length);
  }

  return (
    <section className="flashcards section">
      <div className="section-title">
        <p><Sparkles size={16} /> Flashcards</p>
        <h2>Basic Polish expressions</h2>
      </div>

      <div className="flashcard-layout">
        <div className={flipped ? "flashcard flipped" : "flashcard"} onClick={() => setFlipped(!flipped)}>
          <p className="flash-hint">Tap to flip</p>
          {!flipped ? (
            <>
              <h3>{card.pl}</h3>
              <p className="flash-pron">{card.pron}</p>
            </>
          ) : (
            <>
              <h3>{card.en}</h3>
              <p className="flash-pron">Meaning</p>
            </>
          )}
        </div>

        <div className="flash-actions">
          <button onClick={previousCard}>Previous</button>
          <button onClick={() => speak(card.pl, false)}><Volume2 size={17} /> Hear Polish</button>
          <button onClick={() => speak(card.pl, true)}><Turtle size={17} /> Slow</button>
          <button onClick={nextCard}>Next</button>
        </div>

        <p className="flash-count">Card {index + 1} / {flashcards.length}</p>
      </div>
    </section>
  );
}

export default function App() {
  const [started, setStarted] = useState(() => localStorage.getItem("jim-started") === "yes");

  const [streak, setStreak] = useState(() => Number(localStorage.getItem("jim-streak") || 0));
  const [activeLesson, setActiveLesson] = useState(() => Number(localStorage.getItem("jim-lesson") || 0));
  const [learnedCount, setLearnedCount] = useState(() => Number(localStorage.getItem("jim-learned") || 0));
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(() => Number(localStorage.getItem("jim-score") || 0));
  const [quizResult, setQuizResult] = useState("");
  const [secretIndex, setSecretIndex] = useState(0);
  const [secretScore, setSecretScore] = useState(0);
  const [secretDone, setSecretDone] = useState(() => localStorage.getItem("jim-secret-done") === "yes");
  const [secretMessage, setSecretMessage] = useState("");

  const lesson = lessons[activeLesson];
  const phraseOfTheDay = dailyPhrases[new Date().getDay()];
  const totalPhrases = lessons.reduce((sum, item) => sum + item.phrases.length, 0);
  const progress = useMemo(() => Math.min(100, Math.round((learnedCount / totalPhrases) * 100)), [learnedCount, totalPhrases]);

  useEffect(() => localStorage.setItem("jim-lesson", String(activeLesson)), [activeLesson]);
  useEffect(() => localStorage.setItem("jim-learned", String(learnedCount)), [learnedCount]);
  useEffect(() => localStorage.setItem("jim-score", String(quizScore)), [quizScore]);

  useEffect(() => {
    if (!started) return;
    const today = new Date().toDateString();
    const lastVisit = localStorage.getItem("jim-last-visit");
    const yesterday = new Date(Date.now() - 86400000).toDateString();

    if (lastVisit === today) return;

    if (lastVisit === yesterday) {
      const nextStreak = streak + 1;
      setStreak(nextStreak);
      localStorage.setItem("jim-streak", String(nextStreak));
    } else {
      setStreak(1);
      localStorage.setItem("jim-streak", "1");
    }

    localStorage.setItem("jim-last-visit", today);
  }, [started]);

  function begin() {
    localStorage.setItem("jim-started", "yes");
    setStarted(true);
  }

  function resetProgress() {
    localStorage.removeItem("jim-learned");
    localStorage.removeItem("jim-score");
    localStorage.removeItem("jim-streak");
    localStorage.removeItem("jim-last-visit");
    setLearnedCount(0);
    setQuizScore(0);
    setStreak(0);
  }

  function answerQuiz(option) {
    const correct = quizQuestions[quizIndex].answer === option;
    setQuizResult(correct ? "Good job, Jim ❤️" : "Almost! Try again, Jim ✨");
    if (correct) {
      setQuizScore((score) => score + 1);
      speak(option, false);
      setTimeout(() => {
        setQuizIndex((quizIndex + 1) % quizQuestions.length);
        setQuizResult("");
      }, 1100);
    }
  }

  function answerSecretQuiz(option) {
    const correct = secretQuizQuestions[secretIndex].answer === option;
    if (!correct) {
      setSecretMessage("Not this one — try again, Jim ✨");
      return;
    }

    const nextScore = secretScore + 1;
    setSecretScore(nextScore);
    setSecretMessage("Correct ❤️");
    speak(option, false);

    setTimeout(() => {
      if (secretIndex + 1 >= secretQuizQuestions.length) {
        setSecretDone(true);
        localStorage.setItem("jim-secret-done", "yes");
      } else {
        setSecretIndex(secretIndex + 1);
        setSecretMessage("");
      }
    }, 900);
  }

  function resetSecretQuiz() {
    localStorage.removeItem("jim-secret-done");
    setSecretDone(false);
    setSecretIndex(0);
    setSecretScore(0);
    setSecretMessage("");
  }

  if (!started) {
    return (
      <main className="app splash" style={{ backgroundImage: `linear-gradient(rgba(4, 9, 20, .25), rgba(4, 9, 20, .88)), url(${photos[3]})` }}>
        <style>{css}</style>
        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} className="splash-card">
          <p className="eyebrow"><LockKeyhole size={16} /> Private Polish course</p>
          <h1>Polish for Jim</h1>
          <p className="lead">A little romantic language corner, made only for you — with Polish words, slow pronunciation, memories, and love.</p>

          <button onClick={begin} className="hero-btn">Begin your Polish journey</button>
          <button onClick={() => speak("Kocham cię", true)} className="ghost-btn">Hear your first phrase</button>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="app">
      <style>{css}</style>
      <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(4, 9, 20, .25), rgba(4, 9, 20, .92)), url(${photos[3]})` }}>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="hero-content">
          <p className="pill"><Camera size={16} /> A little Polish corner, made with love</p>
          <h1>Polish for Jim</h1>
          <p>Hi Jim — learn sweet words, useful phrases, and tiny everyday sentences, one beautiful moment at a time.</p>
          <div className="hero-actions">
            <button onClick={() => document.getElementById("lessons")?.scrollIntoView({ behavior: "smooth" })} className="hero-btn">Start learning</button>
            <button onClick={() => speak("Kocham cię", true)} className="ghost-btn">Hear “I love you”</button>
          </div>
        </motion.div>
      </section>

      <section className="daily-card">
        <div>
          <p className="daily-label">Phrase of the day</p>
          <h2>{phraseOfTheDay.pl}</h2>
          <p>{phraseOfTheDay.en} · <span>{phraseOfTheDay.pron}</span></p>
        </div>
        <div className="daily-buttons">
          <button onClick={() => speak(phraseOfTheDay.pl, false)}><Volume2 size={17} /> Normal</button>
          <button onClick={() => speak(phraseOfTheDay.pl, true)}><Turtle size={17} /> Slow</button>
        </div>
      </section>

      <section className="stats">
        <div><strong>{progress}%</strong><span>progress</span></div>
        <div><strong>{learnedCount}</strong><span>phrases learned</span></div>
        <div><strong>{quizScore}</strong><span>quiz points</span></div>
        <div><strong>{streak}</strong><span>day streak</span></div>
        <button onClick={resetProgress}><RotateCcw size={16} /> Reset</button>
      </section>

      <section id="lessons" className="section">
        <div className="section-title">
          <p><Sparkles size={16} /> Lessons</p>
          <h2>Learn Polish in little moments</h2>
        </div>

        <div className="tabs">
          {lessons.map((item, index) => (
            <button key={item.title} onClick={() => setActiveLesson(index)} className={activeLesson === index ? "tab active" : "tab"}>{item.title}</button>
          ))}
        </div>

        <div className="lesson-grid">
          <motion.div key={lesson.title} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="photo-card">
            <img src={lesson.photo} alt="lesson" />
            <div>
              <h2>{lesson.title}</h2>
              <p>{lesson.subtitle}</p>
            </div>
          </motion.div>
          <div className="phrases">
            {lesson.phrases.map((phrase) => (
              <PhraseCard key={phrase.pl} phrase={phrase} onLearn={() => setLearnedCount((count) => Math.min(totalPhrases, count + 1))} />
            ))}
          </div>
        </div>
      </section>

      <Flashcards />

      <section className="gallery section">
        <div className="section-title">
          <p><Camera size={16} /> More memories</p>
          <h2>Little photo moments</h2>
        </div>
        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <img key={photo} src={photo} alt={`Memory ${index + 1}`} />
          ))}
        </div>
      </section>

      <section className="message">
        <h2>A message from me</h2>
        <p>Every Polish word you learn brings you a little closer to me. And yes, “Kocham Cię” is still very important.</p>
      </section>

      <section className="quiz section">
        <div className="quiz-box">
          <p><CheckCircle2 size={18} /> Tiny quiz for Jim</p>
          <h2>{quizQuestions[quizIndex].question}</h2>
          <div className="quiz-options">
            {quizQuestions[quizIndex].options.map((option) => (
              <button key={option} onClick={() => answerQuiz(option)}>{option}</button>
            ))}
          </div>
          {quizResult && <h3>{quizResult}</h3>}
        </div>
      </section>

      <section className="secret section">
        <div className="secret-box">
          {!secretDone ? (
            <>
              <p className="secret-label"><LockKeyhole size={17} /> Secret quiz</p>
              <h2>Unlock a little surprise</h2>
              <div className="secret-progress">
                Question {secretIndex + 1} / {secretQuizQuestions.length} · Score {secretScore} / {secretQuizQuestions.length}
              </div>
              <h3>{secretQuizQuestions[secretIndex].question}</h3>
              <div className="quiz-options">
                {secretQuizQuestions[secretIndex].options.map((option) => (
                  <button key={option} onClick={() => answerSecretQuiz(option)}>{option}</button>
                ))}
              </div>
              {secretMessage && <h4>{secretMessage}</h4>}
            </>
          ) : (
            <div className="surprise-card">
              <img src="/images/us.jpg" alt="Our photo" />
              <div>
                <p className="secret-label"><Heart size={17} /> Surprise unlocked</p>
                <h2>You did it, Jim ❤️</h2>
                <p>Every Polish word you learn is one more little bridge between us.</p>
                <button onClick={resetSecretQuiz}>Play the secret quiz again</button>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

const css = `
* { box-sizing: border-box; }
body { margin: 0; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background: #06101f; }
.app { min-height: 100vh; color: white; background: radial-gradient(circle at top left, #123a4d, #06101f 45%, #030712); }
.hero, .splash { min-height: 92vh; background-size: cover; background-position: center; display: flex; align-items: center; padding: 48px 7vw; }
.hero-content, .splash-card { max-width: 780px; }
.splash-card { padding: 34px; border: 1px solid rgba(255,255,255,.16); background: rgba(4,10,22,.52); backdrop-filter: blur(18px); border-radius: 34px; box-shadow: 0 30px 90px rgba(0,0,0,.4); }
.eyebrow, .pill { display: inline-flex; align-items: center; gap: 8px; padding: 10px 14px; border-radius: 999px; background: rgba(255,255,255,.12); border: 1px solid rgba(255,255,255,.16); color: #bff4ff; font-weight: 700; }
h1 { margin: 18px 0 16px; font-size: clamp(54px, 9vw, 110px); line-height: .9; letter-spacing: -4px; }
.lead, .hero-content p:not(.pill) { max-width: 680px; font-size: 20px; line-height: 1.75; color: #dbeafe; }
.hero-actions { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 26px; }
.hero-btn, .ghost-btn, .stats button { border: 0; cursor: pointer; border-radius: 20px; padding: 14px 20px; font-weight: 800; font-size: 15px; transition: .2s ease; }
.hero-btn { background: white; color: #08111f; box-shadow: 0 15px 45px rgba(255,255,255,.12); }
.ghost-btn { margin-left: 10px; background: rgba(255,255,255,.12); color: white; border: 1px solid rgba(255,255,255,.18); }
.hero-btn:hover, .ghost-btn:hover, .btn:hover, .tab:hover, .quiz-options button:hover { transform: translateY(-2px); }
.daily-card { width: min(1100px, 92vw); margin: -42px auto 18px; position: relative; z-index: 3; display: flex; justify-content: space-between; gap: 18px; align-items: center; padding: 24px; border-radius: 32px; background: linear-gradient(135deg, rgba(103,232,249,.22), rgba(251,146,60,.2)); border: 1px solid rgba(255,255,255,.16); backdrop-filter: blur(18px); box-shadow: 0 25px 70px rgba(0,0,0,.25); }
.daily-label { margin: 0 0 8px; color: #a5f3fc; text-transform: uppercase; letter-spacing: .22em; font-size: 12px; font-weight: 900; }
.daily-card h2 { margin: 0; font-size: clamp(30px, 5vw, 48px); }
.daily-card p { color: #e2e8f0; margin: 8px 0 0; }
.daily-card span { color: #fed7aa; font-weight: 800; }
.daily-buttons { display: flex; gap: 10px; flex-wrap: wrap; justify-content: flex-end; }
.daily-buttons button { border: 0; border-radius: 18px; padding: 13px 16px; display: flex; align-items: center; gap: 8px; background: white; color: #07111f; font-weight: 900; cursor: pointer; }
.stats { width: min(1100px, 92vw); margin: 0 auto 30px; position: relative; z-index: 2; display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; }

.stats div, .stats button { min-height: 92px; border-radius: 28px; background: rgba(255,255,255,.11); border: 1px solid rgba(255,255,255,.14); backdrop-filter: blur(18px); display: flex; flex-direction: column; justify-content: center; padding: 18px; }
.stats strong { font-size: 34px; color: #fed7aa; }
.stats span { color: #cbd5e1; }
.stats button { color: white; align-items: center; gap: 8px; }
.section { width: min(1100px, 92vw); margin: 0 auto; padding: 55px 0; }
.section-title p, .quiz-box p { display: flex; align-items: center; gap: 8px; color: #a5f3fc; text-transform: uppercase; letter-spacing: .2em; font-weight: 800; font-size: 13px; }
.section-title h2 { font-size: clamp(32px, 5vw, 52px); margin: 12px 0 24px; }
.tabs { display: flex; gap: 10px; overflow-x: auto; padding-bottom: 10px; margin-bottom: 28px; }
.tab { white-space: nowrap; border: 0; padding: 13px 16px; border-radius: 18px; background: rgba(255,255,255,.1); color: white; font-weight: 800; cursor: pointer; }
.tab.active { background: #67e8f9; color: #07111f; }
.lesson-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 28px; align-items: start; }
.photo-card, .phrase-card, .quiz-box, .message { border: 1px solid rgba(255,255,255,.13); background: rgba(255,255,255,.1); border-radius: 34px; overflow: hidden; box-shadow: 0 25px 70px rgba(0,0,0,.24); backdrop-filter: blur(16px); }
.photo-card img { width: 100%; height: 380px; object-fit: cover; display: block; }
.photo-card div { padding: 24px; }
.photo-card h2 { font-size: 34px; margin: 0 0 8px; }
.photo-card p { color: #cbd5e1; margin: 0; }
.phrases { display: grid; gap: 16px; }
.phrase-card { padding: 22px; }
.card-top { display: flex; justify-content: space-between; gap: 16px; }
.card-top h3 { font-size: 28px; margin: 0; }
.card-top p { margin: 6px 0 0; color: #bae6fd; }
.heart { color: #fda4af; }
.pron-box { margin: 18px 0; padding: 16px; border-radius: 22px; background: rgba(2,6,23,.42); color: #e2e8f0; }
.pron-box p { margin: 4px 0; }
.pron-box span { color: #fde68a; font-weight: 800; }
.button-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.btn { border: 0; border-radius: 18px; padding: 13px; display: flex; justify-content: center; align-items: center; gap: 8px; cursor: pointer; font-weight: 900; color: #07111f; transition: .2s ease; }
.cyan { background: #67e8f9; }
.orange { background: #fdba74; }
.learned { width: 100%; margin-top: 10px; border: 1px solid rgba(255,255,255,.15); background: rgba(255,255,255,.08); color: white; padding: 12px; border-radius: 16px; cursor: pointer; font-weight: 800; }
.learned-on { background: rgba(251,113,133,.28); color: #ffe4e6; }
.message { width: min(1100px, 92vw); margin: 20px auto; padding: 34px; background: linear-gradient(135deg, rgba(103,232,249,.18), rgba(251,146,60,.18)); }
.message h2 { margin: 0 0 10px; font-size: 34px; }
.message p { font-size: 20px; line-height: 1.7; color: #f8fafc; margin: 0; }
.quiz-box { padding: 30px; }
.quiz-box h2 { font-size: 34px; }
.quiz-options { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.quiz-options button { border: 0; border-radius: 20px; padding: 18px; background: rgba(255,255,255,.12); color: white; cursor: pointer; font-weight: 900; font-size: 16px; }
.quiz-box h3 { color: #fed7aa; font-size: 25px; }
.flashcard-layout { display: grid; gap: 18px; }
.flashcard { min-height: 300px; border: 1px solid rgba(255,255,255,.14); background: linear-gradient(135deg, rgba(255,255,255,.13), rgba(103,232,249,.13)); border-radius: 34px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 30px; cursor: pointer; box-shadow: 0 25px 70px rgba(0,0,0,.24); backdrop-filter: blur(16px); transition: .25s ease; }
.flashcard:hover { transform: translateY(-3px); }
.flashcard.flipped { background: linear-gradient(135deg, rgba(251,146,60,.18), rgba(244,114,182,.16)); }
.flash-hint { margin: 0 0 18px; color: #a5f3fc; text-transform: uppercase; letter-spacing: .22em; font-size: 12px; font-weight: 900; }
.flashcard h3 { margin: 0; font-size: clamp(42px, 7vw, 76px); line-height: 1; }
.flash-pron { margin: 18px 0 0; color: #fed7aa; font-size: 22px; font-weight: 900; }
.flash-actions { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
.flash-actions button { border: 0; border-radius: 18px; padding: 15px; background: rgba(255,255,255,.12); color: white; font-weight: 900; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; }
.flash-actions button:hover { transform: translateY(-2px); background: rgba(255,255,255,.18); }
.flash-count { text-align: center; color: #cbd5e1; font-weight: 800; }
.gallery-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
.gallery-grid img { width: 100%; height: 240px; object-fit: cover; border-radius: 26px; border: 1px solid rgba(255,255,255,.13); box-shadow: 0 18px 45px rgba(0,0,0,.22); }
.secret-box { border: 1px solid rgba(255,255,255,.14); background: linear-gradient(135deg, rgba(244,114,182,.16), rgba(103,232,249,.14)); border-radius: 34px; padding: 30px; box-shadow: 0 25px 70px rgba(0,0,0,.25); backdrop-filter: blur(16px); }
.secret-label { display: flex; align-items: center; gap: 8px; color: #fbcfe8; text-transform: uppercase; letter-spacing: .22em; font-weight: 900; font-size: 13px; margin: 0 0 12px; }
.secret-box h2 { font-size: clamp(32px, 5vw, 50px); margin: 0 0 14px; }
.secret-box h3 { font-size: 28px; margin: 22px 0 16px; }
.secret-box h4 { color: #fed7aa; font-size: 23px; margin: 18px 0 0; }
.secret-progress { display: inline-flex; padding: 10px 14px; border-radius: 999px; background: rgba(255,255,255,.1); color: #e2e8f0; font-weight: 800; }
.surprise-card { display: grid; grid-template-columns: .95fr 1.05fr; gap: 26px; align-items: center; }
.surprise-card img { width: 100%; height: 430px; object-fit: cover; border-radius: 28px; box-shadow: 0 20px 55px rgba(0,0,0,.32); }
.surprise-card p:not(.secret-label) { color: #f8fafc; font-size: 20px; line-height: 1.7; }
.surprise-card button { border: 0; border-radius: 18px; padding: 14px 18px; background: white; color: #07111f; font-weight: 900; cursor: pointer; }
@media (max-width: 850px) { .lesson-grid, .stats, .quiz-options, .surprise-card, .flash-actions { grid-template-columns: 1fr; } .gallery-grid { grid-template-columns: repeat(2, 1fr); } h1 { letter-spacing: -2px; } .hero, .splash { padding: 34px 5vw; } .ghost-btn { margin-left: 0; } .daily-card { flex-direction: column; align-items: stretch; margin-top: -34px; } .daily-buttons { justify-content: stretch; } .daily-buttons button { flex: 1; justify-content: center; } }
@media (max-width: 520px) { .hero, .splash { min-height: 100svh; padding: 26px 18px; background-position: center; } .splash-card { padding: 22px; border-radius: 26px; } h1 { font-size: 54px; line-height: .92; } .lead, .hero-content p:not(.pill) { font-size: 17px; line-height: 1.6; } .hero-actions { flex-direction: column; } .hero-btn, .ghost-btn { width: 100%; margin-left: 0; } .section { width: 92vw; padding: 36px 0; } .tabs { gap: 8px; } .tab { padding: 12px 14px; font-size: 13px; } .photo-card img { height: 260px; } .photo-card h2, .quiz-box h2, .message h2 { font-size: 27px; } .phrase-card { padding: 17px; border-radius: 26px; } .card-top h3 { font-size: 24px; } .button-row { grid-template-columns: 1fr; } .stats div, .stats button { min-height: 78px; border-radius: 22px; } .stats strong { font-size: 28px; } .daily-card { width: 92vw; padding: 18px; border-radius: 26px; } .daily-card h2 { font-size: 30px; } .daily-buttons { flex-direction: column; } .message { padding: 24px; border-radius: 26px; } .message p { font-size: 17px; } .quiz-box, .secret-box { padding: 22px; border-radius: 26px; } .quiz-options button { padding: 15px; } .secret-box h3 { font-size: 23px; } .surprise-card img { height: 330px; border-radius: 22px; } .gallery-grid { grid-template-columns: 1fr; } .gallery-grid img { height: 310px; } .flashcard { min-height: 250px; border-radius: 26px; } .flashcard h3 { font-size: 42px; } }
@supports (-webkit-touch-callout: none) { .hero, .splash { min-height: -webkit-fill-available; } }
`;
