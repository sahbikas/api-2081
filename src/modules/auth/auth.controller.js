

class AuthController{
    registerProcess = (req, res, next) => {
        try{

        }catch(exception){
            res.status(422).json({
                result:{
                    name: "Name is required"
                },
                message: "Validation Failed",
                meta: null
            })
        }
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
         try{

         }catch(exception){
           res.status(422).json({
            result:{
                email: "User does not exists"
            },
            message: "Validation Failed",
            meta: null
           })
         }
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