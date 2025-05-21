import { useFetch } from "@/hook/useFetch";
import React from "react";
import { Card } from "antd";
import ImageLoading from "@/components/image/Image";
const { Meta } = Card;

const Data = () => {
  const { data } = useFetch("/recipes");

  return (
    <div className="container mx-auto mt-20">
      <div className="grid grid-cols-4 gap-3">
        {data?.recipes?.map((item) => (
          <Card
            key={item.id}
            hoverable
            className="overflow-hidden"  
            cover={<ImageLoading alt={item.name} src={item.image} />}
          >
            <Meta title={item.name} description={item.cuisine} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Data;
