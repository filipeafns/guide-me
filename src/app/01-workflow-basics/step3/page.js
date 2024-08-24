import Tooltip from "@/app/Components/Tooltip/tooltip";
import Navigation from "@/app/Components/Tooltip/navigation";
import Header from "@/app/Components/header";

export default function Home() {
  return (
    <main>
      <Header Description="Workflow Logs" />
      <Navigation />
      <div className="shot-container">
        <div className="hotspot">
          <Tooltip title="Workflow Logs" text="The workflow logs button opens a panel that reveals all workflow logs (both success and failed). This is a useful tool for debugging errors." top={11} left={80} backLink="/01-workflow-basics/step2" nextLink="/01-workflow-basics/step4" direction="top" />
          <img src="/workflow-basics/wf-basics-3.png" />
          <img src="/workflow-basics/wf-basics-4.png" className="hidethis" />
        </div>
      </div>
    </main>
  );
}