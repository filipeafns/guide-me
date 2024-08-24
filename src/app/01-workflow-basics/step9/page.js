import Tooltip from "@/app/Components/Tooltip/tooltip";
import Navigation from "@/app/Components/Tooltip/navigation";
import Header from "@/app/Components/header";

export default function Home() {
  return (
    <main>
      <Header Description="Help and Navigation" />
      <Navigation />
      <div className="shot-container">
        <div className="hotspot">
          <Tooltip title="Help and Navigation" text="These buttons allow you to zoom in and out of a workflow. Commonly used for large, complex workflows that require a bird's eye view. To the right is the help center where you can find links to our docs and support center." top={69} left={80} backLink="/01-workflow-basics/step8" direction="bottom" />
          <img src="/workflow-basics/wf-basics-1.png" />
        </div>
      </div>
    </main>
  );
}