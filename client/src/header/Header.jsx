import {AppBar,Toolbar,makeStyles,Box,Typography,withStyles} from '@material-ui/core';
import Searchbar from './SearchBar';
import HeaderButton from './HeaderButton';
import {Link} from  'react-router-dom';
const useStyle = makeStyles({
    Header:{
        background :  '#2874f0',
        height : 55,
         
    },
    component:{
        marginLeft : '12%',
        lineHeight : 0,
        color : '#fff',
        textDecoration: 'none'

    },
    logo:{
        width : 75
    },
    container:{
        display: 'flex',
    },
    subHeading:{
        fontSize: 10,
        fontStyle:'italic'
    },
    subURL:{
        width:10,
        height:10,
        marginLeft:4
    }
})
const ToolBar = withStyles({
    root: {
      minHeight: 55
    },
})(Toolbar);
const Header = () =>{
    const classes = useStyle();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (
        <AppBar className={classes.Header}>
            <ToolBar>
            <Link to='/' className = {classes.component}>
                <img src={logoURL} className={classes.logo}/>
                <box component="span" className={classes.container}>
                    <Typography className={classes.subHeading}>Explore
                        <box component="span" style={{color:'#FFE500'}}>
                        Plus
                        </box>
                    </Typography>
                    <img src={subURL} className={classes.subURL}></img>
                </box>
            </Link>
            <Searchbar />
            <HeaderButton />
            </ToolBar>
        </AppBar>

    ) 
}
export default Header;