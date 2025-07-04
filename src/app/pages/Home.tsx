import { Container } from "@mui/material";
import Navbar from "../components/common/Navbar";
import FactoryAnalyticsBarChart from "../components/charts/BarChart/BarChart";
import factoryData from "../consts/factory_analytics_data";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <FactoryAnalyticsBarChart
          data={factoryData}
          height={450}
          showTitle={true}
          showLegend={true}
        />
      </Container>
    </>
  );
};

export default Home;
