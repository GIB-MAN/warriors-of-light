# Warriors of Light

საგამოცდო დავალება – Spotify-სტილის მუსიკალური პლატფორმის UI.

## პროექტის სტრუქტურა

```
warriors-of-light/
├── index.html          # მთავარი გვერდი (Home)
├── library.html        # ბიბლიოთეკა
├── searchpage.html     # ძებნის გვერდი
├── playlistpage.html   # ფლეილისტის გვერდი (Daft Punk Mix)
├── assets/
│   ├── scss/           # სტილები (SCSS → CSS)
│   │   ├── main.scss, main.css
│   │   ├── playlistpage.scss, playlistpage.css
│   │   ├── searchpage.scss, searchpage.css
│   │   ├── library.scss, library.css
│   │   ├── abstract/   # ცვლადები, მიქსინები
│   │   ├── base/       # reset, base
│   │   └── layout/     # header, nav, footer, content
│   └── images/         # აიქონები, ფოტოები
└── package.json
```

## გაშვება

```bash
npm install
npm run build    # SCSS კომპილაცია
npm run watch    # SCSS ცვლილებების მონიტორინგი
```

გვერდების ნახვა: ფაილების პირდაპირ გახსნა ბრაუზერში (index.html, playlistpage.html და ა.შ.).

## Playlist გვერდი (playlistpage.html)

### HTML სტრუქტურა
- **Header** – ნავიგაცია, ძებნა, მომხმარებლის აიქონები
- **Nav** – მარცხენა საიდბარი: ბიბლიოთეკა, ფლეილისტები, ალბომები
- **Playlist კონტენტი** – სათაური, ტულბარი (Play, Shuffle, Search), სიმღერების ცხრილი
- **მარჯვენა საიდბარი** – ქარდი, ჟანრის ტეგები, დაკავშირებული არტისტები
- **Friends Activity** – მეგობრების აქტივობის პანელი
- **Footer** – ფლეერის ბარი

### SCSS (playlistpage.scss)
- ცვლადები: ფერები, ინტერვალები, რადიუსები, transition
- მიქსინები: `flex`, `flex-start`, `satoshi_custom`
- სექციები: Nav, Layout, Playlist details, Song list, Right sidebar, Genre tags, Related artists

### JavaScript ლოგიკა
- `togglePlaylists()` – Playlists ჩამოშლადი სიის გახსნა/დახურვა
- `friendsActivity()` – Friends Activity პანელის ჩვენება/დამალვა
- `closeContainer()` – Friends Activity პანელის დახურვა
- `resize` listener – ეკრანის ვიწროვებისას პანელის დახურვა
- Like ღილაკი – `liked` კლასის toggle დაკლიკებაზე
- `initCarousel()` – ბიბლიოთეკის/სახლის კარდების ჰორიზონტალური სქროლი

## კომენტარები

პროექტში გამოყენებულია მარტივი კომენტარები:
- **HTML** – სექციების და ბლოკების აღწერა
- **SCSS** – ცვლადების, სექციების და კომპონენტების აღწერა
- **JS** – ფუნქციების და მოვლენების აღწერა
