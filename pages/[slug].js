import Head from "next/head";
import { renderMetaTags, useQuerySubscription, Image } from "react-datocms";
import { request } from "../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";
import Layout from "../components/layout";
import Heading from "../components/heading";

export async function getStaticPaths() {
  const data = await request({ query: `{ allPhotoSets{ slug } }` });

  return {
    paths: data.allPhotoSets.map((set) => `/${set.slug}`),
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const graphqlRequest = {
    query: `
      query PhotoSetBySlug($slug: String) {
        photoSet(filter: {slug: {eq: $slug}}) {
          title
          slug
          description(markdown: true)
          date
          photos {
            title
            id
            height
            width
            url
            customData
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1200, h: 800 }) {
              ...responsiveImageFragment
            }
          }
        }
      
        allPhotoSets {
          id
          slug
          title
        }
      }
      ${responsiveImageFragment}
      `,
    preview,
    variables: {
      slug: params.slug,
    },
  };

  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.CMS_DATOCMS_API_TOKEN,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
    },
  };
}

export default function Page({ subscription, preview }) {
  const {
    data: { photoSet, allPhotoSets },
  } = useQuerySubscription(subscription);

  return (
    <Layout
      pageTitle={photoSet.title}
      layout="home"
      photoSets={allPhotoSets}
      preview={preview}
    >
      <header className="mb-16">
        <Heading level="h3" classes="">
          {photoSet.title}
        </Heading>
        <div
          className="mt-4 max-w-xl"
          dangerouslySetInnerHTML={{ __html: photoSet.description }}
        />
      </header>
      {photoSet.photos.map((photo) => (
        <div key={photo.id} className="">
          <Image
            key={photo.id}
            data={{
              ...photo.responsiveImage,
              alt: `${photo.title}`,
            }}
          />
          <div className="mt-4 mb-16 flex justify-between">
            <p className="text-lg max-w-2xl">{photo.title}</p>
            <div>
              {Object.keys(photo.customData)
                .sort(function (a, b) {
                  return a < b ? -1 : a > b ? 1 : 0;
                })
                .map((key) => (
                  <p className="text-sm">
                    <span
                      className={`text-gray-500 ${
                        key === "iso" ? "uppercase" : "capitalize"
                      }`}
                    >
                      {key}:
                    </span>{" "}
                    {photo.customData[key]}
                  </p>
                ))}
            </div>
          </div>
        </div>
      ))}
    </Layout>
  );
}
