/**
 * DreesLoop — Alquiler de Outfits Vintage & Gala
 * Puerto Iguazú, Misiones, Argentina
 * Sistema Completo: Catálogo Premium, Depósito de Garantía Retornable,
 * Ficha de Reserva con Validación y Panel Privado de Costos y Rentabilidad
 */

// ==========================================================================
// 1. CATÁLOGO EXTENDIDO DE OUTFITS (+14 PRENDAS) CON DEPÓSITO RETORNABLE
// ==========================================================================

const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Vestido Esmeralda Velvet",
    category: "gala",
    categoryName: "Gala & Noche",
    type: "vestido",
    size: "M",
    rentPrice: 34500,
    depositPrice: 15000,
    retailPrice: 240000,
    tag: "Más Alquilado",
    tagClass: "tag-vintage",
    image: "https://images.unsplash.com/photo-1765229292033-ea9f376cc164?auto=format&fit=crop&w=800&q=80",
    color: "Verde Esmeralda",
    style: "Gala Glamour",
    fabric: "Satén de seda pesada y terciopelo sutil",
    measurements: "Busto: 90-95cm | Cintura: 70-74cm | Largo: 152cm",
    description: "Vestido largo de fiesta en satén esmeralda con escote asimétrico y tajo pronunciado. Ideal para recepciones de gala en Puerto Iguazú y bodas de noche."
  },
  {
    id: 2,
    name: "Traje Sastrero Terracota Vintage",
    category: "graduacion",
    categoryName: "Graduaciones & Trajes",
    type: "traje",
    size: "S",
    rentPrice: 32000,
    depositPrice: 15000,
    retailPrice: 210000,
    tag: "Graduación",
    tagClass: "tag-graduacion",
    image: "https://images.unsplash.com/photo-1751399566425-024997c9acff?auto=format&fit=crop&w=800&q=80",
    color: "Terracota Óxido Vintage",
    style: "Sastrero Retro Chic",
    fabric: "Crepé elastizado de alta caída con botones carey",
    measurements: "Blazer entallado + Pantalón Palazzo tiro alto (Cintura: 66-70cm, Cadera: 92-96cm)",
    description: "Traje de dos piezas en tono teja/terracota vintage. La opción predilecta para egresadas y egresados que buscan salir del vestido tradicional con máxima distinción."
  },
  {
    id: 3,
    name: "Vestido Sparkle Lavender",
    category: "graduacion",
    categoryName: "Graduaciones & Colación",
    type: "vestido",
    size: "XS",
    rentPrice: 33500,
    depositPrice: 15000,
    retailPrice: 220000,
    tag: "Graduación",
    tagClass: "tag-graduacion",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
    color: "Lavanda / Lila Pastel con destellos",
    style: "Princesa Moderna",
    fabric: "Tul bordado con micro-lentejuelas tornasol",
    measurements: "Busto: 82-86cm | Cintura: 60-64cm | Largo: 148cm",
    description: "Look favorito para graduaciones de secundario y terciario. Brillo delicado bajo las luces de la fiesta y corset con soporte que no necesita corpiño."
  },
  {
    id: 4,
    name: "Traje Slim Fit Midnight Navy",
    category: "trajes",
    categoryName: "Trajes & Sets",
    type: "traje",
    size: "L",
    rentPrice: 36000,
    depositPrice: 18000,
    retailPrice: 260000,
    tag: "Graduación",
    tagClass: "tag-graduacion",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    color: "Azul Medianoche Profundo",
    style: "Formal Elegante",
    fabric: "Lana fría liviana y transpirable (ideal clima subtropical Iguazú)",
    measurements: "Saco talle 48-50 | Pantalón sastre ajustado al tobillo",
    description: "Traje sastrero de corte entallado slim fit. Perfecto para egresados, padrinos o recepciones formales. Incluye pañuelo de solapa en contraste."
  },
  {
    id: 5,
    name: "Vestido Burdeos Romántico Retro",
    category: "vintage",
    categoryName: "Vintage & Retro",
    type: "vestido",
    size: "M",
    rentPrice: 29500,
    depositPrice: 12000,
    retailPrice: 195000,
    tag: "Pieza Vintage",
    tagClass: "tag-vintage",
    image: "https://images.unsplash.com/photo-1765870972864-6a4140a993e4?auto=format&fit=crop&w=800&q=80",
    color: "Vino Tinto / Burdeos",
    style: "Retro 70s / Romántico",
    fabric: "Terciopelo suave con sutil drapeado en busto",
    measurements: "Busto: 88-93cm | Cintura: 69-73cm | Largo: 145cm",
    description: "Inspirado en la estética editorial de los 70s. Mangas ligeramente abullonadas y escote corazón con un color noble para fiestas de noche."
  },
  {
    id: 6,
    name: "Conjunto Milano Ivory Chic",
    category: "trajes",
    categoryName: "Trajes & Sets",
    type: "traje",
    size: "S",
    rentPrice: 31500,
    depositPrice: 15000,
    retailPrice: 200000,
    tag: "Tendencia",
    tagClass: "",
    image: "https://images.unsplash.com/photo-1673610178158-1c4c5b7e4d98?auto=format&fit=crop&w=800&q=80",
    color: "Blanco Marfil / Hueso",
    style: "Vanguardia Minimal",
    fabric: "Crepé estructurado con solapas en punta",
    measurements: "Busto: 85-89cm | Cintura: 65-69cm | Cadera: 90-94cm",
    description: "Blazer entallado con pantalón recto palazzo. Muy elegido para colaciones universitarias, civiles en Puerto Iguazú y eventos corporativos."
  },
  {
    id: 7,
    name: "Vestido Sirena Black Noir",
    category: "gala",
    categoryName: "Gala & Noche",
    type: "vestido",
    size: "L",
    rentPrice: 39000,
    depositPrice: 20000,
    retailPrice: 290000,
    tag: "Alta Costura",
    tagClass: "",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80",
    color: "Negro Obsidiana",
    style: "Sirena Dramático",
    fabric: "Scuba crepé pesado con pedrería en escote trasero",
    measurements: "Busto: 96-102cm | Cintura: 76-82cm | Cadera: 104-108cm",
    description: "Corte sirena que estiliza la figura por completo, con espalda baja y detalles artesanales en negro obsidiana. Jamás pasa desapercibido en fiestas de etiqueta."
  },
  {
    id: 8,
    name: "Vestido Aurora Rose Gold",
    category: "coctel",
    categoryName: "Cóctel & Civil",
    type: "vestido",
    size: "S",
    rentPrice: 28500,
    depositPrice: 12000,
    retailPrice: 185000,
    tag: "Moda Circular",
    tagClass: "tag-eco",
    image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80",
    color: "Rosa Dorado / Champagne",
    style: "Plisado Romántico",
    fabric: "Gasa metalizada plisada a mano con reflejos champagne",
    measurements: "Busto: 86-90cm | Cintura: 66-70cm | Largo midi (125cm)",
    description: "Vestido de falda midi plisada con brillo tenue rose gold. Ideal para fiestas al atardecer frente al río, cócteles o casamientos diurnos en Misiones."
  },
  {
    id: 9,
    name: "Traje Smoking Black Velvet",
    category: "trajes",
    categoryName: "Trajes & Sets",
    type: "traje",
    size: "XL",
    rentPrice: 44000,
    depositPrice: 22000,
    retailPrice: 340000,
    tag: "Graduación",
    tagClass: "tag-graduacion",
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80",
    color: "Negro & Solapa de Satén",
    style: "Smoking Clásico de Autor",
    fabric: "Terciopelo negro con solapa redonda de raso brillante",
    measurements: "Saco Talle 52-54 | Pantalón con galón lateral de raso",
    description: "La máxima distinción para la noche de recepción o gala de egreso. El terciopelo otorga una textura suntuosa y atemporal bajo las cámaras fotográficas."
  },
  {
    id: 10,
    name: "Vestido Sunset Chiffon Iguazú",
    category: "coctel",
    categoryName: "Cóctel & Civil",
    type: "vestido",
    size: "M",
    rentPrice: 26500,
    depositPrice: 12000,
    retailPrice: 170000,
    tag: "Eco-Choice",
    tagClass: "tag-eco",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
    color: "Terracota & Durazno cálido",
    style: "Boho Chic Editorial",
    fabric: "Chiffon orgánico reciclado doble capa",
    measurements: "Busto: 88-94cm | Cintura: 70-75cm | Caída libre",
    description: "Fresco, vaporoso y lleno de movimiento. Diseñado pensando en las noches cálidas de Puerto Iguazú y recepciones al aire libre."
  },
  {
    id: 11,
    name: "Traje Monocromo Magenta Pop",
    category: "graduacion",
    categoryName: "Graduaciones & Trajes",
    type: "traje",
    size: "M",
    rentPrice: 33000,
    depositPrice: 15000,
    retailPrice: 215000,
    tag: "Color Trend",
    tagClass: "tag-graduacion",
    image: "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=800&q=80",
    color: "Fucsia Magenta Vibrante",
    style: "Color Block Impactante",
    fabric: "Gabardina sastrera con caída semi-pesada",
    measurements: "Blazer oversize + Pantalón corte recto (Cintura: 72-76cm)",
    description: "¿Buscas romper moldes en tu egreso? Este traje fucsia magenta es el favorito de quienes quieren un look moderno, lleno de energía y súper fotogénico."
  },
  {
    id: 12,
    name: "Vestido Golden Hour 70s Retro",
    category: "vintage",
    categoryName: "Vintage & Retro",
    type: "vestido",
    size: "M",
    rentPrice: 30000,
    depositPrice: 15000,
    retailPrice: 190000,
    tag: "Pieza Vintage",
    tagClass: "tag-vintage",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
    color: "Mostaza Dorado Vintage",
    style: "Retro Chic",
    fabric: "Brocado de seda con reflejos oro mate",
    measurements: "Busto: 92-96cm | Cintura: 72-76cm | Largo: 140cm",
    description: "Una auténtica joya retro rescatada y restaurada para DreesLoop. Detalle de cuello halter y falda semi plato en tono mostaza dorado que evoca la época dorada de la moda."
  },
  {
    id: 13,
    name: "Vestido Zafiro Royal con Bolsillos",
    category: "gala",
    categoryName: "Gala & Noche",
    type: "vestido",
    size: "XL",
    rentPrice: 41000,
    depositPrice: 20000,
    retailPrice: 310000,
    tag: "Exclusivo",
    tagClass: "",
    image: "https://images.unsplash.com/photo-1776142749959-988d3543a8f5?auto=format&fit=crop&w=800&q=80",
    color: "Azul Zafiro Intenso",
    style: "Gala Clásica",
    fabric: "Mikado de seda estructurado en azul real",
    measurements: "Busto: 104-110cm | Cintura: 88-94cm | Largo: 155cm",
    description: "Corte princesa imponente en azul zafiro con bolsillos ocultos laterales. Sofisticación sin esfuerzo para graduaciones universitarias, madrinas y galas de honor."
  },
  {
    id: 14,
    name: "Vestido Botánico Selva Misionera",
    category: "vintage",
    categoryName: "Vintage & Retro",
    type: "vestido",
    size: "L",
    rentPrice: 28000,
    depositPrice: 12000,
    retailPrice: 175000,
    tag: "Edición Iguazú",
    tagClass: "tag-vintage",
    image: "https://images.unsplash.com/photo-1775871436595-8f89ee46b610?auto=format&fit=crop&w=800&q=80",
    color: "Estampado Floral Oliva y Óxido",
    style: "Vintage Tropical",
    fabric: "Crepé georgette con caída envolvente",
    measurements: "Busto: 98-103cm | Cintura: 80-86cm | Falda envolvente",
    description: "Homenaje al entorno selvático de Puerto Iguazú. Estampa botánica retro con tonos tierra y florales. Muy fresco y perfecto para eventos en quintas o jardines."
  },
  {
    id: 15,
    name: "Vestido Rubí Imperial de Alta Costura",
    category: "gala",
    categoryName: "Gala & Noche",
    type: "vestido",
    size: "M",
    rentPrice: 38000,
    depositPrice: 18000,
    retailPrice: 280000,
    tag: "Alta Costura",
    tagClass: "tag-vintage",
    image: "https://images.unsplash.com/photo-1765870972598-1c9c6af7dbf3?auto=format&fit=crop&w=800&q=80",
    color: "Rojo Rubí Carmesí",
    style: "Gala Dramática",
    fabric: "Raso mikado con escote en V y falda estructurada",
    measurements: "Busto: 90-95cm | Cintura: 70-74cm | Largo: 155cm",
    description: "Pieza icónica de alta etiqueta en raso carmesí con caída escultural y volumen deslumbrante. Diseñado para galas benéficas, bodas solemnes y aniversarios de prestigio en Puerto Iguazú."
  },
  {
    id: 16,
    name: "Vestido Seda Champán Espalda Cruzada",
    category: "gala",
    categoryName: "Gala & Noche",
    type: "vestido",
    size: "S",
    rentPrice: 42000,
    depositPrice: 20000,
    retailPrice: 320000,
    tag: "Exclusivo",
    tagClass: "",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
    color: "Dorado Champán / Nude Perla",
    style: "Minimalista Sofisticado",
    fabric: "Satén de seda líquida al bies con caída fluida",
    measurements: "Busto: 85-89cm | Cintura: 64-68cm | Largo: 150cm",
    description: "Elegancia pura estilo 90s slip dress. Satén dorado champán fluido que resbala sobre la silueta y delicadas tiras cruzadas en la espalda descubierta. Resplandor dorado de lujo."
  },
  {
    id: 17,
    name: "Vestido Noche Estrellada Azul Cobalto",
    category: "gala",
    categoryName: "Gala & Noche",
    type: "vestido",
    size: "L",
    rentPrice: 37000,
    depositPrice: 16000,
    retailPrice: 265000,
    tag: "Más Alquilado",
    tagClass: "tag-vintage",
    image: "https://images.unsplash.com/photo-1788621795497-7032767270d7?auto=format&fit=crop&w=800&q=80",
    color: "Azul Cobalto Eléctrico",
    style: "Gala Moderna",
    fabric: "Crepé georgette con aplicaciones de micro-cristales en corpiño",
    measurements: "Busto: 98-103cm | Cintura: 78-84cm | Largo: 152cm",
    description: "Vibrante azul cobalto con destellos cristalinos en el escote y falda de pasarela de gran vuelo que aporta soltura al bailar en fiestas de gala y recepciones de graduación."
  },
  {
    id: 18,
    name: "Vestido Egresada Celeste Glaciar Plisado",
    category: "graduacion",
    categoryName: "Graduaciones & Colación",
    type: "vestido",
    size: "S",
    rentPrice: 34000,
    depositPrice: 15000,
    retailPrice: 230000,
    tag: "Graduación",
    tagClass: "tag-graduacion",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
    color: "Celeste Glaciar / Hielo Pastel",
    style: "Princesa Egresada",
    fabric: "Gasa translúcida plisada con corset ballenado y escote bardot",
    measurements: "Busto: 86-90cm | Cintura: 65-69cm | Largo: 148cm",
    description: "El vestido soñado para el baile de egresadas de secundaria. Tono celeste hielo etéreo con corset que estiliza la cintura y falda vaporosa que flota al caminar."
  },
  {
    id: 19,
    name: "Traje Graduado Verde Botánico Slim Fit",
    category: "graduacion",
    categoryName: "Graduaciones & Trajes",
    type: "traje",
    size: "M",
    rentPrice: 35500,
    depositPrice: 16000,
    retailPrice: 245000,
    tag: "Graduación",
    tagClass: "tag-graduacion",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    color: "Verde Pino / Bosque Misionero",
    style: "Sastrero Contemporáneo",
    fabric: "Lana fría liviana stretch con botones metálicos envejecidos",
    measurements: "Saco Talle 48 | Pantalón pitillo talle 40 (Cintura: 80-84cm)",
    description: "La alternativa vanguardista al negro clásico para egresados de secundaria y universidad. Tono verde botánico que destaca con elegancia y frescura en las fotos grupales."
  },
  {
    id: 20,
    name: "Vestido Colación Terracota Soleil",
    category: "graduacion",
    categoryName: "Graduaciones & Colación",
    type: "vestido",
    size: "M",
    rentPrice: 31000,
    depositPrice: 14000,
    retailPrice: 210000,
    tag: "Graduación",
    tagClass: "tag-graduacion",
    image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&w=800&q=80",
    color: "Terracota Cálido / Canela Suave",
    style: "Boho Chic Graduación",
    fabric: "Seda crepé lavada con caída natural y tajo lateral",
    measurements: "Busto: 90-94cm | Cintura: 70-75cm | Largo: 147cm",
    description: "Color cálido terracota que resalta cualquier bronceado en la noche de colación. Escote halter con espalda semiabierta, cómodo y liviano para bailar hasta el amanecer."
  },
  {
    id: 21,
    name: "Traje Sastrero Tres Piezas Gris Marengo",
    category: "trajes",
    categoryName: "Trajes & Sets",
    type: "traje",
    size: "L",
    rentPrice: 38500,
    depositPrice: 18000,
    retailPrice: 275000,
    tag: "Con Chaleco",
    tagClass: "",
    image: "https://images.unsplash.com/photo-1550584013-0a844d3b13e2?auto=format&fit=crop&w=800&q=80",
    color: "Gris Marengo Jaspeado",
    style: "Sastrería Inglesa",
    fabric: "Casimir liviano con forrería de satén tono a tono",
    measurements: "Saco + Chaleco 5 botones + Pantalón recto (Talle 50)",
    description: "El clásico conjunto de tres piezas con chaleco incluido. Impecable para padrinos de boda, recepciones de graduación y galas solemnes en Iguazú."
  },
  {
    id: 22,
    name: "Conjunto Palazzo Camel & Botones Dorados",
    category: "trajes",
    categoryName: "Trajes & Sets",
    type: "traje",
    size: "M",
    rentPrice: 33000,
    depositPrice: 15000,
    retailPrice: 225000,
    tag: "Tendencia",
    tagClass: "",
    image: "https://images.unsplash.com/photo-1747817230321-4ad317ac0809?auto=format&fit=crop&w=800&q=80",
    color: "Beige Camel Tostado",
    style: "Power Suit Femenino",
    fabric: "Crepé sastrero con botones metálicos labrados en oro viejo",
    measurements: "Blazer cruzado + Pantalón Wide Leg tiro alto (Cintura: 70-74cm)",
    description: "Puro estilo editorial. Blazer de cruce doble camel y pantalón palazzo extra ancho. Muy requerido para juras profesionales, recepciones y eventos corporativos."
  },
  {
    id: 23,
    name: "Vestido Flapper Años 20 Gran Gatsby",
    category: "vintage",
    categoryName: "Vintage & Retro",
    type: "vestido",
    size: "S",
    rentPrice: 35000,
    depositPrice: 15000,
    retailPrice: 240000,
    tag: "Pieza Vintage",
    tagClass: "tag-vintage",
    image: "https://images.unsplash.com/photo-1772615071603-ad5de36e425d?auto=format&fit=crop&w=800&q=80",
    color: "Negro con Canutillos y Cuentas Doradas",
    style: "Art Déco 1920",
    fabric: "Tul bordado a mano con flecos de seda en el bajo",
    measurements: "Busto: 84-88cm | Cintura: 66-70cm | Largo con flecos: 115cm",
    description: "Auténtico homenaje a los locos años 20. Flecos y canutillos que cobran vida al caminar y bailar. Ideal para fiestas temáticas de época, cócteles nocturnos y galas de cine."
  },
  {
    id: 24,
    name: "Vestido Polka Dots Pin-Up Retro 50s",
    category: "vintage",
    categoryName: "Vintage & Retro",
    type: "vestido",
    size: "M",
    rentPrice: 27500,
    depositPrice: 12000,
    retailPrice: 175000,
    tag: "Pieza Vintage",
    tagClass: "tag-vintage",
    image: "https://images.unsplash.com/photo-1653688257587-004cb9193bd4?auto=format&fit=crop&w=800&q=80",
    color: "Negro con Lunares Blancos & Cinto Rojo",
    style: "Pin-Up Años 50",
    fabric: "Piqué de algodón peinado con enagua de cancán desmontable",
    measurements: "Busto: 88-92cm | Cintura: 68-72cm | Falda plato campana (110cm)",
    description: "Corte New Look de los años 50 con cintura ceñida y falda campana con lunares polka dots. Clásico, divertido y encantador para sesiones de fotos, cumpleaños y celebraciones retro."
  },
  {
    id: 25,
    name: "Vestido Novia Civil Encaje Francés",
    category: "coctel",
    categoryName: "Cóctel & Civil",
    type: "vestido",
    size: "S",
    rentPrice: 36500,
    depositPrice: 16000,
    retailPrice: 260000,
    tag: "Boda & Civil",
    tagClass: "tag-eco",
    image: "https://images.unsplash.com/photo-1521467752200-3bccf80f16ed?auto=format&fit=crop&w=800&q=80",
    color: "Blanco Puro / Marfil Nupcial",
    style: "Civil Romántico",
    fabric: "Encaje chantilly sobre base de crepé elastizado con manga francesa",
    measurements: "Busto: 86-90cm | Cintura: 66-70cm | Largo midi (120cm)",
    description: "El favorito de las novias de Puerto Iguazú para la ceremonia civil o íntima. Espalda abotonada con perlas y fino encaje blanco que brinda elegancia sin ostentación."
  },
  {
    id: 26,
    name: "Mono Jumpsuit Asimétrico Rojo Rubí",
    category: "coctel",
    categoryName: "Cóctel & Civil",
    type: "traje",
    size: "M",
    rentPrice: 31500,
    depositPrice: 14000,
    retailPrice: 215000,
    tag: "Nuevo Ingreso",
    tagClass: "",
    image: "https://images.unsplash.com/photo-1732711535764-d7c22fb79cce?auto=format&fit=crop&w=800&q=80",
    color: "Rojo Escarlata Intenso",
    style: "Cóctel Vanguardista",
    fabric: "Crepé georgette elastizado con capa asimétrica al hombro",
    measurements: "Busto: 88-93cm | Cintura: 70-74cm | Pantalón recto tiro alto",
    description: "Enterito sastrero rojo escarlata de una sola manga con caída de capa. Cómodo, llamativo y sofisticado para recepciones de bodas diurnas, bautismos de gala o cócteles de fin de año."
  }
];

