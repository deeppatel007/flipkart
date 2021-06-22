import { Dialog,DialogContent } from "@material-ui/core";
import { makeStyles, Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";
const useStyle = makeStyles({
    component:{
        height:"70vh",
        width:"90vh",
    },
    image:{
        backgroundImage:`url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,     
        height:'70vh',
        backgroundRepeat: 'no-repeat',
        background:'#2874f0',
        width:'40%',
        backgroundPosition:'center 85%',
        padding:'45px 15px',

        '& > *':{
            color: '#FFFFFF',
            fontWeight:600
        }

    }  

    
})
const Login = ({open,setOpen}) =>{
    const classes = useStyle();
    const handleClose =()=>{
        setOpen(false);
    }
    
    return(
        
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component}>
                <Box>
                    <Box className={classes.image}>
                    <Typography>Login</Typography>
                    <Typography>
                        Get access to your orders, Wishlist and Recommendation
                    </Typography>
                    </Box>
                    <Box>

                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    )
}
export default Login;