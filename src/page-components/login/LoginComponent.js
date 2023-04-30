import {useState} from "react";
import {useSnackbar} from "notistack";
import {makeStyles} from "@mui/styles";
import {useRouter} from "next/router";
import {Box, Button, Hidden, TextField, Typography} from "@mui/material";

const useStyles = makeStyles(theme => ({
    paper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // flex: '598',
        backgroundColor:'#fff',
        height:'100vh',
        padding:55,
        width:'100%',
        [theme.breakpoints.down('sm')]:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // flex: '598',
            backgroundColor:'#fff',
            height:'100vh',
            padding:20,
            width:'100%',
        }
    },
}));


const LoginComponent = ({setCurrentPage, setToken}) => {

    const { enqueueSnackbar } = useSnackbar();
    const classes = useStyles();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [emailError,setEmailError] = useState('');
    const [passwordError,setPasswordError] = useState('');
    const Router = useRouter();

    const validate = () =>{
        if (email.trim() === ''){
            setEmailError('Email mustn\'t be empty');
            return false;
        }
        if (email.trim() !== 'admin@gmail.com'){
            setEmailError('Invalid emailId');
            return false;
        }
        if (password.trim() === ''){
            setPasswordError('Password mustn\'t be empty');
            return false;
        }
        if (password.trim() !== 'Password@1'){
            setPasswordError('Invalid password');
            return false;
        }
        return true;
    };

    const login = async () =>{
        if (validate()){
            await localStorage.setItem('email', JSON.stringify(email));
            await localStorage.setItem('password', JSON.stringify(password));
            await Router.push('/');
            enqueueSnackbar('Login Successful', {
                variant: 'success',
            });
        }
    };

    return <div className={classes.paper}>
        <Box display={'flex'} flexDirection={'column'} mt={{md:0,sm:0,xs:0}}>
            <Hidden smUp>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} bgcolor={'#fff'} width={'100%'}>
                    <img src={'/logo.svg'} alt={'Image'} style={{height:140,width:140,marginTop:40}}/>
                </Box>
            </Hidden>
            <Box display={'flex'} flexDirection={'column'} >
                <Typography variant={'h2'} style={{color:'#584084',fontWeight:700}}>{'Login'}</Typography>
                <Box mt={1}/>
                <Typography variant={'subtitle2'}>{'Sign in to continue'}</Typography>
                <Box mt={1}/>
            </Box>
            <Box display={'flex'} flexDirection={'column'} mt={2}>
                <Typography variant={'caption'} sx={{color:'#939393'}}>
                    {'Your Email'}
                </Typography>
                <TextField
                    autoFocus
                    fullWidth
                    margin="dense"
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                    variant="outlined"
                    error={!!emailError}
                    helperText={emailError}
                />
                <Typography variant={'caption'} sx={{color:'#939393',mt:1}}>
                    {'Your Password'}
                </Typography>
                <TextField
                    autoFocus
                    fullWidth
                    margin="dense"
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    variant="outlined"
                    error={!!passwordError}
                    helperText={passwordError}
                />
            </Box>
            <Box mt={1} alignItems="center" display={'flex'}>
                <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                    align="center"
                >
                    By creating an account or logging in, you agree to our
                    <span onClick={async () =>{
                        await Router.push('/terms');
                    }}>
                                      {' Terms'}
                                  </span>
                    {' and'}
                    <span onClick={async () =>{
                        await Router.push('/privacy-policy');
                    }}>
                                      {' Privacy Policy.'}
                                  </span>
                </Typography>
            </Box>
            <Box mt={2} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Button
                    color={'primary'}
                    variant={'contained'}
                    onClick={async ()=>{
                        await login();
                    }}
                    style={{height:'58px'}}
                    fullWidth
                >
                    Login
                </Button>
            </Box>
        </Box>
    </div>
};

export default LoginComponent;
