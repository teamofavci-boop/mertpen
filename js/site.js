/* =========================================================
   MERT PEN — ortak bileşenler, ürün verisi ve animasyonlar
   İletişim bilgilerini değiştirmek için yalnızca SITE nesnesini düzenleyin.
   ========================================================= */
const SITE = {
  name: 'Mert Pen',
  legal: 'MERTPEN PVC Doğrama San. Tic. Ltd.',
  phone: '0555 483 28 85',
  phoneIntl: '905554832885',
  address: 'Aksoy Mah., Fazıl Bey Cd. No:79/B, 35580 Karşıyaka / İzmir',
  mapsQuery: 'MERTPEN PVC DOĞRAMA, Fazil Bey Cd. 79/B, 35580 Karşıyaka/İzmir',
  hours: 'Her gün 09:00 – 19:00',
  instagram: 'https://www.instagram.com/mertpen35/',
  igHandle: '@mertpen35',
  rating: '4,2'
};
SITE.mapsLink = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(SITE.mapsQuery);
SITE.wa = (text) => 'https://wa.me/' + SITE.phoneIntl + (text ? '?text=' + encodeURIComponent(text) : '');

/* ---------- İkonlar ---------- */
const I = {
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.6" cy="6.4" r=".8" fill="currentColor"/></svg>',
  wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.7 17.8L0 24l6.3-1.7a11.8 11.8 0 0 0 5.7 1.4A11.8 11.8 0 0 0 20.4 3.6z"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>',
  chev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg>'
};
const MARK = '<svg class="brand__mark" viewBox="0 0 80 80" aria-hidden="true"><defs><linearGradient id="mg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1B5FA8"/><stop offset="1" stop-color="#0B2545"/></linearGradient></defs><rect x="6" y="6" width="68" height="68" rx="10" fill="url(#mg)"/><rect x="13" y="13" width="54" height="54" rx="4" fill="none" stroke="#fff" stroke-width="3"/><polyline points="21,58 21,22 40,42 59,22 59,58" fill="none" stroke="#fff" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/><line x1="46" y1="62" x2="62" y2="46" stroke="#F7931E" stroke-width="4" stroke-linecap="round"/></svg>';
const brand = (light) => `<a href="index.html" class="brand${light ? ' brand--light' : ''}" aria-label="Mert Pen ana sayfa">${MARK}<span class="brand__text"><span class="brand__name">MERT<b>PEN</b></span><span class="brand__sub">PVC KAPI &amp; PENCERE</span></span></a>`;

/* ---------- Ürün verisi (kaynak: Egepen Deceuninck) ---------- */
const CATEGORIES = [
  { id: 'pencere', name: 'PVC Pencere & Kapı Sistemleri', short: 'PVC Pencere & Kapı', img: 'img/hero1.jpg',
    text: 'Yüksek ısı ve ses yalıtımı, uzun ömür ve estetik tasarımı bir araya getiren Egepen Deceuninck PVC pencere ve kapı sistemleri; evinize ve iş yerinize ölçüye özel üretilip uzman ekibimizce monte edilir.' },
  { id: 'surme', name: 'PVC Sürme Sistemleri', short: 'Sürme Sistemleri', img: 'img/hero2.jpg',
    text: 'Geniş açıklıklarda ferahlık, kolay kullanım ve yüksek sızdırmazlık. Teras, balkon ve bahçe geçişleri için yer kaplamayan, manzarayı içeri taşıyan sürme çözümleri.' },
  { id: 'panjur', name: 'Panjur, Kepenk & Yardımcı Ürünler', short: 'Panjur & Kepenk', img: 'img/hero3.jpg',
    text: 'Güvenlik, gölgelendirme ve enerji tasarrufu için Storbox panjur ve kepenk sistemleri; sineklik ve dekor lambri gibi tamamlayıcı ürünlerle eksiksiz çözüm.' },
  { id: 'cambalkon', name: 'Cam Balkon Sistemleri', short: 'Cam Balkon', img: 'img/offer.jpg',
    text: 'Balkonunuzu dört mevsim kullanılabilir bir yaşam alanına dönüştürün. İç ve dış mekan arasında kesintisiz geçiş, şık görünüm ve enerji tasarrufu bir arada.' }
];

