export const contentQuery = `*[_type == "websiteContent"][0] {
  _id,
  mainTitle,
  subtitle,
  logoImage,
  callToActionButtonText,
  mainBackgroundImage,
  "cards": *[ _type == "card"] | order(_createdAt) {
    _id,
    title,
    description,
    text
    },
    "services": *[_type == "service"] | order(_createdAt) {
      _id,
      title,
      description,
    }
}
`;
