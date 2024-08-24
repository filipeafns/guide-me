import Tooltip from "@/app/Components/Tooltip/tooltip";
import Navigation from "@/app/Components/Tooltip/navigation";
import Header from "@/app/Components/header";

export default function Home() {
  const tooltipContent = {
    title: "Release this Version",
    text: "This button is used to publish a workflow change to your users. It is only enabled when a workflow does not have any validation errors.",
    top: 22,
    left: 50,
    backLink: "/01-workflow-basics/step3",
    nextLink: "/01-workflow-basics/step5",
    direction: "bottom"
  };

  return (
    <main>
      <Header Description="Release this Version" />
      <Navigation />
      <div className="shot-container">
        <div className="hotspot">
          <Tooltip {...tooltipContent} />
          <img src="/workflow-basics/wf-basics-4.png" alt="Workflow basics step 4" />
          <img src="/workflow-basics/wf-basics-5.png" className="hidethis" alt="Workflow basics step 5" />
        </div>
      </div>
    </main>
  );
}