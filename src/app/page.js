import Navigation from "./Components/Tooltip/navigation";
import Card from "./Components/card";
import cardData from "./cardData.json";

export default function Home() {
  return (
    <main className="home">
      <Navigation />
      <h1>Explore Guides</h1>
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