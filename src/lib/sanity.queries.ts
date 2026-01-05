// Global site settings (singleton)
export const siteSettingsQuery = `
  *[_type=="siteSettings" && _id=="siteSettings"][0]{
    brandName,
    tagline,
    whatsappNumber
  }
`;

// About section (single visible document)
export const aboutSectionQuery = `
  *[_type=="aboutSection" && visible==true][0]{
    title,
    content,
    "image": image.asset->url
  }
`;

export const collectionsQuery = `
  *[_type=="collection" && visible==true] | order(order asc){
    _id,
    title,
    category,
    description,
    customNote,
    "images": images[].asset->url
  }
`;
