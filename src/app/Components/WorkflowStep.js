import Tooltip from "@/app/Components/Tooltip/tooltip";

export default function WorkflowStep({ tooltipContent, imageSrc, altText, hiddenImageSrc, hiddenImageAlt }) {
  return (
    <div className="shot-container">
      <div className="hotspot">
        <Tooltip {...tooltipContent} />
        <img src={imageSrc} alt={altText} />
        {hiddenImageSrc && <img src={hiddenImageSrc} className="hidethis" alt={hiddenImageAlt} />}
      </div>
    </div>
  );
}