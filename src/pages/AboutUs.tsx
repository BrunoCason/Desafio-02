import { useEffect } from "react";
import { DevInfo } from "../components";

export default function AboutUs() {
  useEffect(() => {
    document.title = "About Us";
  });

  return (
    <>
      <DevInfo />
    </>
  );
}
