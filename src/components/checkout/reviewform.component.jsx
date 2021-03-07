import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { subtotal } from "../../utils/utils.component";
const Review = (props) => {
  const { orderItems, shippingAddress, paymentDetails } = props;
  const { address1, city, state, zip, cname } = shippingAddress;
  const { cardType, nameOnCard, cardNumber, expiryDate } = paymentDetails;
  const addresses = [address1, city, state, zip, "USA"];
  const lastDigits = cardNumber ? cardNumber.replace(/.(?=.{4})/g, "") : "xxxx";
  const payments = [
    { name: "Card type", detail: cardType },
    { name: "Card holder", detail: nameOnCard },
    { name: "Card number", detail: `xxxx-xxxx-xxxx-${lastDigits}` },
    { name: "Expiry date", detail: expiryDate },
  ];
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {orderItems.map((product) => (
          <ListItem className={classes.listItem} key={product.id}>
            <ListItemText primary={product.desc} />
            <Typography variant="body2">{product.price.toFixed(2)}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {subtotal(orderItems).toFixed(2)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping Address:
          </Typography>
          <Typography gutterBottom>{addresses[cname]}</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Review;
const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));
