import { Stack } from "@mui/material";
import React from "react";
import { cotegodyData } from "../../constants/category";
import { colors } from "../../constants/colors";

const Category = ({ selectedCategoryhandler, selectedCategory }) => {
  return (
    <Stack sx={{ overflowX: "scroll" }} direction={"row"}>
      {cotegodyData.map((item, idx) => (
        <button
          key={idx}
          className="category-btn"
          style={{
            borderRadius: 0,
            backgroundColor: item.name === selectedCategory && colors.secodary,
            color: item.name === selectedCategory && "#fff  ",
          }}
          onClick={() => selectedCategoryhandler(item.name)}
        >
          <span
            style={{
              color: item.name === selectedCategory ? "#fff" : colors.secodary,
              marginRight: "15px",
            }}
          >
            {item.icon}
          </span>
          <span style={{ opacity: 1 }}>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Category;
