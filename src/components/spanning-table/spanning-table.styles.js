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
    lineHeight: theme.spacing(7),
  },
  input: {
    width: 130,
    height: 40,
  },
  tableHeadTop: {
    background: "#115293",
    borderRadius: 3,
    border: 1,
    height: 48,
    padding: "0 30px",
    opacity: 0.9,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  bodyText: {
    fontSize: 16,
  },
  tableHead: {
    backgroundColor: "#F5F5F5",
    borderRadius: 3,
    border: 0,
    height: 48,
    padding: "0 30px",
    fontSize: 15,
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
