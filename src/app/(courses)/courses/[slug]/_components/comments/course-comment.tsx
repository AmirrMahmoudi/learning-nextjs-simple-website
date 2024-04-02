"use client";

import { readData } from "@/core/http-service/http-service";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useCourseComments } from "../../_api/get-comments";

const CourseComments = () => {
  const { slug } = useParams();
  const { data: comments } = useCourseComments({
    params: {
      slug: slug as string,
      page: 1,
    },
  });
  return (
    <>
      {comments?.data.map((p) => (
        <p className="mb-8" key={p.id}>
          {p.commentText}
        </p>
      ))}
    </>
  );
};

export default CourseComments;
