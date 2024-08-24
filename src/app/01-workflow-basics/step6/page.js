import Tooltip from "@/app/Components/Tooltip/tooltip";
import Navigation from "@/app/Components/Tooltip/navigation";
import Header from "@/app/Components/header";

export default function Home() {
  return (
    <main>
      <Header Description="Settings" />
      <Navigation />
      <div className="shot-container">
        <div className="hotspot">
          <Tooltip title="Settings" text="The settings button reveals a window where you can configure certain workflow-specific settings like description, etc." top={10} left={58} backLink="/01-workflow-basics/step5" nextLink="/01-workflow-basics/step7" direction="right" />
          <img src="/workflow-basics/wf-basics-6.png" />
          <img src="/workflow-basics/wf-basics-7.png" className="hidethis" />
        </div>
      </div>
    </main>
  );
}