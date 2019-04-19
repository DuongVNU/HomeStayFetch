const middleware = require('./../middleware');
let jwt = require('jsonwebtoken');
let config = require('./../../config');
const User = require('./../../models').user;
const bcrypt = require('bcrypt');
const db = require('./../../models');

module.exports.registerRoute = (router) => {
    return router
    // .get('/', middleware.checkToken, index)
        .post('/login', loginUser)
        .post('/register', registerUser)
};

let loginUser = (req, respon, next) => {
    let password = req.body.password;
    let email = req.body.email;
    console.log("abaababababa")
    // For the given username fetch user from DB
    let mockedUsername = 'admin';
    let mockedPassword = 'password';
    db.user.findOne({
        where: {
            email: email,
        }
    })
        .then((user) => {
            if (user) {
                bcrypt.compare(password, user.hash, function (err, res) {
                    if (res) {
                        // Passwords match
                        let token = jwt.sign({email: email},
                            config.secret,
                            {
                                expiresIn: '24h' // expires in 24 hours
                            }
                        );
                        // return the JWT token for the future API calls
                        respon.json({
                            success: true,
                            message: 'Authentication successful!',
                            token: token
                        });
                    } else {
                        return respon.send(403).json({
                            success: false,
                            message: 'Nhập sai mật khẩu'
                        });
                    }
                });
            }
        })
        .catch(err => {
            return respon.send(403).json({
                status: 403,
                
                message: 'Nhập sai email'
            });
        })
};
let index = (req, res, next) => {
    return res.json({
        success: true,
        message: 'Index page'
    });
};
let registerUser = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function (err, hash) {
        let body = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            hash: hash
        };
        db.user.count({where: {email: req.body.email}})
            .then(count => {
                if (count !== 0) {
                    return res.status(401).send(
                        {
                            status: 401,
                            message: "Tài khoản đã tồn tại.",
                            result: {}
                        }
                    )
                }
                return User
                    .create(body)
                    .then(todo => res.status(201).send(
                        {
                            status: 200,
                            message: "Tạo tài khoản thành công.",
                            result: todo
                        }
                    ))
                    .catch(error => res.status(400).send(error));
            });
    });

};
