import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../Redux/Actions/productActions";
import { List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
const SearchContainer = styled(Box)(({ theme }) => ({
  background: "#fff",
  width: "37%",
  marginLeft: "10px",
  borderRadius: "2px",
  display: "flex",
  boxShadow: "none",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    width: "96%",
    marginBottom: "2px",
  },
}));

`
`;
const InputSearchBase = styled(InputBase)`
  width: 100%;
  margin-left: 12px;
  font-weight: light;
  font-size: unset;
`;
const SearchIconWrapper = styled(SearchIcon)`
  color: #2874f0;
  padding: 6px;
  display: flex;
`;
const ResultList = styled(List)(({ theme }) => ({
  position: "absolute",
  left: "286px",
  marginTop: "38px",
  background: "#ffffff",
  color: "black",
}));
const Search = () => {
  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    //first this dispatch call getProduct function and store the value in redux store then we can read store data with the help of useSelector
    dispatch(getProducts);
  }, [dispatch]);

  const [search, setSearch] = useState("");
  const hanldeOnchnage = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <SearchContainer>
        <InputSearchBase
          placeholder="Search for products,brands and more"
          onChange={hanldeOnchnage}
          value={search}
        />
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        {/* displaying product when user search product */}
        {search && (
          <ResultList>
            {products
              .filter((product) =>
                product.title.longTitle
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .map((product) => (
                <ListItem>
                  {/* opeing product when user click on it */}
                  <Link
                    to={`products/${product.id}`}
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={() => setSearch("")}
                  >
                    {product.title.longTitle}
                  </Link>
                </ListItem>
              ))}
          </ResultList>
        )}
      </SearchContainer>
    </>
  );
};
export default Search;
