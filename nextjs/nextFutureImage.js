import React from "react";
import Image from "next/future/image";

const Page = () => {
  const css = { maxWidth: "100%", height: "400" };
  return (
    <div>
      <div>
        <Image
          src={"/images/logo.png"}
          style={css}
          width="100"
          height={"100"}
        />
      </div>
    </div>
  );
};

export default Page;
