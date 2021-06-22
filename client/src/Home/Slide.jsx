import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { products } from "../constants/data.js";
import { makeStyles,Box,Typography,Button, Divider } from "@material-ui/core";
import { Component } from "react";
import Countdown from "react-countdown";

const useStyle = makeStyles(
    {
        image:{
            height:150,
            paddingTop:5
        },
        component:{
            marginTop:12,
            background:"#FFFFFF"

        },
        text:{
            fontSize:22,
            fontWeight:600,
            lineHeight: '32px',
            marginRight:25

        },
        deal:{
            padding:"15px 20px",
            display:'flex'

        },
        timer:{
            color:'#7f7f7f',
            marginLeft:10,
            display:'flex',
            alignItems:'center',

        },
        button:{
            marginLeft:'auto',
            background:'#2874f0'

        },
        txt:{
            fontSize:14,
            marginTop:5

        },
        wapper:{
            padding:'35px 15px'

        }

})
const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const Slide = ({timer,titl})=>{
    const classes = useStyle();
    const renderer = ({ hours, minutes, seconds}) => {
        return <span className={classes.timer}>{hours}:{minutes}:{seconds} Left</span>;

      };
    return(
        <Box className={classes.component}>
            <Box className={classes.deal}>
                <Typography className={classes.text}>{titl}</Typography>
                {
                    timer&&
                    <>
                    <img src={'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg'} style={{width:24}}/>
                    <Countdown date={Date.now() + 5.04e+7} renderer={renderer}/>
                    <Button variant="contained" color="primary" className={classes.button}>View all</Button>
                    </>
               }
            </Box>
            <Divider></Divider>
            <Carousel
                responsive={responsive}
                infinite= {true}
                draggable = {false}
                swipeable={false}
                centerMode = {true}
                autoPlay = {true}
                autoPlaySpeed = {10000}
                keyBoardControl = {true}
                showDots = {false}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablate","mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                {
                    products.map(product=>(
                        <Box textAlign="center" className={classes.wrapper}>
                        <img src ={product.url} className={classes.image} />
                        <Typography className={classes.txt} style={{fontWeight:600,color:'#212121'}} >{product.title.shortTitle}</Typography>
                        <Typography className={classes.txt}  style={{color:'green'}}>{product.discount}</Typography>
                        <Typography className={classes.txt} style={{color:'#212121', opacity:'.6'}}>{product.tagline}</Typography>
                        </Box>
                    ))
                }
            
            </Carousel>
        </Box>
    )
}

export default Slide;