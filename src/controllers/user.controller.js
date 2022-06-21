const userModel = require('../models/user.model');
const { success, failed } = require('../helpers/response');
const deleteFile = require('../utils/deleteFile');

const userController = {
  listAllUser: async (req, res) => {
    try {
      let { sortField, sortType, page, limit, search } = req.query;
      page = Number(page);
      limit = Number(limit);
      const getSearch = !search ? '' : search;
      const sortByField = !sortField ? 'id' : sortField;
      const sortByType =
        sortType === 'ASC' || sortType === 'DESC' ? sortType : 'ASC';
      const getPage = !page ? 1 : page;
      const getLimit = !limit ? 10 : limit;
      const offset = (getPage - 1) * getLimit;
      const allData = await userModel.getCountUsers();
      const totalData = Number(allData.rows[0].total);
      const result = await userModel.selectAllUsers(
        sortByField,
        sortByType,
        getLimit,
        offset,
        getSearch
      );
      if (result.rowCount === 0) {
        failed(res, {
          code: 400,
          status: 'Error',
          message: 'Data not found',
          error: null,
        });
        return;
      }
      if (search) {
        const pagination = {
          currentPage: getPage,
          currentLimit: getLimit,
          totalPage: Math.ceil(result.rowCount / getLimit),
        };
        success(res, {
          code: 200,
          status: 'Success',
          message: 'Get all user success',
          data: result.rows,
          pagination,
        });
      } else {
        const pagination = {
          currentPage: getPage,
          currentLimit: getLimit,
          totalPage: Math.ceil(totalData / getLimit),
        };
        success(res, {
          code: 200,
          status: 'Success',
          message: 'Get all user success',
          data: result.rows,
          pagination,
        });
      }
    } catch (err) {
      failed(res, {
        code: 400,
        status: 'Error',
        message: 'Get all user failed',
        error: err.message,
      });
    }
  },
  getDetail: async (req, res) => {
    try {
      const id = req.params.id;
      const result = await userModel.getDetail(id);
      success(res, {
        code: 200,
        status: 'Success',
        message: 'Get user success',
        data: result.rows[0],
      });
    } catch (err) {
      failed(res, {
        code: 400,
        status: 'Error',
        message: 'Get user failed',
        error: err.message,
      });
    }
  },
  updateProfile: async (req, res) => {
    try {
      const id = req.APP_DATA.tokenDecoded.id;
      const { fullname, bio, phone, username } = req.body;
      const result = await userModel.updateProfile(
        fullname,
        bio,
        phone,
        username,
        id
      );
      if (result.rowCount == 0) {
        failed(res, {
          code: 400,
          status: 'Error',
          message: 'Id not found',
          error: null,
        });
        return;
      }
      success(res, {
        code: 200,
        status: 'Success',
        message: 'Update profile success',
        data: req.body,
      });
    } catch (err) {
      failed(res, {
        code: 400,
        status: 'Failed',
        message: 'Update profile failed',
        error: err.message,
      });
    }
  },
  updatePhoto: async (req, res) => {
    try {
      const id = req.APP_DATA.tokenDecoded.id;
      const checkPhoto = await userModel.getPhoto(id);
      const getPhoto = checkPhoto.rows[0].photo;
      const filePhoto = req.file.filename;
      if (getPhoto === 'profile-default.png') {
        const result = await userModel.updatePhoto(filePhoto, id);
        success(res, {
          code: 200,
          status: 'Success',
          message: 'Update photo success',
          data: result,
        });
      } else {
        const result = await userModel.updatePhoto(filePhoto, id);
        success(res, {
          code: 200,
          status: 'Success',
          message: 'Update photo success',
          data: result,
        });
        deleteFile(`./public/users/${getPhoto}`);
      }
    } catch (err) {
      failed(res, {
        code: 400,
        status: 'Failed',
        message: 'Update photo failed',
        error: err.message,
      });
    }
  },
};

module.exports = userController;