const PRODUCTS = [
  { id: 'legend', cat: 'pencere', name: 'Legend', tag: 'En Çok Tercih Edilen', img: 'img/legend.webp', fit: 'contain',
    slogan: 'Isı ve ses yalıtımında yüksek performans.',
    desc: 'Legend PVC pencere ve kapı sistemi, 80 mm oturma genişliği ve 6 odacıklı yapısıyla tasarlanmıştır. Yalıtım (ısı ve ses), mukavemet ve sızdırmazlık birlikte değerlendirilerek geliştirilen profiller, EN 12608-1 standardına uygun olarak üretilir.',
    specs: [['Profil Genişliği', '80 mm'], ['Odacık Sayısı', '6'], ['Conta Sayısı', '3 (Orta contalı)'], ['Conta', 'TPE Gri / Siyah'], ['Cam Kalınlıkları', '24, 30, 36, 44, 52 mm'], ['Isı İletkenlik (Uf)', '0.92 W/m²K']] },
  { id: 'legend-art', cat: 'pencere', name: 'Legend Art', tag: 'Tasarım', img: 'img/legend-art.webp', fit: 'contain',
    slogan: 'Zarif tasarımın mükemmel performansla buluşması.',
    desc: 'En ince ayrıntısına kadar düşünülmüş tasarımıyla mekanlarınızın tarzına uyum sağlar. Modern ve zarif çizgileri, akustik yalıtımı ve statik gücüyle her mekânı konforlu yaşam alanlarına dönüştürür.',
    specs: [['Profil Genişliği', '70 mm'], ['Odacık Sayısı', '5'], ['Conta Sayısı', '2/3 (Orta contalı)'], ['Conta', 'TPE Gri / Siyah'], ['Cam Kalınlıkları', '4 – 48 mm'], ['Isı İletkenlik (Uf)', '1.1 – 1.5 W/m²K']] },
  { id: 'zendow', cat: 'pencere', name: 'Zendow', tag: 'Fiyat / Performans', img: 'img/zendow.webp', fit: 'contain',
    slogan: 'Size ve çevreye karşılığını ödeyen bir yatırım.',
    desc: 'Zendow, modern çizgileri ve uyumlu yapısıyla farklı mimari stillere kusursuz şekilde adapte olur. Dayanıklı ve uzun ömürlü yapısıyla hem işlevsellik hem de görsellik açısından yüksek standart sunar.',
    specs: [['Profil Genişliği', '70 mm'], ['Odacık Sayısı', '5'], ['Conta Sayısı', '2/3 (Orta conta opsiyonel)'], ['Conta', 'TPE Gri / Siyah'], ['Cam Kalınlıkları', '4 – 44 mm'], ['Isı İletkenlik (Uf)', '1.3 W/m²K (orta contalı)']] },

  { id: 'legend-surme', cat: 'surme', name: 'Legend Sürme', tag: 'Sürme', img: 'img/legend-surme.webp', fit: 'contain',
    slogan: 'Dışarıyı dışarıda bırak, konforu içeri al.',
    desc: 'Ses ve hava yalıtımında üst düzey performans sunan Legend Sürme; 76 mm genişlik ve 5 odacıklı kanat yapısıyla kışın soğuğa, yazın sıcağa karşı güçlü koruma ve kolay kullanım sağlar.',
    specs: [['Kanat Yapısı', '76 mm, 5 odacık'], ['Conta', 'TPE Gri / Siyah'], ['Cam Kalınlıkları', '24, 30, 36, 44, 52 mm'], ['Açılım', 'Sabit bölmeli sürme'], ['Isı İletkenlik (Uf)', '1.4 W/m²K']] },
  { id: 'legend-surme-plus', cat: 'surme', name: 'Legend Sürme Plus', tag: 'Yeni', img: 'img/legend-surme-plus.png', fit: 'contain',
    slogan: 'Estetik, konfor ve performans: Plus.',
    desc: 'Legend Sürme altyapısını daha ileri taşıyan Plus versiyonu; geniş cam yüzeyleri, akıcı kullanım ve yüksek yalıtım değerleriyle modern yaşam alanları için tasarlandı.',
    specs: [['Seri', 'Legend Sürme ailesi'], ['Kullanım', 'Balkon, teras, geçiş kapıları'], ['Renk', 'Beyaz ve lamine seçenekler']] },
  { id: 'surme', cat: 'surme', name: 'Sürme', tag: 'Sürme', img: 'img/surme.png', fit: 'contain',
    slogan: 'Dayanıklı yapı, geniş açıklıklarda özgürlük.',
    desc: 'Klasik sürme sistemi; sağlam yapısı ve ekonomik çözümüyle geniş açıklıkların doğramasında yer tasarrufu ve pratik kullanım sunar.',
    specs: [['Kullanım', 'Balkon & mutfak geçişleri'], ['Avantaj', 'Yer kaplamayan açılım'], ['Renk', 'Beyaz ve lamine seçenekler']] },
  { id: 'hs76', cat: 'surme', name: 'HS76 Kaldır-Sür', tag: 'Premium', img: 'img/hs76.png', fit: 'contain',
    slogan: 'Konforu alçalt, kaliteyi yükselt.',
    desc: 'HS76 için özel tasarlanan düşük alüminyum eşik, zemindeki profil yüksekliğini en aza indirir. Tekerlekli sandalye ile geçişe uygun tasarımı ve 8 odacıklı kasasıyla yüksek yalıtım sağlar.',
    specs: [['Kasa Genişliği', '175 mm'], ['Kanat Genişliği', '76 mm'], ['Odacık Sayısı', '8 (kasa), 4 (kanat)'], ['Cam Kalınlıkları', '4 – 43 mm'], ['Sınıf', 'TS EN 12608-1 A'], ['Isı İletkenlik (Uf)', '1.2 W/m²K']] },
  { id: 'slimslide', cat: 'surme', name: 'SlimSlide', tag: 'Eşiksiz', img: 'img/slimslide.png', fit: 'contain',
    slogan: 'Sınırları kaldır, manzarayı içeri al.',
    desc: 'Orta kesiti neredeyse yarı yarıya inceltilmiş SlimSlide, mekana daha fazla ışık alır. “Sıfır eşik” sürme kasa uygulamasıyla geçişlerde büyük kolaylık sağlar.',
    specs: [['Orta Kesit', 'Yaklaşık %50 daha ince'], ['Eşik', 'Sıfır eşik seçeneği'], ['Kullanım', 'Geniş cam yüzeyler']] },

  { id: 'storbox', cat: 'panjur', name: 'Storbox Panjur', tag: 'Güvenlik', img: 'img/storbox.png', fit: 'contain',
    slogan: 'Güvenlik, yalıtım ve enerji tasarrufu bir arada.',
    desc: 'Güneş ışığı, yağmur ve toz gibi dış etkenlere karşı koruyan Storbox panjur sistemi; kolay temizlenebilen yapısı, güvenli kullanımı ve estetik görünümüyle ev ve ofisler için ideal.',
    specs: [['Koruma', 'Güneş, yağmur, toz'], ['Kullanım', 'Manuel / motorlu'], ['Avantaj', 'Isı tasarrufu, güvenlik']] },
  { id: 'kepenk', cat: 'panjur', name: 'PVC Kepenk', tag: 'Nostalji', img: 'img/kepenk.png', fit: 'contain',
    slogan: 'Nostaljiden vazgeçmeyenler için estetik çözüm.',
    desc: '%100 geri dönüştürülebilir PVC’den üretilen kepenkler; güvenlik ve sert iklim koşullarına karşı koruma sağlarken dekoratif bir görünüm sunar. Doğadan esinlenen renk seçenekleriyle cephenize karakter katar.',
    specs: [['Malzeme', '%100 geri dönüştürülebilir PVC'], ['Kullanım', 'Güvenlik & dekorasyon'], ['Renk', 'Çok sayıda renk seçeneği']] },
  { id: 'sineklik', cat: 'panjur', name: 'Sineklik', tag: 'Yardımcı Ürün', img: 'img/sineklik2.jpg', fit: 'cover',
    slogan: 'İlaçsız, zararsız, pratik koruma.',
    desc: 'Pencerelerinizi her saatte rahatça açıp mekanınızı havalandırın. Sürme veya içe açılan sineklik seçenekleri; ahşap, alüminyum ya da PVC her tür doğramaya monte edilebilir ve her renk lamine uygulanabilir.',
    specs: [['Tip', 'Sürme / içe açılan / plise'], ['Montaj', 'PVC, alüminyum, ahşap'], ['Renk', 'Tüm lamine renkler']] },
  { id: 'lambri', cat: 'panjur', name: 'Dekor Lambri', tag: 'Dekorasyon', img: 'img/lambri.png', fit: 'contain',
    slogan: 'Duvarlarınız için estetik yalıtım.',
    desc: 'İç ve dış mekanlara kolayca uygulanan lambriler; 200 mm Ege Lambri ve 200 mm Oluklu Lambri seçenekleriyle her zevke hitap eder. Kenar, iç-dış köşe ve dekoratif profillerle özel detaylarda da çözüm üretir.',
    specs: [['Ölçü', '200 mm'], ['Çeşit', 'Ege Lambri, Oluklu Lambri'], ['Uygulama', 'İç & dış mekan']] },

  { id: 'cam-balkon', cat: 'cambalkon', name: 'Cam Balkon', tag: 'Dört Mevsim', img: 'img/offer.jpg', fit: 'cover',
    slogan: 'Açık havayı iç mekanınıza taşıyın.',
    desc: 'Evleri dış etkenlerden korurken balkonunuzu yıl boyu kullanılabilir hale getirir. İç ve dış mekan arasında kesintisiz geçiş sağlayan, enerji tasarrufuna katkıda bulunan şık ve modern sistemler.',
    specs: [['Sistem', 'Katlanır / sürme'], ['Avantaj', 'Enerji tasarrufu, dört mevsim kullanım'], ['Uygulama', 'Balkon, teras, kafe & restoran']] },
  { id: 'balkon-kaplama', cat: 'cambalkon', name: 'PVC Balkon Kapatma', tag: 'Isıcamlı', img: 'img/hero1.jpg', fit: 'cover',
    slogan: 'Isıcamlı PVC ile tam yalıtımlı balkon.',
    desc: 'PVC doğrama, ısıcam ve yalıtımlı sistemlerle rüzgar, yağmur ve soğuğa karşı tam koruma. Balkonunuzu evinizin sıcak bir odasına dönüştürüyoruz.',
    specs: [['Doğrama', 'Legend / Zendow / sürme'], ['Cam', 'Isıcam (çift / üçlü)'], ['Avantaj', 'Tam ısı ve ses yalıtımı']] }
];

