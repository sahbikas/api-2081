

class AuthController{
    registerProcess = (req, res, next) => {
        res.json({
            result: null,
            message: "Your account has been successfully created",
            meta: null
        })
    }

    verifyOTP = (req, res, next) => {
        res.json({
            result: null,
            message: "Your opt was verified",
            meta: null
        })
    }
    activateUser = (req, res, next) => {
        const params = req.params;

        res.json({
            result: params,
            message: "You have successfully activatrd",
            meta: null
        })
    }

    forgetPassword = (req, res, next) => {

    }

    updatePassword = (req, res, next) => {

    }

    login = (req, res, next) => {

    }

    logout = (req, res, next) => {

    }

    loggedInUser = (req, res, next) => {

    }

    updateUser = (req, res, next) => {

    }
}

const authCtrl = new AuthController();
module.exports = authCtrl