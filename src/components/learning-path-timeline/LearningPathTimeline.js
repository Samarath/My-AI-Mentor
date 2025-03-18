import {
  MenuBook as BookIcon,
  VideoLibrary as VideoIcon,
  Description as FileIcon,
  Code as CodeIcon,
  Link as LinkIcon,
} from "@mui/icons-material";
import { Typography } from "@mui/material";
import classes from "@/app/(main)/my-journey/my-journey.module.scss";

export default function LearningPathTimeline({ steps }) {
  const getResourceIcon = (type) => {
    switch (type.toLowerCase()) {
      case "book":
        return <BookIcon fontSize="small" />;
      case "video":
        return <VideoIcon fontSize="small" />;
      case "documentation":
        return <FileIcon fontSize="small" />;
      case "project":
        return <CodeIcon fontSize="small" />;
      default:
        return <LinkIcon fontSize="small" />;
    }
  };

  return (
    <div className={classes.timeline}>
      {steps.map((step, index) => (
        <div key={index} className={classes.timelineStep}>
          <div className={classes.timelineStepNumber}>{index + 1}</div>

          <div className={classes.timelineStepContent}>
            <Typography variant="h6" className={classes.timelineStepTitle}>
              {step.title}
            </Typography>
            <Typography
              variant="body2"
              className={classes.timelineStepDescription}
            >
              {step.description}
            </Typography>

            <div className={classes.timelineResources}>
              {step.resources.map((resource, resourceIndex) => (
                <div key={resourceIndex} className={classes.resourceCard}>
                  <div className={classes.resourceCardContent}>
                    <div className={classes.resourceType}>
                      {getResourceIcon(resource.type)}
                      <span>{resource.type}</span>
                    </div>
                    <a
                      href={resource.url}
                      className={classes.resourceTitle}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {resource.title}
                    </a>
                    <LinkIcon
                      fontSize="small"
                      className={classes.resourceIcon}
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