const COLORS = [
  ['Altın Meşe', 'c-altin-mese'], ['Antik Meşe', 'c-antik-mese'], ['Antrasit Gri', 'c-antrasit-gri'],
  ['Fındık', 'c-findik'], ['Krem', 'c-krem'], ['Kül Siyahı', 'c-kul-siyahi'],
  ['Metalik Antrasit', 'c-metalik-antrasit'], ['Metalik Gümüş', 'c-metalik-gumus'], ['Vizon', 'c-vizon']
];

/* ---------- Header / Footer ---------- */
function renderChrome() {
  const page = document.body.dataset.page;
  const active = (p) => (p === page ? ' is-active' : '');
  const catLinks = CATEGORIES.map(c => `<a href="urunler.html#${c.id}">${c.short}</a>`).join('');

  const header = `
  <div class="progress" aria-hidden="true"></div>
  <div class="topbar"><div class="container">
    <div class="topbar__info">
      <a href="tel:+${SITE.phoneIntl}">${I.phone}${SITE.phone}</a>
      <span class="hide-sm">${I.pin}Karşıyaka / İzmir</span>
      <span class="hide-sm">${I.clock}${SITE.hours}</span>
    </div>
    <a href="${SITE.instagram}" target="_blank" rel="noopener">${I.ig}${SITE.igHandle}</a>
  </div></div>
  <header class="header"><div class="container">
    ${brand(false)}
    <nav class="nav" aria-label="Ana menü">
      <div class="nav__item"><a class="nav__link${active('home')}" href="index.html">Ana Sayfa</a></div>
      <div class="nav__item">
        <a class="nav__link${active('kurumsal')}" href="kurumsal.html">Kurumsal ${I.chev}</a>
        <div class="dropdown">
          <a href="kurumsal.html#hakkimizda">Hakkımızda</a>
          <a href="kurumsal.html#vizyon">Vizyon & Misyon</a>
          <a href="kurumsal.html#egepen">Egepen Deceuninck</a>
          <a href="kurumsal.html#degerler">Değerlerimiz</a>
          <a href="kurumsal.html#neden-pvc">Neden PVC?</a>
        </div>
      </div>
      <div class="nav__item">
        <a class="nav__link${active('urunler')}" href="urunler.html">Ürünler ${I.chev}</a>
        <div class="dropdown">${catLinks}<a href="urunler.html#renkler">Renk Seçenekleri</a></div>
      </div>
      <div class="nav__item"><a class="nav__link${active('iletisim')}" href="iletisim.html">İletişim</a></div>
    </nav>
    <div class="header__cta">
      <a class="icon-btn icon-btn--ig" href="${SITE.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${I.ig}</a>
      <a class="btn btn--sm" href="iletisim.html#teklif">Ücretsiz Keşif ${I.arrow}</a>
      <button class="burger" aria-label="Menüyü aç"><span></span><span></span><span></span></button>
    </div>
  </div></header>`;

  const footer = `
  <footer class="footer"><div class="container">
    <div class="footer__grid">
      <div>
        ${brand(true)}
        <p style="margin-top:18px;max-width:34ch">İzmir Karşıyaka'da PVC pencere, kapı, sürme, panjur ve cam balkon sistemlerinde ölçüden montaja anahtar teslim hizmet.</p>
        <div class="footer__partner">Sistem ortağımız: <b>Egepen Deceuninck</b></div>
        <div class="footer__social">
          <a class="ig" href="${SITE.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${I.ig}</a>
          <a href="${SITE.wa('Merhaba, bilgi almak istiyorum.')}" target="_blank" rel="noopener" aria-label="WhatsApp">${I.wa}</a>
          <a href="tel:+${SITE.phoneIntl}" aria-label="Telefon">${I.phone}</a>
        </div>
      </div>
      <div>
        <h4>Kurumsal</h4>
        <ul>
          <li><a href="kurumsal.html#hakkimizda">Hakkımızda</a></li>
          <li><a href="kurumsal.html#vizyon">Vizyon & Misyon</a></li>
          <li><a href="kurumsal.html#egepen">Egepen Deceuninck</a></li>
          <li><a href="kurumsal.html#neden-pvc">Neden PVC?</a></li>
          <li><a href="iletisim.html">İletişim</a></li>
        </ul>
      </div>
      <div>
        <h4>Ürünler</h4>
        <ul>${CATEGORIES.map(c => `<li><a href="urunler.html#${c.id}">${c.short}</a></li>`).join('')}<li><a href="urunler.html#renkler">Renk Seçenekleri</a></li></ul>
      </div>
      <div>
        <h4>İletişim</h4>
        <ul>
          <li><a href="${SITE.mapsLink}" target="_blank" rel="noopener">${SITE.address}</a></li>
          <li><a href="tel:+${SITE.phoneIntl}">${SITE.phone}</a></li>
          <li>${SITE.hours}</li>
          <li><a href="${SITE.instagram}" target="_blank" rel="noopener">Instagram ${SITE.igHandle}</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <span>© ${new Date().getFullYear()} ${SITE.legal} Tüm hakları saklıdır.</span>
      <span>Egepen Deceuninck marka ve ürün görselleri Egepen Deceuninck'e aittir.</span>
    </div>
  </div></footer>
  <div class="fab">
    <button class="fab__top" aria-label="Yukarı çık">${I.up}</button>
    <a class="fab__wa" href="${SITE.wa('Merhaba, PVC pencere/kapı için bilgi almak istiyorum.')}" target="_blank" rel="noopener" aria-label="WhatsApp ile yazın">${I.wa}</a>
  </div>`;

  document.body.insertAdjacentHTML('afterbegin', header);
  document.body.insertAdjacentHTML('beforeend', footer);
}

