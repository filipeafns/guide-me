import Navigation from "@/app/Components/Tooltip/navigation";
import Header from "@/app/Components/header";
import WorkflowStep from "@/app/Components/WorkflowStep";
import workflowSteps from "../data.json";

const PROJECT_TITLE = "workflow-basics";
const CURRENT_STEP = 3;

const getWorkflowImage = (step) => `/${PROJECT_TITLE}/wf-basics-${step}.png`;

export default function Home() {
  const stepData = workflowSteps[CURRENT_STEP - 1];

  const tooltipContent = {
    ...stepData.tooltipContent,
    backLink: CURRENT_STEP === 1 ? "/" : `/${PROJECT_TITLE}/step${CURRENT_STEP - 1}`,
  };

  return (
    <main>
      <Header Description={tooltipContent.title} />
      <Navigation />
      <WorkflowStep 
        tooltipContent={tooltipContent}
        imageSrc={getWorkflowImage(CURRENT_STEP)}
        altText={`${PROJECT_TITLE.replace('-', ' ')} step ${CURRENT_STEP}`}
        hiddenImageSrc={getWorkflowImage(CURRENT_STEP + 1)}
        hiddenImageAlt={`${PROJECT_TITLE.replace('-', ' ')} step ${CURRENT_STEP + 1}`}
      />
    </main>
  );
}