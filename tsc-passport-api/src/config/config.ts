export default {
  jwtSecret: process.env.JWT_SECRET || "secretJR",
  DB: {
    URI: process.env.MONGODB_URI || "mongodb://localhost/tsc-passport",
    USER: process.env.USER || "root",
    PASS: process.env.PASS || "root",
  },
};
