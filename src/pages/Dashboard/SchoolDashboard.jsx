import React, { useEffect } from "react";
import LeftPanelDashboard from "../../Components/features/LeftPanelDashboard/LeftPanelDashboard";
import { WidgetWrapper, StyledDashboard, Widgets } from "./styles";
import Reminders from "../../Components/widget/Reminders/Reminders";
import SchoolDiary from "../../Components/widget/SchoolDiary/SchoolDiary";
import Wikipedia from "../../Components/widget/Wikipedia/Wikipedia";
import Notes from "../../Components/widget/Notes/Notes";

const SchoolDashboard = () => {
  useEffect(() => {
    document.title = "School";
  });
  return (
    <StyledDashboard>
      <LeftPanelDashboard />
      <Widgets>
        <WidgetWrapper>
          <Reminders />
          <SchoolDiary />
          <Wikipedia />
          <Notes />
        </WidgetWrapper>
      </Widgets>
    </StyledDashboard>
  );
};

export default SchoolDashboard;
