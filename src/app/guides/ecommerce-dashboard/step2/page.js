import Navigation from "@/app/Components/Tooltip/navigation";
import Header from "@/app/Components/header";
import WorkflowStep from "@/app/Components/WorkflowStep";
import workflowSteps from "../data.json";

const { projectTitle: PROJECT_TITLE, steps } = workflowSteps;
const CURRENT_STEP = 2;

const getWorkflowImage = (image) => `/guides/${PROJECT_TITLE}/${image}.png`;

export default function Home() {
  const stepData = steps.find(step => step.step === CURRENT_STEP) || {};
  const { image } = stepData;

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
        imageSrc={getWorkflowImage(image)}
        altText={`${PROJECT_TITLE.replace('-', ' ')} step ${CURRENT_STEP}`}
        hiddenImageSrc={getWorkflowImage(Number(image) + 1)}
        hiddenImageAlt={`${PROJECT_TITLE.replace('-', ' ')} step ${Number(image) + 1}`}
      />
    </main>
  );
}