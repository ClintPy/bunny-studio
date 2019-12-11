import express from 'express';
import usersController from '../controllers/user';

const router = new express.Router;

router.get('/api/v1/users', usersController.getAllUsers);
router.post('/api/v1/users', usersController.create);
router.get('/api/users/:id', usersController.getOneUser);
router.put('/api/v1/users/:id', usersController.updateUser);
router.delete('/api/v1/users/:id', usersController.updateUser);

export default router;