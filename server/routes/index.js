import DummyQuestionController from '../controllers/dummyController/questionController';
import DummyAnswerController from '../controllers/dummyController/answersController';
import UserController from '../controllers/userController';
import QuestionController from '../controllers/questionController';

const routes = (app) => {
  app.get('/', (req, res) => {
    res.send('Welcome to Questack!');
  });

  app.post('api/v1/auth/signup', UserController.signup );

  app.post('api/v1/auth/login', UserController.login);

  app.get('/api/v2/questions', QuestionController.allQuestions);

  app.get('/api/v1/questions', DummyQuestionController.allQuestions);

  app.post('/api/v1/questions', DummyQuestionController.postQuestions);

  app.get('/api/v1/questions/:questionId', DummyQuestionController.getQuestion);

  app.post('/api/v1/questions/:questionId/answers', DummyAnswerController.postAnswers);

  app.get('/api/v1/questions/:questionId/answers', DummyAnswerController.getAnswers);

  app.delete('/api/v1/questions/:questionId', DummyQuestionController.deleteQuestion);

  app.put('/api/v1/questions/:questionId/answers/:answerId/preferred', DummyAnswerController.AddPreferredAnswer);
  
}

export default routes;
