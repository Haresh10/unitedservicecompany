import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  layout: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 900,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  orderformContainer: {
    display: "flex",
    justifyContent: "center",
  },
  pdfIcon: {
    height: theme.spacing(5),
    fontSize: theme.spacing(4.7),
    marginLeft: theme.spacing(1),
    color: "#3c44b1",
    cursor: "pointer",
  },
}));
