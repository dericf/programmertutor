export const contentQuery = `*[_type == "websiteContent"][0] {
  _id,
  mainTitle,
  subtitle,
  logoImage,
  callToActionButtonText,
  mainBackgroundImage,
  "cards": *[ _type == "card"] | order(displayOrder asc) {
    _id,
    title,
    description,
    text
  },
  "services": *[_type == "service"] | order(displayOrder asc) {
    _id,
    title,
    description,
  }
}
`;

export const infoCardsQuery = `*[_type == 'card'] | order(displayOrder asc)`

// export const servicesQuery = `*[_type == 'service'] | order(displayOrder asc)`