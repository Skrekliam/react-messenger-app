import Firebase from "firebase";

export const getFromDatabase = (dbString, callback) => {
    const ref = Firebase.database().ref(dbString);
    ref.on('value', snapshot => {
        if (snapshot.val()) {
            callback(snapshot.val());
        }
    });
}

export const saveToDatabase = (dbString, val) => {
    Firebase.database().ref(dbString).set(val);
}