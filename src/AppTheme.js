import { makeStyles} from '@material-ui/core/styles';

const drawerWidth = 240;

const AppTheme = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    fontFamily: 'Poppins, sans-serif'
   },  
  drawer: {
    flexShrink: 0,
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      fontFamily: 'Poppins, sans-serif'
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
  //toolbar: theme.mixins.toolbar,
  drawerPaper: {    
    width: drawerWidth,
    position:'relative',
    height: '100%'
  },
  content: {  
    display: 'flex',  
    flexGrow: 1,
    minHeight: '70vh',    
  },
  page: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1,2),
    },
  }
}));

export default AppTheme