import Navigation from "@/app/Components/Tooltip/navigation";
import Header from "@/app/Components/header";
import WorkflowStep from "@/app/Components/WorkflowStep";
import workflowSteps from "../data.json";

const { projectTitle: PROJECT_TITLE, steps } = workflowSteps;
const CURRENT_STEP = 1;

const getWorkflowImage = (step) => `/guides/${PROJECT_TITLE}/${step}.png`;

export default function Home() {
  const stepData = steps.find(step => step.step === CURRENT_STEP) || {};

  const tooltipContent = {
    ...(stepData.tooltipContent || {}),
    backLink: CURRENT_STEP === 1 ? "/" : `/guides/${PROJECT_TITLE}/step${CURRENT_STEP - 1}`,
    nextLink: `/guides/${PROJECT_TITLE}/step${CURRENT_STEP + 1}`
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