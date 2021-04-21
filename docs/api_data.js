define({ "api": [
  {
    "type": "post",
    "url": "/signin",
    "title": "User signin",
    "name": "UserSignin",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Name of the User</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik5hdm5lZXQgUGFsIiwiZW1haWwiOiJuYXZuZWV0cGFsODEwNkBnbWFpbC5jb20iLCJyb2xlIjoiMCIsImlkIjo4LCJpYXQiOjE2MTkwMDMwMDEsIm5iZiI6MTYxOTAwMzAxMSwiZXhwIjoxNjE5MTc1ODAxfQ.mIFE9DSf-sl0qXfKJldfsG76vtSIPPOGhLFu4gU7rjE\",\n \"username\":\"Navneet Pal\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/signout",
    "title": "User Signout",
    "name": "UserSignout",
    "group": "Auth",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"User signout successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/auth/protected",
    "title": "Admin dashboard",
    "name": "adminDashBoard",
    "group": "Auth",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    message:\"welcome to admin page ADMIN NAME\"\",\n    data:\"This page is only accessible to admin only\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/signup",
    "title": "User Signup",
    "name": "signup",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Name of the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>User saved successfully</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User information</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": "<p>User Unique Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>Name of the User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>Email of the User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.password",
            "description": "<p>Password of the User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.updatedAt",
            "description": "<p>Timestamp when user is updated</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.createdAt",
            "description": "<p>Timestamp when user is created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n \"message\":\"User saved successfully\",\n \"user\":{\n     \"id\":8,\n     \"username\": \"Navneet Pal\",\n     \"email\": \"navneetpal8106@gmail.com\",\n     \"password\": \"$2b$10$21G.5vrMqlAGzHnSBcVVxu0UPPkfZkbqYnR1rEZq3GZPZkc9JsbLe\",\n     \"updatedAt\": \"2021-04-21T10:21:27.527Z\",\n     \"createdAt\": \"2021-04-21T10:21:27.527Z\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/blog/show",
    "title": "Shows the particular blog",
    "name": "showBlog",
    "group": "Blog",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n Your all blogs are here",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "Blog"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "C:\\Users\\HP\\Desktop\\cybercom-nodejs-setup\\docs\\main.js",
    "groupTitle": "C:\\Users\\HP\\Desktop\\cybercom-nodejs-setup\\docs\\main.js",
    "name": ""
  }
] });
