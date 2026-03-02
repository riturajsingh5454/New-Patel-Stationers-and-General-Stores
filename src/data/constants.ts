import { Category, NavItem } from '../types';
import productData from './productData.json';
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', hindiLabel: 'होम', href: '/' },
  { label: 'About Us', hindiLabel: 'हमारे बारे में', href: '/about' },
  { label: 'Products', hindiLabel: 'उत्पाद', href: '/products' },
  { label: 'Gallery', hindiLabel: 'गैलरी', href: '/gallery' },
  { label: 'Government Supply', hindiLabel: 'सरकारी आपूर्ति', href: '/government-supply' },
  { label: 'Contact Us', hindiLabel: 'संपर्क करें', href: '/contact' },
];

export const CONTACT_INFO = {
  name: 'New Patel Stationers & General Stores',
  address: 'New Patel Stationers, Haidergarh, Uttar Pradesh 225124',
  mobile: '+91 79057 86346',
  whatsapp: '917905786346',
  email: 'newpatelstationers@gmail.com',
};

export const GALLERY_CATEGORIES = [
  { id: 'all', name: 'All Photos', hindiName: 'सभी फोटो' },
  { id: 'shop', name: 'Our Shop', hindiName: 'हमारी दुकान' },
  { id: 'products', name: 'Product Display', hindiName: 'उत्पाद प्रदर्शन' },
  { id: 'institutional', name: 'Institutional Supply', hindiName: 'संस्थागत आपूर्ति' },
  { id: 'events', name: 'School Events', hindiName: 'स्कूली कार्यक्रम' },
];

export const GALLERY_IMAGES = [
  { id: 1, category: 'shop', url: '/slider1.jpeg', title: 'Main Store Front', hindiTitle: 'मुख्य दुकान' },
  { id: 2, category: 'products', url: '/slider2.jpeg', title: 'Stationery Collection', hindiTitle: 'स्टेशनरी संग्रह' },
  { id: 3, category: 'institutional', url: '/slider3.jpeg', title: 'Bulk Supply Ready', hindiTitle: 'थोक आपूर्ति' },
  { id: 4, category: 'shop', url: '/slider4.jpeg', title: 'Interior View', hindiTitle: 'दुकान का अंदरूनी दृश्य' },
  { id: 5, category: 'products', url: '/slider5.jpeg', title: 'Premium Registers', hindiTitle: 'प्रीमियम रजिस्टर' },
  { id: 6, category: 'events', url: '/slider6.jpeg', title: 'School Distribution', hindiTitle: 'स्कूल वितरण' },
  { id: 7, category: 'institutional', url: '/slider7.jpeg', title: 'Government Order', hindiTitle: 'सरकारी ऑर्डर' },
  { id: 8, category: 'products', url: '/slider8.jpeg', title: 'Art & Craft Materials', hindiTitle: 'आर्ट और क्राफ्ट सामग्री' },
];

