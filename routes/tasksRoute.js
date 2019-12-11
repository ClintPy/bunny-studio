import express from 'express';
import tasksController from '../controllers/tasks';

const router = new express.Router;

router.get('/api/v1/tasks/:id', tasksController.userByTasks);
router.post('/api/v1/tasks', tasksController.createTask);

export default router