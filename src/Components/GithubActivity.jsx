"use client";

import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";

export default function GithubActivity() {
    const [total, setTotal] = useState(null);
    const [isError, setIsError] = useState(false);

    // Fetch total contributions (GitHub API does not expose this directly)
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(
                    "https://github-contributions-api.jogruber.de/v4/bichitrabehera?y=last"
                );

                if (!res.ok) throw new Error("API failed");

                const data = await res.json();
                if (!data || !data.contributions) throw new Error("Invalid data");

                const totalCount = data.contributions.reduce(
                    (sum, item) => sum + (item.count || 0),
                    0
                );

                setTotal(totalCount);
            } catch (err) {
                console.log("GitHub total unavailable:", err);
                setIsError(true);
            }
        }

        fetchData();
    }, []);

    return (
        <section className="py-10 max-w-5xl mx-auto text-white">
            <motion.div
                // initial={{ opacity: 0, y: 20 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.8 }}
                className="space-y-5"
            >
                {/* Header */}
                <h3 className="text-2xl underline">GitHub Activity</h3>

                {/* Total Contributions */}
                <p className="text-gray-300 ">
                    Total contributions:{" "}
                    <span className="font-semibold text-white">
                        {total ?? "--"}
                    </span>
                </p>

                {/* GitHub Calendar */}
                {!isError ? (
                    <div className="mt-6">
                        <GitHubCalendar
                            username="bichitrabehera"
                            blockSize={14}
                            blockMargin={5}
                            fontSize={12}
                            hideTotalCount
                            hideColorLegend
                            colorScheme="dark"
                        />
                    </div>
                ) : (
                    <p className="text-gray-500 text-sm italic opacity-60 mt-4">
                        GitHub activity unavailable.
                    </p>
                )}
            </motion.div>
        </section>
    );
}
