import React, { useEffect } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";

import { useStyles } from "./order-screen.styles";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import SpanningTable from "../../components/spanning-table/spanning-table.component";
import OrderInputForm from "../../components/order-input/order-input.component";
import { SelectCurrentUser } from "../../redux/user/user.selectors";
const OrderScreen = ({ currentUser, history }) => {
  const classes = useStyles();

  useEffect(() => {
    if (!currentUser) {
      history.push("/");
    }
  }, [currentUser]);
  const printDocument = () => {
    const date = new Date();
    const input = document.getElementById("pdfdiv");
    html2canvas(input).then((canvas) => {
      const imgWidth = 200;
      //const pageHeight = 290;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      //const heightLeft = imgHeight;
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const vpos = 50;
      const hpos = 4;
      pdf.addImage(imgData, "JPEG", hpos, vpos, imgWidth, imgHeight);
      pdf.save(`order_${date}.pdf`);
    });
  };
  return (
    <div className={classes.layout}>
      <Paper className={classes.paper}>
        <div className={classes.orderformContainer}>
          <OrderInputForm />
          <PictureAsPdfIcon
            onClick={printDocument}
            className={classes.pdfIcon}
          />
        </div>
        <SpanningTable history={history} />
      </Paper>
      <CssBaseline />
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: SelectCurrentUser,
});
export default connect(mapStateToProps)(OrderScreen);
