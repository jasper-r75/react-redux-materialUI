import { makeStyles} from '@material-ui/core/styles';

const drawerWidth = 240;

const AppTheme = makeStyles((theme) => ({
  root: {
    display: 'flex',
    fontFamily: 'Poppins, sans-serif'
   },  
  drawer: {
    flexShrink: 0,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      fontFamily: 'Poppins, sans-serif'      
      // zIndex: 0,
    },    
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    [theme.breakpoints.up('md')]: {     
      paddingLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  }, 
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(4, 2),
    marginTop: '64px',
    [theme.breakpoints.down('xs')]: {
     padding: theme.spacing(1),
     marginTop: '58px',
    },    
  },
}));

export default AppTheme