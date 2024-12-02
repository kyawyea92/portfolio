import { getDatabase, ref, get } from "firebase/database";
import app from "./firebaseConfig";
const blogDirectory = "myblog";

export async function getBlogById(uuid) {
  const database = getDatabase(app);
  if (uuid !== undefined) {
    const snapshot = await get(
      ref(database, blogDirectory.concat("/").concat(uuid))
    );
    if (snapshot.exists()) {
      return snapshot.val();
    }
  }
  return undefined;
}

export async function getAllBlogs() {
  const db = getDatabase(app);
  return await get(
    ref(db, blogDirectory)
  ).then((snapshot) => {
    if(snapshot.exists()){
      return snapshot.val()
     } else {
      console.log('Data not found');
     }
  });
}