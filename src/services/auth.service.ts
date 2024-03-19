import { Service } from 'typedi';

//constant
import { HTTP_STATUS } from '@/constants';

//exception
import { HttpException } from '@/exceptions/httpException';

//interface
import { IAuth } from '@/interfaces';

@Service()
export class AuthService {
  public async signUp(): Promise<IAuth | any> {
    try {
      return 'Vai l';
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async signIn(): Promise<IAuth> {
    try {
      return null;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async signOut(): Promise<IAuth> {
    try {
      return null;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async forgotPassword(): Promise<IAuth> {
    try {
      return null;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async resetPassword(): Promise<IAuth> {
    try {
      return null;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }
}