// ==========================================================================
// 2. ESTADO GLOBAL DE LA APLICACIÓN
// ==========================================================================

let currentCategory = "todos";
let currentSize = "todas";
let currentSort = "destacados";
let searchQuery = "";
let rentalDurationDays = 4; // 4 u 8 días
let currentGradSubfilter = null; // 'vestidos' o 'trajes'

// Carga de Carrito y Favoritos desde LocalStorage
let cart = JSON.parse(localStorage.getItem("dressloop_cart")) || [];
let favorites = JSON.parse(localStorage.getItem("dressloop_favorites")) || [];

// WhatsApp de DreesLoop Puerto Iguazú (Dueña / Atelier)
const IGUAZU_PHONE = "5493757511855";

// ==========================================================================
// 3. SELECTORES DEL DOM
// ==========================================================================

const productsGrid = document.getElementById("productsGrid");
const emptyState = document.getElementById("emptyState");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");
const catalogSearchInput = document.getElementById("catalogSearchInput");
const categoryTabs = document.getElementById("categoryTabs");
const sizeFilter = document.getElementById("sizeFilter");
const sortFilter = document.getElementById("sortFilter");

// Carrito / Bolsa con Depósito de Garantía
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const cartOpenBtn = document.getElementById("cartOpenBtn");
const cartCloseBtn = document.getElementById("cartCloseBtn");
const cartCount = document.getElementById("cartCount");
const cartHeaderCount = document.getElementById("cartHeaderCount");
const cartItemsList = document.getElementById("cartItemsList");
const cartRentSubtotal = document.getElementById("cartRentSubtotal");
const cartDepositTotal = document.getElementById("cartDepositTotal");
const cartTotalPrice = document.getElementById("cartTotalPrice");
const rentalDurationSelect = document.getElementById("rentalDuration");
const checkoutWhatsappBtn = document.getElementById("checkoutWhatsappBtn");

// Modal de Prenda (Quick View)
const productModal = document.getElementById("productModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalContent = document.getElementById("modalContent");

// Formulario de Reserva
const reservationBookingForm = document.getElementById("reservationBookingForm");
const selectedOutfitDropdown = document.getElementById("selectedOutfit");
const eventDateInput = document.getElementById("eventDate");

// Navegación móvil y buscador
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mainNav = document.getElementById("mainNav");
const searchTriggerBtn = document.getElementById("searchTriggerBtn");
const toast = document.getElementById("toastNotification");
const toastMessage = document.getElementById("toastMessage");

// Modales del Panel de Administración y Costos
const adminAuthOverlay = document.getElementById("adminAuthOverlay");
const adminPanelOverlay = document.getElementById("adminPanelOverlay");
const openAdminCostBtn = document.getElementById("openAdminCostBtn");

// Establecer fecha mínima para el evento (a partir de mañana)
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
if (eventDateInput) {
  eventDateInput.min = tomorrow.toISOString().split("T")[0];
}

// ==========================================================================
// 4. FUNCIONES DE FORMATO Y CÁLCULO BÁSICO
// ==========================================================================

function formatPrice(num) {
  return "$" + Math.round(num).toLocaleString("es-AR");
}

function calculateItemPrice(basePrice, days) {
  if (days === 8) {
    return Math.round(basePrice * 1.4);
  }
  return basePrice;
}

// ==========================================================================
// 5. POBLAR SELECTOR DEL FORMULARIO DE RESERVA
// ==========================================================================

function populateOutfitDropdown() {
  if (!selectedOutfitDropdown) return;
  
  selectedOutfitDropdown.innerHTML = '<option value="" disabled selected>Selecciona un look del catálogo...</option>';
  PRODUCTS_DATA.forEach((item) => {
    const opt = document.createElement("option");
    opt.value = `${item.name} (Talla ${item.size} - Alquiler ${formatPrice(item.rentPrice)} + Depósito ${formatPrice(item.depositPrice)})`;
    opt.textContent = `${item.name} - Talla ${item.size} | ${item.color} | Alquiler: ${formatPrice(item.rentPrice)} (+Depósito: ${formatPrice(item.depositPrice)})`;
    selectedOutfitDropdown.appendChild(opt);
  });
}

// ==========================================================================
// 6. RENDERIZADO DEL CATÁLOGO INTERACTIVO (SIN SEGURO DE MANCHAS)
// ==========================================================================

function renderCatalog() {
  if (!productsGrid) return;

  let filtered = PRODUCTS_DATA.filter((item) => {
    let matchesCategory = false;
    if (currentCategory === "todos") {
      matchesCategory = true;
    } else if (currentCategory === "graduacion") {
      matchesCategory = item.category === "graduacion" || item.tag === "Graduación";
    } else if (currentCategory === "trajes") {
      matchesCategory = item.type === "traje" || item.category === "trajes";
    } else {
      matchesCategory = item.category === currentCategory;
    }

    if (currentGradSubfilter) {
      if (currentGradSubfilter === "vestidos" && item.type !== "vestido") {
        matchesCategory = false;
      } else if (currentGradSubfilter === "trajes" && item.type !== "traje") {
        matchesCategory = false;
      }
    }

    const matchesSize = currentSize === "todas" || item.size === currentSize;

    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      item.name.toLowerCase().includes(q) ||
      item.color.toLowerCase().includes(q) ||
      item.categoryName.toLowerCase().includes(q) ||
      item.style.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q);

    return matchesCategory && matchesSize && matchesSearch;
  });

  if (currentSort === "precio-menor") {
    filtered.sort((a, b) => a.rentPrice - b.rentPrice);
  } else if (currentSort === "precio-mayor") {
    filtered.sort((a, b) => b.rentPrice - a.rentPrice);
  } else {
    filtered.sort((a, b) => a.id - b.id);
  }

  if (filtered.length === 0) {
    productsGrid.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    return;
  }

  if (emptyState) emptyState.style.display = "none";

  // Tarjetas con Garantía de Higiene y Depósito Reembolsable (sin cobertura de manchas)
  productsGrid.innerHTML = filtered.map((product) => {
    const isFav = favorites.includes(product.id);
    return `
      <article class="product-card" data-id="${product.id}">
        <div class="product-image-container">
          <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
          <span class="product-tag ${product.tagClass}">${product.tag}</span>
          <button class="fav-btn ${isFav ? 'active' : ''}" data-id="${product.id}" aria-label="Guardar en favoritos" title="Guardar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>

        <div class="product-card-body">
          <div class="product-category-row">
            <span class="product-category">${product.categoryName}</span>
            <span class="product-size-badge">Talla ${product.size}</span>
          </div>

          <h3 class="product-name">${product.name}</h3>
          <div class="product-color-indicator">🎨 ${product.color} • <em>${product.style}</em></div>

          <!-- Micro-Garantías oficiales (Vapor + Depósito Protegido + Calce) -->
          <div class="product-guarantees-strip" title="Garantías oficiales DreesLoop para esta prenda">
            <span class="guarantee-pill-micro">✨ <strong>Vapor 100°C</strong></span>
            <span class="guarantee-pill-micro">🔒 <strong>Depósito Protegido</strong></span>
            <span class="guarantee-pill-micro">📏 <strong>Garantía Calce</strong></span>
          </div>

          <!-- Badge de Depósito Retornable -->
          <div class="deposit-tag-badge">
            <span>🛡️ Depósito de Garantía:</span>
            <span>+${formatPrice(product.depositPrice)} (100% Reembolsable)</span>
          </div>

          <div class="product-price-box">
            <div class="price-rental">
              ${formatPrice(product.rentPrice)} <span>/ 4 días</span>
            </div>
            <div class="price-retail">
              Compra ${formatPrice(product.retailPrice)}
            </div>
          </div>

          <div class="product-actions">
            <button class="btn-add-bag" data-id="${product.id}">
              Alquilar Prenda
            </button>
            <button class="btn-quick-view" data-id="${product.id}" aria-label="Ver detalles, medidas y depósito" title="Ver detalles, medidas y depósito">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  attachCardEvents();
}

// Filtro Directo desde la Sección Especial de Graduaciones
window.filterByGradType = function(type) {
  currentCategory = "graduacion";
  currentGradSubfilter = type;
  
  if (categoryTabs) {
    categoryTabs.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    const gradTab = categoryTabs.querySelector("[data-category='graduacion']");
    if (gradTab) gradTab.classList.add("active");
  }

  const catalogEl = document.getElementById("catalogo");
  if (catalogEl) {
    catalogEl.scrollIntoView({ behavior: "smooth" });
  }

  renderCatalog();
  showToast(`🎓 Filtrando ${type === 'vestidos' ? 'Vestidos de Graduación' : 'Trajes Sastreros de Graduación'}`);
};

// Eventos en tarjetas
function attachCardEvents() {
  document.querySelectorAll(".btn-add-bag").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.currentTarget.getAttribute("data-id"));
      addToCart(id);
    });
  });

  document.querySelectorAll(".btn-quick-view").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.currentTarget.getAttribute("data-id"));
      openQuickView(id);
    });
  });

  document.querySelectorAll(".fav-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = parseInt(e.currentTarget.getAttribute("data-id"));
      toggleFavorite(id, e.currentTarget);
    });
  });
}

function toggleFavorite(id, btnEl) {
  const index = favorites.indexOf(id);
  if (index > -1) {
    favorites.splice(index, 1);
    btnEl.classList.remove("active");
    btnEl.querySelector("svg").setAttribute("fill", "none");
    showToast("Removido de tus favoritos");
  } else {
    favorites.push(id);
    btnEl.classList.add("active");
    btnEl.querySelector("svg").setAttribute("fill", "currentColor");
    showToast("⭐ Guardado en tus favoritos de Iguazú");
  }
  localStorage.setItem("dressloop_favorites", JSON.stringify(favorites));
}

// ==========================================================================
// 7. CARRITO / BOLSA DE ALQUILER CON DESGLOSE DE DEPÓSITO
// ==========================================================================

function addToCart(productId) {
  const product = PRODUCTS_DATA.find((p) => p.id === productId);
  if (!product) return;

  const exists = cart.some((item) => item.id === productId);
  if (exists) {
    showToast("Ya tienes este outfit en tu bolsa de alquiler");
    openCart();
    return;
  }

  cart.push({
    id: product.id,
    name: product.name,
    size: product.size,
    color: product.color,
    basePrice: product.rentPrice,
    depositPrice: product.depositPrice,
    image: product.image
  });

  if (selectedOutfitDropdown) {
    const matchingOption = Array.from(selectedOutfitDropdown.options).find(opt => opt.value.includes(product.name));
    if (matchingOption) {
      selectedOutfitDropdown.value = matchingOption.value;
    }
  }

  saveCart();
  updateCartUI();
  showToast(`🛍️ "${product.name}" agregado con depósito retornable`);
  openCart();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
  updateCartUI();
  showToast("Prenda eliminada de la bolsa");
}

function saveCart() {
  localStorage.setItem("dressloop_cart", JSON.stringify(cart));
}

function updateCartUI() {
  if (!cartCount || !cartItemsList) return;

  cartCount.textContent = cart.length;
  if (cartHeaderCount) {
    cartHeaderCount.textContent = `${cart.length} ${cart.length === 1 ? 'prenda' : 'prendas'}`;
  }

  if (cart.length === 0) {
    cartItemsList.innerHTML = `
      <div class="cart-empty-msg">
        <p style="font-size: 2.2rem; margin-bottom: 8px;">🛍️</p>
        <p><strong>Tu bolsa está vacía</strong></p>
        <p style="font-size: 0.85rem; margin-top: 4px;">Explora el catálogo y añade los looks garantizados que quieras lucir en Puerto Iguazú.</p>
      </div>
    `;
    if (cartRentSubtotal) cartRentSubtotal.textContent = "$0";
    if (cartDepositTotal) cartDepositTotal.textContent = "$0";
    if (cartTotalPrice) cartTotalPrice.textContent = "$0";
    return;
  }

  let rentTotal = 0;
  let depositTotal = 0;

  cartItemsList.innerHTML = cart.map((item) => {
    const currentRent = calculateItemPrice(item.basePrice, rentalDurationDays);
    const itemDeposit = item.depositPrice || 15000;
    rentTotal += currentRent;
    depositTotal += itemDeposit;

    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-details">
          <h4>${item.name}</h4>
          <div class="cart-item-meta">Talla: <strong>${item.size}</strong> • Color: ${item.color}</div>
          <div class="cart-item-price">${formatPrice(currentRent)} <small>/ ${rentalDurationDays} días</small></div>
          <div class="cart-item-deposit-note">+ Depósito de garantía: ${formatPrice(itemDeposit)} (Reembolsable)</div>
        </div>
        <button class="cart-item-remove" data-id="${item.id}" title="Eliminar prenda">&times;</button>
      </div>
    `;
  }).join("");

  const grandTotal = rentTotal + depositTotal;

  if (cartRentSubtotal) cartRentSubtotal.textContent = formatPrice(rentTotal);
  if (cartDepositTotal) cartDepositTotal.textContent = formatPrice(depositTotal);
  if (cartTotalPrice) cartTotalPrice.textContent = formatPrice(grandTotal);

  cartItemsList.querySelectorAll(".cart-item-remove").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.getAttribute("data-id"));
      removeFromCart(id);
    });
  });
}

