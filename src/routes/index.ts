import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

// route example
router.get('/success', (req, res) => {
  res.send({
    status: "success",
    message: "Operation completed successfully", 
  });
});

// error example
router.get('/fail', (req, res) => {
  res.status(500).send({
    status: "error",
    message: "Operation failed due to an internal server error",
  });
});

// route with query parameters
router.get('/user/:userId', (req, res) => {
  const userId = req.params.userId;
  const user = {
    id: userId,
    name: "John Doe",
    email: "john.doe@example.com"
  };

  if (!user){
    res.status(404).send({
      status: "error",
      message: "User not found"
    });
  }

  res.send({
    status: "success",
    message: "User found",
    data: user
  });
});

export default router;
