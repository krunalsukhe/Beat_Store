// var express = require("express");
// const { addFile, getRecentFile, getAllFiles } = require("../controllers/upload");
// const { isSignedIn, isClubGensec } = require("../controllers/auth");


// const multer = require("multer");
// var router = express.Router();
// let fileName ="";
// const upload = multer({
//     storage: multer.diskStorage({
//       destination(req, file, cb) {
//         let Oname = file.originalname;
//         let extension = Oname.substring(Oname.lastIndexOf('.'));
//         let prefix = req.body.title;
//         prefix = prefix.replace(/^\s+|\s+$/g, '');
//         prefix = prefix.replace(/\s\s+/g, '_');
//         prefix = prefix.replace(/ /g, '_');
//         let d = new Date();
//         let suffix = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}-${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}`
//         fileName = prefix + "_" + suffix + extension;
//         cb(null, './media/files');
//       },
//       filename(req, file, cb) {
        
//         cb(null, fileName);
//       }
//     }),
//     limits: {
//       fileSize: 10000000 // max file size 1MB = 1000000 bytes
//     },
//     fileFilter(req, file, cb) {
//       if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
//         return cb(
//           new Error(
//             'only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format.'
//           )
//         );
//       }
//       cb(undefined, true); // continue with upload
//     }
//   });

// router.post("/uploadBeat", isSignedIn,addFile);

// router.get('/getRecentFile', getRecentFile);
// router.get('/getAllFiles', isSignedIn, isClubGensec , getAllFiles);

// module.exports = router;