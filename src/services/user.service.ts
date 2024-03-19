import { Service } from 'typedi';

//constant
import { HTTP_STATUS } from '@/constants';

//exception
import { HttpException } from '@/exceptions/httpException';

//interface
import { IUser } from '@/interfaces';

@Service()
export class UserService {
  public async getUsers(): Promise<IUser[]> {
    try {
      return [];
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async getUser(): Promise<IUser> {
    try {
      return null;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async createUser(): Promise<IUser> {
    try {
      return null;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async updateUser(): Promise<IUser> {
    try {
      return null;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async deleteUser(): Promise<any> {
    try {
      return null;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }
}
