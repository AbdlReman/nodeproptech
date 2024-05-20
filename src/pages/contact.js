import ContactForm from "@/components/contact/ContactForm";
import { getMetadata } from "@/config/metadata";
import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";
import Head from "next/head";

const Contact = () => {
  const page = "contact";
  const { title, description } = getMetadata(page);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Layout pageName={"Contact"}>
        <PageBanner pageName={"Contact"} />
        <div className="neoh_fn_contact_page">
          <div className="container">
            <ContactForm />
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Contact;
