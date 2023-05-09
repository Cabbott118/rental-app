const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const cors = require('cors')({ origin: true }); // Add this line

exports.createUserDocument = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    // Add this line
    if (req.method !== 'POST') {
      return res.status(400).json({ error: 'Invalid Request' });
    }

    const { uid, email } = req.body;
    const newUser = {
      email,
      userId: uid,
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
