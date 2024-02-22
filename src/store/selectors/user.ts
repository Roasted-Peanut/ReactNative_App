import {IInitialState, IUser, IUserInfo} from '../types'

export const getUserData = (state: IInitialState): IUser => state.user
export const getUserInfo = (state: IInitialState): IUserInfo | undefined => getUserData(state).userInfo
