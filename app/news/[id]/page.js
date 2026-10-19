import {use} from "react";

export default function NewsDetailPage({params}) {
  const {id} = use(params);

  return (
      <>
        <h1>News Detail Page</h1>
        <p>News ID: {id}</p>
      </>
  );
}
