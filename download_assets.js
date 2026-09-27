const fs = require('fs');
const https = require('https');
const path = require('path');

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const file = fs.createWriteStream(dest);
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    };

    https.get(url, options, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(downloadFile(res.headers.location, dest));
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(dest));
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log('Downloading assets...');

  // Download audio
  try {
    const audioUrl = 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-wedding-114002.mp3';
    await downloadFile(audioUrl, 'assets/audio/wedding-melody.mp3');
    console.log('Downloaded wedding-melody.mp3');
  } catch (e) {
    console.log('Audio download note:', e.message);
  }

  // Curated Unsplash images for traditional Kerala / Indian wedding aesthetic
  const gallery = [
    {
      name: 'gallery-1.jpg',
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80',
      title: 'Traditional Kasavu & Jasmine'
    },
    {
      name: 'gallery-2.jpg',
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
      title: 'Floral Arch & Venue Décor'
    },
    {
      name: 'gallery-3.jpg',
      url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&q=80',
      title: 'Pre-Wedding Bliss'
    },
    {
      name: 'gallery-4.jpg',
      url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
      title: 'Haldi & Golden Sunshine'
    },
    {
      name: 'gallery-5.jpg',
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80',
      title: 'Love & Rings'
    },
    {
      name: 'gallery-6.jpg',
      url: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=900&q=80',
      title: 'Auspicious Nilavilakku Light'
    }
  ];

  for (const item of gallery) {
    try {
      await downloadFile(item.url, `assets/images/gallery/${item.name}`);
      console.log(`Downloaded ${item.name}`);
    } catch (e) {
      console.log(`Failed ${item.name}: ${e.message}`);
    }
  }

  console.log('Asset downloads complete.');
}

run();
