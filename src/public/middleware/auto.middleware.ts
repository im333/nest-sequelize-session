import { HttpStatus } from '@nestjs/common';

export const autoMiddleware = (req, res, next) => {
  // if (!req.session.userId) {
  //   res.status(HttpStatus.NON_AUTHORITATIVE_INFORMATION).json('没登录');
  //   return;
  // }

  next();
};
