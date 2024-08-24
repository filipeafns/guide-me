import Tooltip from "@/app/Components/Tooltip/tooltip";
import Navigation from "@/app/Components/Tooltip/navigation";
import Header from "@/app/Components/header";

export default function Home() {
  const tooltipContent = {
    title: "Help and Navigation",
    text: "These buttons allow you to zoom in and out of a workflow. Commonly used for large, complex workflows that require a bird's eye view. To the right is the help center where you can find links to our docs and support center.",
    top: 69,
    left: 80,
    backLink: "/01-workflow-basics/step8",
    nextLink: "/01-workflow-basics/step10",
    direction: "bottom"
  };

  return (
    <main>
      <Header Description="Help and Navigation" />
      <Navigation />
      <div className="shot-container">
        <div className="hotspot">
          <Tooltip {...tooltipContent} />
          <img src="/workflow-basics/wf-basics-9.png" alt="Workflow basics step 9" />
          <img src="/workflow-basics/wf-basics-10.png" className="hidethis" alt="Workflow basics step 10" />
        </div>
      </div>
    </main>
  );
}