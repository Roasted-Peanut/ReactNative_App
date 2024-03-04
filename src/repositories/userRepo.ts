
import { USER_API } from "../services/api/api";
import instance from "../services/networking/axios";

export default class userAPI {
  static fetchById = (userId: string) => {
    const response = instance.get(USER_API.getUserById, {
      params: { userId: userId },
    })
    return response;
  };
}