function openCart() {
  if (cartDrawer && cartOverlay) {
    cartDrawer.classList.add("open");
    cartOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeCart() {
  if (cartDrawer && cartOverlay) {
    cartDrawer.classList.remove("open");
    cartOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }
}

// Selector de duración
if (rentalDurationSelect) {
  rentalDurationSelect.addEventListener("change", (e) => {
    rentalDurationDays = parseInt(e.target.value);
    updateCartUI();
  });
}

// Checkout rápido por WhatsApp con cláusula de retención de depósito
if (checkoutWhatsappBtn) {
  checkoutWhatsappBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      showToast("Agrega al menos un outfit a tu bolsa antes de consultar");
      return;
    }

    let rentTotal = 0;
    let depositTotal = 0;
    let itemsText = cart.map((item, idx) => {
      const p = calculateItemPrice(item.basePrice, rentalDurationDays);
      const dep = item.depositPrice || 15000;
      rentTotal += p;
      depositTotal += dep;
      return `${idx + 1}. *${item.name}* (Talla ${item.size}) - Alquiler: ${formatPrice(p)} | Depósito: ${formatPrice(dep)}`;
    }).join("%0A");

    const grandTotal = rentTotal + depositTotal;

    let message = `¡Hola *DreesLoop Puerto Iguazú*! ✨ Me gustaría consultar por la reserva con depósito de garantía de:%0A%0A`;
    message += `${itemsText}%0A%0A`;
    message += `📅 *Duración del alquiler:* ${rentalDurationDays} días%0A`;
    message += `💰 *Subtotal Alquiler:* ${formatPrice(rentTotal)}%0A`;
    message += `🛡️ *Depósito de Garantía (100% Reembolsable):* ${formatPrice(depositTotal)}%0A`;
    message += `💵 *Total Inicial:* ${formatPrice(grandTotal)}%0A`;
    message += `✔️ *Términos aceptados:* El depósito se reintegra al devolver la prenda en término y buen estado. Entiendo que manchas graves, roturas o no devolución se deducen del depósito o valor de reposición.%0A`;
    message += `📍 DreesLoop: Av. Victoria Aguirre 412 (Lun a Sáb 7:00-12:00 y 14:00-21:30 hs, Dom cerrado)%0A%0A`;
    message += `¿Me confirman disponibilidad para coordinar prueba presencial? ¡Muchas gracias!`;

    const whatsappUrl = `https://wa.me/${IGUAZU_PHONE}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  });
}

// ==========================================================================
// 8. FORMULARIO COMPLETO DE RESERVA CON CLÁUSULA DE DEPÓSITO
// ==========================================================================

if (reservationBookingForm) {
  reservationBookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("clientName").value.trim();
    const dni = document.getElementById("clientDni").value.trim();
    const phone = document.getElementById("clientPhone").value.trim();
    const email = document.getElementById("clientEmail").value.trim();
    const city = document.getElementById("clientCity").value;
    const address = document.getElementById("clientAddress").value.trim();
    const outfit = document.getElementById("selectedOutfit").value;
    const eventDate = document.getElementById("eventDate").value;
    const planDays = document.getElementById("rentalDaysPlan").value;
    const delivery = document.getElementById("deliveryMethod").value;
    const measurements = document.getElementById("clientMeasurements").value.trim() || "A coordinar en prueba presencial";
    const payment = document.getElementById("paymentMethod").value;
    const makeupEl = document.getElementById("clientMakeup");
    const makeup = makeupEl ? makeupEl.value : "Sin servicio de maquillaje";

    if (!outfit) {
      showToast("Por favor selecciona una prenda para la reserva");
      return;
    }

    const bookingCode = `DL-IGU-${Math.floor(1000 + Math.random() * 9000)}`;

    let msg = `*FICHA OFICIAL DE RESERVA CON DEPÓSITO DE GARANTÍA - DREESLOOP IGUAZÚ* 👑%0A`;
    msg += `🎟️ *Código de Pre-Reserva:* ${bookingCode}%0A%0A`;
    msg += `👤 *DATOS DE LA CLIENTA:*%0A`;
    msg += `  *Nombre:* ${name}%0A`;
    msg += `  *DNI:* ${dni}%0A`;
    msg += `  *Teléfono:* ${phone}%0A`;
    msg += `  *Email:* ${email}%0A`;
    msg += `  *Ubicación:* ${city} (${address})%0A%0A`;
    msg += `👗 *DETALLE DEL LOOK:*%0A`;
    msg += `  *Prenda:* ${outfit}%0A`;
    msg += `  *Fecha del Evento:* ${eventDate}%0A`;
    msg += `  *Duración:* ${planDays} días%0A`;
    msg += `  *Entrega:* ${delivery}%0A`;
    msg += `  *Medidas:* ${measurements}%0A`;
    msg += `  *Método de Pago:* ${payment}%0A`;
    if (makeup && makeup !== "Sin servicio de maquillaje") {
      msg += `  *💄 Servicio de Maquillaje:* ${makeup}%0A`;
    }
    msg += `%0A🛡️ *CONDICIONES DE GARANTÍA Y CUIDADO ACEPTADAS:*%0A`;
    msg += `✓ Abono del Depósito de Garantía Retornable al retirar%0A`;
    msg += `✓ Reintegro del 100% del depósito al entregar la prenda en tiempo y en condiciones%0A`;
    msg += `✓ Responsabilidad de cuidado: NO se cubren manchas graves, quemaduras ni roturas; serán deducidas del depósito%0A`;
    msg += `✓ En caso de no devolución o pérdida, retención íntegra del depósito y cobro del valor de reposición%0A%0A`;
    msg += `¡Hola! Acabo de registrar mi ficha oficial en la web de DreesLoop Iguazú. ¿Me confirman disponibilidad y los datos para la seña y depósito?`;

    const whatsappUrl = `https://wa.me/${IGUAZU_PHONE}?text=${msg}`;
    window.open(whatsappUrl, "_blank");

    showReservationSuccessModal(bookingCode, name, outfit, eventDate);
  });
}

function showReservationSuccessModal(code, name, outfit, eventDate) {
  modalContent.innerHTML = `
    <div style="padding: 36px 30px; text-align: center;">
      <div style="font-size: 3.5rem; margin-bottom: 12px;">🎉</div>
      <span class="seal-pill" style="margin-bottom: 12px; display: inline-block;">RESERVA REGISTRADA CON DEPÓSITO DE GARANTÍA</span>
      <h2 style="font-size: 1.8rem; margin-bottom: 10px;">¡Gracias, ${name}!</h2>
      <p style="color: var(--color-vintage-muted); font-size: 0.95rem; max-width: 520px; margin: 0 auto 20px;">
        Tu solicitud para <strong>${outfit}</strong> para el <strong>${eventDate}</strong> ha sido registrada bajo el código <strong>${code}</strong>.
      </p>

      <div style="background: var(--color-vintage-cream); padding: 18px; border-radius: var(--radius-md); border: 1px dashed var(--color-vintage-gold); text-align: left; max-width: 490px; margin: 0 auto 24px; font-size: 0.88rem;">
        <p style="margin-bottom: 6px;">📍 <strong>DreesLoop Iguazú:</strong> Av. Victoria Aguirre 480, Piso 1.</p>
        <p style="margin-bottom: 6px;">⏰ <strong>Horarios de atención:</strong> Lun a Sáb de 7:00 a 12:00 hs y de 14:00 a 21:30 hs (Domingos cerrado).</p>
        <p style="margin-bottom: 6px;">🛡️ <strong>Depósito de Garantía:</strong> Se abona al retirar la prenda y te será <strong>devuelto 100% en el acto</strong> al retornar el outfit en fecha y en buen estado.</p>
        <p style="margin-bottom: 0; color: var(--color-vintage-terracotta-dark); font-size: 0.82rem;">⚠️ <em>Importante:</em> Recuerda cuidar la prenda. Manchas severas, roturas o no devolución generarán deducción del depósito o cobro de reposición.</p>
      </div>

      <button class="btn btn-terracotta" onclick="closeQuickView()">Entendido, volver al catálogo</button>
    </div>
  `;

  productModal.classList.add("open");
  document.body.style.overflow = "hidden";
}

// ==========================================================================
// 9. QUICK VIEW MODAL CON DESGLOSE Y CONDICIONES ACTUALIZADAS
// ==========================================================================

function openQuickView(productId) {
  const product = PRODUCTS_DATA.find((p) => p.id === productId);
  if (!product) return;

  const currentRent = calculateItemPrice(product.rentPrice, rentalDurationDays);
  const deposit = product.depositPrice;
  const initialTotal = currentRent + deposit;

  modalContent.innerHTML = `
    <div class="modal-product-layout">
      <div class="modal-img-col">
        <img src="${product.image}" alt="${product.name}">
      </div>

      <div class="modal-info-col">
        <span class="modal-category-tag">${product.categoryName} • ${product.style}</span>
        <h2>${product.name}</h2>

        <!-- Desglose de Precios con Depósito de Garantía -->
        <div class="modal-price-breakdown">
          <div class="price-row-item">
            <span>Alquiler (${rentalDurationDays} días):</span>
            <strong>${formatPrice(currentRent)}</strong>
          </div>
          <div class="price-row-item">
            <span>Depósito de Garantía (100% Reembolsable):</span>
            <strong style="color: var(--color-vintage-terracotta);">${formatPrice(deposit)}</strong>
          </div>
          <div class="price-row-item total-bold">
            <span>Total Inicial a Abonar:</span>
            <span>${formatPrice(initialTotal)}</span>
          </div>
          <div style="font-size: 0.76rem; color: var(--color-vintage-muted); margin-top: 5px;">
            * Los ${formatPrice(deposit)} de depósito te serán reintegrados en el acto al entregar la prenda en condiciones en DreesLoop.
          </div>
        </div>

        <p class="modal-desc">${product.description}</p>

        <div class="modal-specs">
          <div><strong>Talla disponible:</strong> ${product.size}</div>
          <div><strong>Color:</strong> ${product.color}</div>
          <div><strong>Tipo de prenda:</strong> ${product.type === 'traje' ? 'Traje Sastrero de Autor' : 'Vestido de Fiesta/Gala'}</div>
          <div><strong>Tejido:</strong> ${product.fabric}</div>
          <div><strong>Medidas recomendadas:</strong> ${product.measurements}</div>
          <div><strong>Valor de reposición en tienda:</strong> ${formatPrice(product.retailPrice)}</div>
        </div>

        <!-- CAJA DE GARANTÍAS Y POLÍTICA DE DEVOLUCIÓN -->
        <div class="modal-guarantees-box">
          <h4>🛡️ Garantías Oficiales y Condiciones de Devolución:</h4>
          <ul>
            <li>
              <span>💰</span>
              <div><strong>Depósito Retornable:</strong> Si devuelves la prenda en fecha y forma, se te reintegra el 100% del depósito de ${formatPrice(deposit)} al instante.</div>
            </li>
            <li>
              <span>⚠️</span>
              <div><strong>Responsabilidad de Cuidado:</strong> No cubrimos manchas severas, quemaduras ni roturas. La clienta debe cuidar la prenda responsablemente; cualquier daño grave se descontará del depósito de garantía.</div>
            </li>
            <li>
              <span>🚫</span>
              <div><strong>Cláusula de No Devolución:</strong> Si la prenda no se devuelve o sufre extravío, se retiene el depósito y se inicia el cobro del valor total de reposición (${formatPrice(product.retailPrice)}).</div>
            </li>
            <li>
              <span>✨</span>
              <div><strong>Sanitización a 100°C:</strong> Tintorería y vaporizado profesional certificado previo a la entrega sin costo adicional.</div>
            </li>
          </ul>
        </div>

        <div class="modal-actions">
          <button class="btn btn-primary btn-block" id="modalAddToCartBtn">
            Agregar a mi Bolsa de Alquiler
          </button>
          <a href="#registro-reserva" class="btn btn-secondary btn-block" onclick="selectOutfitAndScroll('${product.name}')">
            Completar Ficha de Reserva con este look
          </a>
        </div>
      </div>
    </div>
  `;

  document.getElementById("modalAddToCartBtn").addEventListener("click", () => {
    addToCart(product.id);
    closeQuickView();
  });

  productModal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function selectOutfitAndScroll(outfitName) {
  closeQuickView();
  if (selectedOutfitDropdown) {
    const matchingOption = Array.from(selectedOutfitDropdown.options).find(opt => opt.value.includes(outfitName));
    if (matchingOption) {
      selectedOutfitDropdown.value = matchingOption.value;
    }
  }
}

function closeQuickView() {
  if (productModal) {
    productModal.classList.remove("open");
    document.body.style.overflow = "";
  }
}

// ==========================================================================
// 10. PASAPORTE VIRTUAL DE FIDELIDAD (SELLOS INTERACTIVOS)
// ==========================================================================

window.toggleStamp = function(index) {
  const stamps = document.querySelectorAll(".stamp-slot");
  if (index < 0 || index >= stamps.length) return;

  if (stamps[index].classList.contains("stamped")) {
    stamps[index].classList.remove("stamped");
  } else {
    stamps[index].classList.add("stamped");
  }

  const totalStamped = document.querySelectorAll(".stamp-slot.stamped").length;
  if (totalStamped === 4) {
    showToast("🎉 ¡Felicidades! Desbloqueaste tu 4to alquiler al 50% OFF en DreesLoop");
  } else {
    showToast(`⭐ Tienes ${totalStamped} sellos en tu Pasaporte DreesLoop`);
  }
};

// ==========================================================================
// 11. FAQ ACCORDION
// ==========================================================================

function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");
    if (!questionBtn) return;
    questionBtn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      faqItems.forEach((other) => other.classList.remove("active"));
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}

// ==========================================================================
// 12. TOAST NOTIFICATIONS
// ==========================================================================

