import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
    borderColor: "green",
  },
  table: {
    minWidth: 650,
  },
  selectTableCell: {
    width: 60,
  },
  tableCell: {
    width: 130,
    height: 40,
    color: "white",
    fontSize: "20",
  },
  input: {
    width: 130,
    height: 40,
  },
  tableHeadTop: {
    background: "linear-gradient(45deg, #FE6B8B 40%, #FF8E53 60%)",
    borderRadius: 3,
    border: 1,
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  tableHead: {
    background: "#FFFFFF",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
}));
export default useStyles;
