import Layout from "../components/layout";
import Footer from "../components/footer";
import Newsletter from "../components/newsletter";
import ResourceHiglight from "../components/resourceHighlight";
import ResourceList from "../components/resourceList";

export default function Home({ schedules }) {
  return (
    <Layout>
      <ResourceHiglight schedules={schedules.slice(0, 2)} />
      <Newsletter />
      <ResourceList schedules={schedules} />
      <Footer />
    </Layout>
  );
}

export async function getServerSideProps() {
  const response = await fetch(`${process.env.API_URL}/schedules`);
  const data = await response.json();

  return {
    props: {
      schedules: data,
    },
  };
}
