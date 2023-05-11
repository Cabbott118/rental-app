const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const cors = require('cors')({ origin: true });

exports.createUserDocument = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== 'POST') {
      return res.status(400).json({ error: 'Invalid Request' });
    }

    const { uid, email } = req.body;
    const newUser = {
      email,
      userId: uid,
      isRegistered: false,
    };
    admin
      .firestore()
      .collection('users')
      .doc(uid)
      .set(newUser)
      .then(() => {
        return res
          .status(200)
          .json({ message: 'User document created successfully' });
      })
      .catch((error) => {
        console.error(error);
        return res.status(500).json({ error });
      });
  });
});

exports.getUserById = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    try {
      const userId = req.query.userId;
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
});
