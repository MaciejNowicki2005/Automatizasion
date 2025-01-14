import { styled } from "@mui/material/styles";
import globalTheme from "../../Components/features/GlobalStyles/GlobalTheme";
import dashboardBackground from "./../../assets/dashboardBackground.svg";

export const StyledDashboard = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100vh",
  background: `url(${dashboardBackground})`,
  backgroundSize: "cover",
  position: "relative",
  display: "flex",
}));

export const Widgets = styled("div")(({ theme }) => ({
  width: "85%",
  display: "flex",
  flexDirection: "column",
  padding: "20px",
}));

export const WidgetWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
}));
