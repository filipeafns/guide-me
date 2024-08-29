import Navigation from "./Components/Tooltip/navigation";
import Card from "./Components/card";
import cardData from "./cardData.json";

export default function Home() {
  return (
    <main className="home">
      <Navigation />
      <div className="hero">
        <div><p>Guide</p><p>Me</p></div>
      </div>
      <ul className="guide-grid">
        {cardData.map((card, index) => (
          <li key={index}>
            <Card
              Link={card.Link}
              Title={card.Title}
              Description={card.Description}
              Image={card.Image}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}