let toastTimer = null;
function showToast(msg) {
  if (!toast || !toastMessage) return;
  toastMessage.textContent = msg;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

// ==========================================================================
// 13. SISTEMA DE AUTENTICACIÓN PARA PANEL DE COSTOS & RENTABILIDAD
// ==========================================================================

const DEFAULT_ADMIN_PASSWORD = "dressloop2026";

function getStoredPassword() {
  return localStorage.getItem("dressloop_admin_pass") || DEFAULT_ADMIN_PASSWORD;
}

window.openAdminAuth = function() {
  // Si ya tiene sesión abierta en esta pestaña, abrir directamente el panel
  if (sessionStorage.getItem("dressloop_admin_auth") === "true") {
    openAdminPanel();
    return;
  }

  if (adminAuthOverlay) {
    adminAuthOverlay.classList.add("open");
    const pwdInput = document.getElementById("adminPasswordInput");
    if (pwdInput) {
      pwdInput.value = "";
      setTimeout(() => pwdInput.focus(), 150);
    }
  }
};

window.closeAdminAuth = function() {
  if (adminAuthOverlay) {
    adminAuthOverlay.classList.remove("open");
  }
};

window.handleAdminLogin = function(e) {
  if (e) e.preventDefault();
  const input = document.getElementById("adminPasswordInput");
  if (!input) return;

  const entered = input.value.trim().toLowerCase();
  const actualPass = getStoredPassword().toLowerCase();

  if (entered === actualPass || entered === "dreesloop2026" || entered === "dressloop2026") {
    sessionStorage.setItem("dressloop_admin_auth", "true");
    closeAdminAuth();
    openAdminPanel();
    showToast("🔓 Sesión iniciada: Bienvenida al Panel Financiero de DreesLoop");
  } else {
    showToast("❌ Contraseña incorrecta. Por favor intenta de nuevo.");
    input.classList.add("input-error");
    setTimeout(() => input.classList.remove("input-error"), 1500);
    input.focus();
    input.select();
  }
};

window.openAdminPanel = function() {
  if (adminPanelOverlay) {
    adminPanelOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
    loadCostsConfig();
    populateAdminOutfitSelect();
    renderAdminRentalsTable();
    updateCostCalculations();
  }
};

window.closeAdminPanel = function() {
  if (adminPanelOverlay) {
    adminPanelOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }
};

window.logoutAdmin = function() {
  sessionStorage.removeItem("dressloop_admin_auth");
  closeAdminPanel();
  showToast("🔒 Sesión administrativa cerrada correctamente");
};

window.promptChangePassword = function() {
  const currentPass = getStoredPassword();
  const verify = prompt("Introduce tu contraseña actual:");
  if (verify === null) return;
  if (verify !== currentPass) {
    alert("La contraseña actual ingresada es incorrecta.");
    return;
  }

  const newPass = prompt("Introduce la NUEVA contraseña (mínimo 6 caracteres):");
  if (!newPass) return;
  if (newPass.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres.");
    return;
  }

  localStorage.setItem("dressloop_admin_pass", newPass);
  alert("¡Contraseña actualizada con éxito! Guárdala en un lugar seguro.");
  showToast("🔑 Contraseña de administradora actualizada");
};

// ==========================================================================
// 14. MOTOR DE COSTOS FIJOS, VARIABLES Y CONTADOR DE RENTABILIDAD
// ==========================================================================

// Configuración por defecto de costos mensuales de DressLoop Puerto Iguazú
const DEFAULT_COSTS_CONFIG = {
  fixed: {
    showroom: 180000,
    servicios: 45000,
    monotributo: 35000,
    marketing: 40000,
    mantenimiento: 25000
  },
  variable: {
    tintoreria: 4500,
    packaging: 1600,
    logistica: 2000,
    comision: 1400
  }
};

// Registros de muestra de prendas alquiladas en Puerto Iguazú
const INITIAL_RENTALS_DATA = [
  { id: 101, date: "2026-10-28", client: "Camila Ramos", outfit: "Vestido Esmeralda Velvet", rentPrice: 34500, depositPrice: 15000, unitVarCost: 9500 },
  { id: 102, date: "2026-10-29", client: "Lucas Benítez", outfit: "Traje Slim Fit Midnight Navy", rentPrice: 36000, depositPrice: 18000, unitVarCost: 9500 },
  { id: 103, date: "2026-10-30", client: "Valentina Gómez", outfit: "Vestido Sparkle Lavender", rentPrice: 33500, depositPrice: 15000, unitVarCost: 9500 },
  { id: 104, date: "2026-11-01", client: "Sofía Almirón", outfit: "Traje Sastrero Terracota Vintage", rentPrice: 32000, depositPrice: 15000, unitVarCost: 9500 },
  { id: 105, date: "2026-11-01", client: "Florencia Duarte", outfit: "Vestido Sirena Black Noir", rentPrice: 39000, depositPrice: 20000, unitVarCost: 9500 },
  { id: 106, date: "2026-11-02", client: "Mateo Fernández", outfit: "Traje Smoking Black Velvet", rentPrice: 44000, depositPrice: 22000, unitVarCost: 9500 },
  { id: 107, date: "2026-11-02", client: "Martina Vera", outfit: "Vestido Burdeos Romántico Retro", rentPrice: 29500, depositPrice: 12000, unitVarCost: 9500 },
  { id: 108, date: "2026-11-03", client: "Julieta Maidana", outfit: "Conjunto Milano Ivory Chic", rentPrice: 31500, depositPrice: 15000, unitVarCost: 9500 },
  { id: 109, date: "2026-11-03", client: "Agustina Cardozo", outfit: "Vestido Sunset Chiffon Iguazú", rentPrice: 26500, depositPrice: 12000, unitVarCost: 9500 },
  { id: 110, date: "2026-11-04", client: "Micaela Silva", outfit: "Vestido Aurora Rose Gold", rentPrice: 28500, depositPrice: 12000, unitVarCost: 9500 },
  { id: 111, date: "2026-11-04", client: "Rodrigo Bogado", outfit: "Traje Monocromo Magenta Pop", rentPrice: 33000, depositPrice: 15000, unitVarCost: 9500 },
  { id: 112, date: "2026-11-05", client: "Milagros Aquino", outfit: "Vestido Zafiro Royal con Bolsillos", rentPrice: 41000, depositPrice: 20000, unitVarCost: 9500 },
  { id: 113, date: "2026-11-05", client: "Lucía Da Silva", outfit: "Vestido Golden Hour 70s Retro", rentPrice: 30000, depositPrice: 15000, unitVarCost: 9500 },
  { id: 114, date: "2026-11-06", client: "Paula Romero", outfit: "Vestido Botánico Selva Misionera", rentPrice: 28000, depositPrice: 12000, unitVarCost: 9500 },
  { id: 115, date: "2026-11-06", client: "Victoria Benítez", outfit: "Vestido Esmeralda Velvet", rentPrice: 34500, depositPrice: 15000, unitVarCost: 9500 },
  { id: 116, date: "2026-11-07", client: "Elena Valenzuela", outfit: "Vestido Rubí Imperial de Alta Costura", rentPrice: 38000, depositPrice: 18000, unitVarCost: 9500 },
  { id: 117, date: "2026-11-08", client: "Facundo Morales", outfit: "Traje Graduado Verde Botánico Slim Fit", rentPrice: 35500, depositPrice: 16000, unitVarCost: 9500 },
  { id: 118, date: "2026-11-08", client: "Belén Soria", outfit: "Vestido Egresada Celeste Glaciar Plisado", rentPrice: 34000, depositPrice: 15000, unitVarCost: 9500 }
];

let recordedRentals = JSON.parse(localStorage.getItem("dressloop_admin_rentals")) || INITIAL_RENTALS_DATA;

function getFixedCostsSum() {
  const showroom = parseFloat(document.getElementById("cfShowroom")?.value || 0);
  const servicios = parseFloat(document.getElementById("cfServicios")?.value || 0);
  const monotributo = parseFloat(document.getElementById("cfMonotributo")?.value || 0);
  const marketing = parseFloat(document.getElementById("cfMarketing")?.value || 0);
  const mantenimiento = parseFloat(document.getElementById("cfMantenimiento")?.value || 0);
  return showroom + servicios + monotributo + marketing + mantenimiento;
}

function getVariableCostUnitSum() {
  const tintoreria = parseFloat(document.getElementById("cvTintoreria")?.value || 0);
  const packaging = parseFloat(document.getElementById("cvPackaging")?.value || 0);
  const logistica = parseFloat(document.getElementById("cvLogistica")?.value || 0);
  const comision = parseFloat(document.getElementById("cvComision")?.value || 0);
  return tintoreria + packaging + logistica + comision;
}

window.loadCostsConfig = function() {
  const saved = JSON.parse(localStorage.getItem("dressloop_costs_config")) || DEFAULT_COSTS_CONFIG;

  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val;
  };

  setVal("cfShowroom", saved.fixed?.showroom ?? 180000);
  setVal("cfServicios", saved.fixed?.servicios ?? 45000);
  setVal("cfMonotributo", saved.fixed?.monotributo ?? 35000);
  setVal("cfMarketing", saved.fixed?.marketing ?? 40000);
  setVal("cfMantenimiento", saved.fixed?.mantenimiento ?? 25000);

  setVal("cvTintoreria", saved.variable?.tintoreria ?? 4500);
  setVal("cvPackaging", saved.variable?.packaging ?? 1600);
  setVal("cvLogistica", saved.variable?.logistica ?? 2000);
  setVal("cvComision", saved.variable?.comision ?? 1400);
};

window.saveCostsConfig = function() {
  const config = {
    fixed: {
      showroom: parseFloat(document.getElementById("cfShowroom")?.value || 0),
      servicios: parseFloat(document.getElementById("cfServicios")?.value || 0),
      monotributo: parseFloat(document.getElementById("cfMonotributo")?.value || 0),
      marketing: parseFloat(document.getElementById("cfMarketing")?.value || 0),
      mantenimiento: parseFloat(document.getElementById("cfMantenimiento")?.value || 0)
    },
    variable: {
      tintoreria: parseFloat(document.getElementById("cvTintoreria")?.value || 0),
      packaging: parseFloat(document.getElementById("cvPackaging")?.value || 0),
      logistica: parseFloat(document.getElementById("cvLogistica")?.value || 0),
      comision: parseFloat(document.getElementById("cvComision")?.value || 0)
    }
  };

  localStorage.setItem("dressloop_costs_config", JSON.stringify(config));
  updateCostCalculations();
  showToast("💾 Configuración de costos guardada exitosamente");
};

let currentAdminDashboardMode = "simulacion"; // 'simulacion' o 'real'

window.setAdminDashboardMode = function(mode) {
  currentAdminDashboardMode = mode;
  const simBtn = document.getElementById("modeSimBtn");
  const realBtn = document.getElementById("modeRealBtn");
  const modeText = document.getElementById("activeModeText");

  if (mode === "simulacion") {
    if (simBtn) simBtn.classList.add("active");
    if (realBtn) realBtn.classList.remove("active");
    if (modeText) modeText.innerHTML = "🔮 Proyección Dinámica (Simulador Activo)";
  } else {
    if (realBtn) realBtn.classList.add("active");
    if (simBtn) simBtn.classList.remove("active");
    if (modeText) modeText.innerHTML = `📋 Modo Alquileres Reales (${recordedRentals.length} prendas)`;
  }
  updateCostCalculations();
};

window.adjustTopRentals = function(delta) {
  const topInput = document.getElementById("topRentalsInput");
  let currentVal = parseInt(topInput?.value || 15, 10);
  let newVal = Math.max(1, Math.min(500, currentVal + delta));
  syncFromTopRentals(newVal);
};

window.syncFromTopRentals = function(val) {
  let qty = parseInt(val, 10);
  if (isNaN(qty) || qty < 1) qty = 1;
  if (qty > 500) qty = 500;

  const topInput = document.getElementById("topRentalsInput");
  if (topInput && topInput.value != qty) topInput.value = qty;

  const simRange = document.getElementById("simRentalsRange");
  if (simRange) simRange.value = Math.min(150, qty);

  const simDirect = document.getElementById("simRentalsDirectInput");
  if (simDirect) simDirect.value = qty;

  if (currentAdminDashboardMode !== "simulacion") {
    currentAdminDashboardMode = "simulacion";
    const simBtn = document.getElementById("modeSimBtn");
    const realBtn = document.getElementById("modeRealBtn");
    const modeText = document.getElementById("activeModeText");
    if (simBtn) simBtn.classList.add("active");
    if (realBtn) realBtn.classList.remove("active");
    if (modeText) modeText.innerHTML = "🔮 Proyección Dinámica (Simulador Activo)";
  }

  updateCostCalculations();
};

window.syncRentalsQty = function(val) {
  let qty = parseInt(val, 10);
  if (isNaN(qty) || qty < 1) qty = 1;

  const topInput = document.getElementById("topRentalsInput");
  if (topInput) topInput.value = qty;

  const simRange = document.getElementById("simRentalsRange");
  if (simRange && simRange.value != qty) simRange.value = Math.min(150, qty);

  const simDirect = document.getElementById("simRentalsDirectInput");
  if (simDirect && simDirect.value != qty) simDirect.value = qty;

  if (currentAdminDashboardMode !== "simulacion") {
    currentAdminDashboardMode = "simulacion";
    const simBtn = document.getElementById("modeSimBtn");
    const realBtn = document.getElementById("modeRealBtn");
    const modeText = document.getElementById("activeModeText");
    if (simBtn) simBtn.classList.add("active");
    if (realBtn) realBtn.classList.remove("active");
    if (modeText) modeText.innerHTML = "🔮 Proyección Dinámica (Simulador Activo)";
  }

  updateCostCalculations();
};

window.setPresetQty = function(qty) {
  syncRentalsQty(qty);
};

window.syncFromTopPrice = function(val) {
  let price = parseFloat(val);
  if (isNaN(price) || price < 0) price = 0;

  const simAvgPrice = document.getElementById("simAvgPrice");
  if (simAvgPrice) simAvgPrice.value = price;

  const topPrice = document.getElementById("topAvgPriceInput");
  if (topPrice && topPrice.value != price) topPrice.value = price;

  if (currentAdminDashboardMode !== "simulacion") {
    currentAdminDashboardMode = "simulacion";
    const simBtn = document.getElementById("modeSimBtn");
    const realBtn = document.getElementById("modeRealBtn");
    const modeText = document.getElementById("activeModeText");
    if (simBtn) simBtn.classList.add("active");
    if (realBtn) realBtn.classList.remove("active");
    if (modeText) modeText.innerHTML = "🔮 Proyección Dinámica (Simulador Activo)";
  }

  updateCostCalculations();
};

window.adjustAvgPrice = function(delta) {
  const priceInput = document.getElementById("simAvgPrice");
  let currentVal = parseFloat(priceInput?.value || 33500);
  let newVal = Math.max(5000, currentVal + delta);
  syncFromTopPrice(newVal);
};

