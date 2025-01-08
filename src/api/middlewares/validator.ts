import { Request, Response, NextFunction, RequestHandler } from 'express';
import { validationResult, ValidationChain, FieldValidationError } from 'express-validator';
import httpStatus from 'http-status-codes';

import { ApiError } from '@/api/types/error';

const validateInputs = (validations: ValidationChain[]): RequestHandler => {
  return async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      next(
        new ApiError({
          message: 'Validation Error',
          status: httpStatus.BAD_REQUEST,
          details: errors.array().map((err) => ({
            field: (err as FieldValidationError).path,
            message: err.msg,
            location: (err as FieldValidationError).location,
          })),
        }),
      );
      return;
    }

    // Proceed to the next middleware
    next();
  };
};

export default validateInputs;
