import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import FavoriteButton from "../components/favorite/FavoriteButton";
import {
  Box,
  Link as MuiLink,
  Paper,
  Stack,
  Typography,
  CircularProgress,
} from "@mui/material";
import { fetchBlogs } from "../store/slices/blogs/blogsSlice";
import { fetchProducts } from "../store/slices/products/productsSlice";
import CenteredMessage from "../components/CenteredMessage";
import HandleBackButton from "../components/HandleBackButton";
import { Link } from "react-router";
import { fetchServices } from "../store/slices/services/servicesSlice";

function Favorites() {
  const { user, token } = useAuth();
  const dispatch = useDispatch();
  const { favorites, loading, error } = useSelector((state) => state.favorites);
  const blogs = useSelector((state) => state.blogs.blogs);
  const products = useSelector((state) => state.products.products);
  const services = useSelector((state) => state.services.services);

  useEffect(() => {
    if (token) {
      //favorites are fetched in layout.jsx
      if (!blogs.length) dispatch(fetchBlogs());
      if (!products.length) dispatch(fetchProducts());
      if (!services.length) dispatch(fetchServices());
    }
  }, [dispatch, token, blogs.length, services.length, products.length]);

  const renderFavoriteByType = (type, items) => {
    const filterFavorites = favorites.filter(
      (fav) => fav.favorite_type === type
    );

    if (filterFavorites.length === 0) return null;

    return (
      <Paper
        sx={{
          p: 3,
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? "rgba(0, 0, 0, 0.03)"
              : "transparent",
          border: (theme) =>
            theme.palette.mode === "dark"
              ? "1px solid rgba(255, 255, 255, 0.1)"
              : "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: 2,
          boxShadow: (theme) =>
            theme.palette.mode === "light"
              ? "0 2px 8px rgba(0, 0, 0, 0.05)"
              : "none",
          transition: "all 0.3s ease",
        }}
      >
        <Typography variant="h5" sx={{ textTransform: "capitalize" }}>
          {type}
        </Typography>

        <Stack spacing={2} sx={{ mt: 2 }}>
          {filterFavorites.map((fav) => {
            const item = items.find((i) => i.id == fav.item_id);
            if (!item) return null;
            return (
              <Box
                key={fav.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  p: 2,
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                      ? "rgba(0, 0, 0, 0.02)"
                      : "rgba(255, 255, 255, 0.02)",
                  border: (theme) =>
                    theme.palette.mode === "dark"
                      ? "1px solid rgba(255, 255, 255, 0.05)"
                      : "1px solid rgba(0, 0, 0, 0.05)",
                  borderRadius: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: (theme) => theme.palette.primary.main,
                    transform: "translateY(-2px)",
                    boxShadow: (theme) =>
                      theme.palette.mode === "light"
                        ? "0 4px 12px rgba(0, 0, 0, 0.1)"
                        : "0 8px 32px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <FavoriteButton type={type} itemId={item.id} />

                <MuiLink
                  component={Link}
                  to={`/${type}s/${item.id}`}
                  sx={{
                    textDecoration: "none",
                    color: (theme) => theme.palette.text.primary,
                    fontWeight: 500,
                    "&:hover": {
                      color: (theme) => theme.palette.primary.main,
                      textDecoration: "underline",
                    },
                  }}
                >
                  {item.title || item.name}
                </MuiLink>
              </Box>
            );
          })}
        </Stack>
      </Paper>
    );
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "400px",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <CenteredMessage>
        <Typography variant="h4">Error loading blog: {error}</Typography>
        <HandleBackButton content="Home" link="/" />
      </CenteredMessage>
    );
  }

  if (!user) {
    return (
      <CenteredMessage>
        <Typography
          variant="h4"
          sx={{ color: (theme) => theme.palette.text.primary }}
        >
          Log in to see list of favorites
        </Typography>
      </CenteredMessage>
    );
  }

  if (favorites.length === 0)
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh",
          gap: 2,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: (theme) => theme.palette.text.primary }}
        >
          No favorites added yet
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: (theme) => theme.palette.text.primary }}
        >
          Start adding favorites from{" "}
          <MuiLink component={Link} to="/blogs">
            Blog
          </MuiLink>
          ,{" "}
          <MuiLink component={Link} to="/products">
            Product
          </MuiLink>
          , or{" "}
          <MuiLink component={Link} to="/services">
            Service
          </MuiLink>
        </Typography>
      </Box>
    );

  //main content
  return (
    <Box
      sx={{
        mt: 5,
        width: { xs: "95%", sm: "90%", md: "80%", lg: "60%" },
        margin: "auto",
        py: 5,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        color: (theme) => theme.palette.text.primary,
      }}
    >
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        List of Favorites
      </Typography>

      {renderFavoriteByType("blog", blogs)}
      {renderFavoriteByType("product", products)}
      {renderFavoriteByType("service", services)}
    </Box>
  );
}

export default Favorites;
