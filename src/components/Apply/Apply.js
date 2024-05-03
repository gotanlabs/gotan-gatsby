import React from "react";
import { Seo, CustomSection } from "../";
import useApply from "../../hooks/useApply";
import { Widget } from "@typeform/embed-react";
import "./Apply.scss";

const Apply = () => {
  const data = useApply().sanityApply;
  return (
    <>
      <Seo
        title={data ? data.titlePage : "Apply"}
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
      <div className="container applyForm">
        <Widget id="WCjkv7WR" style={{ height: "100%", width: "100%" }} />
      </div>
    </>
  );
};

export default Apply;
