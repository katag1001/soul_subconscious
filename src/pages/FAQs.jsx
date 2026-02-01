import '../pages/pages.css'
import '../pages/FAQs.css'
import CardGrid from '../components/CardGrid.jsx';

export default function FAQs() {

const cardsData = [
  { title: "What is rapid transformational therapy?", details: "details" },
  { title: "How does RTT work?", details: "details" },
  { title: "Can anyone be hypnotized?", details: "details" },
  { title: "How does RTT work?", details: "details" },
  { title: "What issues can RTT help with?", details: "details" },
  { title: "How does RTT differ from other therapies?", details: "details" },
  { title: "What is hypnosis?", details: "details" },
  { title: "What does hypnosis feel like?", details: "details" },
  { title: "Is hypnosis dangerous?", details: "details" },
  { title: "Is hypnosis like sleep?", details: "details" },
  { title: "Do I lose control while I'm in hypnosis?", details: "details" },
  { title: "Can I get stuck in hypnosis?", details: "details" },
  { title: "Will I go back to scenes that are scary or painful?", details: "details" },
  { title: "When will I start to see changes?", details: "details" },
  { title: "Is RTT effective for everyone?", details: "details" },
  { title: "Is success guaranteed?", details: "details" },
  { title: "How many sessions of RTT will I need?", details: "details" },
  { title: "Are there any contraindications for RTT?", details: "details" },
];


  return (
    <>
      <section className="page FAQs">
        <h1>Frequently Asked Questions</h1>
        <div className="faqs-content">
          <CardGrid cards={cardsData} />
        </div>
      </section>


    </>
  )
}

