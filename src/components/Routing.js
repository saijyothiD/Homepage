import { Route, Routes,Navigate } from "react-router-dom"
import AccountSummary from "./dashboard/Innercontent/Account-summary";
import Innercontent from "./dashboard/Innercontent/Innercontent";
import LoanOffers from "./dashboard/Innercontent/LoanOffers";


const Routing = () => {
    return(
        <div>
            <section>
                <Routes>
                    <Route path="/" element={<LoanOffers />} />
                    <Route path="/" element={<Innercontent />}>
                        <Route path="loan-offers" element={<Navigate replace to="LoanOffers" />} />
                        <Route path="account-summary" element={<AccountSummary />} />
                    </Route>
                    {/* <Route path="/" element={<Header />} /> */}
                </Routes>
            </section>
        </div>
    )
}
export default Routing;