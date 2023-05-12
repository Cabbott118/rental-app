const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');

admin.initializeApp();

const app = express();
app.use(cors({ origin: true }));

app.post('/user', async (req, res) => {
  try {
    const { uid, email } = req.body;
    const newUser = {
      email,
      userId: uid,
      isRegistered: false,
    };
    await admin.firestore().collection('users').doc(uid).set(newUser);
    return res
      .status(200)
      .json({ message: 'User document created successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
});

app.get('/user/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const userDoc = await admin
      .firestore()
      .collection('users')
      .doc(userId)
      .get();
    if (!userDoc.exists) {
      return res.status(404).send('User not found');
    }
    const userData = userDoc.data();
    return res.status(200).json(userData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
});

app.patch('/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const { field1, field2 } = req.body;
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }
    const userRef = admin.firestore().collection('users').doc(userId);
    await userRef.update({ field1, field2 });
    return res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
});

exports.api = functions.https.onRequest(app);
