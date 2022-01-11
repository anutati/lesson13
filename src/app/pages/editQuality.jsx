import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditForm from "../components/ui/editForm";

const EditQualityPage = () => {
  const [quality, setQuality] = useState(null);
  const id = useParams().id;
  useEffect(async () => {
    const { data } = await axios.get(
      `http://localhost:4000/api/v1/quality/${id}`
    );
    setQuality(data.content);
  }, []);
  return (
    <>
      <h1>Edit Quality Page</h1> <EditForm data={quality} />
    </>
  );
};

export default EditQualityPage;
