import { PATH_DB } from "../constants/contacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";
import { readDataFromFile, writeDataToFile } from "../utils/rwToFile.js";

export const addOneContact = async () => {
  const dbContacts = await readDataFromFile(PATH_DB);
  const contact = createFakeContact();
  dbContacts.push(contact);
  const contacts = JSON.stringify(dbContacts);
  writeDataToFile(PATH_DB, contacts);
};

await addOneContact();
