import { Request, Response, NextFunction } from 'express';
import {  verify } from 'jsonwebtoken';

import authConfig from '@config/auth';

import AppError from '@shared/errors/AppError';

interface ToeknPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction): void {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new AppError('JWT token is missing', 401);
    }

    //Barrer tokenasdasda
    const [, token] = authHeader.split(' ');

    try {
      const decoded = verify(token, authConfig.jwt.secret);

      const { sub } = decoded as ToeknPayload;

      request.user = {
        id: sub,
      }

      return next();
    } catch (err)  {
      throw new AppError('Invalid JWT token', 401);
    }


}
