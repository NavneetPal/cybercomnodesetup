/**
 * @api {get} /blog/show  Shows the particular blog
 * @apiName showBlog
 * @apiGroup Blog
 * 
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 *  Your all blogs are here
 */

/**
 * @api {post} /signup User Signup
 * @apiName signup
 * @apiGroup Auth
 * 
 * @apiParam {String} username Name of the User
 * @apiParam {String} email Email of the User
 * @apiParam {String} password Password of the user
 * 
 * @apiSuccess {String} message User saved successfully
 * @apiSuccess {Object} user User information
 * @apiSuccess {Number} user.id User Unique Id
 * @apiSuccess {String} user.username Name of the User
 * @apiSuccess {String} user.email Email of the User
 * @apiSuccess {String} user.password Password of the User
 * @apiSuccess {String} user.updatedAt Timestamp when user is updated
 * @apiSuccess {String} user.createdAt Timestamp when user is created
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 201 OK
 * {
 *  "message":"User saved successfully",
 *  "user":{
 *      "id":8,
 *      "username": "Navneet Pal",
 *      "email": "navneetpal8106@gmail.com",
 *      "password": "$2b$10$21G.5vrMqlAGzHnSBcVVxu0UPPkfZkbqYnR1rEZq3GZPZkc9JsbLe",
 *      "updatedAt": "2021-04-21T10:21:27.527Z",
 *      "createdAt": "2021-04-21T10:21:27.527Z"
 *  }
 * }
 * 
 */

/**
 * @api {post} /signin User signin
 * @apiName UserSignin
 * @apiGroup Auth
 * 
 * @apiParam {String} email User email
 * @apiParam {String} password User password
 * 
 * @apiSuccess {String} token User token
 * @apiSuccess {String} username Name of the User
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *  "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik5hdm5lZXQgUGFsIiwiZW1haWwiOiJuYXZuZWV0cGFsODEwNkBnbWFpbC5jb20iLCJyb2xlIjoiMCIsImlkIjo4LCJpYXQiOjE2MTkwMDMwMDEsIm5iZiI6MTYxOTAwMzAxMSwiZXhwIjoxNjE5MTc1ODAxfQ.mIFE9DSf-sl0qXfKJldfsG76vtSIPPOGhLFu4gU7rjE",
 *  "username":"Navneet Pal"
 * }
 */

/**
 * @api {get} /signout User Signout
 * @apiName UserSignout
 * @apiGroup Auth
 * 
 * @apiSuccessExample {json} Success-Response
 * HTTP/1.1 200 OK
 * {
 *    "message": "User signout successfully"
 * }
 * 
 */


/**
 * @api {get} /auth/protected Admin dashboard
 * @apiName adminDashBoard
 * @apiGroup Auth
 * 
 * @apiSuccessExample {json} Success-Response
 * HTTP/1.1 200 OK
 * {
 *     message:"welcome to admin page ADMIN NAME"",
 *     data:"This page is only accessible to admin only"
 * }
 */