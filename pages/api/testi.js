import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const testiDir = path.join(process.cwd(), 'public', 'testi');
  fs.readdir(testiDir, (err, files) => {
    if (err) return res.status(500).json({ error: 'Tidak bisa baca folder testi' });

    const images = files.filter(f => /\.(jpe?g|png|gif)$/i.test(f))
                        .map(f => `/testi/${f}`);
    res.status(200).json(images);
  });
}