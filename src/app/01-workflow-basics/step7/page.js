import Tooltip from "@/app/Components/Tooltip/tooltip";
import Navigation from "@/app/Components/Tooltip/navigation";
import Header from "@/app/Components/header";

export default function Home() {
  return (
    <main>
      <Header Description="Title" />
      <Navigation />
      <div className="shot-container">
        <div className="hotspot">
          <Tooltip title="Title" text="The workflow title allows you to specify a unique name for each workflow. The badge next to the title indicates if the workflow is a draft or released." top={10} left={12} backLink="/01-workflow-basics/step6" nextLink="/01-workflow-basics/step8" direction="top" />
          <img src="/workflow-basics/wf-basics-7.png" />
          <img src="/workflow-basics/wf-basics-8.png" className="hidethis" />
        </div>
      </div>
    </main>
  );
}