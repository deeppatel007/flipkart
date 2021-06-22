import { Box,makeStyles } from "@material-ui/core";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import Midsection from "./Midsection";
const useStyle = makeStyles({
    component:{
        padding:10,
        background:"#F2F2F2"
    },
    rightwapper:{
            background:'#FFFFFF',
            padding:5,
            margin:'12px 0 0 10px',
            width:'17%',
            

    }
}
)
const Home = () =>
{
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    const classes = useStyle();
    return(
        <div>
            <NavBar></NavBar>
            <Box className={classes.component}>
                <Banner></Banner>
                <Box style={{display: 'flex'}}>
                    <Box style={{width:'83%'}}>
                        <Slide timer={true}
                        titl="Deal Of The Day"></Slide>
                    </Box>
                    <Box className={classes.rightwapper} >
                        <img src={adURL} style={{width:'230px',height:'288px'}}/>
                    </Box>
                
                </Box>
                <Midsection></Midsection>
                <Slide timer={false} titl="Discount for you"></Slide>
                <Slide timer={false} titl="Suggested for you"></Slide>
                <Slide timer={false} titl="Top Selection"></Slide>
                <Slide timer={false} titl="Recommended Items"></Slide>
                <Slide timer={false} titl="Bestsellers"></Slide>
            
            </Box>
            
        </div>

    )
}

export default Home;