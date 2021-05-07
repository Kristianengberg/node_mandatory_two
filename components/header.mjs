import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.join(__filename, '../../');


export const header = fs.readFileSync(__dirname + "/public/components/header.html", "utf8");