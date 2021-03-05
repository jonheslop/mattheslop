import Head from "next/head";
import Layout from "../components/layout";
import { renderMetaTags, useQuerySubscription, Image } from "react-datocms";
import { responsiveImageFragment } from "../lib/fragments";
import { request } from "../lib/datocms";

export async function getStaticProps({ preview }) {
  const graphqlRequest = {
    query: `
      {
        allPhotoSets {
          id
          slug
          title
        }
        siteInfo {
          id
          siteTitle
          homepageImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1200, h: 800 }) {
              ...responsiveImageFragment
            }
          }
        }
      }
      ${responsiveImageFragment}
    `,
    preview,
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

export default function Home({ subscription }) {
  const {
    data: { allPhotoSets, siteInfo },
  } = useQuerySubscription(subscription);

  return (
    <Layout pageTitle="Home" layout="home" photoSets={allPhotoSets}>
      <div className="col-start-2">
        {siteInfo.homepageImage && (
          <Image
            key={siteInfo.id}
            data={{
              ...siteInfo.homepageImage.responsiveImage,
              alt: `${siteInfo.homepageImage.title}`,
            }}
          />
        )}
      </div>
    </Layout>
  );
}