/* ---------- Ürün kartı ---------- */
function productCard(p, i = 0) {
  return `<article class="pcard" data-id="${p.id}" data-cat="${p.cat}" data-reveal="up" style="--d:${(i % 4) * 0.08}s" tabindex="0">
    <div class="pcard__img"><img class="${p.fit === 'contain' ? 'contain' : ''}" src="${p.img}" alt="${p.name}" loading="lazy"><span class="pcard__tag">${p.tag}</span></div>
    <div class="pcard__body"><h3>${p.name}</h3><p>${p.slogan}</p><span class="pcard__more">Detayları incele ${I.arrow}</span></div>
  </article>`;
}

/* ---------- Modal ---------- */
function setupModal() {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = '<div class="modal__bg"></div><div class="modal__box" role="dialog" aria-modal="true"><button class="modal__close" aria-label="Kapat">×</button><div class="modal__img"></div><div class="modal__body"></div></div>';
  document.body.appendChild(modal);
  const close = () => modal.classList.remove('is-open');
  modal.querySelector('.modal__bg').onclick = close;
  modal.querySelector('.modal__close').onclick = close;
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

  const open = (id) => {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    const cat = CATEGORIES.find(c => c.id === p.cat);
    modal.querySelector('.modal__img').innerHTML = `<img src="${p.img}" alt="${p.name}" style="object-fit:${p.fit};${p.fit === 'contain' ? 'padding:24px' : ''}">`;
    modal.querySelector('.modal__body').innerHTML = `
      <div class="cat">${cat.short}</div><h3>${p.name}</h3><p style="color:var(--muted)">${p.desc}</p>
      <ul class="specs">${p.specs.map(s => `<li><span>${s[0]}</span><span>${s[1]}</span></li>`).join('')}</ul>
      <div style="display:flex;gap:12px;flex-wrap:wrap">
        <a class="btn" href="${SITE.wa(`Merhaba, ${p.name} hakkında fiyat teklifi almak istiyorum.`)}" target="_blank" rel="noopener">${I.wa} Teklif Al</a>
        <a class="btn btn--navy" href="tel:+${SITE.phoneIntl}">${I.phone} Hemen Ara</a>
      </div>`;
    modal.classList.add('is-open');
  };
  document.addEventListener('click', e => {
    const card = e.target.closest('.pcard');
    if (card) open(card.dataset.id);
  });
  document.addEventListener('keydown', e => {
    const card = e.target.closest && e.target.closest('.pcard');
    if (card && e.key === 'Enter') open(card.dataset.id);
  });
}

