import React, { useEffect } from "react";
import VillageByTheSeaSummary from '../components/summary/VillageByTheSeaSummary';
import NavBar from "../components/nav/NavBar";
import useLoading from "../hooks/UseLoading";
import LoadingScreen from "../components/loadingscreen/LoadingScreen";

function VillageByTheSea() {
    useEffect(() => {
        document.title = "The Village by the Sea - Anita Desai";
    }, []);

    const loading = useLoading(1000);

    return (
        <div>
            {loading ? (<LoadingScreen />) : (
                <div>
                    <NavBar />

                    <div className="bg-body-tertiary py-4 overflow-hidden">
                        <VillageByTheSeaSummary />
                    </div>
                </div>
            )}
        </div>
    );
}

export default VillageByTheSea;