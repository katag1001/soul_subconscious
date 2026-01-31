import '../pages/pages.css'
import '../pages/FAQs.css'
import CardGrid from '../components/CardGrid.jsx';

export default function FAQs() {

const cardsData = [
  { title: "Card 1", details: "Details about Card 1" },
  { title: "Card 2", details: "Details about Card 2" },
  { title: "Card 3", details: "Details about Card 3" },
  { title: "Card 4", details: "Details about Card 4" },
  { title: "Card 1", details: "Details about Card 1" },
  { title: "Card 2", details: "Details about Card 2" },
  { title: "Card 3", details: "Details about Card 3" },
  { title: "Card 4", details: "Details about Card 4" },
  { title: "Card 1", details: "Details about Card 1" },
  { title: "Card 2", details: "Details about Card 2" },
  { title: "Card 3", details: "Details about Card 3" },
  { title: "Card 4", details: "Details about Card 4" },
];

  return (
    <>
      <section className="page FAQs">
        <div>
          <CardGrid cards={cardsData} />
        </div>
      </section>


    </>
  )
}

