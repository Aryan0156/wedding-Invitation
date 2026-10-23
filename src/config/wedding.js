// Central wedding content configuration. Update this file when confirmed details change.
const garhiSurajmalMapsUrl = 'https://maps.app.goo.gl/HvwJ8pVRwaSzFUwT8';
const weddingMapsUrl = 'https://maps.app.goo.gl/oawqweAFtsMQ9gdN9?g_st=ac';

export const wedding = {
  bride: 'Kirti',
  groom: 'Jeetu',
  weddingDate: '2026-11-21',
  weddingWeekday: 'Saturday',
  dateLabel: '21 November 2026',
  timeZone: 'Asia/Kolkata',
  weddingTime: null,
  events: [
    { name: 'Haldi', date: 'Friday, 20 November 2026', venue: 'Garhi Surajmal, Tappal', mapUrl: garhiSurajmalMapsUrl, note: 'May every playful touch of turmeric leave us glowing with laughter, good health, and blessings.' },
    { name: 'Mehendi', date: 'Friday, 20 November 2026', venue: 'Garhi Surajmal, Tappal', mapUrl: garhiSurajmalMapsUrl, note: 'May every henna pattern hold a wish, and every shared smile become part of our family story.' },
    { name: 'Sangeet', date: 'Friday, 20 November 2026', venue: 'Garhi Surajmal, Tappal', mapUrl: garhiSurajmalMapsUrl, note: 'Bring your favourite songs and happiest steps; this evening belongs to both our families.' },
    { name: 'Wedding', date: 'Saturday, 21 November 2026', venue: 'Kasturi Mahal Sagun Vatika, Tappal', mapUrl: weddingMapsUrl, note: 'As two hearts and families come together, your presence and blessings will make the day complete.' },
    { name: 'Pagfera', date: 'Monday, 23 November 2026', venue: null, mapUrl: null, note: 'A new chapter begins, and our home will be filled with joy as we welcome Kirti back with love.' }
  ],
  venue: { name: 'Kasturi Mahal Sagun Vatika', address: 'Tappal', mapUrl: weddingMapsUrl },
  brideFamily: {
    parents: [
      { name: 'Mahipal Singh', relationship: 'Papa', note: 'Kirti’s happiness has always been one of my greatest joys. May she and Jeetu build a home filled with respect, laughter, and a love that grows stronger each day.' },
      { name: 'Shashi Devi', relationship: 'Mummy', note: 'I have held Kirti close through every season of her life. May this new beginning bring her endless warmth, understanding, and joy; please bless the couple as they set out together.' }
    ],
    siblings: [
      { name: 'Ruby', relationship: 'Sister', note: 'From childhood laughter to this beautiful day, every memory with Kirti didi is precious to me. I cannot wait to celebrate her new beginning with you.' },
      { name: 'Lusy', relationship: 'Sister', note: 'My sister’s happiness fills my heart. May Kirti didi and Jeetu G always find friendship in each other, and may their life together be full of little joys.' },
      { name: 'Kashish', relationship: 'Sister', note: 'Today our family grows with love. I wish Kirti didi and Jeetu G a lifetime of kind words, shared dreams, and reasons to smile.' },
      { name: 'Kartik', relationship: 'Brother', note: 'Kirti, your joy means the world to me. I am so excited to celebrate your new beginning with Jeetu G and wish you both a lifetime of laughter, kindness, and shared dreams.' }
    ]
  },
  rsvpContact: null,
  musicUrl: '/music/sajan-sajan-teri-dulhan.mp3',
  shagunUpiId: '9548896068@ptyes',
  invitationText: "With hearts full of joy, Kirti's family warmly welcomes you to celebrate the wedding of Kirti & Jeetu. Your presence and blessings will make this special occasion even more memorable."
};
