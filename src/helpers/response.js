module.exports = {
  success: (res, payload) => {
    const {
      code,
      status,
      message,
      data,
      pagination = false,
      token = false,
    } = payload;

    const response = {
      code: code || 200,
      status: status || 'success',
      message,
      data,
    };

    // success with pagination
    if (pagination) {
      response.pagination = pagination;
    }

    // sucess with token
    if (token) {
      response.token = token;
      // delete response.data;
    }

    res.status(code).json(response);
  },
  failed: (res, payload) => {
    const { code, status, message, error } = payload;

    const response = {
      code: code || 500,
      status: status || 'failed',
      message,
      error,
    };

    res.status(code).json(response);
  },
};
