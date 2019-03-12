import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  gridContainer: {
    display: "grid",
    gridTemplateAreas: "'main'",
    gridTemplateColumns: "auto",
    paddingTop: 85,
    paddingLeft: 24,
    height: "100vh",
    scrollY: "auto",
  },
  mainArea: {
    gridArea: "main",
  },
});
