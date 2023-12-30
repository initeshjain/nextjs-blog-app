import mongoose from "mongoose";
import Post from "@/models/Post";

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

// const convertDateForSitemap = (dateString) => {
//   const inputDate = new Date(dateString);
//   const outputDate = inputDate.toISOString();

//   return outputDate;
// };

// function createURLSetByCategories(type, categories) {
//   const baseUrl = `https://www.tiktook.in/${type}`;

//   // Get the current date/time in ISO format
//   const currentDate = new Date().toISOString();

//   // Map each category to a URL element string
//   const urlElements = categories.map((category) => {
//     // Encode the category string for use in the URL
//     const encodedCategory = encodeURIComponent(category);
//     // Construct the URL for this category
//     const url = `${baseUrl}?categories=${encodedCategory}`;
//     // Construct the XML string for this URL element
//     const xml = `
//       <url>
//         <loc>${url}</loc>
//         <lastmod>${currentDate}</lastmod>
//         <priority>0.9</priority>
//       </url>
//     `;

//     return xml;
//   });

//   // Join the URL elements together into a single string
//   const urlset = `
//       ${urlElements.join("")}
//   `;

//   return urlset;
// }

export async function getServerSideProps({ res }) {
  // connect to mongo, if not already
  if (!mongoose.connections[0].readyState) {
    mongoose.connect(process.env.MONGODB_URI);
  }

  // fetch all slugs and last modified time of blogs
  let blogItems = await Post.find(
    { isActive: true },
    {
      slug: 1,
    }
  );

  // fetch categories of blogs
  // let blogCat = await Post.distinct("category");

  let newBlogItems = blogItems.map((ele) => {
    return {
      ...ele,
      type: "blogs",
    };
  });

  let items = [...newBlogItems];

  let FinalXML = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">`;

  // pages
  const currentDate = new Date().toISOString();
  FinalXML =
    FinalXML +
    `<url><loc>https://www.tiktook.in/</loc><lastmod>${currentDate}</lastmod><priority>1.00</priority></url><url><loc>https://www.tiktook.in/privacy-policy</loc><lastmod>${currentDate}</lastmod><priority>0.9</priority></url><url><loc>https://www.tiktook.in/about-us</loc><lastmod>${currentDate}</lastmod><priority>0.9</priority></url><url><loc>https://www.tiktook.in/contact-us</loc><lastmod>${currentDate}</lastmod><priority>0.9</priority></url><url><loc>https://www.tiktook.in/terms-and-conditions</loc><lastmod>${currentDate}</lastmod><priority>0.9</priority></url><url><loc>https://www.tiktook.in/disclaimer</loc><lastmod>${currentDate}</lastmod><priority>0.9</priority></url>`;

  items.map((ele) => {
    FinalXML =
      FinalXML +
      `<url><loc>https://www.tiktook.in/${ele.type}/${ele._doc.slug}</loc><lastmod>${currentDate}</lastmod><priority>1.0</priority></url>`;
  });

  // create categories url set
  // FinalXML = FinalXML + createURLSetByCategories("blogs", blogCat);

  FinalXML = FinalXML + `</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  // send the XML to the browser
  res.write(FinalXML);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
