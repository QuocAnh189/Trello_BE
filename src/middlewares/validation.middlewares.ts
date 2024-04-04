import { NextFunction, Request, Response } from 'express';

//constant
import { HTTP_STATUS } from '@/constants';

//dto
import { ResponseDto } from '@/dtos';

//exception
import { HttpException } from '@/exceptions/httpException';


export const ValidationMiddleware =  (  validator: any) => {
  return async (req: Request, res: Response<ResponseDto>, next: NextFunction) => {
    try {
      await validator.validateAsync(req.body, { abortEarly: false })
      next()
    } catch (error) {
      next(new HttpException(HTTP_STATUS.BAD_REQUEST, error.message));
    }
  }
};
