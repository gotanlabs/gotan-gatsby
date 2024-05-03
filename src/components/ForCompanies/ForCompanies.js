import React from "react";
import useForCompanies from "../../hooks/useForCompanies";
import { Seo, CustomSection } from "../";

const ForCompanies = () => {
  const data = useForCompanies().sanityForCompanies;

  return (
    <>
      <Seo
        title={data ? data.titlePage : "For Companies"}
        description={data ? data.descriptionPage : ""}
        keywords=""
      />
      {data !== null ? (
        <div>
          {data.dinamicContent !== null ? (
            <CustomSection sections={data.dinamicContent} />
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div className="d-flex justify-content-center"></div>
      )}
    </>
  );
};

export default ForCompanies;
