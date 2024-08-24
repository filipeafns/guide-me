import Tooltip from "@/app/Components/Tooltip/tooltip";
import Navigation from "@/app/Components/Tooltip/navigation";
import Header from "@/app/Components/header";

export default function Home() {
  const tooltipContent = {
    title: "Event",
    text: "The right block in the workflow is always known as the event block. This block triggers off the workflow based on specific criteria. In this example, the event block is a Custom Event.",
    top: 48,
    left: 2,
    backLink: "/",
    nextLink: "/01-workflow-basics/step2",
    direction: "right"
  };

  return (
    <main>
      <Header Description="Event" />
      <Navigation />
      <div className="shot-container">
        <div className="hotspot">
          <Tooltip {...tooltipContent} />
          <img src="/workflow-basics/wf-basics-1.png" alt="Workflow basics step 1" />
          <img src="/workflow-basics/wf-basics-2.png" className="hidethis" alt="Workflow basics step 2" />
        </div>
      </div>
    </main>
  );
}