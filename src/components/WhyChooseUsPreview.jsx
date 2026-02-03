import { memo } from "react";
import IntegrationPreview from "./preview-components/IntegrationPreview";
import ChartPreview from "./preview-components/DiagnosticReportPreview";
import SecurityPreview from "./preview-components/SecurityPreview";
 import SupportPreview from "./preview-components/CustomerSupportPreview";
import ResourcesPreview from "./preview-components/ResourceComponentPreview";
 import AppPreview from "./preview-components/AppComponentPreview";

function WhyChooseUsPreview({ preview }) {

  if (!preview) return null;

  switch (preview.type) {
    case "integration":
      return <IntegrationPreview />;

     case "chart":
      return <ChartPreview preview={preview} />;

     case "security":
     return <SecurityPreview preview={preview} />;

    case "support":
      return <SupportPreview preview={preview} />;

    case "resources":
      return <ResourcesPreview preview={preview} />;

    case "app":
      return <AppPreview />;

    default:
      return null;
  }
}

export default memo(WhyChooseUsPreview);