/* ---------- Animasyonlar ---------- */
function observeReveal(root = document) {
  const els = root.querySelectorAll('[data-reveal]:not(.is-visible)');
  if (!('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('is-visible')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); } });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
}

function setupCounters() {
  const els = document.querySelectorAll('[data-count]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target; io.unobserve(el);
      const end = parseFloat(el.dataset.count), dec = (el.dataset.count.split('.')[1] || '').length;
      const pre = el.dataset.prefix || '', suf = el.dataset.suffix || '';
      const t0 = performance.now(), dur = 1800;
      const tick = (t) => {
        const k = Math.min(1, (t - t0) / dur), v = end * (1 - Math.pow(1 - k, 3));
        el.textContent = pre + v.toFixed(dec).replace('.', ',') + suf;
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.5 });
  els.forEach(el => io.observe(el));
}

function setupTilt() {
  if (matchMedia('(hover: none)').matches) return;
  document.addEventListener('mousemove', e => {
    const card = e.target.closest('.pcard');
    if (!card) return;
    const r = card.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    card.style.transform = `perspective(900px) rotateY(${(x - .5) * 10}deg) rotateX(${(.5 - y) * 10}deg) translateY(-6px)`;
    card.style.setProperty('--mx', x * 100 + '%'); card.style.setProperty('--my', y * 100 + '%');
  });
  document.addEventListener('mouseout', e => {
    const card = e.target.closest('.pcard');
    if (card && !card.contains(e.relatedTarget)) card.style.transform = '';
  });
}

function setupScrollFx() {
  const header = document.querySelector('.header');
  const bar = document.querySelector('.progress');
  const top = document.querySelector('.fab__top');
  const parallax = document.querySelectorAll('[data-parallax]');
  const onScroll = () => {
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    header.classList.toggle('is-scrolled', y > 30);
    bar.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
    top.classList.toggle('is-visible', y > 600);
    parallax.forEach(el => { el.style.transform = `translateY(${y * parseFloat(el.dataset.parallax)}px)`; });
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  top.onclick = () => scrollTo({ top: 0, behavior: 'smooth' });
}

function setupNav() {
  const burger = document.querySelector('.burger');
  burger.onclick = () => document.body.classList.toggle('nav-open');
  document.querySelectorAll('.nav__item').forEach(item => {
    const link = item.querySelector('.nav__link');
    if (!item.querySelector('.dropdown')) return;
    link.addEventListener('click', e => {
      if (innerWidth <= 960) { e.preventDefault(); item.classList.toggle('is-open'); }
    });
  });
  document.querySelectorAll('.dropdown a, .nav__item:not(:has(.dropdown)) a').forEach(a =>
    a.addEventListener('click', () => document.body.classList.remove('nav-open')));
}

/* ---------- Ana sayfa: açılış + slider ---------- */
function setupIntro() {
  const intro = document.querySelector('.intro');
  const hero = document.querySelector('.hero');
  if (!intro) { hero && hero.classList.add('is-in'); return; }
  document.body.classList.add('is-loading');
  let done = false;
  const open = () => {
    if (done) return; done = true;
    intro.classList.add('is-open');
    document.body.classList.remove('is-loading');
    setTimeout(() => hero && hero.classList.add('is-in'), 350);
    setTimeout(() => intro.classList.add('is-done'), 1500);
  };
  setTimeout(open, 2200);
  intro.style.pointerEvents = 'auto';
  intro.addEventListener('click', open);
}

function setupHeroSlider() {
  const slides = [...document.querySelectorAll('.hero__slide')];
  const dotsWrap = document.querySelector('.hero__dots');
  if (!slides.length) return;
  let i = 0, timer;
  dotsWrap.innerHTML = slides.map((_, k) => `<button class="hero__dot" aria-label="Görsel ${k + 1}"></button>`).join('');
  const dots = [...dotsWrap.children];
  const go = (n) => {
    slides[i].classList.remove('is-active'); dots[i].classList.remove('is-active');
    i = (n + slides.length) % slides.length;
    slides[i].classList.add('is-active');
    void dots[i].offsetWidth; dots[i].classList.add('is-active');
    clearTimeout(timer); timer = setTimeout(() => go(i + 1), 6000);
  };
  dots.forEach((d, k) => d.onclick = () => go(k));
  go(0);
}

function setupShowcase() {
  const stage = document.querySelector('.showcase__stage');
  if (!stage) return;
  const imgs = [...stage.querySelectorAll('img')], chips = [...document.querySelectorAll('.showcase__tabs .chip')];
  let i = 0, timer;
  const go = (n) => {
    imgs[i].classList.remove('is-active'); chips[i].classList.remove('is-active');
    i = n % imgs.length;
    imgs[i].classList.add('is-active'); chips[i].classList.add('is-active');
    clearTimeout(timer); timer = setTimeout(() => go(i + 1), 3500);
  };
  chips.forEach((c, k) => c.onclick = () => go(k));
  go(0);
}

/* ---------- Ürünler sayfası ---------- */
function renderProductsPage() {
  const wrap = document.getElementById('catalog');
  if (!wrap) return;
  wrap.innerHTML = CATEGORIES.map((c, ci) => `
    <section class="cat-block" id="${c.id}">
      <div class="cat-head">
        <div ${ci % 2 ? 'style="order:2"' : ''} data-reveal="${ci % 2 ? 'right' : 'left'}">
          <span class="eyebrow">0${ci + 1} — Kategori</span>
          <h2 class="title">${c.name}</h2>
          <p class="lead">${c.text}</p>
        </div>
        <div class="cat-head__img" data-reveal="clip"><img src="${c.img}" alt="${c.name}" loading="lazy"></div>
      </div>
      <div class="grid grid--4">${PRODUCTS.filter(p => p.cat === c.id).map(productCard).join('')}</div>
    </section>`).join('');

  const filters = document.querySelector('.filters');
  filters.innerHTML = `<button class="chip is-active" data-f="all">Tümü</button>` + CATEGORIES.map(c => `<button class="chip" data-f="${c.id}">${c.short}</button>`).join('');
  filters.addEventListener('click', e => {
    const b = e.target.closest('.chip'); if (!b) return;
    filters.querySelectorAll('.chip').forEach(x => x.classList.toggle('is-active', x === b));
    const f = b.dataset.f;
    document.querySelectorAll('.cat-block').forEach(s => {
      s.style.display = f === 'all' || s.id === f ? '' : 'none';
      s.querySelectorAll('[data-reveal]').forEach(el => { el.classList.remove('is-visible'); });
    });
    requestAnimationFrame(() => observeReveal());
  });
}

function renderSwatches() {
  const el = document.querySelector('.swatches');
  if (!el) return;
  el.innerHTML = COLORS.map((c, i) => `<div class="swatch" data-reveal="zoom" style="--d:${i * 0.06}s"><div class="swatch__img"><img src="img/${c[1]}.jpg" alt="${c[0]}" loading="lazy"></div>${c[0]}</div>`).join('');
}

function renderFeatured() {
  const el = document.getElementById('featured');
  if (!el) return;
  const ids = ['legend', 'legend-surme', 'storbox', 'cam-balkon'];
  el.innerHTML = ids.map((id, i) => productCard(PRODUCTS.find(p => p.id === id), i)).join('');
}

/* ---------- İletişim formu → WhatsApp ---------- */
function setupForm() {
  const form = document.getElementById('teklif-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(form));
    const msg = `Merhaba Mert Pen,\nAd Soyad: ${d.ad}\nTelefon: ${d.tel}\nİlgilendiğim ürün: ${d.urun}\nİlçe: ${d.ilce || '-'}\nMesaj: ${d.mesaj || '-'}`;
    const url = SITE.wa(msg);
    // Bazı gömülü görünümlerde window.open engellenir; o durumda tıklanabilir bir bağlantı gösterilir
    let fallback = form.querySelector('.form__wa');
    if (!fallback) {
      fallback = document.createElement('a');
      fallback.className = 'btn btn--navy form__wa';
      fallback.target = '_blank'; fallback.rel = 'noopener';
      fallback.style.cssText = 'width:100%;justify-content:center;margin-top:12px';
      fallback.textContent = 'Mesajı WhatsApp\'ta Aç';
      form.querySelector('button[type="submit"]').after(fallback);
    }
    fallback.href = url;
    const w = window.open(url, '_blank');
    if (w) w.opener = null;
  });
  const sel = form.querySelector('select[name="urun"]');
  sel.innerHTML = PRODUCTS.map(p => `<option>${p.name}</option>`).join('') + '<option>Diğer / Emin değilim</option>';
}

/* ---------- Başlat ---------- */
renderChrome();
renderFeatured();
renderProductsPage();
renderSwatches();
setupModal();
setupNav();
setupScrollFx();
setupTilt();
setupCounters();
setupHeroSlider();
setupShowcase();
setupForm();
setupIntro();
observeReveal();
// Sayfa bir #çapa ile açıldıysa header eklendikten sonra tekrar kaydır
if (location.hash) {
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  const jump = () => { const t = document.querySelector(location.hash); t && t.scrollIntoView({ behavior: 'instant' }); };
  jump();
  addEventListener('load', jump);
}
