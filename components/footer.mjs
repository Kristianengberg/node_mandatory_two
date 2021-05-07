import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.join(__filename, '../../');

export const footer = fs.readFileSync(__dirname + "/public/components/footer.html", "utf8");