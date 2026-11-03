import React from "react";
import HomePage from "./components/homePage/HomePage";
export const metadata = {
  alternates: {
    canonical: 'https://dconsult.in/',
  },
};
export default function Home() {

    return (
        <>
        <HomePage/>
        </>
    );
}
