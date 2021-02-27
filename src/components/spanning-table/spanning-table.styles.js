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
    background: "linear-gradient(45deg, #4b6cb7 40%, #514a9d 60%)",
    borderRadius: 3,
    border: 1,
    height: 48,
    padding: "0 30px",
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 18,
  },

  tableHead: {
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  tableContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    marginTop: "30px",
    alignSelf: "flex-end",
    marginRight: "5px",
  },
}));
export default useStyles;
