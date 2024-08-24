import Tooltip from "@/app/Components/Tooltip/tooltip";
import Navigation from "@/app/Components/Tooltip/navigation";
import Header from "@/app/Components/header";

export default function Home() {
  return (
    <main>
      <Header Description="Release this Version" />
      <Navigation />
      <div className="shot-container">
        <div className="hotspot">
          <Tooltip title="Release this Version" text="This button is used to publish a workflow change to your users. It is only enabled when a workflow does not have any validation errors." top={22} left={50} backLink="/01-workflow-basics/step3" nextLink="/01-workflow-basics/step5" direction="bottom" />
          <img src="/workflow-basics/wf-basics-4.png" />
          <img src="/workflow-basics/wf-basics-5.png" className="hidethis" />
        </div>
      </div>
    </main>
  );
}