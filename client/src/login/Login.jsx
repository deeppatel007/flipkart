import { Dialog,DialogContent } from "@material-ui/core";
import { makeStyles, Box ,TextField,Button} from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { useState } from "react";
import { authanticateSignup } from "../service/api";
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

    },
    login:{
        padding: '25px 35px',
        display:'flex',
        flex: 1,
        flexDirection: 'column',
        '& > *':{
            marginTop:20
        }
        
    },  
    txt:{
        color:"#878787",
        fontSize:12
        



    },
    logbtn:{
        textTransform:'none',
        background:'#FD641B',
        color:'#FFFFFF',
        height:48,
        borderRadius:2


    },
    requestbtn:{
        textTransform:'none',
        background:'#FFFFFF',
        color:'#284780',
        height:48,
        borderRadius:2,
        boxShadow:'0 2px 4px 0 rgb(0 0 0 20%)'

    },
    createtext:{
        textAlign: 'center',
        marginTop:'auto',
        fontSize:14,
        color:'#2874f0',
        fontWeight:600,
        cursor:'pointer',

    }




    
})
const initialValue ={
    login:{
        view:'login',
        heading:'Login',
        subHeading : 'Get access to your orders, Wishlist and Recommendation'


    },
    signup:{
        view:'signup',
        heading:"Looks like you're new here!",
        subHeading : "Sign up with your mobile number to get started"


    }
}
const signupinitalvalues = {
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:'',
};
const Login = ({open,setOpen,setAccount}) =>{
    const classes = useStyle();
    const [account,setaccount] =useState(initialValue.login);
    const [signup,setSignup] = useState(signupinitalvalues);
    const handleClose =()=>{
        setOpen(false);
        setaccount(initialValue.login);
    }
    const toggleaccount = () =>{
        setaccount(initialValue.signup);
    }
    
    const onInputChange = (e) =>{
        setSignup({...signup,[e.target.name]: e.target.value});
        
    }
    const signupuser = async () =>{
        let responce = await authanticateSignup(signup);
        
        if(!responce)return;
        
        handleClose();
        setAccount(signup.username);

    }
    
    return(
        
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component}>
                <Box style={{display:'flex'}}>
                    <Box className={classes.image}>
                    <Typography variant="h5">{account.heading}</Typography>
                    <Typography style={{marginTop:'25px'}}>
                       {account.subHeading}
                    </Typography>
                    </Box>
                    {
                        account.view === 'login' ?
                    <Box className={classes.login}>
                        <TextField name='username' label='Enter Email/Mobile number'></TextField>
                        <TextField name='password' label='Enter Password'></TextField>
                        <Typography className={classes.txt} >By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                        <Button variant="contained" className={classes.logbtn}>Login</Button>
                        <Typography style={{textAlign:'center'}} className={classes.txt}>OR</Typography>
                        <Button variant="contained" className={classes.requestbtn}>Request OTP</Button>
                        <Typography onClick ={()=>toggleaccount()} className={classes.createtext}>New to Flipkart? Create an account</Typography>
                    </Box> :
                    <Box className={classes.login}>
                        <TextField onChange={ (e) => onInputChange(e) } name='firstname' label='Enter Firstname'></TextField>
                        <TextField onChange={ (e) => onInputChange(e) } name='lastname' label='Enter Lastname'></TextField>
                        <TextField onChange={ (e) => onInputChange(e) } name='username' label='Enter Username'></TextField>
                        <TextField onChange={ (e) => onInputChange(e) } name='email' label='Enter Email'></TextField>
                         <TextField onChange={ (e) => onInputChange(e) } name='password' label='Enter Password'></TextField>
                        <TextField onChange={ (e) => onInputChange(e) } name='phone' label='Enter Phone number'></TextField>
                        
                      <Button onClick={() => signupuser()}  variant="contained" className={classes.logbtn}>Signup</Button>
                    </Box>
                    }
                </Box>
            </DialogContent>
        </Dialog>
    )
}
export default Login;