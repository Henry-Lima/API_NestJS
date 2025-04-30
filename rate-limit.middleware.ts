import rateLimit from 'express-rate-limit';
import { NestMiddleware, Injectable, } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RateLimitMiddleware implements NestMiddleware {
  private limiter = rateLimit ({
    windowMs: 60 * 1000, 
    max: 5,
    message: 'Muitas requisições feitas a partir deste IP. Tente novamente mais tarde.',
    standardHeaders: true,
    legacyHeaders: false, 
  });
    

use(req: Request, res: Response, next: NextFunction) {
    this.limiter(req, res, next);
}
}
