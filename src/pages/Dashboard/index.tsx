import { WithLayout } from "components/Layout";
import { DashboardContainer } from "containers";

const Dashboard: React.FC = () => {
    return(
        <DashboardContainer />
    )
};

export const DashboardPage = WithLayout(Dashboard);