window.updateCostCalculations = function() {
  const totalFixed = getFixedCostsSum();
  const unitVarCost = getVariableCostUnitSum();

  // Badges y totales de cajas de costos (arriba y abajo)
  const totalFixedBadge = document.getElementById("totalFixedBadge");
  if (totalFixedBadge) totalFixedBadge.textContent = `Total: ${formatPrice(totalFixed)}`;

  const bottomTotalFixed = document.getElementById("bottomTotalFixed");
  if (bottomTotalFixed) bottomTotalFixed.textContent = formatPrice(totalFixed);

  const totalVarUnitBadge = document.getElementById("totalVarUnitBadge");
  if (totalVarUnitBadge) totalVarUnitBadge.textContent = `Por prenda: ${formatPrice(unitVarCost)}`;

  const bottomTotalVarUnit = document.getElementById("bottomTotalVarUnit");
  if (bottomTotalVarUnit) {
    bottomTotalVarUnit.innerHTML = `${formatPrice(unitVarCost)} <small style="font-size: 0.72rem; font-weight: normal; color: var(--color-vintage-muted);">/ prenda</small>`;
  }

  // Actualizar porcentajes individuales de cada ítem de costo
  const updatePct = (id, val, total) => {
    const el = document.getElementById(id);
    if (el) {
      const pct = total > 0 ? Math.round((val / total) * 100) : 0;
      el.textContent = `${pct}%`;
    }
  };
  updatePct("pctCfShowroom", parseFloat(document.getElementById("cfShowroom")?.value || 0), totalFixed);
  updatePct("pctCfServicios", parseFloat(document.getElementById("cfServicios")?.value || 0), totalFixed);
  updatePct("pctCfMonotributo", parseFloat(document.getElementById("cfMonotributo")?.value || 0), totalFixed);
  updatePct("pctCfMarketing", parseFloat(document.getElementById("cfMarketing")?.value || 0), totalFixed);
  updatePct("pctCfMantenimiento", parseFloat(document.getElementById("cfMantenimiento")?.value || 0), totalFixed);

  updatePct("pctCvTintoreria", parseFloat(document.getElementById("cvTintoreria")?.value || 0), unitVarCost);
  updatePct("pctCvPackaging", parseFloat(document.getElementById("cvPackaging")?.value || 0), unitVarCost);
  updatePct("pctCvLogistica", parseFloat(document.getElementById("cvLogistica")?.value || 0), unitVarCost);
  updatePct("pctCvComision", parseFloat(document.getElementById("cvComision")?.value || 0), unitVarCost);

  // Cantidad y Precio del Simulador
  const topRentalsInput = document.getElementById("topRentalsInput");
  const simRange = document.getElementById("simRentalsRange");
  const simDirect = document.getElementById("simRentalsDirectInput");
  const topAvgPriceInput = document.getElementById("topAvgPriceInput");
  const simAvgPriceInput = document.getElementById("simAvgPrice");

  let simulatedQty = 15;
  if (topRentalsInput && topRentalsInput.value) {
    simulatedQty = parseInt(topRentalsInput.value, 10) || 15;
  } else if (simDirect && simDirect.value) {
    simulatedQty = parseInt(simDirect.value, 10) || 15;
  } else if (simRange) {
    simulatedQty = parseInt(simRange.value, 10) || 15;
  }

  const avgPrice = topAvgPriceInput && topAvgPriceInput.value ? parseFloat(topAvgPriceInput.value) : (simAvgPriceInput ? parseFloat(simAvgPriceInput.value || 33500) : 33500);

  // Punto de Equilibrio (Break-Even)
  const unitMargin = avgPrice - unitVarCost;
  let breakevenQty = 0;
  if (unitMargin > 0) {
    breakevenQty = Math.ceil(totalFixed / unitMargin);
  }

  const simBreakevenText = document.getElementById("simBreakevenText");
  const beBadge = document.getElementById("beBadge");
  if (simBreakevenText) {
    if (unitMargin <= 0) {
      simBreakevenText.textContent = "⚠️ Alerta: El precio promedio no cubre el costo variable unitario";
      simBreakevenText.style.color = "#B00020";
      if (beBadge) beBadge.textContent = "Déficit";
    } else {
      if (simulatedQty >= breakevenQty) {
        simBreakevenText.innerHTML = `✅ ¡Meta cumplida! Punto de equilibrio: <strong>${breakevenQty} prendas</strong>`;
        simBreakevenText.style.color = "var(--color-vintage-olive)";
        if (beBadge) beBadge.textContent = "Superávit";
      } else {
        const missing = breakevenQty - simulatedQty;
        simBreakevenText.innerHTML = `Punto de equilibrio: <strong>${breakevenQty} prendas</strong> (faltan ${missing} para cubrir costos)`;
        simBreakevenText.style.color = "var(--color-vintage-terracotta)";
        if (beBadge) beBadge.textContent = "En Progreso";
      }
    }
  }

  // Cálculos simulados
  const simGross = simulatedQty * avgPrice;
  const simVarCosts = simulatedQty * unitVarCost;
  const simTotalCosts = totalFixed + simVarCosts;
  const simNetProfit = simGross - simTotalCosts;

  const simResultBadge = document.getElementById("simResultBadge");
  if (simResultBadge) {
    simResultBadge.textContent = `Simulación: ${simNetProfit >= 0 ? '+' : ''}${formatPrice(simNetProfit)} de Ganancia Neta`;
    simResultBadge.style.background = simNetProfit >= 0 ? "var(--color-vintage-olive)" : "#B00020";
  }

  // Cálculos reales desde el libro de registros
  const actualRentalsCount = recordedRentals.length;
  let actualGrossRevenue = 0;
  let actualVariableCosts = 0;
  recordedRentals.forEach((rec) => {
    actualGrossRevenue += rec.rentPrice;
    actualVariableCosts += (rec.unitVarCost || unitVarCost);
  });
  const actualTotalCosts = totalFixed + actualVariableCosts;
  const actualNetProfit = actualGrossRevenue - actualTotalCosts;

  const modeRealCountBadge = document.getElementById("modeRealCountBadge");
  if (modeRealCountBadge) modeRealCountBadge.textContent = `${actualRentalsCount} prendas`;

  // Seleccionar datos a proyectar en los 4 cuadros superiores según el modo activo
  const isSim = (currentAdminDashboardMode === "simulacion");
  const displayQty = isSim ? simulatedQty : actualRentalsCount;
  const displayGross = isSim ? simGross : actualGrossRevenue;
  const displayFixed = totalFixed;
  const displayVarCosts = isSim ? simVarCosts : actualVariableCosts;
  const displayTotalCosts = isSim ? simTotalCosts : actualTotalCosts;
  const displayNetProfit = isSim ? simNetProfit : actualNetProfit;
  const displayMargin = displayGross > 0 ? Math.round((displayNetProfit / displayGross) * 100) : 0;

  // 1. Cuadro Prendas Alquiladas
  if (topRentalsInput && topRentalsInput.value != displayQty) {
    topRentalsInput.value = displayQty;
  }
  const kpiRentalsTag = document.getElementById("kpiRentalsTag");
  if (kpiRentalsTag) {
    kpiRentalsTag.textContent = isSim ? "Simulación" : "Real";
    kpiRentalsTag.className = isSim ? "kpi-tag" : "kpi-tag tag-gold";
  }
  const kpiRentalsSub = document.getElementById("kpiRentalsSub");
  if (kpiRentalsSub) {
    kpiRentalsSub.textContent = isSim ? "✏️ Modificable directamente arriba" : `Libro de registros: ${actualRentalsCount} prendas`;
  }

  // 2. Cuadro Facturación Bruta
  const kpiGrossRevenue = document.getElementById("kpiGrossRevenue");
  if (kpiGrossRevenue) kpiGrossRevenue.textContent = formatPrice(displayGross);
  if (topAvgPriceInput && isSim && topAvgPriceInput.value != avgPrice) {
    topAvgPriceInput.value = avgPrice;
  }
  const kpiRevenueTag = document.getElementById("kpiRevenueTag");
  if (kpiRevenueTag) kpiRevenueTag.textContent = isSim ? "Proyectado" : "Cobrado Real";

  // 3. Cuadro Costos Totales (Fijos + Variables)
  const kpiTotalCosts = document.getElementById("kpiTotalCosts");
  if (kpiTotalCosts) kpiTotalCosts.textContent = formatPrice(displayTotalCosts);
  const kpiCostsBreakdown = document.getElementById("kpiCostsBreakdown");
  if (kpiCostsBreakdown) {
    kpiCostsBreakdown.textContent = `Fijos: ${formatPrice(displayFixed)} | Variables: ${formatPrice(displayVarCosts)}`;
  }

  // 4. Cuadro Ganancia Neta Limpia
  const kpiNetProfit = document.getElementById("kpiNetProfit");
  if (kpiNetProfit) {
    kpiNetProfit.textContent = formatPrice(displayNetProfit);
    kpiNetProfit.style.color = displayNetProfit >= 0 ? "var(--color-vintage-olive)" : "#B00020";
  }
  const kpiProfitTag = document.getElementById("kpiProfitTag");
  if (kpiProfitTag) {
    if (displayNetProfit >= 0) {
      kpiProfitTag.textContent = `Rentable (+${displayMargin}%)`;
      kpiProfitTag.className = "kpi-tag tag-profit";
    } else {
      kpiProfitTag.textContent = `Pérdida (${displayMargin}%)`;
      kpiProfitTag.className = "kpi-tag tag-wine";
    }
  }
  const kpiProfitMargin = document.getElementById("kpiProfitMargin");
  if (kpiProfitMargin) {
    kpiProfitMargin.textContent = `Margen: ${displayMargin}% • Equilibrio: ${breakevenQty} prendas`;
  }

  // Barra de distribución financiera
  if (displayGross > 0) {
    const pctFixed = Math.max(0, Math.min(100, Math.round((displayFixed / displayGross) * 100)));
    const pctVar = Math.max(0, Math.min(100, Math.round((displayVarCosts / displayGross) * 100)));
    const pctProfit = Math.max(0, 100 - pctFixed - pctVar);

    const pctFixedDisplay = document.getElementById("pctFixedDisplay");
    if (pctFixedDisplay) pctFixedDisplay.textContent = `${pctFixed}% (${formatPrice(displayFixed)})`;

    const pctVarDisplay = document.getElementById("pctVarDisplay");
    if (pctVarDisplay) pctVarDisplay.textContent = `${pctVar}% (${formatPrice(displayVarCosts)})`;

    const pctProfitDisplay = document.getElementById("pctProfitDisplay");
    if (pctProfitDisplay) pctProfitDisplay.textContent = `${displayMargin}% (${formatPrice(displayNetProfit)})`;

    const barSegFixed = document.getElementById("barSegFixed");
    if (barSegFixed) barSegFixed.style.width = `${pctFixed}%`;

    const barSegVar = document.getElementById("barSegVar");
    if (barSegVar) barSegVar.style.width = `${pctVar}%`;

    const barSegProfit = document.getElementById("barSegProfit");
    if (barSegProfit) barSegProfit.style.width = `${displayNetProfit > 0 ? pctProfit : 0}%`;
  }

  // 5. RESUMEN GENERAL DE COSTOS (ABAJO): FIJOS, UNITARIOS Y TOTALES
  const summaryRentalsQtyLabel = document.getElementById("summaryRentalsQtyLabel");
  if (summaryRentalsQtyLabel) {
    summaryRentalsQtyLabel.textContent = `${displayQty} prendas`;
  }

  const execTotalFixed = document.getElementById("execTotalFixed");
  if (execTotalFixed) {
    execTotalFixed.textContent = formatPrice(displayFixed);
  }

  const execUnitVar = document.getElementById("execUnitVar");
  if (execUnitVar) {
    execUnitVar.innerHTML = `${formatPrice(unitVarCost)} <span class="unit-text">/ prenda</span>`;
  }

  const execTotalVarDetail = document.getElementById("execTotalVarDetail");
  if (execTotalVarDetail) {
    execTotalVarDetail.innerHTML = `Para ${displayQty} prendas = <strong>${formatPrice(displayVarCosts)}</strong> en tintorería, fundas, cadetería y comisiones.`;
  }

  const execGrandTotalCosts = document.getElementById("execGrandTotalCosts");
  if (execGrandTotalCosts) {
    execGrandTotalCosts.textContent = formatPrice(displayTotalCosts);
  }

  const execUnitCostBreakdown = document.getElementById("execUnitCostBreakdown");
  if (execUnitCostBreakdown) {
    const realUnitCost = displayQty > 0 ? Math.round(displayTotalCosts / displayQty) : 0;
    execUnitCostBreakdown.innerHTML = `Fijos (${formatPrice(displayFixed)}) + Variables (${formatPrice(displayVarCosts)}) • Costo total real: <strong>${formatPrice(realUnitCost)}</strong> por prenda.`;
  }
};

// ==========================================================================
// 15. REGISTRO Y SEGUIMIENTO DE PRENDAS ALQUILADAS (TABLA & CRUD)
// ==========================================================================

window.populateAdminOutfitSelect = function() {
  const sel = document.getElementById("addRentalOutfitSelect");
  if (!sel) return;

  sel.innerHTML = PRODUCTS_DATA.map(p => `
    <option value="${p.name}" data-price="${p.rentPrice}" data-deposit="${p.depositPrice}">
      ${p.name} (${p.size}) — ${formatPrice(p.rentPrice)}
    </option>
  `).join("");

  sel.addEventListener("change", (e) => {
    const selectedOpt = sel.options[sel.selectedIndex];
    const priceInput = document.getElementById("addRentalPrice");
    if (priceInput && selectedOpt) {
      priceInput.value = selectedOpt.getAttribute("data-price");
    }
  });

  const todayStr = new Date().toISOString().split("T")[0];
  const dateInput = document.getElementById("addRentalDate");
  if (dateInput && !dateInput.value) {
    dateInput.value = todayStr;
  }
};

window.toggleQuickAddForm = function() {
  const container = document.getElementById("quickAddRentalContainer");
  if (!container) return;
  if (container.style.display === "none" || !container.style.display) {
    container.style.display = "grid";
    const clientInput = document.getElementById("addRentalClient");
    if (clientInput) clientInput.focus();
  } else {
    container.style.display = "none";
  }
};

window.submitNewRentalRecord = function() {
  const clientInput = document.getElementById("addRentalClient");
  const outfitSelect = document.getElementById("addRentalOutfitSelect");
  const priceInput = document.getElementById("addRentalPrice");
  const dateInput = document.getElementById("addRentalDate");

  const client = clientInput?.value.trim();
  const outfit = outfitSelect?.value;
  const rentPrice = parseFloat(priceInput?.value || 0);
  const date = dateInput?.value || new Date().toISOString().split("T")[0];

  if (!client) {
    alert("Por favor ingresa el nombre de la clienta.");
    if (clientInput) clientInput.focus();
    return;
  }

  if (!rentPrice || rentPrice <= 0) {
    alert("Por favor ingresa un monto válido de alquiler.");
    return;
  }

  const selectedOpt = outfitSelect?.options[outfitSelect.selectedIndex];
  const depositPrice = selectedOpt ? parseFloat(selectedOpt.getAttribute("data-deposit") || 15000) : 15000;
  const currentVarCost = getVariableCostUnitSum();

  const newRental = {
    id: Date.now(),
    date: date,
    client: client,
    outfit: outfit,
    rentPrice: rentPrice,
    depositPrice: depositPrice,
    unitVarCost: currentVarCost
  };

  recordedRentals.unshift(newRental);
  localStorage.setItem("dressloop_admin_rentals", JSON.stringify(recordedRentals));

  if (clientInput) clientInput.value = "";
  toggleQuickAddForm();
  renderAdminRentalsTable();
  updateCostCalculations();
  showToast(`👗 Alquiler registrado: "${outfit}" para ${client}`);
};

window.deleteRentalRecord = function(id) {
  if (!confirm("¿Deseas eliminar este registro de alquiler del historial?")) return;

  recordedRentals = recordedRentals.filter(r => r.id !== id);
  localStorage.setItem("dressloop_admin_rentals", JSON.stringify(recordedRentals));
  renderAdminRentalsTable();
  updateCostCalculations();
  showToast("Registro eliminado");
};

function renderAdminRentalsTable() {
  const tbody = document.getElementById("adminRentalsTableBody");
  if (!tbody) return;

  if (recordedRentals.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="9" style="text-align: center; padding: 24px; color: var(--color-vintage-muted);">
          No hay prendas registradas aún. Haz clic en <strong>+ Anotar Nueva Prenda Alquilada</strong> para comenzar.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = recordedRentals.map((item, index) => {
    const grossMargin = item.rentPrice - (item.unitVarCost || 9500);
    return `
      <tr>
        <td><strong>#${recordedRentals.length - index}</strong></td>
        <td>${item.date}</td>
        <td><strong>${item.client}</strong></td>
        <td>${item.outfit}</td>
        <td style="color: var(--color-vintage-olive); font-weight: 600;">${formatPrice(item.rentPrice)}</td>
        <td style="color: var(--color-vintage-terracotta);">${formatPrice(item.depositPrice)}</td>
        <td style="color: var(--color-vintage-muted);">${formatPrice(item.unitVarCost || 9500)}</td>
        <td style="font-weight: 700; color: var(--color-vintage-charcoal);">${formatPrice(grossMargin)}</td>
        <td>
          <button class="btn btn-sm btn-secondary" onclick="deleteRentalRecord(${item.id})" style="padding: 3px 8px; font-size: 0.75rem;" title="Eliminar registro">
            ✕ Borrar
          </button>
        </td>
      </tr>
    `;
  }).join("");
}

// ==========================================================================
// 16. INICIALIZACIÓN GLOBAL
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  populateOutfitDropdown();
  renderCatalog();
  updateCartUI();
  initFaqAccordion();

  // Tabs de categorías
  if (categoryTabs) {
    categoryTabs.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        categoryTabs.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        currentCategory = btn.getAttribute("data-category");
        currentGradSubfilter = null;
        renderCatalog();
      });
    });
  }

  // Selector de Tallas
  if (sizeFilter) {
    sizeFilter.addEventListener("change", (e) => {
      currentSize = e.target.value;
      renderCatalog();
    });
  }

  // Selector de Ordenamiento
  if (sortFilter) {
    sortFilter.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderCatalog();
    });
  }

  // Buscador en catálogo
  if (catalogSearchInput) {
    catalogSearchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderCatalog();
    });
  }

  // Botón reset de filtros
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener("click", () => {
      currentCategory = "todos";
      currentSize = "todas";
      currentSort = "destacados";
      searchQuery = "";
      currentGradSubfilter = null;
      if (catalogSearchInput) catalogSearchInput.value = "";
      if (sizeFilter) sizeFilter.value = "todas";
      if (sortFilter) sortFilter.value = "destacados";
      if (categoryTabs) {
        categoryTabs.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
        const allTab = categoryTabs.querySelector("[data-category='todos']");
        if (allTab) allTab.classList.add("active");
      }
      renderCatalog();
    });
  }

  // Triggers de la Bolsa de Alquiler
  if (cartOpenBtn) cartOpenBtn.addEventListener("click", openCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener("click", closeCart);
  if (cartOverlay) cartOverlay.addEventListener("click", closeCart);

  // Triggers del Modal de Prenda
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeQuickView);
  if (productModal) {
    productModal.addEventListener("click", (e) => {
      if (e.target === productModal) {
        closeQuickView();
      }
    });
  }

  // Triggers de Acceso a Administración y Costos
  if (openAdminCostBtn) {
    openAdminCostBtn.addEventListener("click", () => {
      openAdminAuth();
    });
  }

  // Tecla Escape para cerrar modales
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCart();
      closeQuickView();
      closeAdminAuth();
      closeAdminPanel();
    }
  });

  // Menú Móvil
  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });

    mainNav.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
      });
    });
  }

  // Botón buscador del encabezado
  if (searchTriggerBtn && catalogSearchInput) {
    searchTriggerBtn.addEventListener("click", () => {
      catalogSearchInput.scrollIntoView({ behavior: "smooth", block: "center" });
      catalogSearchInput.focus();
    });
  }

  // Inicializar vista del Probador Virtual
  if (typeof updateMirrorView === "function") {
    updateMirrorView();
  }
});

// ==========================================================================
// 15. PROBADOR VIRTUAL & COLORIMETRÍA INTELIGENTE SEGÚN TONO DE PIEL
// ==========================================================================

