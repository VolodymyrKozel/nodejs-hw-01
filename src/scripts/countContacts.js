import { PATH_DB } from "../constants/contacts.js";
import { readDataFromFile } from "../utils/rwToFile.js";

export const countContacts = async () => {
  const dbContacts = await readDataFromFile(PATH_DB);
  if (dbContacts.length === 0) {
    return "Your db.json file is empty";
  }
  return `Do you have ${dbContacts.length} contacts in your db.json file`;
};

console.log(await countContacts());
