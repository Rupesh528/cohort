# Authentication Concepts

### Some Concepts

- **Hashing**  
  One-way process. Commonly used for passwords.

- **Encryption**  
  Two-way process; requires a key for encrypt + decrypt.

- **JWT (JSON Web Token)**  
  Digital signature.  
  Client can read the payload, but only the server can verify using a secret.

- **Local Storage**  
  A browser storage where JWT can be stored.

- **Cookies**  
  Another system for authentication.

---

# Example Code (JWT Authentication)

```js
const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

// check if a user exists
function userExists(username, password) {
  return ALL_USERS.some(
    (user) => user.username === username && user.password === password
  );
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  const token = jwt.sign({ username: username }, jwtPassword);
  return res.json({ token });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;

  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    const users = ALL_USERS.filter((u) => u.username !== username);
    res.json({ users });
  } catch (err) {
    return res.status(403).json({ msg: "Invalid token" });
  }
});

app.listen(3000);
