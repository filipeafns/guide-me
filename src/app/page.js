import styles from "./page.module.css";
import Navigation from "./Components/Tooltip/navigation";
import Card from "./Components/card";

export default function Home() {
  return (
    <main className="home">
      <Navigation />
      <h1>Explore Guides</h1>
      <ul className="guide-grid">
        <li>
          <Card
            Link="/01-workflow-basics/step1"
            Title="Workflow Builder"
            Description="Learn the basics on how to navigate the Workflow Builder"
            Image="/workflow-basics/wf-basics-1.png" />
        </li>
      </ul>
    </main>
  );
}
