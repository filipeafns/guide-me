import Tooltip from "@/app/Components/Tooltip/tooltip";
import Navigation from "@/app/Components/Tooltip/navigation";
import Header from "@/app/Components/header";

export default function Home() {
  return (
    <main>
      <Header Description="Version History" />
      <Navigation />
      <div className="shot-container">
        <div className="hotspot">
          <Tooltip title="Version History" text="This button shows all versions associated with a workflow. By default it will show Version 1 as a draft until you publish the first version." top={8} left={55} backLink="/01-workflow-basics/step4" nextLink="/01-workflow-basics/step6" direction="right" />
          <img src="/workflow-basics/wf-basics-5.png" />
          <img src="/workflow-basics/wf-basics-6.png" className="hidethis" />
        </div>
      </div>
    </main>
  );
}