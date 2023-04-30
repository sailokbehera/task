import feathers from '@feathersjs/feathers';
import auth from '@feathersjs/authentication-client';
import { CookieStorage } from 'cookie-storage';
import rest from '@feathersjs/rest-client';
import Axios from 'axios';
import services from './services.json';

/**
 * CookieStorage
 * @type {CookieStorage}
 */

export const cookieStorage = new CookieStorage();

const restClient = rest(process.env.baseUrl);

export const authCookieName = process.env.cookieName;


/**
 * Feathers application
 */

const restApp = feathers();

restApp.configure(restClient.axios(Axios));

restApp.configure(
    auth({
        path: services.authentication,
        cookie: authCookieName,
        storageKey: authCookieName,
        storage: cookieStorage,
    }),
);

export default restApp;

export const uploadService = restApp.service(services.upload);
export const countryService = restApp.service(services.country);
export const stateService = restApp.service(services.state);
export const cityService = restApp.service(services.city);
export const interestService = restApp.service(services.interest);
export const authenticatePhoneService = restApp.service(services.authenticatePhone);
export const authenticateGoogleService = restApp.service(services.authenticateGoogle);
export const authenticateAppleService = restApp.service(services.authenticateApple);
export const userService = restApp.service(services.user);
export const authenticateJWTService = restApp.service(services.authenticateJWT);
export const connectCommunityService = restApp.service(services.connectCommunity);
export const communityService = restApp.service(services.community);

export const uploadFile = (file) => {
    const formData = new FormData();
    formData.append('uri[]', file);
    return uploadService.create(formData);
};
