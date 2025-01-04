import { Request, Response, NextFunction, RequestHandler } from 'express';
import { validationResult, ValidationChain, FieldValidationError } from 'express-validator';
import httpStatus from 'http-status-codes';

const validateInputs = (validations: ValidationChain[]): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const formattedErrors = errors.array().map((err) => ({
        field: (err as FieldValidationError).path,
        message: err.msg,
        location: (err as FieldValidationError).location,
      }));

      res.status(httpStatus.BAD_REQUEST).json({
        message: 'Validation Error',
        errors: formattedErrors,
      });
      return;
    }

    // Proceed to the next middleware
    next();
  };
};

export default validateInputs;
