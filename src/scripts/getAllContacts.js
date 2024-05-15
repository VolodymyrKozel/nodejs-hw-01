import { PATH_DB } from "../constants/contacts.js";
import { readDataFromFile } from "../utils/rwToFile.js";

export const getAllContacts = async () => {
  const dbContacts = await readDataFromFile(PATH_DB);
  if (dbContacts.length === 0) {
    return "Your db.json file is empty. Add some contacts first.";
  }
  return dbContacts;
};

console.log(await getAllContacts());
