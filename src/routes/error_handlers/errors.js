// Custom Error
class CustomNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
    this.name = "NotFoundError";
  }
}

class CustomBadRequestError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400;
    this.name = "BadRequestError";
  }
}

class CustomUnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 401;
    this.name = "UnauthorizedError";
  }
}

class CustomForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 403;
    this.name = "ForbiddenError";
  }
}

class CustomInternalServerError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 500;
    this.name = "InternalServerError";
  }
}

module.exports = {
  CustomNotFoundError,
  CustomBadRequestError,
  CustomUnauthorizedError,
  CustomForbiddenError,
  CustomInternalServerError,
};
