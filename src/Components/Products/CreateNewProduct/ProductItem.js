import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

function ProductItem(props) {
  return (
    <div>
      <Card
        style={{
          width: "15rem",
        }}
      >
        <img
          alt="Hình ảnh minh họa"
          src="https://cdn.tgdd.vn/Products/Images/42/329149/iphone-16-pro-max-titan-trang-thumb-600x600.png"
        />
        <CardBody>
          <CardTitle tag="h5">iPhone 16 Pro Max</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card‘s content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default ProductItem;
