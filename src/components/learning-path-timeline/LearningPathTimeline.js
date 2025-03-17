import {
  Book,
  Code,
  Filter,
  MicExternalOffOutlined,
  VideoCall,
} from "@mui/icons-material";
import classes from "../../app/(main)/my-journey/my-journey.module.scss";

// import { Book, Video, FileText, Code, ExternalLink } from "lucide-react"

export default function LearningPathTimeline({ steps }) {
  const getResourceIcon = (type) => {
    switch (type.toLowerCase()) {
      case "book":
        return <Book size={16} />;
      case "video":
        return <VideoCall size={16} />;
      case "documentation":
        return <Filter size={16} />;
      case "project":
        return <Code size={16} />;
      default:
        return <MicExternalOffOutlined size={16} />;
    }
  };

  return (
    <div className={classes["timeline"]}>
      {steps.map((step, index) => (
        <div key={index} className={classes["timeline__step"]}>
          <div className={classes["timeline__step-number"]}>{index + 1}</div>

          <div className={classes["timeline__step-content"]}>
            <h3 className={classes["timeline__step-title"]}>{step.title}</h3>
            <p className={classes["timeline__step-description"]}>
              {step.description}
            </p>

            <div className={classes["timeline__resources"]}>
              {step.resources.map((resource, resourceIndex) => (
                <div key={resourceIndex} className={classes["resource-card"]}>
                  <div className={classes["resource-card__content"]}>
                    <div className={classes["resource-card__type"]}>
                      {getResourceIcon(resource.type)}
                      <span>{resource.type}</span>
                    </div>
                    <a
                      href={resource.url}
                      className={classes["resource-card__title"]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {resource.title}
                    </a>
                    <MicExternalOffOutlined
                      size={16}
                      className={classes["resource-card__icon"]}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
