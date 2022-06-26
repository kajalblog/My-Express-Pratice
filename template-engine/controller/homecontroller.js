// import {join} from 'path';
const homecontrolller = (req, res) => {
  // res.send("Home controller");
  // res.sendFile(join(process.cwd(),'views','index.html'));
  res.render("index.ejs", { name: "kajal" });
};
export { homecontrolller };