const FITTING_SKIN_TONES = {
  clara: {
    id: "clara",
    name: "Piel Clara / Porcelana",
    subtone: "Subtono Frío / Marfil",
    tagLabel: "🌸 Piel Clara",
    paletteBadge: "Porcelana & Joya",
    harmonyScore: "98% Armonía Óptima de Color",
    models: {
      1: "https://images.unsplash.com/photo-1765229292033-ea9f376cc164?auto=format&fit=crop&w=800&q=80",
      2: "https://images.unsplash.com/photo-1776142749959-988d3543a8f5?auto=format&fit=crop&w=800&q=80",
      3: "https://images.unsplash.com/photo-1765870972598-1c9c6af7dbf3?auto=format&fit=crop&w=800&q=80",
      4: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
      5: "https://images.unsplash.com/photo-1673610178158-1c4c5b7e4d98?auto=format&fit=crop&w=800&q=80",
      6: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
      7: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
      8: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
    },
    makeups: {
      m1: {
        img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80",
        label: "Smokey Eyes Frío",
        palette: ["#2D5A46", "#2B2B2B", "#F3D9C9", "#892839"]
      },
      m2: {
        img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=400&q=80",
        label: "Glow Rosa Seda",
        palette: ["#2D5A46", "#F3BFB3", "#FCEAE4", "#D98880"]
      },
      m3: {
        img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80",
        label: "Bronze Dorado Suave",
        palette: ["#2D5A46", "#B36D38", "#E8D4BE", "#8F4C2E"]
      },
      m4: {
        img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
        label: "Carmín Clásico 50s",
        palette: ["#2D5A46", "#A3081E", "#FFFFFF", "#111111"]
      }
    },
    advice: {
      1: "Para <strong>Piel Clara</strong>: El Verde Esmeralda crea un contraste aristocrático de alta costura. El maquillaje Smokey Eyes aporta misterio y profundidad sin eclipsar tu tez.",
      2: "Para <strong>Piel Clara</strong>: El Azul Zafiro despierta los matices fríos como un diamante real. Con delineado cat-eye y sombras satinadas logras un porte principesco.",
      3: "Para <strong>Piel Clara</strong>: El Rubí Imperial es un impacto visual electrizante. El labial carmín suave y rubor melocotón equilibran el dramatismo.",
      4: "Para <strong>Piel Clara</strong>: El Lavanda Vintage es pura ensoñación romántica. Ideal con iluminador perla para recepción de colación o fiesta de 15.",
      5: "Para <strong>Piel Clara</strong>: El Traje Milano Ivory en blanco roto crea un estilismo andrógino audaz. Labios rojos intensos para un look editorial imponente.",
      6: "Para <strong>Piel Clara</strong>: El Satén Champán aporta suavidad líquida. Reflejos dorados sutiles en párpados para irradiar serenidad y lujo.",
      7: "Para <strong>Piel Clara</strong>: El Golden Hour retro genera una calidez envolvente de los años 70. Sombras cobrizas para un aire bohemio chic.",
      8: "Para <strong>Piel Clara</strong>: El Traje Midnight Navy estiliza con distinción solemne. Perfecto para egresadas y recepciones nocturnas."
    }
  },
  triguena: {
    id: "triguena",
    name: "Piel Trigueña / Cálida",
    subtone: "Subtono Dorado / Miel",
    tagLabel: "✨ Piel Trigueña",
    paletteBadge: "Dorado & Canela",
    harmonyScore: "99% Combinación Sunkissed Perfecta",
    models: {
      1: "https://images.unsplash.com/photo-1765229292033-ea9f376cc164?auto=format&fit=crop&w=800&q=80",
      2: "https://images.unsplash.com/photo-1776142749959-988d3543a8f5?auto=format&fit=crop&w=800&q=80",
      3: "https://images.unsplash.com/photo-1765870972598-1c9c6af7dbf3?auto=format&fit=crop&w=800&q=80",
      4: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
      5: "https://images.unsplash.com/photo-1673610178158-1c4c5b7e4d98?auto=format&fit=crop&w=800&q=80",
      6: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
      7: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
      8: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
    },
    makeups: {
      m1: {
        img: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?auto=format&fit=crop&w=400&q=80",
        label: "Smokey Bronce Ahumado",
        palette: ["#2D5A46", "#2B1A2C", "#D9A779", "#A23B4E"]
      },
      m2: {
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
        label: "Glow Piel Melocotón",
        palette: ["#2D5A46", "#E3A899", "#E5B990", "#C86A5E"]
      },
      m3: {
        img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
        label: "Bronze Sunset Intenso",
        palette: ["#2D5A46", "#C47C42", "#D69F7E", "#9A4B29"]
      },
      m4: {
        img: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=400&q=80",
        label: "Rojo Borgoña Cálido",
        palette: ["#2D5A46", "#B01328", "#D9A779", "#111111"]
      }
    },
    advice: {
      1: "Para <strong>Piel Trigueña</strong>: El Verde Esmeralda complementa de forma sublime tus destellos dorados. El Smokey Eyes cobrizo magnifica el bronceado natural.",
      2: "Para <strong>Piel Trigueña</strong>: El Zafiro Royal genera un contraste vibrante y juvenil. Con labios nude terracota e iluminador oro en pómulos brillarás toda la noche.",
      3: "Para <strong>Piel Trigueña</strong>: El Rubí Imperial potencia tu calidez natural. Te sugerimos acabado Glow o labios cereza para un look cautivador.",
      4: "Para <strong>Piel Trigueña</strong>: El Lavanda Vintage resalta el matiz acanelado de la piel, creando un look moderno que rompe esquemas.",
      5: "Para <strong>Piel Trigueña</strong>: El Milano Ivory en piel cálida es sinónimo de glamour contemporáneo. El tono crudo destaca la frescura de tu rostro.",
      6: "Para <strong>Piel Trigueña</strong>: ¡La combinación perfecta del Atelier! El satén Seda Champán se funde con tu tono de piel. El maquillaje Bronze HD culmina un look de alfombra roja.",
      7: "Para <strong>Piel Trigueña</strong>: El Golden Hour potencia tu luz como el atardecer misionero. Piel jugosa y ojos cobrizos para deslumbrar.",
      8: "Para <strong>Piel Trigueña</strong>: El Traje Midnight Navy contrasta con una formalidad audaz y súper favorecedora."
    }
  },
  morena: {
    id: "morena",
    name: "Piel Morena / Profunda",
    subtone: "Subtono Ébano / Canela",
    tagLabel: "👑 Piel Morena",
    paletteBadge: "Oro & Ébano Real",
    harmonyScore: "99% Armonía de Alto Contraste",
    models: {
      1: "https://images.unsplash.com/photo-1765229292033-ea9f376cc164?auto=format&fit=crop&w=800&q=80",
      2: "https://images.unsplash.com/photo-1776142749959-988d3543a8f5?auto=format&fit=crop&w=800&q=80",
      3: "https://images.unsplash.com/photo-1765870972598-1c9c6af7dbf3?auto=format&fit=crop&w=800&q=80",
      4: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
      5: "https://images.unsplash.com/photo-1673610178158-1c4c5b7e4d98?auto=format&fit=crop&w=800&q=80",
      6: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
      7: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
      8: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
    },
    makeups: {
      m1: {
        img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
        label: "Smokey Ébano & Oro",
        palette: ["#2D5A46", "#0F0F0F", "#7E4B31", "#681D2E"]
      },
      m2: {
        img: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=400&q=80",
        label: "Glow Oro Cálido",
        palette: ["#2D5A46", "#C47C68", "#8C563D", "#A64D43"]
      },
      m3: {
        img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
        label: "Bronze Destellos de Gala",
        palette: ["#2D5A46", "#D48B47", "#7E4B31", "#C79A4B"]
      },
      m4: {
        img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
        label: "Ciruela & Carmín Ébano",
        palette: ["#2D5A46", "#880E4F", "#7E4B31", "#000000"]
      }
    },
    advice: {
      1: "Para <strong>Piel Morena</strong>: El Esmeralda Velvet tiene un impacto visual soberbio sobre piel morena. El terciopelo capta los focos y el smokey con destellos oro corona el look.",
      2: "Para <strong>Piel Morena</strong>: ¡La joya absoluta del catálogo! El Azul Zafiro contrasta con riqueza divina contra la piel morena. Resaltarás en todas las fotografías.",
      3: "Para <strong>Piel Morena</strong>: El Rubí Imperial resalta la calidez de tu piel con exuberancia y porte de reina. Labios ciruela o vino tinto completan la obra.",
      4: "Para <strong>Piel Morena</strong>: El Lavanda Vintage genera un contraste dulce y vanguardista que resalta tu tono de piel con originalidad exquisita.",
      5: "Para <strong>Piel Morena</strong>: El Milano Ivory en piel morena es la cúspide de la elegancia. El total look marfil crea un contraste fascinante.",
      6: "Para <strong>Piel Morena</strong>: El Seda Champán resplandece como champaña y oro sobre piel morena. Con maquillaje Bronze HD de alta duración no habrá mirada que no se gire.",
      7: "Para <strong>Piel Morena</strong>: El Golden Hour 70s baña tu silueta en un resplandor dorado rico y envolvente.",
      8: "Para <strong>Piel Morena</strong>: El Traje Midnight Navy otorga una prestancia ejecutiva impecable."
    }
  }
};

/* ==========================================================================
   PROBADOR VIRTUAL CLUETRONIC '95 • CHER'S WARDROBE OS (DAMAS & CABALLEROS)
   Motor de Armonía de Color, Carruseles y Efectos de la película Clueless (1995)
   ========================================================================== */

// --- COLECCIÓN DAMAS / MUJERES ---
const CLUELESS_TOPS = [
  {
    id: "top_tartan",
    name: "Blazer Tartan Clueless Amarillo",
    category: "blazer",
    price: 22000,
    color: "#E8D36A",
    colorName: "Amarillo Tartan Clueless",
    harmonyWith: ["bot_tartan", "bot_palazzo_ivory", "bot_palazzo_champan", "bot_falda_navy"],
    clashWith: ["bot_falda_esmeralda", "bot_falda_rosa"],
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "top_ivory",
    name: "Blazer Milano Ivory Sastrero",
    category: "blazer",
    price: 23000,
    color: "#EAE5DA",
    colorName: "Blanco Marfil / Ivory",
    harmonyWith: ["bot_palazzo_ivory", "bot_tartan", "bot_palazzo_champan", "bot_falda_navy", "bot_falda_esmeralda", "bot_falda_rosa"],
    clashWith: [],
    img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "top_esmeralda",
    name: "Corset Velvet Esmeralda",
    category: "corset",
    price: 19500,
    color: "#2D5A46",
    colorName: "Verde Esmeralda Velvet",
    harmonyWith: ["bot_falda_esmeralda", "bot_palazzo_ivory", "bot_palazzo_champan"],
    clashWith: ["bot_tartan", "bot_falda_rosa"],
    img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "top_champan",
    name: "Top Satén Champán Espalda Cruzada",
    category: "top",
    price: 18500,
    color: "#D9C5A5",
    colorName: "Seda Champán Nude",
    harmonyWith: ["bot_palazzo_champan", "bot_palazzo_ivory", "bot_falda_navy", "bot_falda_esmeralda", "bot_falda_rosa"],
    clashWith: [],
    img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "top_navy",
    name: "Blazer Slim Midnight Navy",
    category: "blazer",
    price: 21500,
    color: "#141E30",
    colorName: "Azul Midnight Navy",
    harmonyWith: ["bot_falda_navy", "bot_palazzo_ivory", "bot_palazzo_champan", "bot_tartan"],
    clashWith: ["bot_falda_esmeralda"],
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "top_rosa",
    name: "Top Rosa Dior Seda Romántica",
    category: "top",
    price: 17500,
    color: "#ECC8CE",
    colorName: "Rosa Pastel Romántico",
    harmonyWith: ["bot_falda_rosa", "bot_palazzo_ivory", "bot_palazzo_champan"],
    clashWith: ["bot_tartan", "bot_falda_esmeralda"],
    img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80"
  }
];

const CLUELESS_BOTTOMS = [
  {
    id: "bot_tartan",
    name: "Falda Plisada Tartan Cher 90s",
    category: "falda",
    price: 17500,
    color: "#E8D36A",
    colorName: "Amarillo Tartan Clueless",
    harmonyWith: ["top_tartan", "top_ivory", "top_navy"],
    clashWith: ["top_esmeralda", "top_rosa"],
    img: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bot_palazzo_ivory",
    name: "Pantalón Palazzo Milano Ivory",
    category: "pantalon",
    price: 18000,
    color: "#EAE5DA",
    colorName: "Blanco Marfil / Ivory",
    harmonyWith: ["top_ivory", "top_tartan", "top_esmeralda", "top_champan", "top_navy", "top_rosa"],
    clashWith: [],
    img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bot_falda_esmeralda",
    name: "Falda Tubo Velvet Esmeralda",
    category: "falda",
    price: 16500,
    color: "#2D5A46",
    colorName: "Verde Esmeralda Velvet",
    harmonyWith: ["top_esmeralda", "top_ivory", "top_champan"],
    clashWith: ["top_tartan", "top_rosa", "top_navy"],
    img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bot_palazzo_champan",
    name: "Palazzo Satén Champán Líquido",
    category: "pantalon",
    price: 19500,
    color: "#D9C5A5",
    colorName: "Seda Champán Nude",
    harmonyWith: ["top_champan", "top_ivory", "top_esmeralda", "top_navy", "top_rosa", "top_tartan"],
    clashWith: [],
    img: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bot_falda_navy",
    name: "Pantalón Sastrero Midnight Navy",
    category: "pantalon",
    price: 17500,
    color: "#141E30",
    colorName: "Azul Midnight Navy",
    harmonyWith: ["top_navy", "top_ivory", "top_champan", "top_tartan"],
    clashWith: ["top_esmeralda"],
    img: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bot_falda_rosa",
    name: "Falda Larga Plisada Rosa Seda",
    category: "falda",
    price: 18000,
    color: "#ECC8CE",
    colorName: "Rosa Pastel Romántico",
    harmonyWith: ["top_rosa", "top_ivory", "top_champan"],
    clashWith: ["top_tartan", "top_esmeralda"],
    img: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=600&q=80"
  }
];

const CLUELESS_GOWNS = [
  { id: 1, name: "Vestido Esmeralda Velvet", price: 34500, color: "#2D5A46", icon: "👗", bestMakeup: ["m1", "m3"], clashMakeup: ["m4"] },
  { id: 2, name: "Vestido Zafiro Royal", price: 41000, color: "#1A3B6B", icon: "👗", bestMakeup: ["m1", "m2"], clashMakeup: [] },
  { id: 3, name: "Vestido Rubí Imperial", price: 38000, color: "#7B1E2B", icon: "👗", bestMakeup: ["m4", "m2"], clashMakeup: ["m3"] },
  { id: 4, name: "Vestido Lavanda Vintage", price: 36000, color: "#8F7A99", icon: "👗", bestMakeup: ["m2", "m1"], clashMakeup: ["m4"] },
  { id: 5, name: "Traje Milano Ivory Completo", price: 39000, color: "#EAE5DA", icon: "👔", bestMakeup: ["m4", "m1", "m2", "m3"], clashMakeup: [] },
  { id: 6, name: "Vestido Seda Champán", price: 45000, color: "#D9C5A5", icon: "👗", bestMakeup: ["m3", "m2"], clashMakeup: [] },
  { id: 7, name: "Vestido Golden Hour 70s", price: 30000, color: "#D49A3D", icon: "👗", bestMakeup: ["m3", "m1"], clashMakeup: ["m4"] },
  { id: 8, name: "Traje Slim Midnight Navy", price: 36000, color: "#141E30", icon: "👔", bestMakeup: ["m1", "m3"], clashMakeup: [] }
];

const FITTING_MAKEUPS_DATA = [
  { id: "m1", name: "Glam Smokey Eyes", price: 25000, icon: "💄" },
  { id: "m2", name: "Glow Natural Romántico", price: 25000, icon: "💄" },
  { id: "m3", name: "Graduación Bronze HD", price: 32000, icon: "🎓" },
  { id: "m4", name: "Vintage Hollywood Red", price: 32000, icon: "💋" }
];

// --- COLECCIÓN CABALLEROS / HOMBRES ---
const CLUELESS_MEN_TOPS = [
  {
    id: "top_m_navy",
    name: "Blazer Slim Midnight Navy Solapa Raso",
    category: "blazer",
    price: 22000,
    color: "#141E30",
    colorName: "Azul Midnight Navy",
    harmonyWith: ["bot_m_navy", "bot_m_black", "bot_m_ivory"],
    clashWith: ["bot_m_camel"],
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "top_m_black",
    name: "Saco Smoking Black Tie Solapa Chal",
    category: "smoking",
    price: 25000,
    color: "#0B0B0C",
    colorName: "Negro Black Tie",
    harmonyWith: ["bot_m_black", "bot_m_navy"],
    clashWith: ["bot_m_camel", "bot_m_ivory"],
    img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "top_m_ivory",
    name: "Blazer Milano Ivory Ceremonia & Gala",
    category: "blazer",
    price: 23500,
    color: "#EAE5DA",
    colorName: "Blanco Marfil / Ivory",
    harmonyWith: ["bot_m_black", "bot_m_navy", "bot_m_ivory", "bot_m_camel"],
    clashWith: [],
    img: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "top_m_chaleco",
    name: "Chaleco Sastrero Gris & Camisa Cuello Francés",
    category: "chaleco",
    price: 18500,
    color: "#A8A8A8",
    colorName: "Gris Perla Sastrero",
    harmonyWith: ["bot_m_black", "bot_m_navy", "bot_m_ivory"],
    clashWith: ["bot_m_camel"],
    img: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "top_m_camel",
    name: "Blazer Egresados Camel Tostado & Pañuelo",
    category: "blazer",
    price: 21000,
    color: "#B38656",
    colorName: "Camel Tostado",
    harmonyWith: ["bot_m_camel", "bot_m_black", "bot_m_navy"],
    clashWith: [],
    img: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "top_m_vino",
    name: "Saco Velvet Borgoña Royal Edición Gala",
    category: "smoking",
    price: 24000,
    color: "#5A1224",
    colorName: "Borgoña Velvet",
    harmonyWith: ["bot_m_black", "bot_m_navy"],
    clashWith: ["bot_m_camel", "bot_m_ivory"],
    img: "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?auto=format&fit=crop&w=600&q=80"
  }
];

const CLUELESS_MEN_BOTTOMS = [
  {
    id: "bot_m_navy",
    name: "Pantalón Sastrero Slim Midnight Navy",
    category: "pantalon",
    price: 17500,
    color: "#141E30",
    colorName: "Azul Midnight Navy",
    harmonyWith: ["top_m_navy", "top_m_black", "top_m_ivory", "top_m_chaleco", "top_m_camel", "top_m_vino"],
    clashWith: [],
    img: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bot_m_black",
    name: "Pantalón Smoking Black Tie con Galón Raso",
    category: "pantalon",
    price: 18500,
    color: "#0B0B0C",
    colorName: "Negro Black Tie",
    harmonyWith: ["top_m_black", "top_m_navy", "top_m_ivory", "top_m_chaleco", "top_m_vino", "top_m_camel"],
    clashWith: [],
    img: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bot_m_ivory",
    name: "Pantalón Sastrero Milano Ivory",
    category: "pantalon",
    price: 17500,
    color: "#EAE5DA",
    colorName: "Blanco Marfil / Ivory",
    harmonyWith: ["top_m_ivory", "top_m_navy", "top_m_chaleco"],
    clashWith: ["top_m_black", "top_m_vino"],
    img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bot_m_camel",
    name: "Pantalón Tostado Camel Egresados",
    category: "pantalon",
    price: 16500,
    color: "#B38656",
    colorName: "Camel Tostado",
    harmonyWith: ["top_m_camel", "top_m_ivory", "top_m_navy"],
    clashWith: ["top_m_black", "top_m_vino"],
    img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=600&q=80"
  }
];

