import { useState } from "react";
import Landing from "./pages/Landing";
import Registration from "./pages/Registration";
import Success from "./pages/Success";

export default function App() {
  const [currentPage, setCurrentPage] = useState("landing");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    level: "",
    university: "",
    conferences: [],
    workshops: [],
  });

  if (currentPage === "landing") {
    return <Landing setCurrentPage={setCurrentPage} />;
  }

  if (currentPage === "register") {
    return (
      <Registration
        formData={formData}
        setFormData={setFormData}
        setCurrentPage={setCurrentPage}
      />
    );
  }

  if (currentPage === "success") {
    return (
      <Success
        formData={formData}
        setFormData={setFormData}
        setCurrentPage={setCurrentPage}
      />
    );
  }

  return null;
}
