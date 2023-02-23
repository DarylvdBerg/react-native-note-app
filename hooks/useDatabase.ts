import { useEffect, useState } from "react";
import { database } from "@helpers/SQLiteHelper";

export default function useDatabase() {
    const [isDBLoadingComplete, setIsDBLoadingComplete] = useState(false);

    useEffect(() => {
        async function loadData() {
            try {
                await database.setupDB();

                setIsDBLoadingComplete(true);
            }
            catch(error) {
                console.warn(error)
            }
        }
        loadData();
    })

    return isDBLoadingComplete;
}