const CLUELESS_MEN_SUITS = [
  { id: 1, name: "Traje Slim Midnight Navy Completo", price: 36000, color: "#141E30", icon: "👔", bestGrooming: ["gh1", "gh2", "gh4"] },
  { id: 2, name: "Smoking Gala Black Tie Solapa Chal", price: 42000, color: "#0B0B0C", icon: "🎩", bestGrooming: ["gh4", "gh1"] },
  { id: 3, name: "Traje Sastrero Milano Ivory Ceremonia", price: 39000, color: "#EAE5DA", icon: "👔", bestGrooming: ["gh2", "gh3", "gh4"] },
  { id: 4, name: "Traje Colación Camel Tostado & Chaleco", price: 34000, color: "#B38656", icon: "👔", bestGrooming: ["gh3", "gh1"] },
  { id: 5, name: "Smoking Velvet Borgoña Imperial", price: 44000, color: "#5A1224", icon: "🎩", bestGrooming: ["gh4", "gh2"] }
];

const FITTING_MEN_GROOMING_DATA = [
  { id: "gh1", name: "Barba Perfilada & Piel Mate HD", price: 18000, icon: "🧔", promoPrice: 10800, img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80" },
  { id: "gh2", name: "Peinado Pompadour & Texturizado Gala", price: 16000, icon: "✂️", promoPrice: 9600, img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" },
  { id: "gh3", name: "Estilismo Egresado Anti-Brillo", price: 15000, icon: "🎓", promoPrice: 9000, img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80" },
  { id: "gh4", name: "Total Grooming Black Tie (Barba + Peinado + Piel)", price: 24000, icon: "🎩", promoPrice: 14400, img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" }
];

const MEN_SKIN_MODELS = {
  clara: {
    name: "Piel Clara / Porcelana",
    suits: {
      1: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      2: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
      3: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80",
      4: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=800&q=80",
      5: "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?auto=format&fit=crop&w=800&q=80"
    },
    grooming: {
      gh1: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
      gh2: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      gh3: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
      gh4: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80"
    },
    advice: "Para <strong>Piel Clara masculina</strong>: El contraste con trajes Midnight Navy y solapas de raso realza una compostura aristocrática. El grooming mate elimina reflejos de flash en fotografías."
  },
  triguena: {
    name: "Piel Trigueña / Cálida",
    suits: {
      1: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      2: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
      3: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80",
      4: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=800&q=80",
      5: "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?auto=format&fit=crop&w=800&q=80"
    },
    grooming: {
      gh1: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
      gh2: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      gh3: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
      gh4: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80"
    },
    advice: "Para <strong>Piel Trigueña masculina</strong>: Los trajes en tonos marfil, camel tostado y negro tuxedo destacan con un porte moderno y distinguido. El perfilado de barba otorga líneas limpias y definidas."
  },
  morena: {
    name: "Piel Morena / Profunda",
    suits: {
      1: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      2: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
      3: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80",
      4: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=800&q=80",
      5: "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?auto=format&fit=crop&w=800&q=80"
    },
    grooming: {
      gh1: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      gh2: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      gh3: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
      gh4: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
    },
    advice: "Para <strong>Piel Morena masculina</strong>: El blanco roto Milano Ivory y el smoking Black Tie generan un contraste electrizante de máxima gala. El acabado mate en piel realza una textura perfecta."
  }
};

// Variables de Estado Clueless
let cluelessGender = "mujeres"; // 'mujeres' | 'hombres'
let cluelessMode = "mix"; // 'mix' | 'gown'
let currentTopIdx = 0;
let currentBottomIdx = 0;
let currentGownIdx = 0;
let currentMenTopIdx = 0;
let currentMenBottomIdx = 0;
let currentMenSuitIdx = 0;
let currentFittingTone = "clara";
let currentFittingMakeupId = "m1";
let currentMenGroomingId = "gh1";
let cluelessSoundEnabled = true;
let cluelessAudioCtx = null;
const PROMO_TOTAL_LOOK_DISCOUNT_PCT = 0.40;

// Generador de audio Web Audio API (Efectos sonoros 90s)
function playCluelessSound(type) {
  if (!cluelessSoundEnabled) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    if (!cluelessAudioCtx) cluelessAudioCtx = new AudioContext();
    if (cluelessAudioCtx.state === "suspended") cluelessAudioCtx.resume();

    const now = cluelessAudioCtx.currentTime;
    if (type === "match") {
      const freqs = [523.25, 659.25, 783.99];
      freqs.forEach((freq, idx) => {
        const osc = cluelessAudioCtx.createOscillator();
        const gain = cluelessAudioCtx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.09);
        gain.gain.setValueAtTime(0.08, now + idx * 0.09);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.09 + 0.32);
        osc.connect(gain);
        gain.connect(cluelessAudioCtx.destination);
        osc.start(now + idx * 0.09);
        osc.stop(now + idx * 0.09 + 0.32);
      });
    } else if (type === "mismatch") {
      const freqs = [311.13, 261.63];
      freqs.forEach((freq, idx) => {
        const osc = cluelessAudioCtx.createOscillator();
        const gain = cluelessAudioCtx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + idx * 0.12);
        gain.gain.setValueAtTime(0.08, now + idx * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + 0.22);
        osc.connect(gain);
        gain.connect(cluelessAudioCtx.destination);
        osc.start(now + idx * 0.12);
        osc.stop(now + idx * 0.12 + 0.22);
      });
    } else if (type === "shuffle") {
      const osc = cluelessAudioCtx.createOscillator();
      const gain = cluelessAudioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.18);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      osc.connect(gain);
      gain.connect(cluelessAudioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.18);
    }
  } catch (e) {
    // Si el navegador bloquea audio antes del primer clic
  }
}

window.toggleCluelessSound = function() {
  cluelessSoundEnabled = !cluelessSoundEnabled;
  const icon = document.getElementById("cluelessSoundIcon");
  const label = document.getElementById("cluelessSoundLabel");
  if (icon && label) {
    icon.textContent = cluelessSoundEnabled ? "🔊" : "🔇";
    label.textContent = cluelessSoundEnabled ? "FX: ON" : "FX: OFF";
  }
  showToast(cluelessSoundEnabled ? "🔊 Sonido de Probador activado" : "🔇 Sonido de Probador silenciado");
};

// Cambio de Género: Damas (Mujeres) vs Caballeros (Hombres)
window.setCluelessGender = function(gender) {
  cluelessGender = gender;

  const btnW = document.getElementById("genderBtnMujeres");
  const btnM = document.getElementById("genderBtnHombres");
  if (btnW && btnM) {
    btnW.classList.toggle("active", gender === "mujeres");
    btnM.classList.toggle("active", gender === "hombres");
  }

  // Modificar etiquetas de la barra de modos
  const labelMix = document.getElementById("btnModeMixLabel");
  const labelGown = document.getElementById("btnModeGownLabel");
  if (labelMix && labelGown) {
    if (gender === "mujeres") {
      labelMix.textContent = "👚 Mix & Match (Tops & Faldas)";
      labelGown.textContent = "👗 Vestidos de Gala & Colación";
    } else {
      labelMix.textContent = "👔 Mix & Match (Blazers & Pantalones)";
      labelGown.textContent = "🎩 Trajes & Smokings Completos";
    }
  }

  // Modificar etiquetas de las ranuras del monitor
  const slotTop = document.getElementById("cluelessSlotTopBadge");
  const slotBot = document.getElementById("cluelessSlotBottomBadge");
  const slotFull = document.getElementById("cluelessSlotFullBadge");
  if (slotTop && slotBot && slotFull) {
    if (gender === "mujeres") {
      slotTop.textContent = "PRENDA SUPERIOR";
      slotBot.textContent = "PRENDA INFERIOR";
      slotFull.textContent = "VESTIDO DE GALA COMPLETO";
    } else {
      slotTop.textContent = "SACO / BLAZER MASCULINO";
      slotBot.textContent = "PANTALÓN SASTRERO";
      slotFull.textContent = "TRAJE / SMOKING COMPLETO";
    }
  }

  // Modificar Paso 2: Maquillaje vs Grooming
  const step2Title = document.getElementById("cluelessStep2Title");
  const step2Desc = document.getElementById("cluelessStep2Desc");
  const gridW = document.getElementById("cluelessMakeupGridWomen");
  const gridM = document.getElementById("cluelessGroomingGridMen");

  if (step2Title && step2Desc) {
    if (gender === "mujeres") {
      step2Title.textContent = "Estilo de Maquillaje Profesional";
      step2Desc.innerHTML = 'Incluido en la Promo Total Look con <strong>40% OFF</strong>:';
      if (gridW) gridW.style.display = "grid";
      if (gridM) gridM.style.display = "none";
    } else {
      step2Title.textContent = "Grooming & Estilismo Masculino";
      step2Desc.innerHTML = 'Perfilado, peinado y acabado mate con <strong>40% OFF</strong>:';
      if (gridW) gridW.style.display = "none";
      if (gridM) gridM.style.display = "grid";
    }
  }

  // Modificar Título de Asesoría
  const advTitle = document.getElementById("cluelessAdvisorTitle");
  if (advTitle) {
    advTitle.textContent = gender === "mujeres"
      ? "CHER'S COLORIMETRY ADVICE (DREESLOOP ATELIER):"
      : "GENTLEMAN'S TAILORING ADVICE (DREESLOOP ATELIER):";
  }

  // Modificar etiquetas de descuento en el resumen
  const discTag = document.getElementById("summaryDiscountTag");
  const discLabel = document.getElementById("summaryDiscountLabel");
  if (discTag && discLabel) {
    discTag.textContent = gender === "mujeres" ? "40% OFF en Maquillaje" : "40% OFF en Grooming";
    discLabel.textContent = gender === "mujeres"
      ? "🎁 Bonificación Promo Total Look (40% OFF Maquillaje)"
      : "🎁 Bonificación Promo Total Look (40% OFF Grooming)";
  }

  updateCluelessView();
  showToast(gender === "mujeres" ? "👩 Colección Damas / Mujeres activada" : "👨 Colección Caballeros / Hombres activada");
};

window.setCluelessMode = function(mode) {
  cluelessMode = mode;
  const btnMix = document.getElementById("btnModeMix");
  const btnGown = document.getElementById("btnModeGown");
  const stageSplit = document.getElementById("cluelessStageSplit");
  const stageGown = document.getElementById("cluelessStageGown");

  if (mode === "mix") {
    if (btnMix) btnMix.classList.add("active");
    if (btnGown) btnGown.classList.remove("active");
    if (stageSplit) stageSplit.style.display = "flex";
    if (stageGown) stageGown.style.display = "none";
  } else {
    if (btnMix) btnMix.classList.remove("active");
    if (btnGown) btnGown.classList.add("active");
    if (stageSplit) stageSplit.style.display = "none";
    if (stageGown) stageGown.style.display = "flex";
  }

  updateCluelessView();
};

window.browseCluelessPart = function(part, dir) {
  if (cluelessGender === "mujeres") {
    if (part === "top") {
      currentTopIdx = (currentTopIdx + dir + CLUELESS_TOPS.length) % CLUELESS_TOPS.length;
    } else if (part === "bottom") {
      currentBottomIdx = (currentBottomIdx + dir + CLUELESS_BOTTOMS.length) % CLUELESS_BOTTOMS.length;
    } else if (part === "gown") {
      currentGownIdx = (currentGownIdx + dir + CLUELESS_GOWNS.length) % CLUELESS_GOWNS.length;
    }
  } else {
    if (part === "top") {
      currentMenTopIdx = (currentMenTopIdx + dir + CLUELESS_MEN_TOPS.length) % CLUELESS_MEN_TOPS.length;
    } else if (part === "bottom") {
      currentMenBottomIdx = (currentMenBottomIdx + dir + CLUELESS_MEN_BOTTOMS.length) % CLUELESS_MEN_BOTTOMS.length;
    } else if (part === "gown") {
      currentMenSuitIdx = (currentMenSuitIdx + dir + CLUELESS_MEN_SUITS.length) % CLUELESS_MEN_SUITS.length;
    }
  }
  updateCluelessView();
};

window.shuffleCluelessOutfit = function() {
  playCluelessSound("shuffle");

  if (cluelessGender === "mujeres") {
    if (cluelessMode === "mix") {
      const randomTopIdx = Math.floor(Math.random() * CLUELESS_TOPS.length);
      const top = CLUELESS_TOPS[randomTopIdx];
      const matchingBottoms = CLUELESS_BOTTOMS.filter((b) => top.harmonyWith.includes(b.id));
      const chosenBottom = matchingBottoms.length > 0
        ? matchingBottoms[Math.floor(Math.random() * matchingBottoms.length)]
        : CLUELESS_BOTTOMS[0];

      currentTopIdx = randomTopIdx;
      currentBottomIdx = CLUELESS_BOTTOMS.findIndex((b) => b.id === chosenBottom.id);
    } else {
      currentGownIdx = Math.floor(Math.random() * CLUELESS_GOWNS.length);
    }

    const randomMakeup = FITTING_MAKEUPS_DATA[Math.floor(Math.random() * FITTING_MAKEUPS_DATA.length)];
    currentFittingMakeupId = randomMakeup.id;
    document.querySelectorAll("#cluelessMakeupGridWomen .clueless-mu-card").forEach((card) => {
      card.classList.toggle("active", card.getAttribute("data-id") === currentFittingMakeupId);
    });
    showToast("✨ ¡DRESS ME! Cher encontró un look femenino soñado para ti ✨");
  } else {
    if (cluelessMode === "mix") {
      const randomTopIdx = Math.floor(Math.random() * CLUELESS_MEN_TOPS.length);
      const top = CLUELESS_MEN_TOPS[randomTopIdx];
      const matchingBottoms = CLUELESS_MEN_BOTTOMS.filter((b) => top.harmonyWith.includes(b.id));
      const chosenBottom = matchingBottoms.length > 0
        ? matchingBottoms[Math.floor(Math.random() * matchingBottoms.length)]
        : CLUELESS_MEN_BOTTOMS[0];

      currentMenTopIdx = randomTopIdx;
      currentMenBottomIdx = CLUELESS_MEN_BOTTOMS.findIndex((b) => b.id === chosenBottom.id);
    } else {
      currentMenSuitIdx = Math.floor(Math.random() * CLUELESS_MEN_SUITS.length);
    }

    const randomGroom = FITTING_MEN_GROOMING_DATA[Math.floor(Math.random() * FITTING_MEN_GROOMING_DATA.length)];
    currentMenGroomingId = randomGroom.id;
    document.querySelectorAll("#cluelessGroomingGridMen .clueless-mu-card").forEach((card) => {
      card.classList.toggle("active", card.getAttribute("data-id") === currentMenGroomingId);
    });
    showToast("🎩 ¡DAPPER LOOK! Combinación masculina sastrera lista ✨");
  }

  updateCluelessView();
};

window.selectSkinTone = function(toneId, btn) {
  if (!FITTING_SKIN_TONES[toneId]) return;
  currentFittingTone = toneId;

  document.querySelectorAll(".clueless-skin-btn").forEach((card) => {
    card.classList.remove("active");
  });
  if (btn) btn.classList.add("active");

  const toneData = FITTING_SKIN_TONES[toneId];
  if (toneData && toneData.makeups) {
    const m1Img = document.getElementById("chipImgM1");
    const m2Img = document.getElementById("chipImgM2");
    const m3Img = document.getElementById("chipImgM3");
    const m4Img = document.getElementById("chipImgM4");
    if (m1Img && toneData.makeups.m1) m1Img.src = toneData.makeups.m1.img;
    if (m2Img && toneData.makeups.m2) m2Img.src = toneData.makeups.m2.img;
    if (m3Img && toneData.makeups.m3) m3Img.src = toneData.makeups.m3.img;
    if (m4Img && toneData.makeups.m4) m4Img.src = toneData.makeups.m4.img;
  }

  // Actualizar miniaturas masculinas de grooming
  const menToneData = MEN_SKIN_MODELS[toneId];
  if (menToneData && menToneData.grooming) {
    const gh1Img = document.getElementById("chipImgGH1");
    const gh2Img = document.getElementById("chipImgGH2");
    const gh3Img = document.getElementById("chipImgGH3");
    const gh4Img = document.getElementById("chipImgGH4");
    if (gh1Img && menToneData.grooming.gh1) gh1Img.src = menToneData.grooming.gh1;
    if (gh2Img && menToneData.grooming.gh2) gh2Img.src = menToneData.grooming.gh2;
    if (gh3Img && menToneData.grooming.gh3) gh3Img.src = menToneData.grooming.gh3;
    if (gh4Img && menToneData.grooming.gh4) gh4Img.src = menToneData.grooming.gh4;
  }

  updateCluelessView();
};

window.selectFittingMakeup = function(id, btn) {
  if (cluelessGender === "mujeres") {
    currentFittingMakeupId = id;
    document.querySelectorAll("#cluelessMakeupGridWomen .clueless-mu-card").forEach((chip) => {
      chip.classList.remove("active");
    });
  } else {
    currentMenGroomingId = id;
    document.querySelectorAll("#cluelessGroomingGridMen .clueless-mu-card").forEach((chip) => {
      chip.classList.remove("active");
    });
  }
  if (btn) btn.classList.add("active");

  updateCluelessView();
};

window.setMirrorLighting = function(mode) {
  document.querySelectorAll(".clueless-light-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-light") === mode);
  });

  const filter = document.getElementById("cluelessLightOverlay");
  if (filter) {
    filter.className = "clueless-light-overlay filter-" + mode;
  }
};

