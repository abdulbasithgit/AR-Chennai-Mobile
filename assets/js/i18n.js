// Simple English / Tamil internationalization for AR Chennai Mobiles.
// Text nodes carry a `data-i18n` key (textContent), `data-i18n-html` key
// (innerHTML, for text with inline markup) or `data-i18n-placeholder` key
// (input/textarea placeholders). The chosen language is stored in
// localStorage so it persists across visits.

const AR_TRANSLATIONS = {
  en: {
    nav_home: "Home",
    nav_story: "Our Story",
    nav_brands: "Our Top Brands",
    nav_vision: "Our Vision",
    nav_store: "Store Locator",
    nav_contact: "Contact Us",

    hero_subtitle: "Multi-Brand Mobile Showroom",
    hero_title: "Experience <span>Premium</span> Mobile Technology",
    hero_desc:
      "Discover new smartphones, leading brands, amazing offers, special discounts with guarantee and original products. Best price and after-sales service assured.",
    hero_shop: "Shop Now",
    hero_contact: "Contact Us",

    story_subtitle: "Our Journey",
    story_title: "Our Story",
    story_p1:
      "Chennai Mobiles, founded in 2003 by the dynamic and visionary Managing Director, Mr. Mohamed Azik, has been a formidable player in the mobile retail industry for two decades. Based in Ramanathapuram, Tamil Nadu, our journey has been marked by innovation, expansion, and a relentless commitment to customer satisfaction. Here, we present the story of Chennai Mobiles in a thousand words, highlighting our vision, mission, year-wise achievements, and a reflection on our journey.",
    story_p2:
      "We believe that everyone deserves access to the latest mobile technology. That's why we've partnered with the world's leading brands to bring you flagship devices, premium accessories, and exclusive offers.",
    story_p3:
      "Today, with multiple locations across the country and a growing online presence, we continue to innovate and expand our services to meet the evolving needs of our customers.",
    stat_years: "Years Experience",
    stat_customers: "Happy Customers",
    stat_brands: "Brand Partners",
    story_card1_title: "Innovation First",
    story_card1_desc: "Always bringing the latest technology to our customers",
    story_card2_title: "Customer Love",
    story_card2_desc: "Dedicated to providing exceptional service",
    story_card3_title: "Quality Assured",
    story_card3_desc: "Only genuine products from authorized sources",

    brands_subtitle: "Premium Partners",
    brands_title: "Our Top Brands",
    brand_apple: "iPhone, iPad, MacBook & Accessories",
    brand_samsung: "Galaxy Series, Smartphones & Tablets",
    brand_pixel: "Pure Android Experience",
    brand_oneplus: "Flagship Killers & Premium Devices",
    brand_xiaomi: "Innovation at Best Value",
    brand_sony: "Premium Audio & Xperia Devices",
    brand_oppo: "Stylish Design & Fast Charging",
    brand_vivo: "Camera & Music Focused Smartphones",
    brand_realme: "Powerful Performance, Youthful Style",
    brand_redmi: "Feature-Packed Phones at Great Value",
    brand_iqoo: "Performance Flagships for Gamers",
    brand_infinix: "Big Battery & Budget-Friendly Phones",
    brand_motorola: "Clean Android & Reliable Devices",

    vision_subtitle: "Looking Ahead",
    vision_title: "Our Vision",
    vision_h3: "Connecting People with Smarter Technology",
    vision_p1:
      "We aspire to create a shopping experience where technology is simple, reliable, and accessible to everyone. By offering carefully selected mobile phones, smart devices, and electronic products, we aim to help customers make confident choices that improve their everyday lives.",
    vision_p2: "Our vision is driven by four guiding principles:",
    vision_li1:
      "<strong>Customer First:</strong> Every decision we make begins with understanding our customers' needs and delivering an experience they can trust.",
    vision_li2:
      "<strong>Quality & Authenticity:</strong> We are committed to offering genuine products from leading brands, backed by dependable service and support.",
    vision_li3:
      "<strong>Innovation:</strong> We continuously expand our range with the latest technology and smart solutions to keep customers connected to what's next.",
    vision_li4:
      "<strong>Value for Everyone:</strong> We believe great technology should be accessible, providing competitive pricing and excellent service without compromising on quality.",

    store_subtitle: "Find Us",
    store_title: "Store Locator",
    store_h3: "Visit Our Showrooms",
    store_p:
      "Experience our premium devices in person at any of our conveniently located stores.",
    store_branch: "Karaikudi Branch",
    store_addr_ta: "செக்காலை சாலை, காரைக்குடி - 630001",
    store_addr_en: "Sekkalai Road, Karaikudi - 630001",
    store_hours: "Monday - Sunday: 9AM - 9PM",

    contact_subtitle: "Get In Touch",
    contact_title: "Contact Us",
    contact_h3: "We'd Love to Hear From You",
    contact_p:
      "Have questions? Need support? Reach out to our team and we'll get back to you within 24 hours.",
    contact_phone: "Phone",
    contact_email: "Email",
    contact_address: "Address",
    contact_addr_ta: "செக்காலை சாலை, காரைக்குடி - 630001, சிவகங்கை மாவட்டம்",
    contact_addr_en: "Sekkalai Road, Karaikudi - 630001, Sivaganga District",
    form_name: "Your Name",
    form_email: "Your Email",
    form_subject: "Subject",
    form_message: "Your Message",
    form_send: "Send Message",

    footer_brand:
      "Your premium destination for the latest mobile technology and accessories.",
    footer_quicklinks: "Quick Links",
    footer_brands: "Brands",
    footer_contact: "Contact",
    footer_services: "Services",
    footer_repair: "Device Repair",
    footer_tradein: "Trade-In",
    footer_financing: "Financing",
    footer_support: "Support",
    footer_rights: "All rights reserved.",
    footer_reg: "GST Registration No:",

    toggle_label: "தமிழ்",
  },

  ta: {
    nav_home: "முகப்பு",
    nav_story: "எங்கள் கதை",
    nav_brands: "சிறந்த பிராண்டுகள்",
    nav_vision: "எங்கள் நோக்கம்",
    nav_store: "கடை இருப்பிடம்",
    nav_contact: "தொடர்பு கொள்ள",

    hero_subtitle: "பல-பிராண்ட் மொபைல் ஷோரூம்",
    hero_title: "<span>பிரீமியம்</span> மொபைல் தொழில்நுட்பத்தை அனுபவியுங்கள்",
    hero_desc:
      "புதிய ஸ்மார்ட்போன்கள், முன்னணி பிராண்டுகள், அற்புதமான சலுகைகள், உத்தரவாதத்துடன் சிறப்பு தள்ளுபடிகள் மற்றும் அசல் தயாரிப்புகளைக் கண்டறியுங்கள். சிறந்த விலை மற்றும் விற்பனைக்குப் பிந்தைய சேவை உறுதி.",
    hero_shop: "இப்போது வாங்குங்கள்",
    hero_contact: "தொடர்பு கொள்ள",

    story_subtitle: "எங்கள் பயணம்",
    story_title: "எங்கள் கதை",
    story_p1:
      "சென்னை மொபைல்ஸ், 2003 ஆம் ஆண்டு ஆற்றல்மிக்க மற்றும் தொலைநோக்குப் பார்வை கொண்ட நிர்வாக இயக்குநர் திரு. முகமது அசிக் அவர்களால் நிறுவப்பட்டது. இரண்டு தசாப்தங்களாக மொபைல் சில்லறை விற்பனைத் துறையில் வலிமையான இடத்தை வகித்து வருகிறது. தமிழ்நாட்டின் ராமநாதபுரத்தை மையமாகக் கொண்டு, எங்கள் பயணம் புத்தாக்கம், விரிவாக்கம் மற்றும் வாடிக்கையாளர் திருப்திக்கான விடாமுயற்சியான அர்ப்பணிப்பால் சிறப்புற்றுள்ளது. இங்கே, சென்னை மொபைல்ஸின் கதையை ஆயிரம் வார்த்தைகளில், எங்கள் நோக்கம், பணி, ஆண்டு வாரியான சாதனைகள் மற்றும் எங்கள் பயணம் குறித்த ஒரு பார்வையுடன் வழங்குகிறோம்.",
    story_p2:
      "சமீபத்திய மொபைல் தொழில்நுட்பத்தை அணுகும் உரிமை அனைவருக்கும் உண்டு என நாங்கள் நம்புகிறோம். அதனால்தான், முதன்மையான சாதனங்கள், பிரீமியம் துணைக்கருவிகள் மற்றும் பிரத்யேக சலுகைகளை உங்களுக்கு வழங்க உலகின் முன்னணி பிராண்டுகளுடன் கூட்டு சேர்ந்துள்ளோம்.",
    story_p3:
      "இன்று, நாடு முழுவதும் பல இடங்களிலும், வளர்ந்து வரும் ஆன்லைன் இருப்புடனும், எங்கள் வாடிக்கையாளர்களின் மாறிவரும் தேவைகளைப் பூர்த்தி செய்ய தொடர்ந்து புத்தாக்கம் செய்து சேவைகளை விரிவுபடுத்தி வருகிறோம்.",
    stat_years: "ஆண்டுகள் அனுபவம்",
    stat_customers: "மகிழ்ச்சியான வாடிக்கையாளர்கள்",
    stat_brands: "பிராண்ட் கூட்டாளர்கள்",
    story_card1_title: "புத்தாக்கம் முதலில்",
    story_card1_desc: "சமீபத்திய தொழில்நுட்பத்தை எப்போதும் வாடிக்கையாளர்களுக்கு வழங்குதல்",
    story_card2_title: "வாடிக்கையாளர் அன்பு",
    story_card2_desc: "சிறந்த சேவையை வழங்குவதில் அர்ப்பணிப்பு",
    story_card3_title: "தரம் உறுதி",
    story_card3_desc: "அங்கீகரிக்கப்பட்ட ஆதாரங்களிலிருந்து அசல் தயாரிப்புகள் மட்டுமே",

    brands_subtitle: "பிரீமியம் கூட்டாளர்கள்",
    brands_title: "சிறந்த பிராண்டுகள்",
    brand_apple: "ஐபோன், ஐபேட், மேக்புக் & துணைக்கருவிகள்",
    brand_samsung: "கேலக்ஸி தொடர், ஸ்மார்ட்போன்கள் & டேப்லெட்டுகள்",
    brand_pixel: "தூய ஆண்ட்ராய்டு அனுபவம்",
    brand_oneplus: "ஃபிளாக்ஷிப் கில்லர்கள் & பிரீமியம் சாதனங்கள்",
    brand_xiaomi: "சிறந்த மதிப்பில் புத்தாக்கம்",
    brand_sony: "பிரீமியம் ஆடியோ & எக்ஸ்பீரியா சாதனங்கள்",
    brand_oppo: "நேர்த்தியான வடிவமைப்பு & வேகமான சார்ஜிங்",
    brand_vivo: "கேமரா & இசைக்கு முன்னுரிமை தரும் ஸ்மார்ட்போன்கள்",
    brand_realme: "சக்திவாய்ந்த செயல்திறன், இளமையான பாணி",
    brand_redmi: "சிறந்த மதிப்பில் அம்சம் நிறைந்த போன்கள்",
    brand_iqoo: "கேமர்களுக்கான செயல்திறன் ஃபிளாக்ஷிப்புகள்",
    brand_infinix: "பெரிய பேட்டரி & பட்ஜெட் நட்பு போன்கள்",
    brand_motorola: "சுத்தமான ஆண்ட்ராய்டு & நம்பகமான சாதனங்கள்",

    vision_subtitle: "எதிர்காலம் நோக்கி",
    vision_title: "எங்கள் நோக்கம்",
    vision_h3: "மக்களை புத்திசாலித்தனமான தொழில்நுட்பத்துடன் இணைத்தல்",
    vision_p1:
      "தொழில்நுட்பம் எளிமையாகவும், நம்பகமாகவும், அனைவருக்கும் அணுகக்கூடியதாகவும் இருக்கும் ஒரு ஷாப்பிங் அனுபவத்தை உருவாக்க நாங்கள் விரும்புகிறோம். கவனமாகத் தேர்ந்தெடுக்கப்பட்ட மொபைல் போன்கள், ஸ்மார்ட் சாதனங்கள் மற்றும் மின்னணு தயாரிப்புகளை வழங்குவதன் மூலம், வாடிக்கையாளர்கள் தங்கள் அன்றாட வாழ்க்கையை மேம்படுத்தும் நம்பிக்கையான தேர்வுகளைச் செய்ய உதவுவதை நோக்கமாகக் கொண்டுள்ளோம்.",
    vision_p2: "எங்கள் நோக்கம் நான்கு வழிகாட்டும் கொள்கைகளால் இயக்கப்படுகிறது:",
    vision_li1:
      "<strong>வாடிக்கையாளர் முதலில்:</strong> நாங்கள் எடுக்கும் ஒவ்வொரு முடிவும் எங்கள் வாடிக்கையாளர்களின் தேவைகளைப் புரிந்துகொண்டு அவர்கள் நம்பக்கூடிய அனுபவத்தை வழங்குவதிலிருந்து தொடங்குகிறது.",
    vision_li2:
      "<strong>தரம் & நம்பகத்தன்மை:</strong> நம்பகமான சேவை மற்றும் ஆதரவுடன், முன்னணி பிராண்டுகளிலிருந்து அசல் தயாரிப்புகளை வழங்க நாங்கள் உறுதிபூண்டுள்ளோம்.",
    vision_li3:
      "<strong>புத்தாக்கம்:</strong> வாடிக்கையாளர்களை அடுத்து வருவதுடன் இணைத்து வைக்க, சமீபத்திய தொழில்நுட்பம் மற்றும் ஸ்மார்ட் தீர்வுகளுடன் எங்கள் வரம்பைத் தொடர்ந்து விரிவுபடுத்துகிறோம்.",
    vision_li4:
      "<strong>அனைவருக்கும் மதிப்பு:</strong> தரத்தில் சமரசம் செய்யாமல், போட்டி விலை மற்றும் சிறந்த சேவையை வழங்கி, சிறந்த தொழில்நுட்பம் அனைவருக்கும் அணுகக்கூடியதாக இருக்க வேண்டும் என நாங்கள் நம்புகிறோம்.",

    store_subtitle: "எங்களைக் கண்டறியுங்கள்",
    store_title: "கடை இருப்பிடம்",
    store_h3: "எங்கள் ஷோரூம்களைப் பார்வையிடுங்கள்",
    store_p:
      "வசதியாக அமைந்துள்ள எங்கள் கடைகள் எதிலும் எங்கள் பிரீமியம் சாதனங்களை நேரில் அனுபவியுங்கள்.",
    store_branch: "காரைக்குடி கிளை",
    store_addr_ta: "செக்காலை சாலை, காரைக்குடி - 630001",
    store_addr_en: "செக்காலை சாலை, காரைக்குடி - 630001",
    store_hours: "திங்கள் - ஞாயிறு: காலை 9 - இரவு 9",

    contact_subtitle: "தொடர்பில் இருங்கள்",
    contact_title: "தொடர்பு கொள்ள",
    contact_h3: "உங்களிடமிருந்து கேட்க விரும்புகிறோம்",
    contact_p:
      "கேள்விகள் உள்ளதா? ஆதரவு தேவையா? எங்கள் குழுவைத் தொடர்பு கொள்ளுங்கள், 24 மணி நேரத்திற்குள் நாங்கள் உங்களைத் தொடர்பு கொள்வோம்.",
    contact_phone: "தொலைபேசி",
    contact_email: "மின்னஞ்சல்",
    contact_address: "முகவரி",
    contact_addr_ta: "செக்காலை சாலை, காரைக்குடி - 630001, சிவகங்கை மாவட்டம்",
    contact_addr_en: "செக்காலை சாலை, காரைக்குடி - 630001, சிவகங்கை மாவட்டம்",
    form_name: "உங்கள் பெயர்",
    form_email: "உங்கள் மின்னஞ்சல்",
    form_subject: "பொருள்",
    form_message: "உங்கள் செய்தி",
    form_send: "செய்தி அனுப்பு",

    footer_brand:
      "சமீபத்திய மொபைல் தொழில்நுட்பம் மற்றும் துணைக்கருவிகளுக்கான உங்கள் பிரீமியம் இடம்.",
    footer_quicklinks: "விரைவு இணைப்புகள்",
    footer_brands: "பிராண்டுகள்",
    footer_contact: "தொடர்பு",
    footer_services: "சேவைகள்",
    footer_repair: "சாதன பழுதுபார்ப்பு",
    footer_tradein: "பரிமாற்றம்",
    footer_financing: "நிதியுதவி",
    footer_support: "ஆதரவு",
    footer_rights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    footer_reg: "ஜிஎஸ்டி பதிவு எண்:",

    toggle_label: "English",
  },
};

const AR_LANG_KEY = "ar-chennai-lang";

function arApplyLanguage(lang) {
  const dict = AR_TRANSLATIONS[lang] || AR_TRANSLATIONS.en;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = dict[el.getAttribute("data-i18n")];
    if (value !== undefined) el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const value = dict[el.getAttribute("data-i18n-html")];
    if (value !== undefined) el.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const value = dict[el.getAttribute("data-i18n-placeholder")];
    if (value !== undefined) el.setAttribute("placeholder", value);
  });

  document.documentElement.setAttribute("lang", lang);

  const label = document.querySelector(".lang-toggle-label");
  if (label) label.textContent = dict.toggle_label;

  try {
    localStorage.setItem(AR_LANG_KEY, lang);
  } catch (e) {
    /* localStorage unavailable - ignore */
  }
}

function arInitLanguage() {
  let saved = "en";
  try {
    saved = localStorage.getItem(AR_LANG_KEY) || "en";
  } catch (e) {
    saved = "en";
  }
  arApplyLanguage(saved);

  const toggle = document.querySelector(".lang-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("lang") === "ta" ? "ta" : "en";
      arApplyLanguage(current === "ta" ? "en" : "ta");
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", arInitLanguage);
} else {
  arInitLanguage();
}
