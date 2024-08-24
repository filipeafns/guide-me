import Tooltip from "@/app/Components/Tooltip/tooltip";
import Navigation from "@/app/Components/Tooltip/navigation";
import Header from "@/app/Components/header";

export default function Home() {
  const tooltipContent = {
    title: "Workflow Logs",
    text: "The workflow logs button opens a panel that reveals all workflow logs (both success and failed). This is a useful tool for debugging errors.",
    top: 11,
    left: 80,
    backLink: "/01-workflow-basics/step2",
    nextLink: "/01-workflow-basics/step4",
    direction: "top"
  };

  return (
    <main>
      <Header Description="Workflow Logs" />
      <Navigation />
      <div className="shot-container">
        <div className="hotspot">
          <Tooltip {...tooltipContent} />
          <img src="/workflow-basics/wf-basics-3.png" alt="Workflow basics step 3" />
          <img src="/workflow-basics/wf-basics-4.png" className="hidethis" alt="Workflow basics step 4" />
        </div>
      </div>
    </main>
  );
}