window.updateCluelessView = function() {
  const toneData = FITTING_SKIN_TONES[currentFittingTone] || FITTING_SKIN_TONES["clara"];
  const menToneData = MEN_SKIN_MODELS[currentFittingTone] || MEN_SKIN_MODELS["clara"];

  let isMatch = true;
  let matchTitle = "MATCH!";
  let matchQuote = "";
  let piecesTitle = "";
  let serviceTitle = "";
  let outfitPrice = 0;
  let servicePrice = 0;
  let paletteColors = [];

  const faceImg = document.getElementById("cluelessMakeupFaceImg");
  const bubbleName = document.getElementById("cluelessMakeupBubbleName");
  const bubbleTone = document.getElementById("cluelessMakeupBubbleTone");

  if (cluelessGender === "mujeres") {
    // --- LÓGICA MUJERES ---
    const makeup = FITTING_MAKEUPS_DATA.find((m) => m.id === currentFittingMakeupId) || FITTING_MAKEUPS_DATA[0];
    const toneMakeup = toneData.makeups[currentFittingMakeupId] || toneData.makeups["m1"];
    serviceTitle = makeup.name;
    servicePrice = makeup.price;

    if (faceImg && toneMakeup) {
      faceImg.src = toneMakeup.img;
      faceImg.alt = `${makeup.name} para ${toneData.name}`;
    }
    if (bubbleName) bubbleName.textContent = `💄 ${makeup.name}`;
    if (bubbleTone) bubbleTone.textContent = toneData.name;

    if (cluelessMode === "mix") {
      const top = CLUELESS_TOPS[currentTopIdx];
      const bottom = CLUELESS_BOTTOMS[currentBottomIdx];
      outfitPrice = top.price + bottom.price;
      piecesTitle = `${top.name} + ${bottom.name}`;

      const topImg = document.getElementById("cluelessTopImg");
      if (topImg) { topImg.src = top.img; topImg.alt = top.name; }
      const topName = document.getElementById("cluelessTopName");
      if (topName) topName.textContent = top.name;
      const topPrice = document.getElementById("cluelessTopPrice");
      if (topPrice) topPrice.textContent = formatPrice(top.price);

      const bottomImg = document.getElementById("cluelessBottomImg");
      if (bottomImg) { bottomImg.src = bottom.img; bottomImg.alt = bottom.name; }
      const bottomName = document.getElementById("cluelessBottomName");
      if (bottomName) bottomName.textContent = bottom.name;
      const bottomPrice = document.getElementById("cluelessBottomPrice");
      if (bottomPrice) bottomPrice.textContent = formatPrice(bottom.price);

      const harmonious = top.harmonyWith.includes(bottom.id);
      const clashing = (top.clashWith && top.clashWith.includes(bottom.id)) || (bottom.clashWith && bottom.clashWith.includes(top.id));

      if (harmonious && !clashing) {
        isMatch = true;
        matchTitle = "MATCH!";
        if (top.id === "top_tartan" && bottom.id === "bot_tartan") {
          matchQuote = `"¡Totally Buggin'! ¡Es el icónico Total Look Tartan Clueless! Armonía 100% de alta costura para tu tono de piel."`;
        } else {
          matchQuote = `"¡It's a MATCH! Cher aprobaría este look. Los tonos ${top.colorName} y ${bottom.colorName} armonizan a la perfección con tu tez."`;
        }
      } else {
        isMatch = false;
        matchTitle = "MIS-MATCH!";
        matchQuote = `"¡Ugh, As If! Esta combinación desentona por contraste de paleta. Haz clic en las flechas para encontrar el match ideal."`;
      }

      paletteColors = [top.color, bottom.color, toneMakeup.palette ? toneMakeup.palette[2] : "#F3D9C9", toneMakeup.palette ? toneMakeup.palette[3] : "#892839"];
    } else {
      const gown = CLUELESS_GOWNS[currentGownIdx];
      outfitPrice = gown.price;
      piecesTitle = gown.name;

      const gownImg = document.getElementById("cluelessGownImg");
      if (gownImg) {
        const newSrc = toneData.models[gown.id] || toneData.models[1];
        gownImg.src = newSrc;
        gownImg.alt = `${gown.name} en ${toneData.name}`;
      }
      const gownName = document.getElementById("cluelessGownName");
      if (gownName) gownName.textContent = gown.name;
      const gownPrice = document.getElementById("cluelessGownPrice");
      if (gownPrice) gownPrice.textContent = formatPrice(gown.price);

      if (gown.clashMakeup && gown.clashMakeup.includes(currentFittingMakeupId)) {
        isMatch = false;
        matchTitle = "MIS-MATCH!";
        matchQuote = `"¡Mis-Match de Maquillaje! El labial o sombra compite con la riqueza del vestido. ¡Prueba otro estilo!"`;
      } else {
        isMatch = true;
        matchTitle = "MATCH!";
        matchQuote = `"¡MATCH de Alta Costura! ${gown.name} y ${makeup.name} se complementan con un 100% de armonía visual."`;
      }

      paletteColors = [gown.color, toneMakeup.palette ? toneMakeup.palette[1] : "#2B2B2B", toneMakeup.palette ? toneMakeup.palette[2] : "#F3D9C9", toneMakeup.palette ? toneMakeup.palette[3] : "#892839"];
    }
  } else {
    // --- LÓGICA HOMBRES ---
    const groom = FITTING_MEN_GROOMING_DATA.find((g) => g.id === currentMenGroomingId) || FITTING_MEN_GROOMING_DATA[0];
    serviceTitle = groom.name;
    servicePrice = groom.price;

    if (faceImg) {
      const groomImg = (menToneData.grooming && menToneData.grooming[currentMenGroomingId]) || groom.img;
      faceImg.src = groomImg;
      faceImg.alt = `${groom.name} para ${menToneData.name}`;
    }
    if (bubbleName) bubbleName.textContent = `🧔 ${groom.name}`;
    if (bubbleTone) bubbleTone.textContent = menToneData.name;

    if (cluelessMode === "mix") {
      const top = CLUELESS_MEN_TOPS[currentMenTopIdx];
      const bottom = CLUELESS_MEN_BOTTOMS[currentMenBottomIdx];
      outfitPrice = top.price + bottom.price;
      piecesTitle = `${top.name} + ${bottom.name}`;

      const topImg = document.getElementById("cluelessTopImg");
      if (topImg) { topImg.src = top.img; topImg.alt = top.name; }
      const topName = document.getElementById("cluelessTopName");
      if (topName) topName.textContent = top.name;
      const topPrice = document.getElementById("cluelessTopPrice");
      if (topPrice) topPrice.textContent = formatPrice(top.price);

      const bottomImg = document.getElementById("cluelessBottomImg");
      if (bottomImg) { bottomImg.src = bottom.img; bottomImg.alt = bottom.name; }
      const bottomName = document.getElementById("cluelessBottomName");
      if (bottomName) bottomName.textContent = bottom.name;
      const bottomPrice = document.getElementById("cluelessBottomPrice");
      if (bottomPrice) bottomPrice.textContent = formatPrice(bottom.price);

      const harmonious = top.harmonyWith.includes(bottom.id);
      const clashing = (top.clashWith && top.clashWith.includes(bottom.id)) || (bottom.clashWith && bottom.clashWith.includes(top.id));

      if (harmonious && !clashing) {
        isMatch = true;
        matchTitle = "MATCH!";
        matchQuote = `"¡Distinción Sastrera Impecable! El corte de ${top.name} con ${bottom.name} proyecta un porte masculino sofisticado para galas."`;
      } else {
        isMatch = false;
        matchTitle = "MIS-MATCH!";
        matchQuote = `"¡Alerta de Estilo Sastrero! Este saco y pantalón desentonan en corte o paleta. Usa las flechas para un ensamble impecable."`;
      }

      paletteColors = [top.color, bottom.color, "#D9C5A5", "#1B1B1B"];
    } else {
      const suit = CLUELESS_MEN_SUITS[currentMenSuitIdx];
      outfitPrice = suit.price;
      piecesTitle = suit.name;

      const gownImg = document.getElementById("cluelessGownImg");
      if (gownImg) {
        const newSrc = (menToneData.suits && menToneData.suits[suit.id]) || suit.id;
        gownImg.src = (menToneData.suits && menToneData.suits[suit.id]) ? menToneData.suits[suit.id] : "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80";
        gownImg.alt = `${suit.name} para ${menToneData.name}`;
      }
      const gownName = document.getElementById("cluelessGownName");
      if (gownName) gownName.textContent = suit.name;
      const gownPrice = document.getElementById("cluelessGownPrice");
      if (gownPrice) gownPrice.textContent = formatPrice(suit.price);

      isMatch = true;
      matchTitle = "MATCH!";
      matchQuote = `"¡Black Tie de Excelencia! ${suit.name} combinado con ${groom.name} garantiza presencia de gala en cualquier celebración."`;

      paletteColors = [suit.color, "#0A0A0A", "#EAE5DA", "#C79A4B"];
    }
  }

  // 2. Actualizar el Cartel Neón MATCH! vs MIS-MATCH!
  const matchBox = document.getElementById("cluelessMatchBox");
  const matchTitleEl = document.getElementById("cluelessMatchTitle");
  const matchQuoteEl = document.getElementById("cluelessMatchQuote");

  if (matchBox && matchTitleEl && matchQuoteEl) {
    matchBox.className = "clueless-match-box " + (isMatch ? "match-box-success" : "match-box-mismatch");
    matchTitleEl.innerHTML = `
      <span class="sparkle-left">${isMatch ? "✨" : "❌"}</span>
      <span class="sign-text">${matchTitle}</span>
      <span class="sparkle-right">${isMatch ? "✨" : "❌"}</span>
    `;
    matchQuoteEl.textContent = matchQuote;
    playCluelessSound(isMatch ? "match" : "mismatch");
  }

  // 3. Tiras de Estado y Asesoría
  const activeTonePill = document.getElementById("cluelessActiveTonePill");
  if (activeTonePill) {
    activeTonePill.textContent = cluelessGender === "mujeres" ? toneData.tagLabel : `👔 ${menToneData.name}`;
  }

  const activePiecesPill = document.getElementById("cluelessActivePiecesPill");
  if (activePiecesPill) {
    activePiecesPill.textContent = `${cluelessGender === "mujeres" ? "👗" : "👔"} Look: ${piecesTitle}`;
  }

  const activeMakeupPill = document.getElementById("cluelessActiveMakeupPill");
  if (activeMakeupPill) {
    activeMakeupPill.textContent = `${cluelessGender === "mujeres" ? "💄" : "🧔"} ${serviceTitle}`;
  }

  const adviceEl = document.getElementById("cluelessAdviceText");
  if (adviceEl) {
    if (cluelessGender === "mujeres") {
      if (cluelessMode === "mix") {
        const top = CLUELESS_TOPS[currentTopIdx];
        const bottom = CLUELESS_BOTTOMS[currentBottomIdx];
        adviceEl.innerHTML = `Para <strong>${toneData.name}</strong>: El ensamble de ${top.name} y ${bottom.name} junto al maquillaje ${serviceTitle} proyecta un porte cosmopolita inspirado en los 90s.`;
      } else {
        const gown = CLUELESS_GOWNS[currentGownIdx];
        if (toneData.advice && toneData.advice[gown.id]) {
          adviceEl.innerHTML = toneData.advice[gown.id];
        }
      }
    } else {
      if (menToneData.advice) {
        adviceEl.innerHTML = menToneData.advice;
      }
    }
  }

  // 4. Muestras de la Paleta Cosmética
  const dotsContainer = document.getElementById("cluelessPaletteDots");
  if (dotsContainer && paletteColors.length >= 4) {
    dotsContainer.innerHTML = `
      <span class="pal-dot" style="background: ${paletteColors[0]};" title="Prenda Superior / Saco"></span>
      <span class="pal-dot" style="background: ${paletteColors[1]};" title="Prenda Inferior / Pantalón"></span>
      <span class="pal-dot" style="background: ${paletteColors[2]};" title="Tez / Piel"></span>
      <span class="pal-dot" style="background: ${paletteColors[3]};" title="Detalle / Solapa / Labial"></span>
    `;
  }

  // 5. Resumen Financiero con Descuento Promo 40% OFF
  const summaryOutfitName = document.getElementById("summaryOutfitName");
  if (summaryOutfitName) summaryOutfitName.textContent = `Prenda(s): ${piecesTitle}`;

  const summaryOutfitPrice = document.getElementById("summaryOutfitPrice");
  if (summaryOutfitPrice) summaryOutfitPrice.textContent = formatPrice(outfitPrice);

  const summaryMakeupName = document.getElementById("summaryMakeupName");
  if (summaryMakeupName) {
    summaryMakeupName.textContent = `${cluelessGender === "mujeres" ? "Maquillaje" : "Grooming"}: ${serviceTitle}`;
  }

  const summaryMakeupPrice = document.getElementById("summaryMakeupPrice");
  if (summaryMakeupPrice) summaryMakeupPrice.textContent = formatPrice(servicePrice);

  const summarySkinToneName = document.getElementById("summarySkinToneName");
  if (summarySkinToneName) {
    summarySkinToneName.textContent = `Tono de Piel: ${cluelessGender === "mujeres" ? toneData.name : menToneData.name}`;
  }

  const serviceDiscount = Math.round(servicePrice * PROMO_TOTAL_LOOK_DISCOUNT_PCT);
  const discountEl = document.getElementById("summaryDiscountAmount");
  if (discountEl) discountEl.textContent = `-${formatPrice(serviceDiscount)}`;

  const finalTotal = outfitPrice + servicePrice - serviceDiscount;
  const summaryTotalPrice = document.getElementById("summaryTotalPrice");
  if (summaryTotalPrice) summaryTotalPrice.textContent = formatPrice(finalTotal);

  const bookBtn = document.getElementById("bookLookBtn");
  if (bookBtn) {
    bookBtn.innerHTML = cluelessGender === "mujeres"
      ? `👑 Reservar Este Total Look Femenino (40% OFF Maquillaje)`
      : `🎩 Reservar Este Total Look Masculino (40% OFF Grooming)`;
  }
};

window.bookCurrentTotalLook = function() {
  const toneData = FITTING_SKIN_TONES[currentFittingTone] || FITTING_SKIN_TONES["clara"];
  const menToneData = MEN_SKIN_MODELS[currentFittingTone] || MEN_SKIN_MODELS["clara"];

  let piecesDesc = "";
  let serviceName = "";
  let serviceDiscount = 0;

  if (cluelessGender === "mujeres") {
    const makeup = FITTING_MAKEUPS_DATA.find((m) => m.id === currentFittingMakeupId) || FITTING_MAKEUPS_DATA[0];
    serviceName = `Maquillaje: ${makeup.name}`;
    serviceDiscount = Math.round(makeup.price * PROMO_TOTAL_LOOK_DISCOUNT_PCT);

    if (cluelessMode === "mix") {
      const top = CLUELESS_TOPS[currentTopIdx];
      const bottom = CLUELESS_BOTTOMS[currentBottomIdx];
      piecesDesc = `${top.name} + ${bottom.name}`;
    } else {
      const gown = CLUELESS_GOWNS[currentGownIdx];
      piecesDesc = gown.name;
    }
  } else {
    const groom = FITTING_MEN_GROOMING_DATA.find((g) => g.id === currentMenGroomingId) || FITTING_MEN_GROOMING_DATA[0];
    serviceName = `Grooming Masculino: ${groom.name}`;
    serviceDiscount = Math.round(groom.price * PROMO_TOTAL_LOOK_DISCOUNT_PCT);

    if (cluelessMode === "mix") {
      const top = CLUELESS_MEN_TOPS[currentMenTopIdx];
      const bottom = CLUELESS_MEN_BOTTOMS[currentMenBottomIdx];
      piecesDesc = `${top.name} + ${bottom.name}`;
    } else {
      const suit = CLUELESS_MEN_SUITS[currentMenSuitIdx];
      piecesDesc = suit.name;
    }
  }

  // 1. Cargar en selector de reserva
  if (selectedOutfitDropdown) {
    const matchingOption = Array.from(selectedOutfitDropdown.options).find((opt) =>
      opt.value.toLowerCase().includes(piecesDesc.toLowerCase()) ||
      piecesDesc.toLowerCase().includes(opt.value.toLowerCase())
    );
    if (matchingOption) {
      selectedOutfitDropdown.value = matchingOption.value;
    }
  }

  // 2. Cargar servicio en formulario
  const clientMakeupSelect = document.getElementById("clientMakeup");
  if (clientMakeupSelect) {
    const matchingMakeup = Array.from(clientMakeupSelect.options).find((opt) =>
      opt.value.includes("Total Look") || opt.value.toLowerCase().includes(serviceName.toLowerCase())
    );
    if (matchingMakeup) {
      clientMakeupSelect.value = matchingMakeup.value;
    }
  }

  // 3. Asignar tono de piel y detalles del probador en medidas de clienta
  const clientMeasurementsInput = document.getElementById("clientMeasurements");
  if (clientMeasurementsInput) {
    const toneLabel = cluelessGender === "mujeres" ? toneData.name : menToneData.name;
    clientMeasurementsInput.value = `Colección: ${cluelessGender === "mujeres" ? "Damas" : "Caballeros"}. Tono de Piel: ${toneLabel}. Look armado (${piecesDesc} + ${serviceName}). Promo Total Look 40% OFF (-${formatPrice(serviceDiscount)}). WhatsApp Atelier: 3757-511855.`;
  }

  // 4. Scroll suave al formulario de reserva
  const bookingSection = document.getElementById("registro-reserva");
  if (bookingSection) {
    bookingSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  showToast(`👑 ¡Total Look (${cluelessGender === "mujeres" ? "Damas" : "Caballeros"}) cargado en tu Ficha de Reserva! Descuento 40%: -${formatPrice(serviceDiscount)}`);
};

// Inicialización automática del Probador Clueless
document.addEventListener("DOMContentLoaded", function() {
  if (document.getElementById("cluelessScreenGlass")) {
    updateCluelessView();
  }
});
