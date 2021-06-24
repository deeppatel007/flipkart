import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { createContext } from "react";
import { CssBaseline } from "@material-ui/core";
const templetContext = createContext(null);



export const Templetsprovider =({children})=>{
    const theme = createMuiTheme({
        overrides:{
            MuiDialog:{
                paperWidthSm:{
                    maxWidth:'none'
                }
            },
            MuiDialogContent:{
                root:{
                    padding:0,
                    '&:first-child':{
                        paddingTop:0,

                    }
                }
            }
        }

    })

    return(
        <templetContext>
            <ThemeProvider theme={theme}>
            <CssBaseline>
            {
                children
            }
            </CssBaseline>

            </ThemeProvider>
        </templetContext>

    )
}
//https://drive.google.com/drive/folders/18a1YQ4nd6koUX-QW-oIQQzFJh9pf8Hco