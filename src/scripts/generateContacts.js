import { PATH_DB } from "../constants/contacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";
import { readDataFromFile, writeDataToFile } from "../utils/rwToFile.js";

export const generateContacts = async (number) => {
  const dbContacts = await readDataFromFile(PATH_DB);

  for (let i = 0; i < number; i++) {
    const contact = createFakeContact();
    dbContacts.push(contact);
  }
  const contacts = JSON.stringify(dbContacts);
  writeDataToFile(PATH_DB, contacts);
};

await generateContacts(2);
