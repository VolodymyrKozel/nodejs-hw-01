import { PATH_DB } from "../constants/contacts.js";
import { readDataFromFile, writeDataToFile } from "../utils/rwToFile.js";

export const removeAllContacts = async () => {
  const dbContacts = await readDataFromFile(PATH_DB);
  const contactsCount = dbContacts.length;
  dbContacts.splice(0, dbContacts.length);
  const contacts = JSON.stringify(dbContacts);
  writeDataToFile(PATH_DB, contacts);

  console.log(`You have removed ${contactsCount} contacts from db.json file`);
};

await removeAllContacts();
