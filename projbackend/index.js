require("dotenv").config();
const app = require("./app");
const dbConn = require("./config/dbConn");
const _ = require("lodash"); //I dont understand why i have to use lodash here when i didnt have to in my previous(ecomm store proj).
const PORT= process.env.PORT || 4679
dbConn();

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
