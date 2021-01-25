const express = require('express');
const webController = require('./controllers/web.project');
const chessMoveController = require('./controllers/chess.move');
const chessAuthController = require('./controllers/chess.auth');
const chessMatchController = require('./controllers/chess.match');
const chessSaveController = require('./controllers/chess.save');
const router = express.Router();

//DKLEIN.IO RELATED ROUTES
router.post('/getProjects',     webController.getProjects);
router.post('/addProject',      webController.addProject);

//CHESSLEAGUE RELATED ROUTES
//Authentication Related Routes
router.post('/signin',          chessAuthController.signin);
router.post('/signup',          chessAuthController.signup);
router.post('/guestSignIn',     chessAuthController.guestSignIn);

//User Progress Routes
router.post('/saveProgress',     chessSaveController.saveProgress);

//Matchmaking Related Routes
router.post('/getMatches',      chessMatchController.getMatches);
router.post('/addMatch',        chessMatchController.addMatch);
router.post('/removeMatch',     chessMatchController.removeMatch);
router.post('/lookForOpponent', chessMatchController.lookForOpponent);
router.post('/acceptMatch',     chessMatchController.acceptMatch);
router.post('/startMatch',      chessMatchController.startMatch);

//In Match Related Routes
router.post('/checkingForMove', chessMoveController.getLatestMove);
router.post('/moveMade',        chessMoveController.postMove);
router.post('/finishedGame',    chessMoveController.deleteMove);

module.exports = router;
