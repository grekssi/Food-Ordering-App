import sanityClient, { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
    projectId: "iqovxnk9",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-03-27"
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;