import Tooltip from "@/app/Components/Tooltip/tooltip";
import Navigation from "@/app/Components/Tooltip/navigation";
import Header from "@/app/Components/header";

export default function Home() {
  const tooltipContent = {
    title: "Title",
    text: "The workflow title allows you to specify a unique name for each workflow. The badge next to the title indicates if the workflow is a draft or released.",
    top: 10,
    left: 12,
    backLink: "/01-workflow-basics/step6",
    nextLink: "/01-workflow-basics/step8",
    direction: "top"
  };

  return (
    <main>
      <Header Description="Title" />
      <Navigation />
      <div className="shot-container">
        <div className="hotspot">
          <Tooltip {...tooltipContent} />
          <img src="/workflow-basics/wf-basics-7.png" alt="Workflow basics step 7" />
          <img src="/workflow-basics/wf-basics-8.png" className="hidethis" alt="Workflow basics step 8" />
        </div>
      </div>
    </main>
  );
}