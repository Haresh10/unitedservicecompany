import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1, 0),
  },
  fabControl: {
    marginTop: theme.spacing(1.5),
    marginLeft: theme.spacing(1),
  },
  orderForm: {
    marginLeft: theme.spacing(4),
    width: "100%",
  },
}));
