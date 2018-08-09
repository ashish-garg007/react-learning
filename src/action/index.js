import {TOKEN, PROFILE} from '../constant/action-type';

export const addToken = token => ({type:TOKEN, payload: token});
export const addProfile = profile => ({type:PROFILE, payload: profile})