import Blog from "@/components/Blog/Blog";
import Heading from "@/components/Heading Component/Heading";
import React from "react";

const bigHeading = "Latest News!!";
const description =
  "Keep up to date with the latest tech insights, business guidelines and trending news articles, and stay tech-savvy!";

function BlogPage() {
  return (
    <div>
      <Heading
        bigHeading={bigHeading}
        description={description}
        scroll="#blog"
        heading2='and Blog post'
      />

      <Blog/>
    </div>
  );
}

export default BlogPage;
