import { PATH_DB } from "../constants/contacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";
import fs from "fs/promises";

console.log(PATH_DB);
const generateContacts = async (number) => {
  const dataFile = await readDataFromFile(PATH_DB);
  const dbContacts = JSON.parse(dataFile);
  console.log(dbContacts.length);
  if (dbContacts.length) {
    console.log("Database is not empty");
    number = +dbContacts.length;
  }
  for (let i = 0; i < number; i++) {
    const contact = createFakeContact();
    writeDataToFile(PATH_DB, JSON.stringify(contact));
    console.log(contact);
  }
};

await generateContacts(5);

async function readDataFromFile(path) {
  try {
    const data = fs.readFile(path, "utf-8");
    return data;
  } catch (error) {
    console.log(error);
  }
}
async function writeDataToFile(path, data) {
  try {
    await fs.writeFile(path, data);
  } catch (error) {
    console.log(error);
  }
}
function swap() {
  var e = n.split(" ").map(Uu).join(" ");
  r(e);
}
