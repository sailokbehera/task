import React, {useState} from "react";
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import Layout from '../src/components/DefaultLayout';
import {useEffect} from 'react';
import {SnackbarProvider} from "notistack";
import 'react-phone-input-2/lib/style.css'
import 'cropperjs/dist/cropper.css';
import {useRouter} from "next/router";
import {CircularProgress} from "@mui/material";
import Loader from "../src/components/Loader";

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    const [loading,setLoading] = useState(false);

    const Router = useRouter();
    let email;
    let password;
    if (typeof window !== 'undefined') {
        // Perform localStorage action
         email = JSON.parse(localStorage.getItem('email'));
         password = JSON.parse(localStorage.getItem('password'));
    }

    console.log('kk',email,password);

    useEffect(async () => {
        setLoading(true);
            if (email === null ||password === null){
                await Router.push('/login');
                setLoading(false);
            }else {
                await Router.push('/');
                setLoading(false);
            }
    }, []);

    return (
        <SnackbarProvider>
            <CacheProvider value={emotionCache}>
                <Head>
                    <title>Task</title>
                    <meta content="initial-scale=1, width=device-width" name="viewport" />
                </Head>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {
                        loading?<Loader/>:<Layout>
                            <Component{...pageProps}/>
                        </Layout>
                    }

                </ThemeProvider>
            </CacheProvider>
        </SnackbarProvider>

    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
};