export const CATEGORIES: Category[] = [
  {
    id: 'school-education',
    name: 'School & Education Supplies',
    hindiName: 'विद्यालय से सम्बंधित रजिस्टर',
    items: [
      { id: 'se-1', name: 'Student Attendance Register', hindiName: 'छात्र उपस्थिति रजिस्टर', category: 'School & Education Supplies' },
      { id: 'se-2', name: 'Teacher Diary', hindiName: 'शिक्षक डायरी', category: 'School & Education Supplies' },
      { id: 'se-3', name: 'Admission Register', hindiName: 'प्रवेश रजिस्टर', category: 'School & Education Supplies' },
      { id: 'se-4', name: 'Enrollment Register', hindiName: 'नामांकन रजिस्टर', category: 'School & Education Supplies' },
      { id: 'se-5', name: 'Exam Result Register', hindiName: 'परीक्षा परिणाम रजिस्टर', category: 'School & Education Supplies' },
      { id: 'se-6', name: 'MDM Register', hindiName: 'एमडीएम रजिस्टर', category: 'School & Education Supplies' },
      { id: 'se-7', name: 'Library Register', hindiName: 'लाइब्रेरी रजिस्टर', category: 'School & Education Supplies' },
      { id: 'se-8', name: 'Stock Register', hindiName: 'स्टॉक रजिस्टर', category: 'School & Education Supplies' },
      { id: 'se-9', name: 'Inward-Outward Register', hindiName: 'आगमन-प्रेषण रजिस्टर', category: 'School & Education Supplies' },
      { id: 'se-10', name: 'Inspection Register', hindiName: 'निरीक्षण रजिस्टर', category: 'School & Education Supplies' },
      { id: 'se-11', name: 'Class Work Register', hindiName: 'कक्षा कार्य रजिस्टर', category: 'School & Education Supplies' },
      { id: 'se-12', name: 'Home Work Register', hindiName: 'गृह कार्य रजिस्टर', category: 'School & Education Supplies' },
      { id: 'se-13', name: 'School Record File', hindiName: 'विद्यालय रिकॉर्ड फाइल', category: 'School & Education Supplies' },
      { id: 'se-14', name: 'School Form & Panjika', hindiName: 'स्कूल फार्म व पंजिका', category: 'School & Education Supplies' }
    ]
  },
  {
    id: 'stationery-items',
    name: 'Stationery Items',
    hindiName: 'ऑफिस व विद्यालय स्टेशनरी सामान',
    items: [
      { id: 'si-1', name: 'Ball Pen', hindiName: 'बॉल पेन', category: 'Stationery Items' },
      { id: 'si-2', name: 'Gel Pen', hindiName: 'जेल पेन', category: 'Stationery Items' },
      { id: 'si-3', name: 'Fountain Pen', hindiName: 'फाउंटेन पेन', category: 'Stationery Items' },
      { id: 'si-4', name: 'Pencil', hindiName: 'पेंसिल', category: 'Stationery Items' },
      { id: 'si-5', name: 'Eraser', hindiName: 'रबर', category: 'Stationery Items' },
      { id: 'si-6', name: 'Sharpener', hindiName: 'शार्पनर', category: 'Stationery Items' },
      { id: 'si-7', name: 'Scale', hindiName: 'स्केल', category: 'Stationery Items' },
      { id: 'si-8', name: 'Geometry Box', hindiName: 'ज्योमेट्री बॉक्स', category: 'Stationery Items' },
      { id: 'si-9', name: 'Marker', hindiName: 'मार्कर', category: 'Stationery Items' },
      { id: 'si-10', name: 'White Board Marker', hindiName: 'व्हाइट बोर्ड मार्कर', category: 'Stationery Items' },
      { id: 'si-11', name: 'Highlighter', hindiName: 'हाईलाइटर', category: 'Stationery Items' },
      { id: 'si-12', name: 'Correction Pen', hindiName: 'करेक्शन पेन', category: 'Stationery Items' },
      { id: 'si-13', name: 'Stapler', hindiName: 'स्टेपलर', category: 'Stationery Items' },
      { id: 'si-14', name: 'Staple Pins', hindiName: 'स्टेपल पिन', category: 'Stationery Items' },
      { id: 'si-15', name: 'Punch Machine', hindiName: 'पंच मशीन', category: 'Stationery Items' },
      { id: 'si-16', name: 'Paper Pin', hindiName: 'पेपर पिन', category: 'Stationery Items' },
      { id: 'si-17', name: 'Clip', hindiName: 'क्लिप', category: 'Stationery Items' },
      { id: 'si-18', name: 'Glue', hindiName: 'गोंद', category: 'Stationery Items' },
      { id: 'si-19', name: 'Tape', hindiName: 'टेप', category: 'Stationery Items' },
      { id: 'si-20', name: 'Rubber Band', hindiName: 'रबर बैंड', category: 'Stationery Items' },
      { id: 'si-21', name: 'Ink Pad', hindiName: 'इंक पैड', category: 'Stationery Items' }
    ]
  },
  {
    id: 'registers-files',
    name: 'Registers & Office Files',
    hindiName: 'कागज एवं फाइल्स का सामान',
    items: [
      { id: 'rf-1', name: 'Plain Register', hindiName: 'सादा रजिस्टर', category: 'Registers & Office Files' },
      { id: 'rf-2', name: 'Hard Bound Register', hindiName: 'हार्ड बाउंड रजिस्टर', category: 'Registers & Office Files' },
      { id: 'rf-3', name: 'A4 Register', hindiName: 'A4 रजिस्टर', category: 'Registers & Office Files' },
      { id: 'rf-4', name: 'Counter Book', hindiName: 'काउंटर बुक', category: 'Registers & Office Files' },
      { id: 'rf-5', name: 'Cash Book', hindiName: 'कैश बुक', category: 'Registers & Office Files' },
      { id: 'rf-6', name: 'Ledger', hindiName: 'लेजर', category: 'Registers & Office Files' },
      { id: 'rf-7', name: 'Office File', hindiName: 'ऑफिस फाइल', category: 'Registers & Office Files' },
      { id: 'rf-8', name: 'Button File', hindiName: 'बटन फाइल', category: 'Registers & Office Files' },
      { id: 'rf-9', name: 'Spring File', hindiName: 'स्प्रिंग फाइल', category: 'Registers & Office Files' },
      { id: 'rf-10', name: 'Letter Pad File', hindiName: 'लेटर पैड फाइल', category: 'Registers & Office Files' },
      { id: 'rf-11', name: 'Spiral File', hindiName: 'स्पाइरल फाइल', category: 'Registers & Office Files' },
      { id: 'rf-12', name: 'Document Folder', hindiName: 'डॉक्यूमेंट फोल्डर', category: 'Registers & Office Files' },
      { id: 'rf-13', name: 'Plastic File', hindiName: 'प्लास्टिक फाइल', category: 'Registers & Office Files' },
      { id: 'rf-14', name: 'Tag File', hindiName: 'टैग फाइल', category: 'Registers & Office Files' }
    ]
  },
  {
    id: 'paper-printing',
    name: 'Paper & Printing Materials',
    hindiName: 'कागज एवं प्रिंटिंग सामग्री',
    items: [
      { id: 'pp-1', name: 'A4 Paper', hindiName: 'A4 पेपर', category: 'Paper & Printing Materials' },
      { id: 'pp-2', name: 'Legal Size Paper', hindiName: 'लीगल साइज पेपर', category: 'Paper & Printing Materials' },
      { id: 'pp-3', name: 'Colored Paper', hindiName: 'रंगीन कागज', category: 'Paper & Printing Materials' },
      { id: 'pp-4', name: 'Chart Paper', hindiName: 'चार्ट पेपर', category: 'Paper & Printing Materials' },
      { id: 'pp-5', name: 'Craft Paper', hindiName: 'क्राफ्ट पेपर', category: 'Paper & Printing Materials' },
      { id: 'pp-6', name: 'Photocopy Paper', hindiName: 'फोटोकॉपी पेपर', category: 'Paper & Printing Materials' },
      { id: 'pp-7', name: 'Poster Paper', hindiName: 'पोस्टर पेपर', category: 'Paper & Printing Materials' },
      { id: 'pp-8', name: 'Paper Roll', hindiName: 'पेपर रोल', category: 'Paper & Printing Materials' },
      { id: 'pp-9', name: 'Glaze Paper', hindiName: 'ग्लेज पेपर', category: 'Paper & Printing Materials' },
      { id: 'pp-10', name: 'Brown Paper', hindiName: 'ब्राउन पेपर', category: 'Paper & Printing Materials' },
      { id: 'pp-11', name: 'Cover Paper', hindiName: 'कवर पेपर', category: 'Paper & Printing Materials' }
    ]
  },
  {
    id: 'writing-art',
    name: 'Writing, Drawing & Art Materials',
    hindiName: 'लेखन व ड्राइंग सामग्री',
    items: [
      { id: 'wa-1', name: 'Drawing Book', hindiName: 'ड्राइंग बुक', category: 'Writing, Drawing & Art Materials' },
      { id: 'wa-2', name: 'Sketch Book', hindiName: 'स्केच बुक', category: 'Writing, Drawing & Art Materials' },
      { id: 'wa-3', name: 'Color Pencil', hindiName: 'कलर पेंसिल', category: 'Writing, Drawing & Art Materials' },
      { id: 'wa-4', name: 'Sketch Pen', hindiName: 'स्केच पेन', category: 'Writing, Drawing & Art Materials' },
      { id: 'wa-5', name: 'Crayon', hindiName: 'क्रेयॉन', category: 'Writing, Drawing & Art Materials' },
      { id: 'wa-6', name: 'Water Color', hindiName: 'वॉटर कलर', category: 'Writing, Drawing & Art Materials' },
      { id: 'wa-7', name: 'Poster Color', hindiName: 'पोस्टर कलर', category: 'Writing, Drawing & Art Materials' },
      { id: 'wa-8', name: 'Oil Pastel', hindiName: 'ऑयल पेस्टल', category: 'Writing, Drawing & Art Materials' },
      { id: 'wa-9', name: 'Paint Brush', hindiName: 'पेंट ब्रश', category: 'Writing, Drawing & Art Materials' },
      { id: 'wa-10', name: 'Palette', hindiName: 'पैलेट', category: 'Writing, Drawing & Art Materials' },
      { id: 'wa-11', name: 'Glitter', hindiName: 'ग्लिटर', category: 'Writing, Drawing & Art Materials' },
      { id: 'wa-12', name: 'Art Sticker', hindiName: 'आर्ट स्टिकर', category: 'Writing, Drawing & Art Materials' },
      { id: 'wa-13', name: 'Craft Kit', hindiName: 'क्राफ्ट किट', category: 'Writing, Drawing & Art Materials' }
    ]
  },
  {
    id: 'maths-geometry-tlm',
    name: 'Maths, Geometry & TLM',
    hindiName: 'ज्योमेट्री व मैथ्स सामग्री (TLM)',
    items: [
      { id: 'tlm-1', name: 'Geometry Set', hindiName: 'ज्योमेट्री सेट', category: 'Maths, Geometry & TLM' },
      { id: 'tlm-2', name: 'Maths Kit', hindiName: 'गणित किट', category: 'Maths, Geometry & TLM' },
      { id: 'tlm-3', name: 'Number Chart', hindiName: 'नंबर चार्ट', category: 'Maths, Geometry & TLM' },
      { id: 'tlm-4', name: 'Alphabet Chart', hindiName: 'अक्षर चार्ट', category: 'Maths, Geometry & TLM' },
      { id: 'tlm-5', name: 'Science Chart', hindiName: 'साइंस चार्ट', category: 'Maths, Geometry & TLM' },
      { id: 'tlm-6', name: 'Science Model', hindiName: 'विज्ञान मॉडल', category: 'Maths, Geometry & TLM' },
      { id: 'tlm-7', name: 'Flash Card', hindiName: 'फ्लैश कार्ड', category: 'Maths, Geometry & TLM' },
      { id: 'tlm-8', name: 'Blackboard Duster', hindiName: 'ब्लैकबोर्ड डस्टर', category: 'Maths, Geometry & TLM' },
      { id: 'tlm-9', name: 'Chalk', hindiName: 'चॉक', category: 'Maths, Geometry & TLM' },
      { id: 'tlm-10', name: 'White Board Chalk', hindiName: 'व्हाइट बोर्ड चॉक', category: 'Maths, Geometry & TLM' },
      { id: 'tlm-11', name: 'Map', hindiName: 'मैप', category: 'Maths, Geometry & TLM' },
      { id: 'tlm-12', name: 'Globe', hindiName: 'ग्लोब', category: 'Maths, Geometry & TLM' },
      { id: 'tlm-13', name: 'Teaching Aid', hindiName: 'शिक्षण सहायक सामग्री', category: 'Maths, Geometry & TLM' }
    ]
  },
  {
    id: 'furniture-infrastructure',
    name: 'Furniture & School Infrastructure',
    hindiName: 'फर्नीचर का सामान',
    items: [
      { id: 'fi-1', name: 'Steel Chair', hindiName: 'स्टील कुर्सी', category: 'Furniture & School Infrastructure' },
      { id: 'fi-2', name: 'Plastic Chair', hindiName: 'प्लास्टिक कुर्सी', category: 'Furniture & School Infrastructure' },
      { id: 'fi-3', name: 'Bench', hindiName: 'बेंच', category: 'Furniture & School Infrastructure' },
      { id: 'fi-4', name: 'Desk', hindiName: 'डेस्क', category: 'Furniture & School Infrastructure' },
      { id: 'fi-5', name: 'Study Table', hindiName: 'स्टडी टेबल', category: 'Furniture & School Infrastructure' },
      { id: 'fi-6', name: 'Office Table', hindiName: 'ऑफिस टेबल', category: 'Furniture & School Infrastructure' },
      { id: 'fi-7', name: 'Almirah', hindiName: 'अलमारी', category: 'Furniture & School Infrastructure' },
      { id: 'fi-8', name: 'Stool', hindiName: 'स्टूल', category: 'Furniture & School Infrastructure' },
      { id: 'fi-9', name: 'Rack', hindiName: 'रैक', category: 'Furniture & School Infrastructure' },
      { id: 'fi-10', name: 'School Furniture Item', hindiName: 'स्कूल फर्नीचर आइटम', category: 'Furniture & School Infrastructure' }
    ]
  },
  {
    id: 'charts-maps-boards',
    name: 'Charts, Maps & Boards',
    hindiName: 'चार्ट, मैप व बोर्ड का सामान',
    items: [
      { id: 'cmb-1', name: 'Wall Chart', hindiName: 'दीवार चार्ट', category: 'Charts, Maps & Boards' },
      { id: 'cmb-2', name: 'Educational Chart', hindiName: 'शैक्षणिक चार्ट', category: 'Charts, Maps & Boards' },
      { id: 'cmb-3', name: 'Map of India', hindiName: 'भारत का नक्शा', category: 'Charts, Maps & Boards' },
      { id: 'cmb-4', name: 'World Map', hindiName: 'विश्व मानचित्र', category: 'Charts, Maps & Boards' },
      { id: 'cmb-5', name: 'Green Board', hindiName: 'ग्रीन बोर्ड', category: 'Charts, Maps & Boards' },
      { id: 'cmb-6', name: 'Black Board', hindiName: 'ब्लैक बोर्ड', category: 'Charts, Maps & Boards' },
      { id: 'cmb-7', name: 'White Board', hindiName: 'व्हाइट बोर्ड', category: 'Charts, Maps & Boards' },
      { id: 'cmb-8', name: 'Notice Board', hindiName: 'नोटिस बोर्ड', category: 'Charts, Maps & Boards' },
      { id: 'cmb-9', name: 'Display Board', hindiName: 'डिस्प्ले बोर्ड', category: 'Charts, Maps & Boards' }
    ]
  },
  {
    id: 'cleaning-hygiene',
    name: 'Cleaning & Hygiene Products',
    hindiName: 'स्वच्छता सामग्री (Cleaning Material)',
    items: [
      { id: 'ch-1', name: 'Phenyl', hindiName: 'फिनायल', category: 'Cleaning & Hygiene Products' },
      { id: 'ch-2', name: 'Floor Cleaner', hindiName: 'फ्लोर क्लीनर', category: 'Cleaning & Hygiene Products' },
      { id: 'ch-3', name: 'Toilet Cleaner', hindiName: 'टॉयलेट क्लीनर', category: 'Cleaning & Hygiene Products' },
      { id: 'ch-4', name: 'Handwash', hindiName: 'हैंडवॉश', category: 'Cleaning & Hygiene Products' },
      { id: 'ch-5', name: 'Soap', hindiName: 'साबुन', category: 'Cleaning & Hygiene Products' },
      { id: 'ch-6', name: 'Detergent Powder', hindiName: 'डिटर्जेंट पाउडर', category: 'Cleaning & Hygiene Products' },
      { id: 'ch-7', name: 'Broom', hindiName: 'झाड़ू', category: 'Cleaning & Hygiene Products' },
      { id: 'ch-8', name: 'Mop', hindiName: 'पोछा', category: 'Cleaning & Hygiene Products' },
      { id: 'ch-9', name: 'Dustbin', hindiName: 'डस्टबिन', category: 'Cleaning & Hygiene Products' },
      { id: 'ch-10', name: 'Garbage Bag', hindiName: 'कचरा बैग', category: 'Cleaning & Hygiene Products' },
      { id: 'ch-11', name: 'Cleaning Cloth', hindiName: 'सफाई कपड़ा', category: 'Cleaning & Hygiene Products' },
      { id: 'ch-12', name: 'Room Freshener', hindiName: 'रूम फ्रेशनर', category: 'Cleaning & Hygiene Products' }
    ]
  },
  {
    id: 'general-household',
    name: 'General & Household Items',
    hindiName: 'जनरल सामान',
    items: [
      { id: 'gh-1', name: 'Bucket', hindiName: 'बाल्टी', category: 'General & Household Items' },
      { id: 'gh-2', name: 'Mug', hindiName: 'मग', category: 'General & Household Items' },
      { id: 'gh-3', name: 'Water Bottle', hindiName: 'पानी की बोतल', category: 'General & Household Items' },
      { id: 'gh-4', name: 'Lunch Box', hindiName: 'लंच बॉक्स', category: 'General & Household Items' },
      { id: 'gh-5', name: 'Plastic Container', hindiName: 'प्लास्टिक डिब्बे', category: 'General & Household Items' },
      { id: 'gh-6', name: 'Matchbox', hindiName: 'माचिस', category: 'General & Household Items' },
      { id: 'gh-7', name: 'Candle', hindiName: 'मोमबत्ती', category: 'General & Household Items' },
      { id: 'gh-8', name: 'Torch', hindiName: 'टॉर्च', category: 'General & Household Items' },
      { id: 'gh-9', name: 'Extension Board', hindiName: 'एक्सटेंशन बोर्ड', category: 'General & Household Items' },
      { id: 'gh-10', name: 'Household Item', hindiName: 'घरेलू उपयोग का सामान', category: 'General & Household Items' }
    ]
  },
  {
    id: 'sports-pe',
    name: 'Sports & Physical Education Items',
    hindiName: 'स्पोर्ट्स का सामान',
    items: [
      { id: 'sp-1', name: 'Cricket Bat', hindiName: 'क्रिकेट बैट', category: 'Sports & Physical Education Items' },
      { id: 'sp-2', name: 'Cricket Ball', hindiName: 'क्रिकेट बॉल', category: 'Sports & Physical Education Items' },
      { id: 'sp-3', name: 'Football', hindiName: 'फुटबॉल', category: 'Sports & Physical Education Items' },
      { id: 'sp-4', name: 'Volleyball', hindiName: 'वॉलीबॉल', category: 'Sports & Physical Education Items' },
      { id: 'sp-5', name: 'Badminton Racket', hindiName: 'बैडमिंटन रैकेट', category: 'Sports & Physical Education Items' },
      { id: 'sp-6', name: 'Shuttle Cock', hindiName: 'शटल कॉक', category: 'Sports & Physical Education Items' },
      { id: 'sp-7', name: 'Skipping Rope', hindiName: 'स्किपिंग रोप', category: 'Sports & Physical Education Items' },
      { id: 'sp-8', name: 'Whistle', hindiName: 'सीटी', category: 'Sports & Physical Education Items' },
      { id: 'sp-9', name: 'Sports Item', hindiName: 'खेलकूद का अन्य सामान', category: 'Sports & Physical Education Items' }
    ]
  },
  {
    id: 'toys-kids',
    name: 'Toys, Kids & Activity Items',
    hindiName: 'बच्चों के खिलौने व उपयोगी सामान',
    items: [
      { id: 'tk-1', name: 'Educational Toy', hindiName: 'शैक्षणिक खिलौने', category: 'Toys, Kids & Activity Items' },
      { id: 'tk-2', name: 'Plastic Toy', hindiName: 'प्लास्टिक खिलौने', category: 'Toys, Kids & Activity Items' },
      { id: 'tk-3', name: 'Indoor Game', hindiName: 'इनडोर गेम्स', category: 'Toys, Kids & Activity Items' },
      { id: 'tk-4', name: 'Outdoor Play Material', hindiName: 'आउटडोर खेल सामग्री', category: 'Toys, Kids & Activity Items' },
      { id: 'tk-5', name: 'Kids Activity Kit', hindiName: 'बच्चों की एक्टिविटी किट', category: 'Toys, Kids & Activity Items' }
    ]
  },
  {
    id: 'photo-frames',
    name: 'Photo Frames & Mahapurush Photos',
    hindiName: 'फोटो फ्रेम व महापुरुषों की तस्वीरें',
    items: [
      { id: 'pf-1', name: 'Photo Frame (Small, Medium, Large)', hindiName: 'फोटो फ्रेम (छोटा, मध्यम, बड़ा)', category: 'Photo Frames & Mahapurush Photos' },
      { id: 'pf-2', name: 'Wall Photo Frame', hindiName: 'वॉल फोटो फ्रेम', category: 'Photo Frames & Mahapurush Photos' },
      { id: 'pf-3', name: 'Certificate Frame', hindiName: 'सर्टिफिकेट फ्रेम', category: 'Photo Frames & Mahapurush Photos' },
      { id: 'pf-4', name: 'Mahatma Gandhi Photo', hindiName: 'महात्मा गांधी फोटो', category: 'Photo Frames & Mahapurush Photos' },
      { id: 'pf-5', name: 'Dr. Bhimrao Ambedkar Photo', hindiName: 'डॉ. भीमराव अंबेडकर फोटो', category: 'Photo Frames & Mahapurush Photos' },
      { id: 'pf-6', name: 'Swami Vivekananda Photo', hindiName: 'स्वामी विवेकानंद फोटो', category: 'Photo Frames & Mahapurush Photos' },
      { id: 'pf-7', name: 'Bhagat Singh Photo', hindiName: 'भगत सिंह फोटो', category: 'Photo Frames & Mahapurush Photos' },
      { id: 'pf-8', name: 'Dr. A.P.J. Abdul Kalam Photo', hindiName: 'डॉ. ए.पी.जे. अब्दुल कलाम फोटो', category: 'Photo Frames & Mahapurush Photos' },
      { id: 'pf-9', name: 'Rani Lakshmibai Photo', hindiName: 'रानी लक्ष्मीबाई फोटो', category: 'Photo Frames & Mahapurush Photos' }
    ]
  },
  {
    id: 'exam-materials',
    name: 'Examination & Assessment Materials',
    hindiName: 'परीक्षा सामग्री',
    items: [
      { id: 'em-1', name: 'Answer Sheet', hindiName: 'उत्तर पुस्तिका', category: 'Examination & Assessment Materials' },
      { id: 'em-2', name: 'Supplement Sheet', hindiName: 'सप्लीमेंट शीट', category: 'Examination & Assessment Materials' },
      { id: 'em-3', name: 'Question Paper File', hindiName: 'प्रश्न पत्र फाइल', category: 'Examination & Assessment Materials' },
      { id: 'em-4', name: 'Exam Register', hindiName: 'परीक्षा रजिस्टर', category: 'Examination & Assessment Materials' },
      { id: 'em-5', name: 'Attendance Sheet', hindiName: 'अटेंडेंस शीट', category: 'Examination & Assessment Materials' },
      { id: 'em-6', name: 'Answer Copy', hindiName: 'उत्तर कॉपी', category: 'Examination & Assessment Materials' },
      { id: 'em-7', name: 'Exam Form', hindiName: 'परीक्षा फॉर्म', category: 'Examination & Assessment Materials' },
      { id: 'em-8', name: 'Assessment Material', hindiName: 'मूल्यांकन सामग्री', category: 'Examination & Assessment Materials' }
    ]
  },
  {
    id: 'flags-national',
    name: 'Flags & National Items',
    hindiName: 'तिरंगा / झंडा व देशभक्ति सामग्री',
    items: [
      { id: 'fn-1', name: 'Tricolor Flag', hindiName: 'तिरंगा झंडा', category: 'Flags & National Items' },
      { id: 'fn-2', name: 'Flag with Stand', hindiName: 'झंडा स्टैंड सहित', category: 'Flags & National Items' },
      { id: 'fn-3', name: 'Flag Pole', hindiName: 'झंडा डंडा', category: 'Flags & National Items' },
      { id: 'fn-4', name: 'National Chart', hindiName: 'राष्ट्रीय चार्ट', category: 'Flags & National Items' },
      { id: 'fn-5', name: 'Patriotic Poster', hindiName: 'देशभक्ति पोस्टर', category: 'Flags & National Items' },
      { id: 'fn-6', name: 'School Display Material', hindiName: 'विद्यालय प्रदर्शन सामग्री', category: 'Flags & National Items' }
    ]
  },
  {
    id: 'private-school-registers',
    name: 'Private School Registers',
    hindiName: 'प्राइवेट विद्यालय हेतु रजिस्टर व सहायक सामग्री',
    items: [
      { id: 'psr-1', name: 'Student Profile Register', hindiName: 'छात्र प्रोफाइल रजिस्टर', category: 'Private School Registers' },
      { id: 'psr-2', name: 'Teacher Register', hindiName: 'शिक्षक रजिस्टर', category: 'Private School Registers' },
      { id: 'psr-3', name: 'Fee Register', hindiName: 'फीस रजिस्टर', category: 'Private School Registers' },
      { id: 'psr-4', name: 'Salary Register', hindiName: 'वेतन रजिस्टर', category: 'Private School Registers' },
      { id: 'psr-5', name: 'Exam Panjika', hindiName: 'परीक्षा पंजिका', category: 'Private School Registers' },
      { id: 'psr-6', name: 'T.C. Form', hindiName: 'टी.सी. फॉर्म', category: 'Private School Registers' },
      { id: 'psr-7', name: 'Office Record Material', hindiName: 'कार्यालय रिकॉर्ड सामग्री', category: 'Private School Registers' }
    ]
  }
];
