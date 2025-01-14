import globalTheme from "../GlobalStyles/GlobalTheme";
import { styled } from "@mui/material/styles";

export const StyledContainer = styled("div")(({ theme }) => ({
  height: "100vh",
  maxWidth: "15%",
  background: globalTheme.palette.primary.main,
  borderRadius: "0 35px 35px 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

export const StyledLogoContainer = styled("div")(({ theme }) => ({
  background: globalTheme.palette.primary.dark,
  borderRadius: "0 10px 10px 0",
  display: "flex",
  width: "90%",
  height: "90px",
  padding: "0 10px",
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",
  top: "40px",
}));

export const StyledLogoImage = styled("img")(({ theme }) => ({
  display: "flex",
  width: "90px",
  height: "auto",
}));

export const StyledLogo = styled("p")(({ theme }) => ({
  display: "flex",
  color: globalTheme.palette.textcolorsecondary.main,
  fontWeight: "bolder",
  fontSize: globalTheme.typography.semimediumfontsize.main,
  margin: "0",
}));

export const StyledNav = styled("div")(({ theme }) => ({
  display: "flex",
  width: "90%",
  height: "auto",
  margin: "60px 0",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledItem = styled("li")(({ theme }) => ({
  display: "flex",
  height: "40px",
  width: "100%",
  margin: "5px 0",
  borderRadius: "7px",
  color: "red",
}));

export const StyledNavbar = styled("ul")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
  alignItems: "flex-start",
  justifyContent: "center",
}));

export const StyledIcon = styled("i")(({ theme }) => ({
  display: "flex",
  margin: "0 15px",
}));

export const StyledPanel = styled("img")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "auto",
  marginTop: "20px",
}));

export const StyledAuthorization = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "100px",
  background: globalTheme.palette.primary.dark,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "0 0 35px 0",
}));

export const StyledUserAvatar = styled("img")(({ theme }) => ({
  background: "grey",
  display: "flex",
  width: "50px",
  height: "50px",
  margin: "10px 0",
  marginLeft: "10px",
  borderRadius: "5px",
}));

export const StyledProfile = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "120px",
  padding: "5px",
  margin: "0 10px",
}));

export const StyledUserName = styled("p")(({ theme }) => ({
  display: "flex",
  fontSize: globalTheme.typography.semismallfontsize.main,
  color: globalTheme.palette.textcolorsecondary.main,
  fontWeight: "bolder",
  lineHeight: "15px",
  margin: "0",
}));

export const StyledStatusName = styled("span")(({ theme }) => ({
  display: "flex",
  fontSize: globalTheme.typography.semismallfontsize.main,
  color: globalTheme.palette.textcolorsecondary.main,
  margin: "0",
}));

export const StyledLoginBtn = styled("button")(({ theme }) => ({
  background: "none",
  display: "flex",
  height: "40px",
  width: "40px",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "7px",
}));

export const StyledLoginIcon = styled("i")(({ theme }) => ({
  display: "flex",
  fontSize: globalTheme.typography.mediumfontsize.main,
  color: globalTheme.palette.textcolorsecondary.main,
  fontWeight: "bolder",
  cursor: "pointer",
}));
