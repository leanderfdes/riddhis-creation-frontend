// ================================
// Global Site Settings (SINGLETON)
// ================================
export const siteSettingsQuery = `
  *[_type == "siteSettings" && _id == "siteSettings"][0]{
    brandName,
    tagline,
    whatsappNumber,
    seoTitle,
    seoDescription,
    seoImage
  }
`;


// ================================
// About Section (SINGLETON)
// ================================
export const aboutSectionQuery = `
  *[_type == "aboutSection" && _id == "aboutSection"][0]{
    title,
    content,
    "image": image.asset->url
  }
`;


// ================================
// Collections (LIST)
// ================================
export const collectionsQuery = `
  *[_type == "collection" && visible == true]
  | order(order asc){
    _id,
    title,
    category,
    description,
    customNote,
    "images": images[].asset->url
  }
`;


// ================================
// Recent Orders / Work Done (LIST)
// ================================
export const recentOrdersQuery = `
  *[_type == "recentOrder" && visible == true]
  | order(orderDate desc){
    _id,
    title,
    caption,
    location,
    orderDate,
    "image": image.asset->url
  }
`;
