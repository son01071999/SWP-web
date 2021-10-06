import {
    Box,
    Grid,
    Container,
    Typography,
    makeStyles,
    Divider,
    Button,
    ListItem,
    ListItemText,
  } from '@material-ui/core';
  import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
  import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
  import LocalOfferIcon from '@material-ui/icons/LocalOffer';
  import LocationOnIcon from '@material-ui/icons/LocationOn';
  import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
  import GifIcon from '@material-ui/icons/Gif';
  import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
  import { withStyles } from '@material-ui/styles';
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(3, 3),
    },
    paper: {
      margin: `${theme.spacing(2)}px auto`,
      padding: theme.spacing(0),
      width: '500px',
      height: '450px',
      boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.3)',
      borderRadius: '10px',
    },
    close: {
      color: '#696969',
      backgroundColor: '#e8e7e7',
    },
    messageArea: {
      height: '200px',
      overflowY: 'auto',
    },
    menu: {
      borderRadius: '5px',
      border: '1px solid #d7d7d7',
      height: '50px',
    },
    inMenu: {
      marginTop: '15px',
      marginLeft: 5,
    },
    post: {
      textTransform: 'none',
      fontSize: 16,
      fontWeight: 'bold',
      color: '#a69f9f',
      backgroundColor: '#e8e7e7',
    },
  }));
  const CusTypography = withStyles({
    root: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  })(Typography);
  const Pricing = () => {
    const classes = useStyles();
    return (
      <Box className={classes.paper}>
        <Container>
          <ListItem>
            <ListItemText align="center">
              <CusTypography>Tạo bài viết</CusTypography>
            </ListItemText>
          </ListItem>
          <Divider />
          <Grid className={classes.messageArea}></Grid>
          <ListItem>
            <ListItemText align="right">
              <SentimentSatisfiedIcon fontSize="large" color="action" />
            </ListItemText>
          </ListItem>
          <Box className={classes.menu} mb={2}>
            <Grid container className={classes.inMenu}>
              <Grid item xs={6}>
                <CusTypography>Thêm vào bài viết</CusTypography>
              </Grid>
              <Grid item xs={1}>
                <AddPhotoAlternateIcon style={{ color: '#45c065' }} />
              </Grid>
              <Grid item xs={1}>
                <LocalOfferIcon style={{ color: '#1877f5' }} />
              </Grid>
              <Grid item xs={1}>
                <LocationOnIcon style={{ color: '#f6523f' }} />
              </Grid>
              <Grid item xs={1}>
                <InsertEmoticonIcon style={{ color: '#f2b534' }} />
              </Grid>
              <Grid item xs={1}>
                <GifIcon style={{ color: '#31b5a2' }} />
              </Grid>
              <Grid item xs={1}>
                <MoreHorizIcon style={{ color: '#626262' }} />
              </Grid>
            </Grid>
          </Box>
          <Button fullWidth className={classes.post}>
            Đăng
          </Button>
        </Container>
      </Box>
    );
  };
  export default Pricing;
  