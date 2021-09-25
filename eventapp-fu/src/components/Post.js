import {
  Box,
  Grid,
  Container,
  Typography,
  makeStyles,
  Divider,
  Button,
  ListItem,
  Avatar,
  ListItemText,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import GifIcon from '@mui/icons-material/Gif';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { withStyles } from '@mui/material/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     overflow: 'hidden',
//     padding: theme.spacing(3, 3),
//   },
//   paper: {
//     margin: `${theme.spacing(2)}px auto`,
//     padding: theme.spacing(0),
//     width: '500px',
//     height: '450px',
//     boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.3)',
//     borderRadius: '10px',
//   },
//   close: {
//     color: '#696969',
//     backgroundColor: '#e8e7e7',
//   },
//   messageArea: {
//     height: '200px',
//     overflowY: 'auto',
//   },
//   menu: {
//     borderRadius: '5px',
//     border: '1px solid #d7d7d7',
//     height: '50px',
//   },
//   inMenu: {
//     marginTop: '15px',
//     marginLeft: 5,
//   },
//   post: {
//     textTransform: 'none',
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#a69f9f',
//     backgroundColor: '#e8e7e7',
//   },
// }));
// const Typography = withStyles({
//   root: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// })(Typography);



const Post = () => {
  return (
    <Grid
      style={{
        flexGrow: 1,
        overflow: 'hidden',
      }}
    >
      <Box
        style={{
          width: '500px',
          height: '450px',
          boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.3)',
          borderRadius: '10px',
        }}
      >
        <Container>
          <ListItem>
            <ListItemText align="right">
              <Typography>Tạo bài viết</Typography>
            </ListItemText>
            <ListItemText align="right">
              <Avatar
                style={{
                  color: '#696969',
                  backgroundColor: '#e8e7e7',
                }}
              >
                <CloseIcon />
              </Avatar>
            </ListItemText>
          </ListItem>
          <Divider />
          <Grid
            style={{
              height: '200px',
              overflowY: 'auto',
            }}
          ></Grid>
          <ListItem>
            <ListItemText align="right">
              <SentimentSatisfiedIcon fontSize="large" color="action" />
            </ListItemText>
          </ListItem>
          <Box style={{
            borderRadius: '5px',
            border: '1px solid #d7d7d7',
            height: '50px',
          }} mb={2}>
            <Grid container style={{
              marginTop: '15px',
              marginLeft: 5,
            }}>
              <Grid item xs={6}>
                <Typography>Thêm vào bài viết</Typography>
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
          <Button fullWidth style={{
            textTransform: 'none',
            fontSize: 16,
            fontWeight: 'bold',
            color: '#a69f9f',
            backgroundColor: '#e8e7e7',
          }}>
            Đăng
          </Button>
        </Container>
      </Box>
    </Grid>
  );
};
export default Post;
