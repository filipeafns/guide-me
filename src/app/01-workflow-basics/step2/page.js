import Tooltip from "@/app/Components/Tooltip/tooltip";
import Navigation from "@/app/Components/Tooltip/navigation";
import Header from "@/app/Components/header";

export default function Home() {
  return (
    <main>
      <Header Description="Destination" />
      <Navigation />
      <div className="shot-container">
        <div className="hotspot">
          <Tooltip title="Destination" text="While you can only have one event block per workflow, you can have as many destination blocks as you'd like. Destination blocks specify where the data from the proceeding block(s) should be sent." top={48} left={58} backLink="/01-workflow-basics/step1" nextLink="/01-workflow-basics/step3" direction="left" />
          <img src="/workflow-basics/wf-basics-2.png" />
          <img src="/workflow-basics/wf-basics-3.png" className="hidethis" />
        </div>
      </div>
    </main>
  );
}